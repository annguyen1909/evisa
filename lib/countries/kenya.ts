// lib/countries/kenya.ts

import { Country } from "./type"; // optional type if you're using centralized types

const kenya: Country = {
  slug: 'kenya',
  name: 'Kenya',
  region: 'Africa',
  code: 'ke',
  flagUrl: '/images/flags/kenya-square.png',
  roundedFlagUrl: '/images/flags/kenya.png',
  imageUrl: '/images/country/kenya/kenya-bg.jpg',
  description: `In January 2024, The Kenya Government replaced the eVisa with the Electronic Travel Authorization (Kenya ETA), for which citizens of all countries are eligible to apply. With this new policy, tourists are no longer required to apply for a visa, instead, they can complete the eTA application process within a few minutes and get permits in a maximum of 03 business days.`,
  welcomeMessage: `A captivating East African nation teeming with diverse wildlife and awe-inspiring landscapes. Embark on thrilling safaris in renowned national parks, such as the Maasai Mara, and witness the breathtaking beauty of the Great Rift Valley. Immerse yourself in the vibrant culture and warm hospitality of Kenya's diverse communities, making unforgettable memories in this extraordinary destination.`,
  welcomeImgUrl: '/images/country/kenya/kenya-welcome.jpg',
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
    serviceFee: '$49.99'
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
    climate: 'Tropical, arid',
    language: 'English and Kiswahili',
    currency: 'Kenyan shilling (KES)',
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
      value: "transit",
      color: "#cfac5a",
      title: "Transit",
      subtitle: "Single Entry for 90 days",
      visaType: "Transit ETA",
    },
    {
      value: "medical",
      color: "#16610E",
      title: "Medical",
      subtitle: "Single Entry for 90 days",
      visaType: "Medical ETA",
    },
  ],
  eligibleCountries: ["AD", "AE", "AF", "AG", "AL", "AM", "AO", "AR", "AT", "AU", "AZ", "BA", "BB", "BD", "BE", "BF", "BG", "BH", "BJ", "BN", "BO", "BR", "BS", "BT", "BW", "BY", "BZ", "CA", "CG", "CH", "CI", "CL", "CM", "CN", "CO", "CR", "CU", "CV", "CY", "CZ", "DE", "DJ", "DK", "DM", "DO", "DZ", "EC", "EE", "EG", "EH", "ER", "ES", "ET", "FI", "FJ", "FM", "FR", "GA", "GB", "GD", "GE", "GH", "GL", "GM", "GN", "GQ", "GR", "GT", "GW", "GY", "HK", "HN", "HR", "HT", "HU", "ID", "IE", "IL", "IN", "IQ", "IR", "IS", "IT", "JM", "JO", "JP", "KG", "KH", "KI", "KM", "KN", "KP", "KR", "KW", "KZ", "LA", "LB", "LC", "LI", "LK", "LR", "LS", "LT", "LU", "LV", "MA", "MC", "MD", "ME", "MG", "MH", "MK", "ML", "MN", "MO", "MR", "MT", "MU", "MV", "MW", "MX", "MY", "MZ", "NA", "NE", "NG", "NI", "NL", "NO", "NP", "NR", "NZ", "OM", "PA", "PE", "PG", "PH", "PK", "PL", "PS", "PT", "PW", "PY", "QA", "RE", "RO", "RS", "RU", "SA", "SB", "SC", "SE", "SG", "SI", "SK", "SL", "SM", "SN", "SO", "SR", "ST", "SV", "SY", "SZ", "TD", "TG", "TH", "TJ", "TL", "TM", "TN", "TO", "TR", "TT", "TV", "TW", "UA", "US", "UY", "UZ", "VA", "VC", "VE", "VN", "VU", "WS", "XK", "YE", "ZA", "ZM", "ZW"]
};

export default kenya;
