import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchCars } from '../actions';
import Aside from '../components/aside';

class CarsIndex extends Component {
  componentDidMount() {
    this.props.fetchCars(this.props.garage);
  }

  renderCars() {
    return this.props.cars.map((car) => {
      return (
        <div className="car-smallad" key={car.id}>
          <img className="car-logo" alt="logo" src="https://raw.githubusercontent.com/lewagon/fullstack-images/master/uikit/skateboard.jpg" />
          <div className="car-details">
            <span>{car.brand} - {car.model}</span>
            <p><strong>Owner:</strong> {car.owner}</p>
          </div>
        </div>
      );
    });
  }

  render() {
    return [
      <Aside />,
      <div className="list-container">
        {this.renderCars()}
      </div>
    ];
  }
}

function mapStateToProps(state) {
  return {
    cars: state.cars,
    garage: state.garage
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchCars }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CarsIndex);
