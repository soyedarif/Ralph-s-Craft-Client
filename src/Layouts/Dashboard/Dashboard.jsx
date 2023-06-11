import { NavLink, Outlet } from "react-router-dom";
import { FaBook, FaBookReader, FaDoorOpen, FaHome, FaPlus, FaUserEdit } from "react-icons/fa";
import "./Dashboard.css";
import logo from '../../assets/website-logo.png'
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
import useAuth from "../../hooks/useAuth";

const Dashboard = () => {
  const {user}=useAuth()
  console.log(user);
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
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
          <ul className="menu p-4 w-80 h-full text-lg font-medium text-black bg-gradient-to-r from-base-100 to-[#D71D24]">
            {/* Sidebar content here */}
            <figure className="flex items-center">
              <img className="w-4/12" src={logo} alt="" />
              <h2 className="">Ralph Crafts</h2>
            </figure>
              <div className="text-center mb-4">
                <img className="w-32 rounded-full h-32 mx-auto object-cover" src={user.photoURL} alt="" />
                <h2 >Name: {user.displayName}</h2>
              </div>
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
      <ToastContainer />
    </>
  );
};

export default Dashboard;
