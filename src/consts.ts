export const SITE_TITLE = "Oscar Zhang";
export const SITE_DESCRIPTION = "Welcome to my blog!";

export const withBase = (path: string) =>
  import.meta.env.BASE_URL.replace(/\/$/, "") + path;
