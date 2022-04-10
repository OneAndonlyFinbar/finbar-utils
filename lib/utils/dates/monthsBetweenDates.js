"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.monthsBetweenDates = void 0;
function monthsBetweenDates(start, end) {
    return (end.getTime() - start.getTime()) / (1000 * 3600 * 24 * 30);
}
exports.monthsBetweenDates = monthsBetweenDates;
