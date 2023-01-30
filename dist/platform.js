"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNode = exports.isBrowser = exports.isDeno = void 0;
// eslint-disable-next-line no-undef
exports.isDeno = (typeof globalThis !== "undefined" && "Deno" in globalThis);
exports.isBrowser = !exports.isDeno && (typeof window !== "undefined" || typeof self !== "undefined");
exports.isNode = !exports.isBrowser;
