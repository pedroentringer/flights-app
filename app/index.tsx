import { FadeIn, FadeInOut } from "@/components/animations";
import { PlaneButton } from "@/components/buttons";
import PlaneIcon from "@/components/icons/plane";
import { Align, Container } from "@/components/layout";
import Logo from "@/components/logo";
import Plane from "@/components/plane";
import { useFlights } from "@/providers/flights";
import { useTheme } from "@/providers/theme";
import { Text, View, Button } from "react-native";

export default function Index() {
  const { themeName, setThemeName } = useTheme()
  const { flights, addFlight, removeFlight } = useFlights()
  return (
    <Container full padding>
      <Align 
        direction="column"
        horizontal="center"
        vertical="center"
        style={{
          width: 300, 
          height: 300, 
          backgroundColor: 'red',
        }}>
        <Logo variant="white" />
        <Logo variant="white" />
      </Align>

      <PlaneButton onPress={() => console.log('plane button')}  />

      <PlaneIcon variant="tertiary" />

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
    </Container>
  );
}
