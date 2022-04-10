export function secondsBetweenDates(date1: Date, date2: Date): number {
  return Math.abs(date1.getTime() - date2.getTime()) / 1000;
}