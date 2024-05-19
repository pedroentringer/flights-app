import { FadeIn, FadeInOut } from "@/components/animations";
import Plane from "@/components/plane";
import { useFlights } from "@/providers/flights";
import { useTheme } from "@/providers/theme";
import { Text, View, Button } from "react-native";

export default function Index() {
  const { themeName, setThemeName } = useTheme()
  const { flights, addFlight, removeFlight } = useFlights()
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >

      <FadeIn>
        <Text>Fade In Animation</Text>
      </FadeIn>

      <FadeInOut visible>
        <Text>Fade In Out Animation</Text>
      </FadeInOut>
      
      

      <Plane show={true}/>
      <Text>Total Flights: {flights.length}</Text>
      <Button title="Add Flight" onPress={() => {
        addFlight("pedro")
      }} />

<Button title="Remove First Flight" onPress={() => {
        removeFlight(0)
      }} />
      <Text>Theme: {themeName}</Text>
      <Button title="Light" onPress={() => setThemeName('light')} />
      <Button title="Dark" onPress={() => setThemeName('dark')} />
    </View>
  );
}
