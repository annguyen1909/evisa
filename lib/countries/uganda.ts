// lib/countries/kenya.ts

import { Country } from "./type"; // optional type if you're using centralized types

const uganda: Country = {
  slug: 'uganda',
  name: 'Uganda',
  code: 'ug',
  region: 'Africa',
  flagUrl: '/images/country/uganda/uganda-square.png',
  imageUrl: '/images/country/uganda/uganda-bg.jpg',
  roundedFlagUrl: '/images/country/uganda/uganda-rounded.png',
  description: `Uganda, the Pearl of Africa, is known for its lush landscapes, diverse wildlife, and the source of the Nile. It is a top destination for gorilla trekking and adventure tourism.`,
  welcomeMessage: `Welcome to Uganda! Trek mountain gorillas in Bwindi, cruise along the Nile, and explore the vibrant capital Kampala. Experience the beauty and hospitality of Uganda.`,
  welcomeImgUrl: '/images/country/uganda/uganda-welcome.jpg',
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
    climate: 'Tropical, generally rainy with two dry seasons',
    language: 'English, Swahili',
    currency: 'Ugandan Shilling (UGX)',
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
  eligibleCountries: ["AD", "AE", "AF", "AI", "AL", "AM", "AN", "AO", "AQ", "AR", "AS", "AT", "AU", "AW", "AX", "AZ", "BA", "BD", "BE", "BF", "BG", "BH", "BJ", "BL", "BM", "BN", "BO", "BQ", "BR", "BT", "BV", "BY", "CA", "CC", "CD", "CG", "CH", "CI", "CK", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CW", "CX", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ES", "ET", "FI", "FK", "FM", "FO", "FR", "GA", "GB", "GE", "GF", "GG", "GI", "GL", "GN", "GP", "GQ", "GR", "GS", "GT", "GU", "GW", "GY", "HK", "HM", "HN", "HR", "HT", "HU", "ID", "IL", "IM", "IN", "IO", "IQ", "IR", "IS", "IT", "JE", "JO", "JP", "KG", "KH", "KI", "KN", "KP", "KR", "KW", "KY", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LT", "LU", "LV", "MA", "MC", "MD", "MF", "MH", "MK", "ML", "MN", "MO", "MP", "MQ", "MR", "MS", "MV", "MX", "MZ", "NA", "NC", "NE", "NF", "NG", "NI", "NL", "NO", "NP", "NR", "NU", "NZ", "OM", "PA", "PE", "PF", "PG", "PH", "PK", "PL", "PM", "PN", "PR", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RU", "SA", "SE", "SH", "SI", "SJ", "SK", "SM", "SN", "SO", "SR", "ST", "SV", "SX", "SY", "TC", "TD", "TF", "TG", "TH", "TJ", "TL", "TM", "TN", "TR", "TV", "TW", "UA", "US", "UY", "UZ", "VA", "VE", "VG", "VI", "VN", "WF", "WS", "XK", "YE", "YT", "ZA"]
};

export default uganda;
