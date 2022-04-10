"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.secondsBetweenDates = void 0;
function secondsBetweenDates(date1, date2) {
    return Math.abs(date1.getTime() - date2.getTime()) / 1000;
}
exports.secondsBetweenDates = secondsBetweenDates;
