import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

const ThemeToggler = () => {
  const themeMode = useContext(ThemeContext).themeHook;
  const setThemeMode = useContext(ThemeContext).toggleTheme;
  return (
    <div onClick={setThemeMode}>
      <span>{themeMode === "light" ? "Turn Off" : "Lights On"}</span>
    </div>
  );
};

export default ThemeToggler;
