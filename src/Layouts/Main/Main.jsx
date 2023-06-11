import { Outlet } from "react-router-dom";
import NavigationBar from "../../Pages/sharedPages/NavigationBar";
import Footer from "../../Pages/sharedPages/Footer";

const Main = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;