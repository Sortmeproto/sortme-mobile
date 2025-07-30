import { View, Text } from "react-native";
import Button from "../components/ui/Button";
import { useRouter } from "expo-router";

export default function Quote() {
  const router = useRouter();
  return (
    <View className="flex-1 bg-surface p-6 items-center justify-center">
      <Text className="text-xl font-bold mb-4">Weight Verified</Text>
      <Text className="text-text-soft mb-2">Final Price</Text>
      <Text className="text-primary text-3xl font-bold mb-8">$36</Text>
      <Button intent="primary" onPress={() => router.push("/producer/track")}>Pay</Button>
    </View>
  );
}