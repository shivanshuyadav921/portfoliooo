/**
 * Tiny class-name merge utility.
 * Filters out falsy values and joins the rest with a space.
 * No external dependency needed for this portfolio.
 */
export function cn(...inputs: (string | false | null | undefined)[]): string {
  return inputs.filter(Boolean).join(' ')
}
