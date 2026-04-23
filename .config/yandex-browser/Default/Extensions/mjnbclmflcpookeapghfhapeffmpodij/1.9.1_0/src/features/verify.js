import { VERIFY_BASE_URL } from "../core/config.js";
import { getState, patchState } from "../core/storage.js";
import { setIcon } from "../core/icon.js";

let verifying = 0;

function now() {
  return Date.now();
}

function secondsSince(ts) {
  return Math.round((now() - ts) / 1000);
}

function isUltrasurfLandingUrl(url) {
  return typeof url === "string" && url.includes("ultrasurfing.com");
}

async function getTrackedTabInfo(tabId) {
  if (!tabId || tabId <= 0) {
    return { tabid: tabId || 0, active: false };
  }

  try {
    const tab = await chrome.tabs.get(tabId);
    const validLanding = isUltrasurfLandingUrl(tab.url);
    return {
      tabid: validLanding ? tabId : -2,
      active: Boolean(validLanding && tab.active)
    };
  } catch {
    return { tabid: -3, active: false };
  }
}

async function getWindowState() {
  try {
    const win = await chrome.windows.getCurrent();
    return win.state || "normal";
  } catch {
    return "normal";
  }
}

function buildVerifyUrl(tag, timeout, state, active, winstate) {
  const params = new URLSearchParams({
    tag: `${tag}${timeout}`,
    last: String(secondsSince(state.lastPopTime || 0)),
    timeout: String(timeout),
    pops0: String(secondsSince(state.popsResetTime || 0)),
    lastV: String(secondsSince(state.lastVerifyTime || 0)),
    lastVTag: state.lastVerifyTag || "init",
    ver: chrome.runtime.getManifest().version,
    pops: String(state.pops || 0),
    active: String(active),
    win: String(winstate),
    uid: state.uid || ""
  });

  return `${VERIFY_BASE_URL}?${params.toString()}`;
}

async function openLanding(link, state, trackedTabId) {
  if (trackedTabId > 0) {
    try {
      await chrome.tabs.remove(trackedTabId);
    } catch {}
  }

  const tab = await chrome.tabs.create({ url: link });
  await patchState({
    tabid: tab.id,
    pops: Number(state.pops || 0) + 1,
    lastPopTime: now()
  });
}

async function resetPopWindow() {
  await patchState({ pops: 0, popsResetTime: now() });
}

async function handleNon200Status(status, trackedTabId, state) {
  if (status < 400) {
    setIcon("connected");
    if (status === 205) {
      await openLanding("https://ultrasurfing.com", state, trackedTabId);
    }
    return true;
  }
  return false;
}

export function resetVerifyLock() {
  verifying = 0;
}

export async function verify(tag, timeout = 0, data = "") {
  const skipLock = !String(tag).includes("web") && timeout <= 0;
  if (skipLock) {
    if (verifying > 0) return;
    verifying += 1;
  }

  const state = await getState();
  if (!state.enabled) {
    verifying = 0;
    return;
  }

  await patchState({
    lastVerifyTime: now(),
    lastVerifyTag: tag
  });

  const { tabid, active } = await getTrackedTabInfo(state.tabid);
  const winstate = await getWindowState();

  try {
    const response = await fetch(buildVerifyUrl(tag, timeout, state, active, winstate), {
      method: "POST",
      body: data
    });

    if (response.status !== 200) {
      const handled = await handleNon200Status(response.status, tabid, state);
      verifying = 0;
      if (handled) return;
      throw new Error(String(response.status));
    }

    setIcon("connected");
    const link = await response.text();

    if (link.length > 10) {
      await openLanding(link, state, tabid);
    } else if (link.length > 0) {
      await resetPopWindow();
    }

    verifying = 0;
  } catch (error) {
    if (timeout < 0) {
      verifying = 0;
      return;
    }

    const current = await getState(["enabled"]);
    if (!current.enabled) {
      verifying = 0;
      return;
    }

    const numericTimeout = Math.min(timeout > 3000 ? 3000 : timeout, 3000);
    const nextTimeout = numericTimeout + 300;
    setTimeout(() => {
      verify(tag, nextTimeout, String(error?.message || error || ""));
    }, Math.max(numericTimeout, 0));
  }
}

chrome.storage.onChanged.addListener((changes, area) => {
  if (area === "local" && changes.enabled && changes.enabled.newValue === false) {
    resetVerifyLock();
  }
});

chrome.tabs.onRemoved.addListener(async (tabId) => {
  const { tabid } = await getState(["tabid"]);
  if (tabId === tabid) {
    verify("close", -1).catch(() => {});
  }
});
