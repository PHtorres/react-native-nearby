export const Endpoints = {
  categories: "categories",
  markets: (categoryId: string) => `markets/category/${categoryId}`,
  market: (marketId: string) => `markets/${marketId}`,
  coupons: (couponId: string) => `coupons/${couponId}`,
};
