import React from "react";
import { connect } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";
import { addItem } from "../../redux/car/car.actions";

import "./collection-item.styles.scss";

const CollectionItem = ({ item, addItem }) => {
  const {
    image,
    model,
    make,
    description,
    estimatedate,
    id,
    km,
    selected,
  } = item;
  const dt = estimatedate
    ? new Date(estimatedate).toLocaleDateString()
    : "No Date";
  const noImage =
    "https://vcunited.club/wp-content/uploads/2020/01/No-image-available-2.jpg";
  return (
    <div className={selected ? "collection-item selected" : "collection-item"}>
      <div
        className="image"
        style={{ backgroundImage: `url(${image}), url(${noImage})` }}
      />
      <div className="collection-footer">
        <span className="name">{`${make}, ${model}, ${description}, Estimate date: ${dt}, ${
          km ? km : "No"
        } kms, Identificador: ${id}`}</span>
      </div>
      <CustomButton onClick={() => addItem(item)} inverted>
        {selected ? "Sacar de mantenimiento" : "Poner en mantenimiento"}
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
