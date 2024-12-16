import { useCreateCoupon } from "@/services/coupons/hooks/use-create-coupon";
import { useGetMarket } from "@/services/markets/hooks/use-get-market";
import { useCameraPermissions } from "expo-camera";
import { useLocalSearchParams } from "expo-router";
import { useCallback, useMemo, useRef, useState } from "react";
import { Alert } from "react-native";
import { MarketViewProps } from "./types";

export const useMarketViewModel = (): MarketViewProps => {
  const [isCameraModalVisible, setCameraModalVisible] = useState(false);

  const closeCameraModal = useCallback(() => setCameraModalVisible(false), []);

  const [_, requestPermission] = useCameraPermissions();
  const params = useLocalSearchParams<{ id: string }>();

  const { market, isLoadingMarket, refetchMarket } = useGetMarket(params.id);

  const { createCoupon, isCreatingCoupon, coupon } = useCreateCoupon({
    onSuccess: (data) => {
      Alert.alert("Cupom", data?.coupon);
      refetchMarket();
    },
    onError: () => Alert.alert("Erro", "Não foi possível utilizar o cupom"),
  });

  const qrLock = useRef(false);
  const currentQRLock = useMemo(() => qrLock.current, [qrLock]);
  const setQRLock = (value: boolean) => (qrLock.current = value);

  async function handleOpenCamera() {
    try {
      const { granted } = await requestPermission();

      if (!granted) {
        return Alert.alert("Câmera", "Você precisa habilitar o uso da câmera");
      }

      setQRLock(false);
      setCameraModalVisible(true);
    } catch (error) {
      console.log(error);
      Alert.alert("Câmera", "Não foi possível utilizar a câmera");
    }
  }

  function handleUseCoupon(id: string) {
    setCameraModalVisible(false);

    Alert.alert(
      "Cupom",
      "Não é possível reutilizar um cupom resgatado. Deseja realmente resgatar o cupom?",
      [
        { style: "cancel", text: "Não" },
        { text: "Sim", onPress: () => createCoupon(id) },
      ]
    );
  }

  return {
    isCameraModalVisible,
    isLoadingMarket,
    isCreatingCoupon,
    market,
    coupon,
    currentQRLock,
    setQRLock,
    handleOpenCamera,
    handleUseCoupon,
    closeCameraModal,
  };
};
