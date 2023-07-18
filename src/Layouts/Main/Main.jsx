import { Outlet } from "react-router-dom";
import NavigationBar from "../../Pages/sharedPages/NavigationBar";
import Footer from "../../Pages/sharedPages/Footer";
import useDarkMode from "../../hooks/userDarkMode";

const Main = () => {
  const { darkMode, toggleMode } = useDarkMode();
  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <NavigationBar darkMode={darkMode} toggleMode={toggleMode}></NavigationBar>
        <div className="min-h-[calc(100vh-136px)] dark:bg-black" style={{ marginTop: "3.313rem" }}>
          <Outlet />
        </div>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Main;
