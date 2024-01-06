import React from "react";

const Subregion = ({ subregions, onchange }) => {
  console.log(subregions);
  return (
    <div classsname="dropdown ">
      <button
        className="btn btn-secondary  dropdown-toggle bg-white text-black fw-semibold border-0"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Filter By Subregion
      </button>
      <ul
        className="dropdown-menu"
        onClick={onchange}
        style={{ minWidth: "10rem" }}
      >
        {subregions.map((reg) => {
          return (
            <li key={Math.random() * 1}>
              <a className="dropdown-item fw-semibold" href="#">
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
