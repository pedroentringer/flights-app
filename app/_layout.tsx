import FlightsProvider from "@/providers/flights";
import ThemeProvider from "@/providers/theme";
import { Slot } from "expo-router";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <FlightsProvider>
        <Slot />
      </FlightsProvider>
    </ThemeProvider>
  );
}
