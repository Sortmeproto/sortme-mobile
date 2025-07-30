import { View, Text, Pressable, Image } from "react-native";
import { useState } from "react";
import { router } from "expo-router";
import { create } from "zustand";
import Button from "./components/ui/Button";
import Card from "./components/ui/Card";
import { Home, Truck } from "lucide-react-native";

const useAuth = create<{ user: null | { role: "producer" | "collector" }; setUser: (u: any) => void }>(set => ({
  user: null,
  setUser: user => set({ user })
}));

const roles = [
  {
    id: "producer",
    icon: Home,
    title: "Waste Producer",
    subtitle: "I need waste pickup services",
    features: [
      "Schedule on-demand pickups",
      "Compare provider prices",
      "Track pickup progress",
      "Secure payment processing"
    ]
  },
  {
    id: "collector",
    icon: Truck,
    title: "Waste Collector",
    subtitle: "I provide waste collection services",
    features: [
      "Find new customers",
      "Optimize route scheduling",
      "Instant payment processing",
      "Manage service capacity"
    ]
  }
];

export default function RoleSelect() {
  const setUser = useAuth(s => s.setUser);
  const [selected, setSelected] = useState<"producer" | "collector" | null>(null);

  return (
    <View className="flex-1 bg-surface px-4 pt-16 pb-8">
      <View className="flex-row justify-between items-center mb-6">
        <Text className="text-text-soft font-medium">Step 1 / 2</Text>
        <Text className="text-text-soft font-medium">Skip</Text>
      </View>
      <Text className="text-2xl font-bold text-center mb-2">Choose Your Role</Text>
      <Text className="text-text-soft text-center mb-6">Select how you'll use the app to get started</Text>
      <View className="gap-4 mb-8">
        {roles.map(r => {
          const Icon = r.icon;
          const isActive = selected === r.id;
          return (
            <Pressable
              key={r.id}
              onPress={() => setSelected(r.id as any)}
              className={`rounded-app border ${isActive ? "border-primary bg-white" : "border-border bg-surface"} p-4 flex-row items-center gap-4`}
              style={{ shadowColor: isActive ? "#1DB954" : undefined, shadowOpacity: isActive ? 0.1 : 0, shadowRadius: 8 }}
            >
              <View className="bg-primary/10 rounded-full p-3 mr-2">
                <Icon color="#1DB954" size={28} />
              </View>
              <View className="flex-1">
                <Text className="font-bold text-base mb-0.5">{r.title}</Text>
                <Text className="text-text-soft text-xs mb-1">{r.subtitle}</Text>
                {r.features.map(f => (
                  <Text key={f} className="text-xs text-text-soft">• {f}</Text>
                ))}
              </View>
            </Pressable>
          );
        })}
      </View>
      <Button
        intent="primary"
        onPress={() => {
          if (!selected) return;
          setUser({ role: selected });
          router.replace(selected === "producer" ? "/producer/home" : "/collector/home");
        }}
        disabled={!selected}
      >
        Continue
      </Button>
    </View>
  );
}