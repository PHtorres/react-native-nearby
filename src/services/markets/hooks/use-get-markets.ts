import { useQuery } from "@tanstack/react-query";
import { getMarkets } from "../queries/get-markets";

export const useGetMarkets = (categoryId?: string) => {
  const { data, isLoading } = useQuery({
    queryKey: ["markets", categoryId],
    queryFn: () => (categoryId ? getMarkets(categoryId) : []),
  });

  return {
    markets: data,
    isLoadingMarkets: isLoading,
  };
};
