import { useTheme } from "@/providers/theme";
import { Text, View, Button } from "react-native";

export default function Index() {
  const { themeName, setThemeName } = useTheme()
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Theme: {themeName}</Text>
      <Button title="Light" onPress={() => setThemeName('light')} />
      <Button title="Dark" onPress={() => setThemeName('dark')} />
    </View>
  );
}
