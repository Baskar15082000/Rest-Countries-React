import React from "react";

const SortByarea = ({ onclickarea }) => {
  return (
    <div classsname="dropdown ">
      <button
        className="btn btn-secondary  dropdown-toggle bg-white text-black fw-semibold border-0"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Sort By Area
      </button>
      <ul
        className="dropdown-menu"
        onClick={onclickarea}
        style={{ minWidth: "6rem" }}
      >
        <li>
          <a className="dropdown-item " href="#">
            By Accending
          </a>
        </li>
        <li>
          <a className="dropdown-item " href="#">
            By Decending
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SortByarea;
