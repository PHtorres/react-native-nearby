import { useMutation } from "@tanstack/react-query";
import { createCoupon } from "../commands/create-coupon";
import { Coupon } from "../types/coupon";

type CreateCouponProps = {
  onSuccess: (data?: Coupon) => void;
  onError?: () => void;
};
export const useCreateCoupon = ({ onSuccess, onError }: CreateCouponProps) => {
  const { mutate, isPending, data } = useMutation({
    mutationFn: createCoupon,
    onSuccess: onSuccess,
    onError: () => {
      onError?.();
    },
  });

  return {
    coupon: data?.coupon,
    createCoupon: mutate,
    isCreatingCoupon: isPending,
  };
};
