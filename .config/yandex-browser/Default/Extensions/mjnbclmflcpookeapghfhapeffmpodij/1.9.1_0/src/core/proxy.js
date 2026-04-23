import { PROXY_HOSTS } from "./config.js";

function sampleHosts(count) {
  const seen = new Set();
  const result = [];

  while (result.length < count && seen.size < PROXY_HOSTS.length) {
    const idx = Math.floor(Math.random() * PROXY_HOSTS.length);
    if (seen.has(idx)) continue;
    seen.add(idx);
    result.push(PROXY_HOSTS[idx]);
  }

  return result;
}

function buildPacConfig(hosts) {
  const proxyChain = hosts.map((host) => `HTTPS ${host}:443`).join("; ");
  return {
    value: {
      mode: "pac_script",
      pacScript: {
        data:
          "function FindProxyForURL(url, host) {" +
          "if (host === 'localhost') { return 'SYSTEM;'; }" +
          `return '${proxyChain}';` +
          "}",
        mandatory: true
      }
    }
  };
}

export async function enableProxy() {
  const config = buildPacConfig(sampleHosts(10));
  await chrome.proxy.settings.set(config);
}

export async function disableProxy() {
  await chrome.proxy.settings.clear({});
}
