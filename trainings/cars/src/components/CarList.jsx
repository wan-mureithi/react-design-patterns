import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { removeCar } from "../store"

function CarList() {
  const cars = useSelector((state) => state.cars.data)
  const dispatch = useDispatch()
  console.log(cars)
  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id))
  }
  const renderedCars = cars.map((car) => {
    return (
      <div key={car.id}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button
          className="button is-danger"
          onClick={() => handleCarDelete(car)}
        >
          Delete
        </button>
      </div>
    )
  })
  return (
    <div className="car-list">
      {renderedCars}
      <hr />
    </div>
  )
}

export default CarList
