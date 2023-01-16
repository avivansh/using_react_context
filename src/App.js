import React, { useState } from "react";
import ThemeContext from "./Context/ThemeContext";
import Header from "./Components/Header";
import HeroSection from "./Components/HeroSection";

const App = () => {
  // state define
  const [themeHook, setThemeHook] = useState("light");

  // method for udpating state
  const toggleTheme = () => {
    setThemeHook(themeHook === "dark" ? "light" : "dark");
  };
  return (
    <ThemeContext.Provider value={{ themeHook, toggleTheme }}>
      <div>
        <Header />
        <HeroSection />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;
