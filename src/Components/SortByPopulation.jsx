import React from "react";

const SortByPopulation = ({ onclickpopulation, orderpop }) => {
  return (
    <div classsname="dropdown ">
      <button
        className="btn btn-secondary  dropdown-toggle bg-white text-black fw-semibold border-0"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Sort By Population {orderpop}
      </button>
      <ul
        className="dropdown-menu"
        onClick={onclickpopulation}
        style={{ minWidth: "10rem" }}
      >
        <li>
          <a className="dropdown-item fw-semibold" href="#">
            Sort By Accending
          </a>
        </li>
        <li>
          <a className="dropdown-item fw-semibold" href="#">
            Sort By Decending
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SortByPopulation;
