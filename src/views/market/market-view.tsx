import { Button } from "@/components/button";
import { Loading } from "@/components/loading";
import { Coupon } from "@/components/market/coupon";
import { Cover } from "@/components/market/cover";
import { Details } from "@/components/market/details";
import { CameraView } from "expo-camera";
import { Redirect } from "expo-router";
import { Modal, ScrollView, StatusBar, View } from "react-native";
import { MarketViewProps } from "./types";

export const MarketView = ({
  isLoadingMarket,
  isCreatingCoupon,
  isCameraModalVisible,
  market,
  coupon,
  currentQRLock,
  setQRLock,
  handleOpenCamera,
  handleUseCoupon,
  closeCameraModal,
}: MarketViewProps) => {
  if (isLoadingMarket) {
    return <Loading />;
  }

  if (!market) {
    return <Redirect href="/home" />;
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" hidden={isCameraModalVisible} />

      <ScrollView showsVerticalScrollIndicator={false}>
        <Cover uri={market.cover} />
        <Details data={market} />
        {coupon && <Coupon code={coupon} />}
      </ScrollView>

      <View style={{ padding: 32 }}>
        <Button onPress={handleOpenCamera}>
          <Button.Title>Ler QR Code</Button.Title>
        </Button>
      </View>

      <Modal style={{ flex: 1 }} visible={isCameraModalVisible}>
        <CameraView
          style={{ flex: 1 }}
          facing="back"
          onBarcodeScanned={({ data }) => {
            if (data && !currentQRLock) {
              setQRLock(true);
              setTimeout(() => handleUseCoupon(data), 500);
            }
          }}
        />

        <View style={{ position: "absolute", bottom: 32, left: 32, right: 32 }}>
          <Button onPress={closeCameraModal} isLoading={isCreatingCoupon}>
            <Button.Title>Voltar</Button.Title>
          </Button>
        </View>
      </Modal>
    </View>
  );
};
