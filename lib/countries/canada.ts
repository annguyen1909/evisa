// lib/countries/kenya.ts

import { Country } from "./type"; // optional type if you're using centralized types

const canada: Country = {
  slug: 'canada',
  name: 'Canada',
  region: 'America - Caribbean',
  code: 'ca',
  flagUrl: '/images/country/canada/canada-square.png',
  imageUrl: '/images/country/canada/canada-bg.jpg',
  roundedFlagUrl: '/images/country/canada/canada-rounded.png',
  description: `Canada is the world's second-largest country, famous for its natural beauty, multicultural cities, and friendly people. From the Rockies to Niagara Falls, it offers adventure and culture.`,
  welcomeMessage: `Welcome to Canada! Explore the vibrant cities of Toronto and Vancouver, marvel at the beauty of Banff National Park, and experience French culture in Montreal and Quebec City. Enjoy outdoor adventures and Canadian hospitality.`,
  welcomeImgUrl: '/images/country/canada/canada-welcome.jpg',
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
        type: 'Tourist ETA',
        description: 'Single Entry for 90 days',
        visaDuration: '30 days',
        visaValidity: '60 days',
        expectedProcessingTime: '2 days',
        govFee: 12
      },
      {
        type: 'Business ETA',
        description: 'Single Entry for 90 days',
        visaDuration: '30 days',
        visaValidity: '60 days',
        expectedProcessingTime: '2 days',
        govFee: 12
      },
      {
        type: 'Transit ETA',
        description: 'Single Entry for 72 hours',
        visaDuration: '30 days',
        visaValidity: '60 days',
        expectedProcessingTime: '2 days',
        govFee: 12
      },
    ],
    requiredFor: '194 nationalities are required to obtain a Tourist ETA.',
    governmentFee: 95,
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

  howToApply: [
    'Fill in the online form on our website.',
    'Pay the eTA fee online via credit card, debit card, PayPal, or bank transfer.',
    'Get your eTA sent to your email.',
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

  recommendedInsurance: {
    name: 'Covid-19 Insurance',
    price: 299,
    benefits: [
      'Maximum Benefit up to US$ 50,000.00',
      'Covering Covid-19 Treatment Expense',
      'Medical Payments Coverage',
      'Trip Delay, Trip Interruption, Lost Baggage',
      'An advantage condition for your visa approval',
    ],
  },

  info: {
    climate: 'Varied: arctic in the north, temperate in the south',
    language: 'English, French',
    currency: 'Canadian Dollar (CAD)',
  },

  visaTabs: [
    {
      value: "tourist",
      color: "#065BB9",
      title: "Tourism",
      subtitle: "Single Entry for 90 days",
      visaType: "Tourist ETA",
    },
    {
      value: "business",
      color: "#CB6601",
      title: "Business",
      subtitle: "Single Entry for 90 days",
      visaType: "Business ETA",
    },
    {
      value: "medical",
      color: "#16610E",
      title: "Medical",
      subtitle: "Single Entry for 90 days",
      visaType: "Medical ETA",
    },
  ],
  eligibleCountries: ["AD", "AE", "AI", "AT", "AU", "BB", "BE", "BG", "BM", "BN", "BS", "CH", "CL", "CY", "CZ", "DE", "DK", "EE", "ES", "FI", "FK", "FR", "GI", "GR", "HK", "HR", "HU", "IE", "IL", "IO", "IS", "IT", "JP", "KR", "KY", "LI", "LT", "LU", "LV", "MC", "MS", "MT", "NL", "NO", "NZ", "PG", "PL", "PN", "PT", "RO", "SB", "SE", "SG", "SH", "SI", "SK", "SM", "TC", "TW", "VA", "VG", "WS"]
};

export default canada;
