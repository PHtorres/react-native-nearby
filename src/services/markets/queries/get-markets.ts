import { apiInstance } from "@/services/api/api-instance";
import type { Market } from "../types/market";
import { Endpoints } from "@/services/api/endpoints";

export const getMarkets = async (categoryId: string) => {
  const response = await apiInstance.get<Market[] | undefined>(
    Endpoints.markets(categoryId),
  );
  return response.data;
};
