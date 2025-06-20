// lib/countries/kenya.ts

import { Country } from "./type"; // optional type if you're using centralized types

const tanzania: Country = {
  slug: 'tanzania',
  name: 'Tanzania',
  code: 'tz',
  region: 'Africa',
  flagUrl: '/images/country/tanzania/tanzania-square.png',
  imageUrl: '/images/country/tanzania/tanzania-bg.jpg',
  roundedFlagUrl: '/images/country/tanzania/tanzania-rounded.png',
  description: `Tanzania is home to Africa's highest peak, Mount Kilimanjaro, the Serengeti, and the paradise island of Zanzibar. It is a land of adventure and natural wonders.`,
  welcomeMessage: `Welcome to Tanzania! Witness the Great Migration in the Serengeti, relax on Zanzibar's beaches, and climb Mount Kilimanjaro. Discover the wildlife and culture of this East African gem.`,
  welcomeImgUrl: '/images/country/tanzania/tanzania-welcome.jpg',
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
    climate: 'Tropical, with regional variations',
    language: 'Swahili, English',
    currency: 'Tanzanian Shilling (TZS)',
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
  eligibleCountries: ["AD", "AE", "AL", "AM", "AN", "AO", "AR", "AS", "AT", "AU", "AW", "AX", "BA", "BE", "BF", "BG", "BH", "BJ", "BL", "BO", "BQ", "BR", "BT", "BV", "BY", "CA", "CD", "CG", "CH", "CI", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CZ", "DE", "DK", "DO", "DZ", "EC", "EE", "EG", "ES", "ET", "FI", "FJ", "FM", "FO", "FR", "GA", "GB", "GE", "GF", "GL", "GN", "GP", "GR", "GS", "GT", "GU", "GW", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IM", "IN", "IS", "IT", "JO", "JP", "KG", "KH", "KM", "KR", "KW", "LA", "LI", "LR", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MF", "MH", "MK", "MN", "MP", "MQ", "MV", "MX", "NC", "NI", "NL", "NO", "NP", "NZ", "OM", "PA", "PE", "PF", "PH", "PL", "PN", "PR", "PT", "PW", "PY", "QA", "RE", "RS", "RU", "SA", "SE", "SI", "SJ", "SK", "SM", "SN", "SR", "ST", "SV", "SX", "TF", "TG", "TH", "TL", "TM", "TN", "TR", "TW", "UA", "UY", "VA", "VE", "VI", "VN", "WF", "YT"]
};

export default tanzania;
