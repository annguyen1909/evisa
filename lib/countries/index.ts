import kenya from "./kenya";
import vietnam from "./vietnam";
import kuwait from "./kuwait"
import bahrain from "./bahrain"
import oman from "./oman"
import unitedkingdom from "./united-kingdom"
import saudiarabia from "./saudi-arabia"
import qatar from "./qatar"
import moldova from "./moldova"
import uzbekistan from "./uzbekistan"
import canada from "./canada"

export const COUNTRIES = [kenya, vietnam, canada, kuwait, oman, bahrain, unitedkingdom, saudiarabia, qatar, moldova, uzbekistan];

export const getCountryBySlug = (slug: string) =>
  COUNTRIES.find(c => c.slug === slug);
