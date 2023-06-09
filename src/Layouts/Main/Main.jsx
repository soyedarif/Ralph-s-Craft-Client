import { Outlet } from "react-router-dom";
import NavigationBar from "../../Pages/sharedPages/NavigationBar";

const Main = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;