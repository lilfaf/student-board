import { createStore } from 'redux'
import { reducer } from './reducers/index'

const initialState = {
  isEditing: false,
  students: [{
    id: 1,
    firstName: "John",
    lastName: "Doe",
    gender: "M",
    age: 20
  },
  {
    id: 2,
    firstName: "Eric",
    lastName: "Cartman",
    gender: "F",
    age: 8
  },
  {
    id: 3,
    firstName: "Kenny",
    lastName: "McCormick",
    gender: "M",
    age: 8
  },
  {
    id: 4,
    firstName: "Stan",
    lastName: "Marsh",
    gender: "M",
    age: 8
  },
  {
    id: 5,
    firstName: "Kyle",
    lastName: "Broflovski",
    gender: "M",
    age: 8
  }]
}

export const initStore = (state = initialState) => {
  return createStore(reducer, state)
}
