import { View, Text, Pressable } from "react-native";
import { useEffect, useState } from "react";
import Button from "../components/ui/Button";
import { useRouter } from "expo-router";

function StaticPolylineMap() {
  return (
    <View className="bg-border rounded-app h-40 mb-4 items-center justify-center">
      <Text className="text-text-soft">[Map with Route & Truck]</Text>
      <Text style={{ fontSize: 32, marginTop: 8 }}>🚚</Text>
    </View>
  );
}

export default function Track() {
  const router = useRouter();
  const [eta, setEta] = useState(15);

  useEffect(() => {
    if (eta > 0) {
      const id = setInterval(() => setEta(e => e - 1), 1000);
      return () => clearInterval(id);
    }
  }, [eta]);

  return (
    <View className="flex-1 bg-surface p-6">
      <Text className="text-xl font-bold mb-4">Track Pickups</Text>
      <View className="flex-row gap-2 mb-4">
        <Text className="bg-primary/10 text-primary rounded-full px-3 py-1">Active</Text>
        <Text className="bg-border text-text-soft rounded-full px-3 py-1">Completed</Text>
      </View>
      <StaticPolylineMap />
      <Text className="text-lg font-semibold mb-2">ETA: {eta > 0 ? `${eta} min` : "Arrived!"}</Text>
      <Button intent="primary" onPress={() => router.push("/producer/history")}>Finish</Button>
    </View>
  );
}