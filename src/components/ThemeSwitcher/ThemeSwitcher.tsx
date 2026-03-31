import { Uniwind, useUniwind } from "@niibase/uniwind";
import { Pressable, ScrollView, Text, View } from "react-native";

const themes = [
  { name: "light", label: "Light", icon: "☀️" },
  { name: "dark", label: "Dark", icon: "🌙" },
] as const;

export const ThemeSwitcher = () => {
  const { theme, hasAdaptiveThemes } = useUniwind();

  const activeTheme = hasAdaptiveThemes ? "system" : theme;

  return (
    <View className="gap-4 p-4">
      <Text className="text-foreground text-sm">Current: {activeTheme}</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className="flex-row gap-2">
          {themes.map((t) => (
            <Pressable
              className={`items-center rounded-lg px-4 py-3 ${activeTheme === t.name ? "bg-primary" : "border border-border bg-card"}
              `}
              key={t.name}
              onPress={() => Uniwind.setTheme(t.name)}
            >
              <Text
                className={`text-2xl ${activeTheme === t.name ? "text-white" : "text-foreground"}`}
              >
                {t.icon}
              </Text>
              <Text
                className={`mt-1 text-xs ${activeTheme === t.name ? "text-white" : "text-foreground"}`}
              >
                {t.label}
              </Text>
            </Pressable>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
