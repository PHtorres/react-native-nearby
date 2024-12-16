import { useQuery } from "@tanstack/react-query";
import { getMarket } from "../queries/get-market";

export const useGetMarket = (marketId: string) => {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["market", marketId],
    queryFn: () => getMarket(marketId),
  });

  return {
    market: data,
    isLoadingMarket: isLoading,
    refetchMarket: refetch,
  };
};
