interface IVehicle {
  id: number
  image: string
  make: string
  model: string
  description: string
  estimatedate?: string
  km?: number
  marked?: boolean
}

interface IManteinance {
  vehicleId: number
  person: string
  estimatedDelivery: string
}

interface ContextProps {
  vehicles: IVehicle[]
  //setVehicles(vehicles: IVehicle[]): void
  getVehicles: () => void
  updateVehicle: (id: number) => void
  //saveManteinance: (manteinance: IManteinance) => void
}

interface Props {
  children?: React.ReactNode
}
