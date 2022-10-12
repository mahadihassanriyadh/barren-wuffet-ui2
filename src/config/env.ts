import { API } from "../api/api";
import { DummyAPI } from "../test/data/dummyAPI";

export function isDevelopment() {
  return !window.location.host?.includes("barrenwuffet.io");
}

export function isLocal() {
  return window.location.host?.includes("localhost");
}

export const api = isLocal() ? new DummyAPI() : new API();
