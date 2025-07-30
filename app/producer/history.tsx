import { View, Text, FlatList, Pressable } from "react-native";
import { useEffect, useState } from "react";
import Card from "../components/ui/Card";

export default function History() {
  const [recent, setRecent] = useState<any[]>([]);
  const [selected, setSelected] = useState<any | null>(null);

  useEffect(() => {
    fetch("/mocks/recent.json").then(res => res.json()).then(setRecent);
  }, []);

  if (selected) {
    // Placeholder for PDF WebView
    return (
      <View className="flex-1 bg-surface items-center justify-center">
        <Text className="text-lg font-bold mb-4">Pickup Receipt</Text>
        <Text className="text-text-soft mb-8">[PDF Preview Placeholder]</Text>
        <Pressable onPress={() => setSelected(null)} className="bg-primary rounded-app px-6 py-3">
          <Text className="text-white font-medium">Back</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-surface p-6">
      <Text className="text-xl font-bold mb-4">Pickup History</Text>
      <FlatList
        data={recent}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Pressable onPress={() => setSelected(item)}>
            <Card className="mb-3">
              <View className="flex-row justify-between items-center mb-1">
                <Text className="font-bold text-base">{item.item}</Text>
                <Text className="text-primary font-bold">${item.price}</Text>
              </View>
              <Text className="text-xs text-text-soft mb-1">{item.location} • {item.weight} lbs</Text>
              <Text className="text-xs text-text-soft">{item.date}</Text>
            </Card>
          </Pressable>
        )}
        ListEmptyComponent={<Text className="text-text-soft text-center mt-8">No pickups yet.</Text>}
      />
    </View>
  );
}