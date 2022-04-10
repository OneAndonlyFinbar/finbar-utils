"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.yearsBetweenDates = void 0;
function yearsBetweenDates(start, end) {
    return Math.abs(end.getFullYear() - start.getFullYear());
}
exports.yearsBetweenDates = yearsBetweenDates;
