// lib/countries/kenya.ts

import { Country } from "./type"; // optional type if you're using centralized types

const tajikistan: Country = {
  slug: 'tajikistan',
  name: 'Tajikistan',
  code: 'tj',
  region: 'Asia Pacific',
  flagUrl: '/images/country/tajikistan/tajikistan-square.png',
  imageUrl: '/images/country/tajikistan/tajikistan-bg.jpg',
  roundedFlagUrl: '/images/country/tajikistan/tajikistan-rounded.png',
  description: `Tajikistan is a mountainous country in Central Asia, famous for its rugged landscapes, ancient Silk Road history, and warm hospitality.`,
  welcomeMessage: `Welcome to Tajikistan! Trek the Pamir Mountains, explore the ancient city of Khujand, and experience the vibrant culture of Dushanbe. Discover the natural beauty and rich traditions of this hidden gem.`,
  welcomeImgUrl: '/images/country/tajikistan/tajikistan-welcome.jpg',
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
    climate: 'Continental, with hot summers and cold winters',
    language: 'Tajik',
    currency: 'Somoni (TJS)',
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
  eligibleCountries: ["AD", "AE", "AG", "AL", "AM", "AO", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CD", "CG", "CH", "CL", "CM", "CN", "CO", "CR", "CU", "CY", "CZ", "DE", "DK", "DM", "DOM", "DZ", "EC", "EE", "EG", "ES", "FI", "FJ", "FR", "GB", "GD", "GH", "GR", "GT", "GY", "HK", "HN", "HR", "HU", "ID", "IE", "IL", "IN", "IQ", "IS", "IT", "JM", "JO", "JP", "KE", "KH", "KN", "KR", "LA", "LB", "LC", "LI", "LK", "LT", "LU", "LV", "MA", "MC", "ME", "MK", "MN", "MO", "MT", "MU", "MV", "MX", "MY", "NI", "NL", "NO", "NZ", "PA", "PE", "PG", "PH", "PK", "PL", "PT", "PY", "QA", "RO", "RS", "SA", "SC", "SE", "SG", "SI", "SK", "SM", "SN", "SR", "SV", "TH", "TM", "TN", "TR", "TT", "TW", "US", "UY", "UZ", "VC", "VE", "VN", "ZA"]
};

export default tajikistan;
