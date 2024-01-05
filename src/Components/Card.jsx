import React from "react";

const Card = ({ img, title, population, region, capital }) => {
  return (
    <div className="card " style={{ width: "17rem" }}>
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <div className="card-text">Population: {population}</div>
        <div className="card-text">Region: {region}</div>
        <div className="card-text">Capital: {capital}</div>
      </div>
    </div>
  );
};

export default Card;
