import { Outlet } from "react-router-dom";
import NavigationBar from "../../Pages/sharedPages/NavigationBar";
import Footer from "../../Pages/sharedPages/Footer";

const Main = () => {
  return (
    <>
      <NavigationBar></NavigationBar>
      <div className="min-h-[calc(100vh-136px)]">
        <Outlet />
      </div>
      <Footer></Footer>
    </>
  );
};

export default Main;
