// lib/countries/kenya.ts

import { Country } from "./type"; // optional type if you're using centralized types

const malaysia: Country = {
  slug: 'malaysia',
  name: 'Malaysia',
  region: 'Asia Pacific',
  code: 'my',
  flagUrl:'/images/country/malaysia/malaysia-square.png',
  imageUrl: '/images/country/malaysia/malaysia-bg.jpg',
  roundedFlagUrl: '/images/country/malaysia/malaysia-rounded.png',
  description: `Malaysia is a melting pot of cultures, known for its modern cities, lush rainforests, and beautiful islands. It offers a unique blend of Malay, Chinese, and Indian influences.`,
  welcomeMessage: `Welcome to Malaysia! Visit the iconic Petronas Towers in Kuala Lumpur, relax on the beaches of Langkawi, and explore the ancient rainforests of Borneo. Savor the diverse flavors of Malaysian cuisine and experience its multicultural heritage.`,
  welcomeImgUrl: '/images/country/malaysia/malaysia-welcome.jpg',
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
    climate: 'Tropical, hot and humid',
    language: 'Malay (Bahasa Malaysia)',
    currency: 'Malaysian Ringgit (MYR)',
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
  eligibleCountries: ["AE", "AF", "AL", "AM", "AO", "AR", "AT", "AZ", "BA", "BD", "BE", "BF", "BG", "BH", "BI", "BJ", "BN", "BO", "BR", "BT", "BY", "CA", "CD", "CG", "CI", "CL", "CM", "CO", "CR", "CU", "CV", "CZ", "DE", "DJ", "DK", "EE", "EG", "ER", "ES", "ET", "FI", "FR", "GA", "GE", "GH", "GN", "GQ", "GR", "GT", "HK", "HN", "HR", "HT", "HU", "ID", "IQ", "IR", "IS", "IT", "JO", "JP", "KG", "KH", "KM", "KR", "KW", "KZ", "LA", "LB", "LK", "LR", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MG", "MK", "ML", "MN", "MO", "MR", "MX", "MZ", "NE", "NG", "NI", "NO", "NP", "OM", "PA", "PE", "PH", "PK", "PL", "PS", "PT", "PY", "QA", "RO", "RS", "RU", "RW", "SA", "SE", "SI", "SK", "SN", "SO", "SR", "ST", "SV", "SY", "TD", "TG", "TH", "TJ", "TM", "TN", "TW", "UA", "US", "UY", "UZ", "VA", "VE", "VN", "XK", "YE"]
};

export default malaysia;
