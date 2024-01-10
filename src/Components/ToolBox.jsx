import React from "react";
import SearchBox from "./SearchBox";
import DropDown from "./DropDown";
import SortByPopulation from "./SortByPopulation";
import SortByarea from "./SortByarea";
import Subregion from "./Subregion";

import { useContext } from "react";
import { theme } from "../App.jsx";

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
  const dark = useContext(theme);
  const style = {
    backgroundColor: dark ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)",
    color: dark ? "hsl(0, 0%, 100%)" : " hsl(200, 15%, 8%)",
  };
  return (
    <div
      className="operation d-flex flex-column flex-lg-row  justify-content-between align-items-center py-5 px-5"
      style={style}
    >
      <SearchBox onchange={onchange} />
      <SortByPopulation onclickpopulation={onclickpopulation} />
      <SortByarea onclickarea={onclickarea} />
      {boolean && <Subregion subregions={subregions} onchange={onchangesub} />}

      <DropDown onclick={onclick} regionName={regionName} />
    </div>
  );
};

export default ToolBox;
