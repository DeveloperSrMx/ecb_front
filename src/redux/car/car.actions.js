import CarActionTypes from "./car.types";

export const getVehicles = (items) => ({
  type: CarActionTypes.GET_VEHICLES,
  payload: items,
});

export const toggleCarHidden = () => ({
  type: CarActionTypes.TOGGLE_CARMODAL_HIDDEN,
});

export const addItem = (item) => ({
  type: CarActionTypes.ADD_ITEM,
  payload: item,
});
