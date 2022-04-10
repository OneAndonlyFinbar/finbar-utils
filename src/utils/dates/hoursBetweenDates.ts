export function hoursBetweenDates(startDate: Date, endDate: Date): number {
  return Math.floor((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60));
}