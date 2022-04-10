"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.weeksBetweenDates = void 0;
function weeksBetweenDates(startDate, endDate) {
    return Math.floor((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 7));
}
exports.weeksBetweenDates = weeksBetweenDates;
