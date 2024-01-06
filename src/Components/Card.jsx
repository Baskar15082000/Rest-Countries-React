import React from "react";
import { useContext } from "react";
import { theme } from "../App.jsx";

const Card = ({ img, title, population, region, capital }) => {
  const dark = useContext(theme);
  const style = {
    backgroundColor: dark ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)",
    color: dark ? "white" : "black",
    minWidth: "17rem",
    boxShadow: dark
      ? "2px 2px 2px 0px hsl(209, 23%, 22%) "
      : "2px 2px 2px 0px rgb(201, 198, 198)",
  };
  return (
    <div className="card " style={style}>
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
