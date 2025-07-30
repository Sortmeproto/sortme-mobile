import { View, Text, FlatList } from "react-native";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Chip from "../components/ui/Chip";
import { useEffect } from "react";
import { useRouter } from "expo-router";
import { useProducer } from "../../stores/producer";

export default function ProducerHome() {
  const router = useRouter();
  const { recent, setDraft } = useProducer();

  useEffect(() => {
    // Load recent pickups from mocks if not already loaded
    if (!recent.length) {
      fetch("/mocks/recent.json")
        .then(res => res.json())
        .then(data => setDraft({ recent: data }));
    }
  }, []);

  return (
    <View className="flex-1 bg-surface p-4">
      <Text className="text-xl font-bold text-center mb-4">Ready to dispose of waste responsibly?</Text>
      <Button intent="primary" onPress={() => router.push("/producer/request1")}>+ Request Pickup</Button>
      <Text className="text-lg font-semibold mt-8 mb-2">Recent Pickups</Text>
      <FlatList
        data={recent}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Card className="mb-3">
            <View className="flex-row justify-between items-center mb-1">
              <Text className="font-bold text-base">{item.item}</Text>
              <Chip label={item.status} color={item.status === "Completed" ? "primary" : item.status === "In Progress" ? "secondary" : "text-soft"} />
            </View>
            <Text className="text-xs text-text-soft mb-1">{item.location} • {item.weight} lbs</Text>
            <View className="flex-row justify-between items-end">
              <Text className="text-xs text-text-soft">{item.date}</Text>
              <Text className="text-primary font-bold">${item.price}</Text>
            </View>
          </Card>
        )}
        ListEmptyComponent={<Text className="text-text-soft text-center mt-8">No pickups yet.</Text>}
      />
    </View>
  );
}