import CarActionTypes from "./car.types";
import { changeSelectedStatus } from "./car.utils";

const INITIAL_STATE = {
  hidden: true,
  carItems: [],
};

const carReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CarActionTypes.GET_VEHICLES:
      return {
        ...state,
        carItems: action.payload,
      };
    case CarActionTypes.TOGGLE_CARMODAL_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CarActionTypes.ADD_ITEM:
      return {
        ...state,
        carItems: changeSelectedStatus(state.carItems, action.payload),
      };
    default:
      return state;
  }
};

export default carReducer;
