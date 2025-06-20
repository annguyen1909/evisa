// lib/countries/kenya.ts

import { Country } from "./type"; // optional type if you're using centralized types

const armenia: Country = {
  slug: 'armenia',
  name: 'Armenia',
  region: 'Asia Pacific',
  code: 'am',
  flagUrl: '/images/country/armenia/armenia-square.png',
  imageUrl: '/images/country/armenia/armenia-bg.jpg',
  roundedFlagUrl: '/images/country/armenia/armenia-rounded.png',
  description: `Armenia is a land of ancient monasteries, rugged mountains, and rich traditions. It is one of the world's oldest countries, with a unique alphabet and deep Christian heritage.`,
  welcomeMessage: `Welcome to Armenia! Visit the ancient churches of Echmiadzin, hike the scenic trails of Dilijan, and explore the vibrant capital Yerevan. Experience Armenian hospitality and culture.`,
  welcomeImgUrl: '/images/country/armenia/armenia-welcome.jpg',
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
        name: 'Tourist Evisa (Single Entry for 21 days)',
        type: 'Tourist Evisa',
        description: 'Single Entry for 21 days',
        visaDuration: '21 days',
        visaValidity: '60 days',
        expectedProcessingTime: '2 days',
        govFee: 36,
        allowedNationalities: ["AG", "BA", "BB", "BH", "BN", "BO", "BS", "BT", "BZ", "CA", "CL", "CO", "CR", "CU", "DM", "DOM", "DZ", "EG", "FJ", "FM", "GD", "GT", "GY", "HN", "HT", "ID", "IL", "IN", "IQ", "JM", "JO", "KH", "KI", "KN", "KP", "LA", "LB", "LC", "MA", "MH", "MK", "MN", "MV", "MX", "MY", "NI", "NR", "OM", "PA", "PE", "PG", "PH", "PW", "PY", "SA", "SB", "SR", "SV", "TH", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "VC", "VE", "VN", "VU", "WS", "ZA"]
      },
      {
        name: 'Tourist Evisa (Single Entry for 120 days)',
        type: 'Tourist Evisa',
        description: 'Single Entry for 120 days',
        visaDuration: '120 days',
        visaValidity: '60 days',
        expectedProcessingTime: '2 days',
        govFee: 60,
        allowedNationalities: ["AG", "BA", "BB", "BH", "BN", "BO", "BS", "BT", "BZ", "CA", "CL", "CO", "CR", "CU", "DM", "DOM", "DZ", "EG", "FJ", "FM", "GD", "GT", "GY", "HN", "HT", "ID", "IL", "IN", "IQ", "JM", "JO", "KH", "KI", "KN", "KP", "LA", "LB", "LC", "MA", "MH", "MK", "MN", "MV", "MX", "MY", "NI", "NR", "OM", "PA", "PE", "PG", "PH", "PW", "PY", "SA", "SB", "SR", "SV", "TH", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "VC", "VE", "VN", "VU", "WS", "ZA"]
      },
      {
        name: 'Business Evisa (Single Entry for 21 days)',
        type: 'Business Evisa',
        description: 'Single Entry for 21 days',
        visaDuration: '30 days',
        visaValidity: '60 days',
        expectedProcessingTime: '2 days',
        govFee: 30,
        allowedNationalities: ["AG", "BA", "BB", "BH", "BN", "BO", "BS", "BT", "BZ", "CA", "CL", "CO", "CR", "CU", "DM", "DOM", "DZ", "EG", "FJ", "FM", "GD", "GT", "GY", "HN", "HT", "ID", "IL", "IN", "IQ", "JM", "JO", "KH", "KI", "KN", "KP", "LA", "LB", "LC", "MA", "MH", "MK", "MN", "MV", "MX", "MY", "NI", "NR", "OM", "PA", "PE", "PG", "PH", "PW", "PY", "SA", "SB", "SR", "SV", "TH", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "VC", "VE", "VN", "VU", "WS", "ZA"]
      },
      {
        name: 'Business Evisa (Single Entry for 120 days)',
        type: 'Business Evisa',
        description: 'Single Entry for 120 days',
        visaDuration: '30 days',
        visaValidity: '60 days',
        expectedProcessingTime: '2 days',
        govFee: 30,
        allowedNationalities: ["AG", "BA", "BB", "BH", "BN", "BO", "BS", "BT", "BZ", "CA", "CL", "CO", "CR", "CU", "DM", "DOM", "DZ", "EG", "FJ", "FM", "GD", "GT", "GY", "HN", "HT", "ID", "IL", "IN", "IQ", "JM", "JO", "KH", "KI", "KN", "KP", "LA", "LB", "LC", "MA", "MH", "MK", "MN", "MV", "MX", "MY", "NI", "NR", "OM", "PA", "PE", "PG", "PH", "PW", "PY", "SA", "SB", "SR", "SV", "TH", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "VC", "VE", "VN", "VU", "WS", "ZA"]
      },
    ],
    serviceFee: 49.99,
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
    climate: 'Continental, with hot summers and cold winters',
    language: 'Armenian',
    currency: 'Armenian Dram (AMD)',
  },
};

export default armenia;
