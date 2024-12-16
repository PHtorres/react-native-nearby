import { Categories } from "@/components/categories";
import { Places } from "@/components/places";
import { colors } from "@/styles/colors";
import { fontFamily } from "@/styles/font-family";
import { router } from "expo-router";
import { Text, View } from "react-native";
import MapView, { Callout, Marker } from "react-native-maps";
import { HomeViewProps } from "./types";

export const HomeView = ({
  currentLocation,
  categories,
  markets,
  selectedCategoryId,
  onSelectCategory,
}: HomeViewProps) => {
  return (
    <View style={{ flex: 1, backgroundColor: "#CECECE" }}>
      {categories && (
        <Categories
          data={categories}
          onSelect={onSelectCategory}
          selected={selectedCategoryId}
        />
      )}

      <MapView
        style={{ flex: 1 }}
        initialRegion={{
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          identifier="current"
          coordinate={{
            latitude: currentLocation.latitude,
            longitude: currentLocation.longitude,
          }}
          image={require("@/assets/location.png")}
        />

        {markets &&
          markets.map((item) => (
            <Marker
              key={item.id}
              identifier={item.id}
              coordinate={{
                latitude: item.latitude,
                longitude: item.longitude,
              }}
              image={require("@/assets/pin.png")}
            >
              <Callout onPress={() => router.navigate(`/market/${item.id}`)}>
                <View>
                  <Text
                    style={{
                      fontSize: 14,
                      color: colors.gray[600],
                      fontFamily: fontFamily.medium,
                    }}
                  >
                    {item.name}
                  </Text>

                  <Text
                    style={{
                      fontSize: 12,
                      color: colors.gray[600],
                      fontFamily: fontFamily.regular,
                    }}
                  >
                    {item.address}
                  </Text>
                </View>
              </Callout>
            </Marker>
          ))}
      </MapView>

      {markets && <Places markets={markets} />}
    </View>
  );
};
