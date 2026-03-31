import { Uniwind } from "@niibase/uniwind";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaListener } from "react-native-safe-area-context";

export default function AppLayout() {
  return (
    <SafeAreaListener
      onChange={({ insets }) => {
        Uniwind.updateInsets(insets);
      }}
    >
      <Slot />
      <StatusBar style="auto" />
    </SafeAreaListener>
  );
}
