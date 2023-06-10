import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/website-logo.png";
import useAuth from "../../hooks/useAuth";

const NavigationBar = () => {
    const { user, logOut, loading } = useAuth();
    const handleLogout = () => {
        logOut()
          .then(() => {})
          .catch(erorr => console.log(erorr));
      };
  const navOptions = (
    <>
      <li>
        <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/">Home</NavLink>
      </li>
      <li>
        <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/instructors">Instructors</NavLink>
      </li>
      <li>
        <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/classes">Classes</NavLink>
      </li>
      {
        user && <li>
        <NavLink className={({ isActive }) => (isActive ? "active" : "")} to="/dashboard">Dashboard</NavLink>
      </li>
      }
    </>
  );
  return (
    <>
      <div className="navbar p-1 text-white fixed z-10 bg-black bg-opacity-60 max-w-screen-xl">
        <div className="navbar-start ml-6">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {navOptions}
            </ul>
          </div>
          <Link to="/" className="w-2/12">
            <img src={logo} alt="website-logo" title="Ralph Crafts" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base space-x-4">{navOptions}</ul>
        </div>
        <div className="navbar-end mr-6">
        <div className="avatar mr-4">
            <div className="w-12 rounded-full">{loading || (user && <img src={user?.photoURL} />)}</div>
          </div>
          {  user ? (
        <>
          <button onClick={handleLogout} className="btn btn-ghost">
            LogOut
          </button>
        </>
      ) : (
        <>
          <li>
            <Link className="btn btn-ghost" to="/login">Login</Link>
          </li>
        </>
      )}
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
