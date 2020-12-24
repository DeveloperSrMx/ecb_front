import { Get } from "../../api/api";
import { getVehicles } from "./car.actions";

export const fetchGetVehicles = () => {
  return (dispatch) => {
    Get()
      .then((res) => {
        dispatch(getVehicles(res));
      })
      .catch((res) => {
        console.log(res);
      });
  };
};

export const changeSelectedStatus = (carItems, carItemToAdd) => {
  const existingCarItem = carItems.find(
    (carItem) =>
      carItem.id === carItemToAdd.id &&
      carItem.hasOwnProperty("selected") &&
      carItem.selected
  );

  if (existingCarItem) {
    return carItems.map((carItem) =>
      carItem.id === carItemToAdd.id ? { ...carItem, selected: false } : carItem
    );
  } else {
    return carItems.map((carItem) =>
      carItem.id === carItemToAdd.id ? { ...carItem, selected: true } : carItem
    );
  }
};
