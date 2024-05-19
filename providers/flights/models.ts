export type FlightProviderContext = {
  flights: string[]
  addFlight: (code:string) => Promise<void>
  removeFlight: (indexToRemove: number) => Promise<void>
}