import { combineReducers } from "redux";

import carReducer from "./car/car.reducer";

export default combineReducers({
  car: carReducer,
});
