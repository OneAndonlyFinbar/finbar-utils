export function escapeString(str: string): string {
  return str.replace(/[\\"']/g, '\\$&');
}