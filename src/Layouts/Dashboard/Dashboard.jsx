import { NavLink, Outlet } from "react-router-dom";
import { FaBook, FaBookReader, FaDoorOpen, FaHome, FaPlus, FaUserEdit } from "react-icons/fa";
import "./Dashboard.css";
import logo from '../../assets/website-logo.png'

const Dashboard = () => {
  const isAdmin = true;
  const isInstructor = false;
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ">
          <label htmlFor="my-drawer-2" className="btn btn-ghost drawer-button lg:hidden">
            <FaDoorOpen /> Open Sidebar
          </label>
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full text-lg font-medium text-white bg-gradient-to-r from-black to-[#D71D24]">
            {/* Sidebar content here */}
            <figure className="flex items-center">
              <img className="w-4/12" src={logo} alt="" />
              <h2 className="">Ralph Crafts</h2>
            </figure>
            {isAdmin ? (
              <>
                <li>
                  <NavLink to="/">
                    <FaBookReader /> Manage Classes
                  </NavLink>
                </li>
                <li>
                  <NavLink to="manageUsers">
                    <FaUserEdit /> Manage Users
                  </NavLink>
                </li>
              </>
            ) : isInstructor ? (
              <>
                <li>
                  <NavLink to="/">
                    <FaPlus /> Add A Class
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">
                    <FaBook /> My Classes
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/">
                    <FaHome /> Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">
                    <FaHome /> Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/">
                    <FaHome /> Home
                  </NavLink>
                </li>
              </>
            )}

            <div className="divider"></div>
            <li>
              <NavLink to='/'>
                <FaHome /> Home
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
