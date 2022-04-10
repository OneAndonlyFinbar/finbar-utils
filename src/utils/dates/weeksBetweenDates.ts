export function weeksBetweenDates(startDate: Date, endDate: Date): number {
  return Math.floor((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 7));
}