import { useContext } from "react";
import { theme } from "../App.jsx";
import DarkModeIcon from "@mui/icons-material/DarkMode";

const Header = ({ darkMode, modetype }) => {
  const dark = useContext(theme);
  console.log(dark);
  const style = {
    backgroundColor: dark ? "hsl(209, 23%, 22%)" : "hsl(0, 0%, 100%)",
    color: dark ? "hsl(0, 0%, 100%)" : " hsl(200, 15%, 8%)",
    fontWeight: "800",
  };

  return (
    <header className="d-flex justify-content-between py-3 px-5" style={style}>
      <div className="title">Where in the world?</div>
      <button className="mode" onClick={darkMode} style={style}>
        <DarkModeIcon /> {modetype}
      </button>
    </header>
  );
};

export default Header;
