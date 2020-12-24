import React, { Component } from "react";
import { connect } from 'react-redux';
import { fetchGetVehicles } from "../../redux/car/car.utils";

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

class HomePage extends Component {

  componentDidMount(){
    this.props.fetchGetVehicles();
  }

  render() {
    return (
      <div>
        <CollectionPreview items={this.props.carItems} />
      </div>
    );
  }
}

const mapStatetoProps = ({ car: { carItems } }) => ({
  carItems,
});

const mapDispatchToProps = (dispatch) => ({
  fetchGetVehicles: () => dispatch(fetchGetVehicles()),
});

export default connect(mapStatetoProps, mapDispatchToProps)(HomePage);
