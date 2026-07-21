const COOKIE_NAME = "cp_attribution";
const COOKIE_DAYS = 30;

interface Attribution {
  gclid?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
}

function setCookie(name: string, value: string, days: number) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/; SameSite=Lax`;
}

function getCookie(name: string): string | null {
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : null;
}

export function captureAttribution() {
  const params = new URLSearchParams(window.location.search);
  const incoming: Attribution = {};

  const gclid       = params.get("gclid");
  const utm_source  = params.get("utm_source");
  const utm_medium  = params.get("utm_medium");
  const utm_campaign = params.get("utm_campaign");

  if (gclid)        incoming.gclid        = gclid;
  if (utm_source)   incoming.utm_source   = utm_source;
  if (utm_medium)   incoming.utm_medium   = utm_medium;
  if (utm_campaign) incoming.utm_campaign = utm_campaign;

  if (Object.keys(incoming).length === 0) return;

  // Merge with existing cookie so earlier GCLID isn't overwritten by a
  // later non-paid visit (first-touch attribution).
  const existing = getStoredAttribution() ?? {};
  const merged: Attribution = { ...existing };
  if (incoming.gclid) merged.gclid = incoming.gclid; // paid click always wins
  if (incoming.utm_source)   merged.utm_source   = incoming.utm_source;
  if (incoming.utm_medium)   merged.utm_medium   = incoming.utm_medium;
  if (incoming.utm_campaign) merged.utm_campaign = incoming.utm_campaign;

  setCookie(COOKIE_NAME, JSON.stringify(merged), COOKIE_DAYS);
}

export function getStoredAttribution(): Attribution | null {
  try {
    const raw = getCookie(COOKIE_NAME);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function getSubmissionMeta() {
  const hour = new Date().getHours();
  return { is_out_of_hours: hour < 9 || hour >= 17 };
}
