// eslint-disable-next-line no-undef
export const isDeno = (typeof globalThis !== "undefined" && "Deno" in globalThis);
export const isBrowser = !isDeno && (typeof window !== "undefined" || typeof self !== "undefined");
export const isNode = !isBrowser;
