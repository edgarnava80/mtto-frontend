import * as React from "react"
import { Table } from "react-bootstrap"
import { VehicleManteinanceContext } from "../context/VehicleManteinanceContext"

const VehiclesList = () => {
  const { vehicles, getVehicles, updateVehicle } = React.useContext(VehicleManteinanceContext)
  React.useEffect(() => {
    getVehicles()
  }, [])
  const handleClick = (id: number) => {
    updateVehicle(id)
    console.log("Image clicked")
  }
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className='text-center align-middle'>Image</th>
            <th className='text-center align-middle'>Make</th>
            <th className='text-center align-middle'>Model</th>
            <th className='text-center align-middle'>Description</th>
            <th className='text-center align-middle'>Estimated Date</th>
            <th className='text-center align-middle'>Identifier</th>
            <th className='text-center align-middle'>KM</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle, index) => (
            <tr key={index} className={vehicle.marked ? "bg-success" : ""} onClick={() => handleClick(vehicle.id)} role='button'>
              <td>
                <img src={vehicle.image} alt='Vehicle image' width='250' height='120' />
              </td>
              <td className='text-center align-middle'>{vehicle.make}</td>
              <td className='text-center align-middle'>{vehicle.model}</td>
              <td className='text-center align-middle text-capitalize'>{vehicle.description}</td>
              <td className='text-center align-middle'>{vehicle.estimatedate}</td>
              <td className='text-center align-middle'>{vehicle.id}</td>
              <td className='text-center align-middle'>{vehicle.km}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}
export default VehiclesList
