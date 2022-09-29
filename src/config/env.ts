export function isDevelopment() {
  return !window.location.host?.includes("barrenwuffet.io");
}

export function isLocal() {
  return window.location.host?.includes("localhost");
}
