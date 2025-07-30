import { View, Text, Pressable } from "react-native";
import { useState, useEffect } from "react";
import Button from "../components/ui/Button";
import { useRouter } from "expo-router";

function StaticMap() {
  // Placeholder for static map with pins
  return (
    <View className="bg-border rounded-app h-40 mb-4 items-center justify-center">
      <Text className="text-text-soft">[Static Map Here]</Text>
    </View>
  );
}

export default function Request2() {
  const router = useRouter();
  const [date, setDate] = useState("Tomorrow, 10:00 AM");
  // In real app, use DateTimePicker

  return (
    <View className="flex-1 bg-surface p-6">
      <Text className="text-xl font-bold mb-4">Pickup Location & Time</Text>
      <StaticMap />
      <Text className="font-medium mb-2">Select Date & Time</Text>
      <Pressable className="bg-white border border-border rounded-app p-4 mb-6">
        <Text className="text-base">{date}</Text>
      </Pressable>
      <Button intent="primary" onPress={() => router.push("/producer/request3")}>Next</Button>
    </View>
  );
}