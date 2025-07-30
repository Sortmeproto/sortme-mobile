import { Pressable, Text } from "react-native";
import clsx from "classnames";

export default function Button({
  children,
  intent = "primary",
  onPress,
  disabled = false
}: {
  children: React.ReactNode;
  intent?: "primary" | "secondary";
  onPress?: () => void;
  disabled?: boolean;
}) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      className={clsx(
        "rounded-app px-6 py-3 active:scale-95 items-center justify-center",
        intent === "primary" && "bg-primary shadow-app",
        intent === "secondary" && "bg-secondary/10",
        disabled && "opacity-50"
      )}
    >
      <Text className="text-white font-medium">{children}</Text>
    </Pressable>
  );
}