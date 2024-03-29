import React from "react";
import { useContext } from "react";
import { theme } from "../App.jsx";
const DropDown = ({ onclick, regionName }) => {
  const dark = useContext(theme);
  const style = {
    backgroundColor: dark ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)",
    color: dark ? "hsl(0, 0%, 100%)" : " hsl(200, 15%, 8%)",
    minWidth: "13.5rem",
  };
  const shadow = {
    boxShadow: dark
      ? "2px 2px 2px 0px hsl(209, 23%, 22%) "
      : "2px 2px 2px 0px rgb(201, 198, 198)",
  };
  return (
    <div classsname="dropdown  ">
      <button
        className="btn btn-secondary  dropdown-toggle  py-2 fw-semilight  border-0"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{ ...style, ...shadow }}
      >
        Filter by Region {regionName}
      </button>
      <ul className="dropdown-menu" onClick={onclick} style={style}>
        <li>
          <a className="dropdown-item fw-semilight" href="#" style={style}>
            Africa
          </a>
        </li>
        <li>
          <a className="dropdown-item fw-semilight" href="#" style={style}>
            Americas
          </a>
        </li>
        <li>
          <a className="dropdown-item fw-semilight" href="#" style={style}>
            Asia
          </a>
        </li>
        <li>
          <a className="dropdown-item fw-semilight" href="#" style={style}>
            Europe
          </a>
        </li>
        <li>
          <a className="dropdown-item fw-semilight" href="#" style={style}>
            Oceania
          </a>
        </li>
        <li>
          <a className="dropdown-item fw-semilight" href="#" style={style}>
            Antarctic
          </a>
        </li>
        <li>
          <a className="dropdown-item fw-semilight" href="#" style={style}>
            All Regions
          </a>
        </li>
      </ul>
    </div>
  );
};

export default DropDown;
