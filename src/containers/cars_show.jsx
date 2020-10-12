import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Aside from '../components/aside';

class CarsShow extends Component {
  render() {
    const car = this.props.car;
    if (!car) {
      return <p>Loading...</p>;
    }
    return [
      <Aside key="aside" />,
      <div className="car-container" key="car">
        <div className="car-card">
          <img className="car-picture" src="" alt="car pic" />
          <div className="car-details">
            <span>{car.brand} - {car.model}</span>
            <ul>
              <li><strong>Owner:</strong> {car.owner}</li>
            </ul>
            <span className="plate">{car.plate}</span>
          </div>
          <Link to="/">Back to list</Link>
        </div>
      </div>
    ];
  }
}

function mapStateToProps(state, ownProps) {
  const id = parseInt(ownProps.match.params.id, 10);
  return {
    car: state.cars.find(car => car.id === id),
  };
}

export default connect(mapStateToProps)(CarsShow);
