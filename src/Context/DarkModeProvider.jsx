import { createContext, useState } from "react";

export const DarkModeContext=createContext()

const DarkModeProvider = ({children}) => {
    const [darkMode, setDarkMode] = useState(false);
    const toggleMode = () => {
        setDarkMode(!darkMode);
        if(!darkMode){
            document.documentElement.classList.add('dark')
        }else{
            document.documentElement.classList.remove('dark')
        }
  };
    return (
        <DarkModeContext.Provider value={{darkMode,toggleMode}}>
            {children}
        </DarkModeContext.Provider>
    );
};

export default DarkModeProvider;