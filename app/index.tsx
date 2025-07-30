import { View, Text, Image } from "react-native";
import { useEffect } from "react";
import { router } from "expo-router";

export default function Splash() {
  useEffect(() => {
    const id = setTimeout(() => router.replace("/welcome"), 2000);
    return () => clearTimeout(id);
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Image
        source={require("../assets/logo.png")}
        style={{ width: 120, height: 120, marginBottom: 32 }}
        resizeMode="contain"
      />
      <Text className="text-primary text-3xl font-bold">SortMe</Text>
    </View>
  );
}