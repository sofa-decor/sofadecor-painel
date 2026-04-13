/** Base URL do site em produção, sem barra final (ex.: https://www.example.com). */
export function getSiteUrl(): string {
    const env = import.meta.env.VITE_SITE_URL as string | undefined;
    if (env && env.length > 0) {
        return env.replace(/\/$/, "");
    }
    if (typeof window !== "undefined" && window.location?.origin) {
        return window.location.origin;
    }
    return "";
}

export function absoluteUrl(pathOrUrl: string): string {
    if (pathOrUrl.startsWith("http://") || pathOrUrl.startsWith("https://")) {
        return pathOrUrl;
    }
    const base = getSiteUrl();
    const path = pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`;
    return `${base}${path}`;
}
