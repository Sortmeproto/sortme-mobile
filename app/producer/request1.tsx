import { View, Text, Pressable, Image } from "react-native";
import { useState } from "react";
import Button from "../components/ui/Button";
import Chip from "../components/ui/Chip";
import { useRouter } from "expo-router";
import * as ImagePicker from "expo-image-picker";

const wasteTypes = [
  "Electronics",
  "Metal",
  "Wood",
  "Plastic",
  "Other"
];

export default function Request1() {
  const router = useRouter();
  const [selected, setSelected] = useState<string | null>(null);
  const [weight, setWeight] = useState(10);
  const [photo, setPhoto] = useState<string | null>(null);

  async function pickImage() {
    const result = await ImagePicker.launchImageLibraryAsync({ mediaTypes: ImagePicker.MediaTypeOptions.Images, quality: 0.5 });
    if (!result.canceled && result.assets.length > 0) {
      setPhoto(result.assets[0].uri);
    }
  }

  return (
    <View className="flex-1 bg-surface p-6">
      <Text className="text-xl font-bold mb-4">What type of waste?</Text>
      <View className="flex-row flex-wrap gap-2 mb-6">
        {wasteTypes.map(type => (
          <Pressable key={type} onPress={() => setSelected(type)}>
            <Chip label={type} color={selected === type ? "primary" : "secondary"} />
          </Pressable>
        ))}
      </View>
      <Text className="font-medium mb-2">Estimated Weight: {weight} kg</Text>
      <View className="flex-row items-center gap-2 mb-6">
        <Pressable onPress={() => setWeight(Math.max(1, weight - 1))} className="bg-secondary rounded-full w-8 h-8 items-center justify-center">
          <Text className="text-white text-lg">-</Text>
        </Pressable>
        <Text className="text-lg font-bold mx-4">{weight}</Text>
        <Pressable onPress={() => setWeight(weight + 1)} className="bg-secondary rounded-full w-8 h-8 items-center justify-center">
          <Text className="text-white text-lg">+</Text>
        </Pressable>
      </View>
      <Text className="font-medium mb-2">Add a photo (optional)</Text>
      <Pressable onPress={pickImage} className="bg-border rounded-app h-32 items-center justify-center mb-6">
        {photo ? (
          <Image source={{ uri: photo }} style={{ width: "100%", height: "100%", borderRadius: 14 }} />
        ) : (
          <Text className="text-text-soft">Tap to select photo</Text>
        )}
      </Pressable>
      <Button intent="primary" onPress={() => router.push("/producer/request2")}>Next</Button>
    </View>
  );
}