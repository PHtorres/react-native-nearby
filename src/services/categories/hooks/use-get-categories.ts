import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../queries/get-categories";

export const useGetCategories = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  return {
    categories: data,
    isLoadingCategories: isLoading,
  };
};
