import React, { useContext } from "react";
import { theme } from "../App.jsx";

const NotFound = () => {
  const dark = useContext(theme);
  const style = {
    backgroundColor: dark ? "hsl(207, 26%, 17%)" : "hsl(0, 0%, 98%)",
    color: dark ? "white" : "black",
  };
  return (
    <div className="notfound px-5 container-fluid  " style={style}>
      <span>No Such Countries Found ... </span>
    </div>
  );
};

export default NotFound;
