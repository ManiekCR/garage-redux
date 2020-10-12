import React from 'react';
import { Link } from 'react-router-dom';

const Aside = () => {
  return (
    <div className="aside">
      <div className="illustration" />
      <img className="logo" src="" alt="logo" />
      <h1>Mon garage</h1>
      <p>Our garage is the best. Reasonable prices, always on time, we are the best (and fictionnal).</p>
      <Link className="btn btn-primary btn-cta" to="/cars/new">
        Add a car
      </Link>
    </div>
  );
};

export default Aside;
