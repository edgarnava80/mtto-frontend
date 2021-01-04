import * as React from "react"
import Axios, { AxiosResponse } from "axios"

export const VehicleManteinanceContext = React.createContext<ContextProps>(null)

export const VehicleManteinanceProvider: React.FC<Props> = ({ children }) => {
  const [manteinance, setManteinance] = React.useState<IManteinance | {}>()
  const [vehicles, setVehicles] = React.useState<IVehicle[] | []>([])

  const getVehicles = async () => {
    try {
      //const url = "http://localhost:4000/api/v1/vehicles"
      const url = "https://agile-retreat-94192.herokuapp.com/api/v1/vehicles"
      const response: AxiosResponse = await Axios.get<IVehicle[]>(url)
      if (response.data) {
        setVehicles(response.data.vehicles)
      }
    } catch (err) {
      console.log("There was an error fetching vehicles")
    }
  }

  const updateVehicle = (id: number) => {
    vehicles.filter((vehicle: IVehicle) => {
      if (vehicle.id === id) {
        if (vehicle.marked === false || vehicle.marked === undefined) {
          vehicle.marked = true
        } else {
          vehicle.marked = false
        }
        setVehicles([...vehicles])
      }
    })
  }

  // const saveManteinance = (manteinance: IManteinance) => {
  //   const newManteinance: IManteinance = {
  //     vehicleId: manteinance.vehicleId, // not really unique - but fine for this example
  //     person: manteinance.person,
  //     estimatedDelivery: manteinance.estimatedDelivery
  //   }
  //   // API manteinance post
  // }
  return <VehicleManteinanceContext.Provider value={{ vehicles, getVehicles, updateVehicle }}>{children}</VehicleManteinanceContext.Provider>
}

//export default VehicleManteinanceProvider
