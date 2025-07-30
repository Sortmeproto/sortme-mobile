import { View, Text, Pressable } from "react-native";
import { Share } from "react-native";
import Chip from "../components/ui/Chip";

export default function Eco() {
  const co2 = 124;
  const share = () => {
    Share.share({ message: `I saved ${co2} kg CO₂ with SortMe!` });
  };
  return (
    <View className="flex-1 bg-surface p-6 items-center justify-center">
      {/* Radial progress placeholder */}
      <View className="w-40 h-40 rounded-full border-8 border-primary items-center justify-center mb-6">
        <Text className="text-2xl font-bold text-primary">{co2} kg</Text>
        <Text className="text-text-soft">CO₂ saved</Text>
      </View>
      <Chip label="Top Recycler" />
      <Pressable onPress={share} className="mt-8 bg-primary rounded-app px-6 py-3">
        <Text className="text-white font-medium">Share</Text>
      </Pressable>
    </View>
  );
}