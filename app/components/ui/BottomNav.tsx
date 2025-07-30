import { Tabs } from "expo-router";
import { Home, Map, CreditCard, User } from "lucide-react-native";

export default function BottomNav() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#1DB954",
        tabBarInactiveTintColor: "#6B7280",
        tabBarStyle: { borderTopLeftRadius: 14, borderTopRightRadius: 14, height: 64 },
        tabBarLabelStyle: { fontSize: 12, marginBottom: 6 },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => <Home color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="track"
        options={{
          title: "Tracking",
          tabBarIcon: ({ color, size }) => <Map color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="payments"
        options={{
          title: "Payments",
          tabBarIcon: ({ color, size }) => <CreditCard color={color} size={size} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => <User color={color} size={size} />,
        }}
      />
    </Tabs>
  );
}