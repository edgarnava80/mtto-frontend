import * as React from "react"
import { render } from "react-dom"

import { VehicleManteinanceProvider } from "./context/VehicleManteinanceContext"
import VehiclesList from "./components/VehiclesList"

export default function App(): JSX.Element {
  return (
    <VehicleManteinanceProvider>
      <div className='container'>
        <h1 className='text-center m-4'>Vehicles Manteinance Applicaton</h1>
        <VehiclesList />
      </div>
    </VehicleManteinanceProvider>
  )
}

const root = document.getElementById("app")

render(<App />, root)
