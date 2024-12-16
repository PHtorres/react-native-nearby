import { useGetCategories } from "@/services/categories/hooks/use-get-categories";
import { useGetMarkets } from "@/services/markets/hooks/use-get-markets";
import { useEffect, useState } from "react";
import { HomeViewProps } from "./types";

const currentLocation = {
  latitude: -23.561187293883442,
  longitude: -46.656451388116494,
};
export const useHomeViewModel = (): HomeViewProps => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<
    string | undefined
  >();

  const { categories } = useGetCategories();
  const { markets } = useGetMarkets(selectedCategoryId);

  useEffect(() => {
    if (categories) {
      setSelectedCategoryId(categories[0].id);
    }
  }, [categories]);

  const onSelectCategory = (id: string) => {
    setSelectedCategoryId(id);
  };

  return {
    currentLocation,
    selectedCategoryId,
    onSelectCategory,
    categories,
    markets,
  };
};
