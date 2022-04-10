"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.daysBetweenDates = void 0;
function daysBetweenDates(startDate, endDate) {
    return Math.floor((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24));
}
exports.daysBetweenDates = daysBetweenDates;
