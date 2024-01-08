import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { theme } from "../App.jsx";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const [flag, setflag] = useState([]);
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
  let lan;
  let langu;
  if (flag[0]?.languages) {
    lan = Object.entries(flag[0]?.languages)[0];
    langu = Object.entries(flag[0]?.languages);

    console.log(langu[0][1]);
  } else {
    console.log("Languages property is undefined or null");
  }

  const currencyInfo = flag[0]?.currencies;
  let currencyName;
  if (currencyInfo) {
    const currencyCode = Object.keys(currencyInfo)[0];
    currencyName = currencyInfo[currencyCode]?.name;
  } else {
    console.log("Currency not available");
  }

  return (
    <div className=" d-flex flex-column px-5">
      <button className="button my-5">Go Back</button>
      <div className="containter-fluid d-flex justify-content-between align-items-center">
        <img className="detailImage  " src={flag[0]?.flags.png} alt="" />
        <div className="container-fluid d-flex flex-column ms-5 px-3">
          <div>
            <h1>{flag[0]?.name.common}</h1>
          </div>
          <div className="details d-flex mt-2">
            <div className="card  ">
              <div className="card-text pe-4 ">
                Native Name: {flag[0]?.name.nativeName[lan[0]].official}
              </div>
              <div className="card-text">Population: {flag[0]?.population}</div>
              <div className="card-text">Region: {flag[0]?.region}</div>
              <div className="card-text">Sub Region: {flag[0]?.subregion}</div>
              <div className="card-text">Capital: {flag[0]?.capital}</div>
            </div>
            <div className="card ms-5 px-5">
              <div className="card-text">
                Top Level Domain: {flag[0]?.population}
              </div>
              <div className="card-text">Currencies: {currencyName}</div>
              {/* Assuming langu is an array of language names */}
              <div className="card-text">
                Languages:{" "}
                {langu &&
                  langu.map((language, index) => (
                    <span key={index}>{language[1] + " "}</span>
                  ))}
              </div>
            </div>
          </div>
          <div className="container-fluid d-flex ">
            Border Countries:{" "}
            {flag[0]?.borders?.length > 0 &&
              flag[0]?.borders.map((e, index) => {
                return (
                  <div className="bdctr px-4" key={index}>
                    {e}
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
