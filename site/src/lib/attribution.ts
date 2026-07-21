const STORAGE_KEY = "cp_attribution";

interface Attribution {
  gclid?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
}

export function captureAttribution() {
  const params = new URLSearchParams(window.location.search);
  const attr: Attribution = {};
  const gclid = params.get("gclid");
  const utm_source = params.get("utm_source");
  const utm_medium = params.get("utm_medium");
  const utm_campaign = params.get("utm_campaign");
  if (gclid) attr.gclid = gclid;
  if (utm_source) attr.utm_source = utm_source;
  if (utm_medium) attr.utm_medium = utm_medium;
  if (utm_campaign) attr.utm_campaign = utm_campaign;
  if (Object.keys(attr).length) {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(attr));
  }
}

export function getStoredAttribution(): Attribution | null {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function getSubmissionMeta() {
  const hour = new Date().getHours();
  return { is_out_of_hours: hour < 9 || hour >= 17 };
}
