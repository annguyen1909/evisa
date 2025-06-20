export type Country = {
  slug: string;
  name: string;
  code: string;
  description: string;
  welcomeMessage: string;
  flagUrl?: string;
  roundedFlagUrl?: string;
  imageUrl?: string;
  welcomeImgUrl?: string;
  region?: string;
  etaInfo: {
    intro: string;
    processing: {
      summary: string;
      steps: string[];
      urgentProcessing: string;
    };
    visaTypes: {
      name: string;
      type: string;
      description: string;
      visaValidity: string;
      visaDuration: string;
      expectedProcessingTime: string;
      govFee: number;
      allowedNationalities: string[];
    }[];
    serviceFee: string | number;
  };
  visaServicePackage: string[];
  gvcSupport: {
    description: string;
    services: string[];
    note: string;
  };
  info: {
    climate: string;
    language: string;
    currency: string;
  };
}
