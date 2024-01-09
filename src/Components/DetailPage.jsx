import React, { useState, useEffect } from "react";
import { useContext } from "react";
import { theme } from "../App.jsx";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const DetailPage = () => {
  const [flag, setflag] = useState([]);
  const dark = useContext(theme);
  const { id } = useParams();
  const navigate = useNavigate();
  const [borders, setBOrders] = useState(id);
  const style = {
    backgroundColor: dark ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)",
    color: dark ? "white" : "black",
    boxShadow: dark
      ? "2px 2px 2px 0px hsl(209, 23%, 22%) "
      : "2px 2px 2px 0px rgb(201, 198, 198)",
  };

  const style1 = {
    backgroundColor: dark ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)",
    color: dark ? "hsl(0, 0%, 100%)" : " hsl(200, 15%, 8%)",
    fontSize: "16px",
  };

  useEffect(() => {
    var fun = async (id) =>
      await fetch("https://restcountries.com/v3.1/alpha/" + borders);

    fun(id)
      .then((res) => res.json())
      .then((data) => {
        setflag(data);
      });
  }, [borders]);
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
    <div className="detailpage d-flex  flex-column px-5  " style={style1}>
      <button
        className="button my-5 "
        style={style}
        onClick={() => {
          setBOrders(id);
          navigate(-1);
        }}
      >
        <span className="btn-text ">
          <span className="arrow ">&larr;</span> Go Back
        </span>
      </button>
      <div className="containter-fluid d-flex justify-content-between align-items-center">
        <img className="detailImage  me-5 " src={flag[0]?.flags.png} alt="" />
        <div className="container-fluid d-flex flex-column ms-5 px-3 ">
          <div>
            <h1>{flag[0]?.name.common}</h1>
          </div>
          <div className="details d-flex mt-2">
            <div className="card border-0 mb-4 me-5" style={style1}>
              <div className="card-text pe-4 ">
                <span className="key">Native Name: </span>
                {flag[0]?.name.nativeName[lan[0]].official}
              </div>
              <div className="card-text py-1">
                <span className="key"> Population: </span> {flag[0]?.population}
              </div>
              <div className="card-text py-1">
                <span className="key">Region: </span> {flag[0]?.region}
              </div>
              <div className="card-text py-1">
                <span className="key">Sub Region: </span>
                {flag[0]?.subregion}
              </div>
              <div className="card-text py-1">
                <span className="key">Capital: </span>
                {flag[0]?.capital}
              </div>
            </div>
            <div className="card ms-5 px-3 border-0" style={style1}>
              <div className="card-text py-1">
                <span className="key"> Top Level Domain: </span>
                {flag[0]?.tld}
              </div>
              <div className="card-text py-1">
                <span className="key">Currencies: </span>
                {currencyName}
              </div>
              {/* Assuming langu is an array of language names */}
              <div className="card-text py-1">
                <span className="key">Languages: </span>
                {langu &&
                  langu.map((language, index) => (
                    <span key={index}>{language[1] + " "}</span>
                  ))}
              </div>
            </div>
          </div>
          <div className="footer d-flex  " style={style1}>
            <span className="key"> Border Countries: </span>
            {flag[0]?.borders?.length > 0
              ? flag[0]?.borders.map((e, index) => {
                  return (
                    <button
                      className="bdctr px-3 mx-3 py-1"
                      style={style}
                      onClick={() => {
                        setBOrders(e);
                        navigate("/country/" + borders);
                      }}
                      key={index}
                    >
                      {e}
                    </button>
                  );
                })
              : "N/A"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
