import { Category } from "@/services/categories/types/category";
import { Market } from "@/services/markets/types/market";

export type HomeViewProps = {
  currentLocation: {
    latitude: number;
    longitude: number;
  };
  selectedCategoryId: string | undefined;
  onSelectCategory: (id: string) => void;
  categories: Category[] | undefined;
  markets: Market[] | undefined;
};
