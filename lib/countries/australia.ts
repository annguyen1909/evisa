// lib/countries/kenya.ts

import { Country } from "./type"; // optional type if you're using centralized types

const australia: Country = {
  slug: 'australia',
  name: 'Australia',
  region: 'Asia Pacific',
  code: 'au',
  flagUrl: '/images/country/australia/australia-square.png',
  imageUrl: '/images/country/australia/australia-bg.jpg',
  roundedFlagUrl: '/images/country/australia/australia-rounded.png',
  description: `Australia, the Land Down Under, is famous for its diverse landscapes, unique wildlife, and vibrant cities. From the Great Barrier Reef to the Outback, Australia offers adventure, culture, and natural beauty for every traveler.`,
  welcomeMessage: `Welcome to Australia! Explore the cosmopolitan cities of Sydney and Melbourne, relax on the golden beaches of the Gold Coast, or marvel at the natural wonders of Uluru and the Great Barrier Reef. Experience the rich Aboriginal heritage and enjoy world-class food and wine in this vast and friendly country.`,
  welcomeImgUrl: '/images/country/australia/australia-welcome.jpg',
  etaInfo: {
    intro: `In January 2024, The Kenya Government replaced the eVisa with the Electronic Travel Authorization (Kenya ETA), for which citizens of all countries are eligible to apply.`,
    processing: {
      summary: 'Apply Online In 3 Steps',
      steps: [
        'Fill in the online form on our website.',
        'Pay the eTA fee online — via credit card, debit card, PayPal, or bank transfer.',
        'Get your eTA sent to your email.',
      ],
      urgentProcessing: 'As soon as 1 Day',
    },
    visaTypes: [
      {
        name: 'Tourist Evisa (Multiple Entries for 1 year)',
        type: 'Tourist Evisa',
        description: 'Multiple Entries for 1 year',
        visaDuration: '1 year',
        visaValidity: '60 days',
        expectedProcessingTime: '2 days',
        govFee: 150,
        allowedNationalities: ["AD", "AT", "BE", "BG", "BN", "CA", "CH", "CY", "CZ", "DE", "DK", "EE", "ES", "FI", "FR", "GB", "GR", "HK", "HR", "HU", "IE", "IS", "IT", "JP", "KR", "LI", "LT", "LU", "LV", "MC", "MT", "NL", "NO", "PL", "PT", "RO", "SE", "SG", "SI", "SK", "SM", "TW", "US", "VA"]
      },
      {
        name: 'Business Evisa (Multiple Entries for 1 year)',
        type: 'Business Evisa',
        description: 'Multiple Entries for 1 year',
        visaDuration: '1 year',
        visaValidity: '60 days',
        expectedProcessingTime: '2 days',
        govFee: 150,
        allowedNationalities: ["AD", "AT", "BE", "BG", "BN", "CA", "CH", "CY", "CZ", "DE", "DK", "EE", "ES", "FI", "FR", "GB", "GR", "HK", "HR", "HU", "IE", "IS", "IT", "JP", "KR", "LI", "LT", "LU", "LV", "MC", "MT", "NL", "NO", "PL", "PT", "RO", "SE", "SG", "SI", "SK", "SM", "TW", "US", "VA"]
      }
    ],
    serviceFee: 'See more', // or use a number if fixed
  },

  visaServicePackage: [
    'Entry visa for a short period',
    'Application form filling assistance',
    'Travel insurance consultant',
    'Portal for real-time visa updates',
    '24/7 online support team for any issues',
    'Urgent case support, with added fees',
  ],
  gvcSupport: {
    description: 'Apply Visa at GVC — with many years of experience, GVC simplifies the process.',
    services: [
      'Consulting about the eVisa',
      "Receiving & checking the applicant's information",
      'Informing the status and results',
      'Collecting the eVisa from the authorities',
      'Sending it to the applicant',
    ],
    note: 'You can also apply on your own through the government website to save your budget.',
  },
  info: {
    climate: 'Varied: tropical in the north, temperate in the south',
    language: 'English',
    currency: 'Australian Dollar (AUD)',
  }
};

export default australia;
