import "@/styles/global.css";
import Ionicons from "@expo/vector-icons/build/Ionicons";
import { Text, View } from "react-native";
import { Button } from "@/components/Button/Button";
import { ThemeSwitcher } from "@/components/ThemeSwitcher/ThemeSwitcher";

export default function App() {
  return (
    <View className="flex-1 justify-center gap-4 bg-background p-6">
      <ThemeSwitcher />
      <Button size="default" variant="primary">
        <Ionicons name="download" />
        <Text className="blur">Get Started</Text>
      </Button>
      <Button size="default" variant="default">
        <Ionicons name="star" />
        <Text>View Components</Text>
      </Button>
      <Button size="default" variant="warning">
        <Ionicons name="settings" />
        <Text>Customize</Text>
      </Button>
    </View>
  );
}
