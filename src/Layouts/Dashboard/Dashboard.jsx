import { Link, NavLink, Outlet } from "react-router-dom";
import "./Dashboard.css";
import logo from "../../assets/website-logo.png";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaBars } from "react-icons/fa";
import useAuth from "../../hooks/useAuth";
import useUserRole from "../../hooks/useUserRole";
import { MdNightsStay, MdWbSunny } from "react-icons/md";
import useDarkMode from "../../hooks/userDarkMode";

const Dashboard = () => {
  const { darkMode, toggleMode } = useDarkMode();
  const { user, userLoading } = useAuth();
  const { role, isRoleLoading } = useUserRole();
  if (userLoading || isRoleLoading) return <progress className="progress w-56"></progress>;
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content  flex flex-col dark:text-white ">
          {/* mobile dashnav */}
          <div className="flex dark:bg-black bg-base-300 justify-between items-center lg:hidden">
            <Link className="shrink-0" to="/">
              <div className="flex">
                <div className="w-10 h-10 grid place-content-center">
                  <img src={logo} alt="" />
                </div>
                <h2 className="text-2xl font-inter grid tracking-tighter place-content-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#DA4453] to-[#89216B]">RalphCrafts</h2>
              </div>
            </Link>
            <label htmlFor="my-drawer-2" className="btn btn-ghost bg-inherit drawer-button ">
              <FaBars />
            </label>
          </div>
          {/* Page content here */}
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-gradient-to-b dark:from-black from-base-300 dark:via-black  via-base-300 dark:to-[#DA4453] to-[#DA4453] dark:text-slate-200 text-base-content">
            <div className="flex justify-between">
              <div className="flex items-center">
                <div className="w-10 h-10 grid place-content-center">
                  <img src={logo} alt="" />
                </div>
                <h2 className="text-2xl font-inter grid tracking-tighter place-content-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#DA4453] to-[#89216B]">RalphCrafts</h2>
              </div>
              <div className="bg-slate-500 p-1 rounded-full text-white" onClick={toggleMode}>
                {darkMode ? <MdWbSunny size={30} /> : <MdNightsStay size={30} />}
              </div>
            </div>
            {/* user */}
            <div className="flex flex-col gap-3 p-4 mb-4 items-center rounded-md">
              <div className="mask mask-squircle w-20 h-20">
                <img src={user?.photoURL} />
              </div>
              <div>
                <h3 className="font-bold text-lg">{user?.displayName}</h3>
                <p className="opacity-60 text-base uppercase">{role}</p>
              </div>
            </div>
            {/* Sidebar content here */}
            {role === "admin" && (
              <>
                <li>
                  <NavLink to="/dashboard/manageClasses">Manage Classes</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageUsers">Manage Users</NavLink>
                </li>
              </>
            )}
            {role === "instructor" && (
              <>
                <li>
                  <NavLink to="/dashboard/myClasses">My Classes</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addClass">Add A Class</NavLink>
                </li>
              </>
            )}
            {role === "student" && (
              <>
                <li>
                  <NavLink to="/dashboard/selectedClasses">My Selected Classes</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/enrolledClasses">My Enrolled Classes</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/paymentHistory">Payment History</NavLink>
                </li>
              </>
            )}
            <div className="divider" />

            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/instructors">Instructors</NavLink>
            </li>
            <li>
              <NavLink to="/classes">Classes</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Dashboard;
