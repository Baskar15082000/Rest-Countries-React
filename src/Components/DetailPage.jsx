import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { theme } from "../App.jsx";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const [flag, setflag] = useState({});
  const dark = useContext(theme);
  const { id } = useParams();
  useEffect(() => {
    var fun = async () =>
      await fetch("https://restcountries.com/v3.1/alpha/" + id);
    fun()
      .then((res) => res.json())
      .then((data) => {
        setflag(data);
      });
  }, []);

  return (
    <div className=" d-flex flex-column px-5">
      <button className="button my-5">Go Back</button>
      <div className="containter d-flex justify-content-between align-items-center">
        <img className="detailImage" src={flag[0]?.flags.png} alt="" />
        <div className="container d-flex flex-column ms-5 ">
          <div>
            <h1>{flag[0]?.name.common}</h1>
          </div>
          <div className="details d-flex py-3 ">
            <div className="card me-5">
              <div className="card-text">Population: {flag[0]?.population}</div>
              <div className="card-text">Region: {flag[0]?.region}</div>
              <div className="card-text">Capital: {flag[0]?.capital}</div>
            </div>
            <div className="card ms-5 px-5">
              <div className="card-text">Population: {flag[0]?.population}</div>
              <div className="card-text">Region: {flag[0]?.region}</div>
              <div className="card-text">Capital: {flag[0]?.capital}</div>
            </div>
          </div>
          <div>footer</div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
