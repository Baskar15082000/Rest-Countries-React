import React from "react";

const SortByPopulation = ({ onclickpopulation }) => {
  return (
    <div classsname="dropdown ">
      <button
        className="btn btn-secondary  dropdown-toggle bg-white text-black fw-semibold border-0"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Sort By Population
      </button>
      <ul
        className="dropdown-menu"
        onClick={onclickpopulation}
        style={{ minWidth: "11rem" }}
      >
        <li>
          <a className="dropdown-item fw-semibold" href="#">
            By Accending
          </a>
        </li>
        <li>
          <a className="dropdown-item fw-semibold" href="#">
            By Decending
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SortByPopulation;
