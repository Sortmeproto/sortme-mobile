import { View, Text, FlatList, Pressable } from "react-native";
import { useEffect, useState } from "react";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Chip from "../components/ui/Chip";
import { useRouter } from "expo-router";
import { useCollector } from "../../stores/collector";

export default function CollectorHome() {
  const router = useRouter();
  const { jobs, setActive } = useCollector();
  const [localJobs, setLocalJobs] = useState<any[]>(jobs);

  useEffect(() => {
    if (!jobs.length) {
      fetch("/mocks/jobs.json").then(res => res.json()).then(setLocalJobs);
    }
  }, []);

  function acceptJob(job: any) {
    setActive(job);
    router.push("/collector/active");
  }

  return (
    <View className="flex-1 bg-surface p-6">
      <Text className="text-xl font-bold mb-4">Nearby Jobs</Text>
      <FlatList
        data={localJobs}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Card className="mb-3">
            <View className="flex-row justify-between items-center mb-1">
              <Text className="font-bold text-base">{item.item}</Text>
              <Chip label={item.status} color={item.status === "Available" ? "primary" : "secondary"} />
            </View>
            <Text className="text-xs text-text-soft mb-1">{item.location} • {item.weight} kg</Text>
            <Text className="text-primary font-bold mb-2">${item.price}</Text>
            <Button intent="primary" onPress={() => acceptJob(item)}>Accept</Button>
          </Card>
        )}
        ListEmptyComponent={<Text className="text-text-soft text-center mt-8">No jobs available.</Text>}
      />
    </View>
  );
}