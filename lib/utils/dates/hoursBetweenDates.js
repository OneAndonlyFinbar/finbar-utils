"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hoursBetweenDates = void 0;
function hoursBetweenDates(startDate, endDate) {
    return Math.floor((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60));
}
exports.hoursBetweenDates = hoursBetweenDates;
