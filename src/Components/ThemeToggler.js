import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

const ThemeToggler = () => {
  const [themeMode, setThemeMode] = useContext(ThemeContext);
  return (
    <div
      onClick={() => {
        setThemeMode(themeMode === "light" ? "dark" : "light");
      }}
      style={{ border: "2px solid red" }}
    >
      <span>
        {" "}
        {themeMode === "light"
          ? "Switch on to Dark Mode"
          : "Switch on to light Mode"}
      </span>
    </div>
  );
};

export default ThemeToggler;
