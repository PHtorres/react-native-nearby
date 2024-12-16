import { Market } from "@/services/markets/types/market";

export type MarketViewProps = {
  isCameraModalVisible: boolean;
  isLoadingMarket: boolean;
  isCreatingCoupon: boolean;
  market: Market | undefined;
  coupon: string | undefined;
  currentQRLock: boolean;
  setQRLock: (value: boolean) => void;
  handleOpenCamera: () => Promise<void>;
  handleUseCoupon: (id: string) => void;
  closeCameraModal: () => void;
};
