import React from "react";
import { useContext } from "react";
import { theme } from "../App.jsx";
const SortByarea = ({ onclickarea }) => {
  const dark = useContext(theme);
  const style = {
    backgroundColor: dark ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)",
    color: dark ? "hsl(0, 0%, 100%)" : " hsl(200, 15%, 8%)",
    minWidth: "6rem",
  };
  const shadow = {
    boxShadow: dark
      ? "2px 2px 2px 0px hsl(209, 23%, 22%) "
      : "2px 2px 2px 0px rgb(201, 198, 198)",
  };
  return (
    <div classsname="dropdown ">
      <button
        className="btn btn-secondary  dropdown-toggle  py-2 fw-semilight border-0"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        style={{ ...style, ...shadow }}
      >
        Sort By Area
      </button>
      <ul className="dropdown-menu" onClick={onclickarea} style={style}>
        <li>
          <a className="dropdown-item  fw-semilight" href="#" style={style}>
            By Accending
          </a>
        </li>
        <li>
          <a className="dropdown-item fw-semilight" href="#" style={style}>
            By Decending
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SortByarea;
