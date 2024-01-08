import React from "react";
import { useContext } from "react";
import { theme } from "../App.jsx";
const Subregion = ({ subregions, onchange }) => {
  const dark = useContext(theme);
  const style = {
    backgroundColor: dark ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)",
    color: dark ? "white" : "black",
  };
  const shadow = {
    boxShadow: dark
      ? "2px 2px 2px 0px hsl(209, 23%, 22%) "
      : "2px 2px 2px 0px rgb(201, 198, 198)",
  };
  console.log(subregions);
  return (
    <div classsname="dropdown ">
      <button
        className="btn btn-secondary  dropdown-toggle  py-2 fw-semibold border-0"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{ ...style, ...shadow }}
      >
        Filter By Subregion
      </button>
      <ul className="dropdown-menu" onClick={onchange} style={style}>
        {subregions.map((reg) => {
          return (
            <li key={Math.random() * 1}>
              <a className="dropdown-item fw-semibold" style={style} href="#">
                {reg}
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Subregion;
