import kenya from "./kenya";
import vietnam from "./vietnam";
// Import others...

export const COUNTRIES = [kenya, vietnam];

export const getCountryBySlug = (slug: string) =>
  COUNTRIES.find(c => c.slug === slug);
