import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/website-logo.png";
import useAuth from "../../hooks/useAuth";
import { FaSignInAlt } from "react-icons/fa";

const NavigationBar = () => {
  const { user, logOut, loading } = useAuth();
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch(erorr => console.log(erorr));
  };
  const navOptions = (
    <>
      <li className="">
        <NavLink className="" to="/">
          Home
        </NavLink>
      </li>
      <li className="">
        <NavLink className="" to="/instructors">
          Instructors
        </NavLink>
      </li>
      <li className="">
        <NavLink className="" to="/classes">
          Classes
        </NavLink>
      </li>
      {user && (
        <li className="">
          <NavLink className="" to="/dashboard">
            Dashboard
          </NavLink>
        </li>
      )}
    </>
  );
  return (
    <>
      <div className="navbar p-2 text-black top-0 fixed z-10 bg-base-200 bg-opacity-60 max-w-screen-xl">
        <div className="navbar-start ml-6">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu main-manu font-semibold text-base menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              {navOptions}
            </ul>
          </div>
          <Link to="/" className="w-2/12">
            <img src={logo} alt="website-logo" title="Ralph Crafts" /> 
          </Link>
          <span className="font-semibold text-xl">Ralph Crafts</span>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu main-manu font-semibold text-base menu-horizontal px-1 space-x-4">{navOptions}</ul>
        </div>
        <div className="navbar-end mr-6">
         
          <div className="avatar mr-4">
            <div className="w-12 rounded-full">{loading || (user && <img src={user?.photoURL} />)}</div>
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost m-1 hover:text-[#D71D24] text-2xl">
              <FaSignInAlt />
            </label>
            <ul tabIndex={0} className="dropdown-content user-login menu p-2 shadow bg-base-100 rounded-box w-40 text-black text-center">
              <li>{user ? <a className="text-center uppercase">{user?.displayName}</a> : <Link to="/login">Login</Link>}</li>
              <li>
                {user ? (
                  <button onClick={handleLogout} className="btn btn-ghost btn-sm">
                    LogOut
                  </button>
                ) : (
                  <Link to="/signup">Register</Link>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
