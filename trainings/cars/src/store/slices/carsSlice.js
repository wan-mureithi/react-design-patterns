import { createSlice } from "@reduxjs/toolkit"

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    cars: [],
  },
  reducers: {
    changeSearchTerms(state, action) {
      state.searchTerm = action.payload
    },
    addCar(state, action) {
      //mutating the state
      state.cars.push({
        name: action.payload.name,
        cost: action.payload.cost,
      })
    },
    removeCar(action, payload) {},
  },
})
