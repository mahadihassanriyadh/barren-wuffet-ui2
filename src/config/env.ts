import { API } from "../api/graph";
import { DummyAPI } from "../test/data/dummyAPI";

export function isDevelopment() {
  return !window.location.host?.includes("barrenwuffet.io");
}

export function isLocal() {
  return window.location.host?.includes("localhost");
}

export const api = !!process.env.REACT_APP_GRAPH_URL
  ? new API({ graphUrl: process.env.REACT_APP_GRAPH_URL })
  : new DummyAPI({ graphUrl: "" });
