import React from "react";

const SearchBox = ({ onchange }) => {
  return (
    <div className="search_bar d-flex ">
      {/* <span className="search_icon p-3">
        <i className="fas fa-search gray-icon"></i>
      </span> */}
      <input
        id="search"
        type="text"
        className="form-control"
        placeholder="Search for a country..."
        onChange={onchange}
      />
    </div>
  );
};

export default SearchBox;
