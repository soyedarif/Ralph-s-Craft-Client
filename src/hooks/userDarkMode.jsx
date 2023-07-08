import { useContext } from "react";
import { DarkModeContext } from "../Context/DarkModeProvider";
// import { DarkModeContext } from "./DarkModeProvider";

const useDarkMode = () => {
  const { darkMode, toggleMode } = useContext(DarkModeContext);
  return { darkMode, toggleMode };
};

export default useDarkMode;
