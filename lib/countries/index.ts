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
import kyrgyzstan from "./kyrgyzstan";
import djibouti from "./djibouti";
import gabon from "./gabon";
import zambia from "./zambia";
import zimbabwe from "./zimbabwe";
import rwanda from "./rwanda";
import uganda from "./uganda";
import tanzania from "./tanzania";
import egypt from "./egypt";
import ethiopia from "./ethiopia";
import sainthelena from "./saint-helena";
import southafrica from "./south-africa";
import angola from "./angola";
import benin from "./benin";
import malawi from "./malawi";
import cambodia from "./cambodia";
import azerbaijan from "./azerbaijan";
import australia from "./australia";
import laos from "./laos";
import india from "./india";
import srilanka from "./sri-lanka";
import armenia from "./armenia";
import tajikistan from "./tajikistan";
import malaysia from "./malaysia";
import pakistan from "./pakistan";
import newzealand from "./new-zealand";
import taiwan from "./taiwan";
import mongolia from "./mongolia";
import hongkong from "./hong-kong";
import georgia from "./georgia";
import kazakhstan from "./kazakhstan";
import indonesia from "./indonesia";

export const COUNTRIES = [kenya, vietnam, canada, kuwait, oman, bahrain, unitedkingdom, saudiarabia, qatar, moldova, uzbekistan, kyrgyzstan, djibouti, gabon, zambia, zimbabwe, rwanda, uganda, tanzania, egypt, ethiopia, sainthelena, southafrica, angola, benin, malawi, cambodia, azerbaijan, australia, laos, india, srilanka, armenia, tajikistan, malaysia, pakistan, newzealand, taiwan, mongolia, hongkong, georgia, kazakhstan, indonesia  ];

// Assuming COUNTRIES looks like this:
// { code: 'VN', name: 'Vietnam' }

export function getCountryBySlug(slug: string) {
  const normalized = slug.toLowerCase();

  return COUNTRIES.find(
    (country) =>
      country.code.toLowerCase() === normalized || // match 2-letter code like 'vn'
      country.name.toLowerCase().replace(/\s+/g, '-') === normalized // match 'vietnam' (if used as slug)
  );
}

