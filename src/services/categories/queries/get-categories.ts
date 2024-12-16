import { apiInstance } from "@/services/api/api-instance";
import type { Category } from "../types/category";
import { Endpoints } from "@/services/api/endpoints";

export const getCategories = async () => {
  const response = await apiInstance.get<Category[] | undefined>(
    Endpoints.categories,
  );
  return response.data;
};
