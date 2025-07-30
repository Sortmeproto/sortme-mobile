import { View, Text } from "react-native";
export default function Chip({ label, color = "primary" }: { label: string; color?: string }) {
  return (
    <View className={`bg-${color}/10 rounded-app px-2 py-0.5`}>
      <Text className={`text-${color} text-xs`}>{label}</Text>
    </View>
  );
}