import React from "react";
import SearchBox from "./SearchBox";
import DropDown from "./DropDown";
import SortByPopulation from "./SortByPopulation";
import SortByarea from "./SortByarea";
import Subregion from "./Subregion";
const ToolBox = ({
  onclick,
  onchange,
  regionName,
  onclickpopulation,
  onclickarea,
  subregions,
  boolean,
  onchangesub,
}) => {
  return (
    <div className="operation d-flex justify-content-between align-items-center py-5 px-5">
      <SearchBox onchange={onchange} />
      <SortByPopulation onclickpopulation={onclickpopulation} />
      <SortByarea onclickarea={onclickarea} />
      {boolean && <Subregion subregions={subregions} onchange={onchangesub} />}

      <DropDown onclick={onclick} regionName={regionName} />
    </div>
  );
};

export default ToolBox;
