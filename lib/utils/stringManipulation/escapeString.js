"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.escapeString = void 0;
function escapeString(str) {
    return str.replace(/[\\"']/g, '\\$&');
}
exports.escapeString = escapeString;
