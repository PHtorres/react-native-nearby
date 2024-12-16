type Rule = {
  id: string;
  description: string;
};

export type Market = {
  id: string;
  name: string;
  description: string;
  coupons: number;
  cover: string;
  address: string;
  phone: string;
  latitude: number;
  longitude: number;
  rules: Rule[];
};
