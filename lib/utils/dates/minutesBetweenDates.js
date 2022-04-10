"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.minutesBetweenDates = void 0;
function minutesBetweenDates(date1, date2) {
    return Math.floor((date2.getTime() - date1.getTime()) / (1000 * 60));
}
exports.minutesBetweenDates = minutesBetweenDates;
