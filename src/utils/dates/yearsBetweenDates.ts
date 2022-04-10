export function yearsBetweenDates(start: Date, end: Date): number {
  return Math.abs(end.getFullYear() - start.getFullYear());
}