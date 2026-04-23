import { patchState } from "./storage.js";
import { setIcon } from "./icon.js";

export async function setUiState(state) {
  await patchState({ state });
}

export async function setConnectedFlow(tag) {
  await setUiState("success");
  setIcon("connecting");
  return tag;
}

export async function setDisconnectedFlow() {
  await setUiState("disconnect");
  setIcon("ready");
}
