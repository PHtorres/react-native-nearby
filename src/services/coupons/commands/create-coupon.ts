import { apiInstance } from "@/services/api/api-instance";
import { Endpoints } from "@/services/api/endpoints";
import type { Coupon } from "../types/coupon";

export const createCoupon = async (couponId: string) => {
  const response = await apiInstance.patch<Coupon | undefined>(
    Endpoints.coupons(couponId)
  );
  return response.data;
};
