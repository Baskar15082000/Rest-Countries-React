import React from "react";

const DropDown = ({ onclick, regionName }) => {
  return (
    <div classsname="dropdown ">
      <button
        className="btn btn-secondary  dropdown-toggle bg-white text-black fw-semibold border-0"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Filter by Region {regionName}
      </button>
      <ul
        className="dropdown-menu"
        onClick={onclick}
        style={{ minWidth: "13.5rem" }}
      >
        <li>
          <a className="dropdown-item fw-semibold" href="#">
            Africa
          </a>
        </li>
        <li>
          <a className="dropdown-item fw-semibold" href="#">
            Americas
          </a>
        </li>
        <li>
          <a className="dropdown-item fw-semibold" href="#">
            Asia
          </a>
        </li>
        <li>
          <a className="dropdown-item fw-semibold" href="#">
            Europe
          </a>
        </li>
        <li>
          <a className="dropdown-item fw-semibold" href="#">
            Oceania
          </a>
        </li>
        <li>
          <a className="dropdown-item fw-semibold" href="#">
            Antarctic
          </a>
        </li>
        <li>
          <a className="dropdown-item fw-semibold" href="#">
            All Regions
          </a>
        </li>
      </ul>
    </div>
  );
};

export default DropDown;
