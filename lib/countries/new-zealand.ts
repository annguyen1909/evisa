// lib/countries/kenya.ts

import { Country } from "./type"; // optional type if you're using centralized types

const newzealand: Country = {
  slug: 'new-zealand',
  name: 'New Zealand',
  code: 'nz',
  region: 'Asia Pacific',
  flagUrl: '/images/country/new-zealand/new-zealand-square.png',
  imageUrl: '/images/country/new-zealand/new-zealand-bg.jpg',
  roundedFlagUrl: '/images/country/new-zealand/new-zealand-rounded.png',
  description: `New Zealand is renowned for its stunning natural beauty, from snow-capped mountains to pristine beaches. It is a land of adventure, Maori culture, and friendly locals.`,
  welcomeMessage: `Welcome to New Zealand! Explore the dramatic landscapes of the South Island, visit the vibrant city of Auckland, and experience Maori traditions. Enjoy outdoor adventures like hiking, skiing, and bungee jumping in this breathtaking country.`,
  welcomeImgUrl: '/images/country/new-zealand/new-zealand-welcome.jpg',
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
    climate: 'Temperate, with mild winters and warm summers',
    language: 'English, Maori',
    currency: 'New Zealand Dollar (NZD)',
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
  eligibleCountries: ["AD", "AE", "AR", "AT", "BE", "BG", "BH", "BN", "BR", "CA", "CH", "CL", "CY", "CZ", "DE", "DK", "EE", "ES", "FI", "FR", "GB", "GR", "HK", "HR", "HU", "IE", "IL", "IO", "IS", "IT", "JP", "KR", "KW", "LI", "LT", "LU", "LV", "MC", "MO", "MT", "MU", "MX", "MY", "NL", "NO", "OM", "PL", "PT", "QA", "RO", "SA", "SC", "SE", "SG", "SI", "SK", "SM", "TW", "US", "UY", "VA"]
};

export default newzealand;
