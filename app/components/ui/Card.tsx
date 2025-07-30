import { View } from "react-native";

export default function Card({ children, className, style }: { children: React.ReactNode; className?: string; style?: any }) {
  return (
    <View className={"bg-white rounded-app p-4 shadow-app " + (className || "")} style={style}>{children}</View>
  );
}