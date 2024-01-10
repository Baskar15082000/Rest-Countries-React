import React from "react";
import { useContext } from "react";
import { theme } from "../App.jsx";
import SearchIcon from "@mui/icons-material/Search";

const SearchBox = ({ onchange }) => {
  const dark = useContext(theme);
  const style = {
    backgroundColor: dark ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)",
    color: dark ? "hsl(0, 0%, 100%)" : " hsl(200, 15%, 8%)",
    minWidth: "11rem",
    boxShadow: dark
      ? "2px 2px 2px 0px hsl(209, 23%, 22%) "
      : "2px 2px 2px 0px rgb(201, 198, 198)",
  };
  const iconstyle = {
    backgroundColor: dark ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)",
    color: dark ? "hsl(0, 0%, 100%)" : " hsl(200, 15%, 8%)",
  };

  return (
    <div className="search_bar d-flex " style={style}>
      <SearchIcon className="searchicon m-2" style={iconstyle} />
      <input
        type="text"
        className="search py-2"
        placeholder="Search for a country..."
        onChange={onchange}
        style={iconstyle}
      />
    </div>
  );
};

export default SearchBox;
