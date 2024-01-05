import React from "react";
import SearchBox from "./SearchBox";
import DropDown from "./DropDown";
import SortByPopulation from "./SortByPopulation";
const Search_DropDown = ({
  onclick,
  onchange,
  regionName,
  onclickpopulation,
  orderpop,
}) => {
  return (
    <div className="operation d-flex justify-content-between align-items-center py-5 px-5">
      <SearchBox onchange={onchange} />
      <SortByPopulation
        onclickpopulation={onclickpopulation}
        orderpop={orderpop}
      />
      <DropDown onclick={onclick} regionName={regionName} />
    </div>
  );
};

export default Search_DropDown;
