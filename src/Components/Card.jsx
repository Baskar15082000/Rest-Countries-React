import React from "react";
import { useContext } from "react";
import { theme } from "../App.jsx";
import { useNavigate } from "react-router-dom";

const Card = ({ img, title, id, population, region, capital }) => {
  const dark = useContext(theme);
  const style = {
    backgroundColor: dark ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)",
    color: dark ? "white" : "black",
    minWidth: "17rem",
    boxShadow: dark
      ? "2px 2px 2px 0px hsl(209, 23%, 22%) "
      : "2px 2px 2px 0px rgb(201, 198, 198)",
  };
  const navigate = useNavigate();
  return (
    <div
      className="card  "
      style={style}
      id={id}
      onClick={() => navigate("/country/" + id)}
    >
      <img src={img} className="img  " alt="..." />

      <h5 className="card-title py-2 px-4 pt-4">{title}</h5>
      <div className="card-text py-1 px-4">
        <span className="key">Population: </span>
        {population}
      </div>
      <div className="card-text py-1 px-4">
        <span className="key">Region: </span>
        {region}
      </div>
      <div className="card-text py-1 px-4 pb-5">
        <span className="key">Capital: </span>
        {capital}
      </div>
    </div>
  );
};

export default Card;
