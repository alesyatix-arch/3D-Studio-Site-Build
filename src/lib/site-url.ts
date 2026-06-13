export const SITE_URL = (
  import.meta.env.VITE_SITE_URL ?? "https://3d-kulagin.com"
).replace(/\/$/, "");

export const STATIC_SITE_PATHS = [
  "/",
  "/developers",
  "/manufacturers",
  "/designers",
  "/portfolio",
  "/prices",
  "/about",
  "/contacts",
] as const;

export function siteUrl(path = "/"): string {
  return `${SITE_URL}${path === "/" ? "/" : path}`;
}
