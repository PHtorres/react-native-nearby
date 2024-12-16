import { apiInstance } from "@/services/api/api-instance";
import type { Market } from "../types/market";
import { Endpoints } from "@/services/api/endpoints";

export const getMarket = async (marketId: string) => {
  const response = await apiInstance.get<Market | undefined>(
    Endpoints.market(marketId)
  );
  return response.data;
};
