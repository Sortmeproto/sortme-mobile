import { View, Text, Image } from "react-native";
import { router } from "expo-router";
import Button from "./components/ui/Button";

export default function Welcome() {
  return (
    <View className="flex-1 items-center justify-center gap-6 p-6 bg-white">
      <Image
        source={require("../assets/logo.png")}
        style={{ width: 120, height: 120, marginBottom: 32 }}
        resizeMode="contain"
      />
      <Text className="text-3xl font-semibold">SortMe</Text>
      <Text className="text-text-soft">On-demand bulky-waste pickup.</Text>
      <Button onPress={() => router.push("/role")}>Get started</Button>
    </View>
  );
}