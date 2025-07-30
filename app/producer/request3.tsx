import { View, Text, Image } from "react-native";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import { useRouter } from "expo-router";

// In a real app, get these from store/context
const summary = {
  type: "Electronics",
  weight: 10,
  date: "Tomorrow, 10:00 AM",
  photo: null,
  price: 32
};

export default function Request3() {
  const router = useRouter();
  return (
    <View className="flex-1 bg-surface p-6">
      <Text className="text-xl font-bold mb-4">Review Your Request</Text>
      <Card className="mb-6">
        <Text className="font-bold mb-1">{summary.type}</Text>
        <Text className="text-text-soft mb-1">{summary.weight} kg</Text>
        <Text className="text-text-soft mb-1">{summary.date}</Text>
        {summary.photo && (
          <Image source={{ uri: summary.photo }} style={{ width: "100%", height: 120, borderRadius: 14, marginTop: 8 }} />
        )}
      </Card>
      <Text className="text-lg font-semibold mb-2">Estimated Price</Text>
      <Text className="text-primary text-2xl font-bold mb-8">${summary.price}</Text>
      <Button intent="primary" onPress={() => router.push("/producer/quote")}>Submit</Button>
    </View>
  );
}