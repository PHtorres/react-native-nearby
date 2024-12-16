import { Market } from "@/services/markets/types/market";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { router } from "expo-router";
import { useRef } from "react";
import { Text, useWindowDimensions } from "react-native";
import { Place } from "../place";
import { s } from "./styles";

type Props = {
  markets: Market[];
};

export function Places({ markets }: Props) {
  const dimensions = useWindowDimensions();
  const bottomSheetRef = useRef<BottomSheet>(null);

  const snapPoints = {
    min: 278,
    max: dimensions.height - 128,
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={[snapPoints.min, snapPoints.max]}
      handleIndicatorStyle={s.indicator}
      backgroundStyle={s.container}
      enableOverDrag={false}
    >
      <BottomSheetFlatList
        data={markets}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Place
            data={item}
            onPress={() => router.navigate(`/market/${item.id}`)}
          />
        )}
        contentContainerStyle={s.content}
        ListHeaderComponent={() => (
          <Text style={s.title}>Explore locais perto de você</Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </BottomSheet>
  );
}