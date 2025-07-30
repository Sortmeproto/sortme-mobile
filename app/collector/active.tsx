import { View, Text, Pressable } from "react-native";
import { useState } from "react";
import Button from "../components/ui/Button";
import { useRouter } from "expo-router";
import { useCollector } from "../../stores/collector";

function MiniMap() {
  return (
    <View className="bg-border rounded-app h-32 mb-4 items-center justify-center">
      <Text className="text-text-soft">[Mini Map Here]</Text>
    </View>
  );
}

export default function ActiveJob() {
  const router = useRouter();
  const { active, setActive } = useCollector();
  const [weight, setWeight] = useState(active?.weight || 0);

  function finishJob() {
    setActive(null);
    router.replace("/collector/home");
  }

  if (!active) {
    return (
      <View className="flex-1 bg-surface items-center justify-center">
        <Text className="text-text-soft">No active job.</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-surface p-6">
      <Text className="text-xl font-bold mb-4">Active Job</Text>
      <MiniMap />
      <Text className="font-medium mb-2">{active.item}</Text>
      <Text className="text-xs text-text-soft mb-4">{active.location}</Text>
      <Text className="font-medium mb-2">Enter Weight (kg)</Text>
      <View className="flex-row items-center gap-2 mb-6">
        <Pressable onPress={() => setWeight(Math.max(0, weight - 1))} className="bg-secondary rounded-full w-8 h-8 items-center justify-center">
          <Text className="text-white text-lg">-</Text>
        </Pressable>
        <Text className="text-lg font-bold mx-4">{weight}</Text>
        <Pressable onPress={() => setWeight(weight + 1)} className="bg-secondary rounded-full w-8 h-8 items-center justify-center">
          <Text className="text-white text-lg">+</Text>
        </Pressable>
      </View>
      <Button intent="primary" onPress={finishJob}>Finish</Button>
    </View>
  );
}