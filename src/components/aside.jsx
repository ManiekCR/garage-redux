import React from 'react';

const Aside = (props) => {
  const style = {
    backgroundImage: "url('/assets/images/mechanic.jpg')"
  };

  return (
    <div className="aside">
      <div className="illustration" style={style} />
      <img className="logo" src="../../assets/images/garage-logo.jpg" alt="logo" />
      <h1>{props.garage}</h1>
      <p>Our garage is the best. Reasonable prices, always on time, we are the best (and fictionnal).</p>
      {props.children}
    </div>
  );
};

export default Aside;
