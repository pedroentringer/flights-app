import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { FlightProviderContext } from './models'

const FlightsContext = React.createContext({} as FlightProviderContext)

export const useFlights = () => React.useContext(FlightsContext)

const FlightsProvider = ({ children }: React.PropsWithChildren) => {
  const [flights, setFlights] = React.useState<string[]>([])

  const hydrateStateByStorage = async () => {
    const offlineFlights = await getOfflineFlights()
    setFlights(offlineFlights)
  }

  React.useEffect(() => {
    hydrateStateByStorage()
  }, [])

  const getOfflineFlights = async ():Promise<string[]> => {
    try{
      const offlineData = await AsyncStorage.getItem('flights')

      if(offlineData){
        const offlineFlights = JSON.parse(offlineData)
        return offlineFlights
      }
    }catch(err){
      console.log(err)
    }

    return []
  }

  const saveFlightsOffline = async (codes: string[]) => {
    try{
      await AsyncStorage.setItem('flights', JSON.stringify(codes))
    }catch(err){
      console.log(err)
    }
  }

  const addFlight = async (code: string) => {
    const offlineFlights = await getOfflineFlights()
      
    offlineFlights.push(code)
    
    await saveFlightsOffline(offlineFlights)

    setFlights(offlineFlights)
  }

  const removeFlight = async (indexToRemove: number) => {
    const storedFlights = await getOfflineFlights()

    const filteredFlights = storedFlights
      .filter((_flightCode, index) => index !== indexToRemove)

    await saveFlightsOffline(filteredFlights)

    setFlights(filteredFlights)
  }

  return (
    <FlightsContext.Provider value={{ flights, addFlight, removeFlight }}>
      {children}
    </FlightsContext.Provider>
  )
}

export default FlightsProvider