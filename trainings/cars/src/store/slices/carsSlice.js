import { createSlice, nanoid } from "@reduxjs/toolkit"

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    data: [],
  },
  reducers: {
    changeSearchTerms(state, action) {
      state.searchTerm = action.payload
    },
    addCar(state, action) {
      //mutating the state
      state.data.push({
        id: nanoid(),
        name: action.payload.name,
        cost: action.payload.cost,
      })
    },
    removeCar(state, action) {
      //mutating the state
      state.data = state.data.filter((car) => car.id !== action.payload)
    },
  },
})
export const { changeSearchTerms, addCar, removeCar } = carsSlice.actions
export const carsReducer = carsSlice.reducer
