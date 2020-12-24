import React from "react";

import CollectionItem from "../collection-item/collection-item.component";
import CarModal from "../car-modal/car-modal.component";
import { connect } from "react-redux";

import "./collection-preview.styles.scss";

const CollectionPreview = ({ items, hidden }) => (
  <div className="collection-preview">
    <div className="preview">
      {items.map((item) => (
        <CollectionItem key={item.id} item={item} />
      ))}
    </div>
    {hidden ? null : <CarModal />}
  </div>
);

const mapStateToProps = ({ car: { hidden } }) => ({
  hidden
});

export default connect(mapStateToProps)(CollectionPreview);
