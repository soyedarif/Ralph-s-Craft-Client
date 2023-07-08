import { Link } from "react-router-dom";
import logo from "../../assets/website-logo.png";
import useAuth from "../../hooks/useAuth";
import { BiLogIn } from "react-icons/bi";

import {  FaBars, FaTimes } from "react-icons/fa";
import { MdNightsStay, MdWbSunny } from "react-icons/md";
import { useState } from "react";

const NavigationBar = ({ darkMode, toggleMode }) => {
  const [activeLink, setActiveLink] = useState("");
  const [nav, setNav] = useState(false);
  const { user, logOut } = useAuth();
  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch(erorr => console.log(erorr));
  };
  const handleClick = link => {
    setActiveLink(link);
  };
  const navLinks = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "instructors",
    },
    {
      id: 3,
      link: "classes",
    },
    {
      id: 4,
      link: "dashboard",
    },
    {
      id: 5,
      link: "contact",
    },
  ];

  return (
    <div className="z-20 fixed w-full top-0 dark:bg-black bg-white bg-opacity-90">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center h-[3.313rem]">
        <Link className="shrink-0" to="/">
          <div className="flex">
            <div className="w-10 h-10 grid place-content-center">
              <img src={logo} alt="" />
            </div>
            <h2 className="text-2xl font-inter grid tracking-tighter place-content-center font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#DA4453] to-[#89216B]">RalphCrafts</h2>
          </div>
        </Link>
        {/* for desktop view */}
        <div className="flex-1 hidden md:block">
          <ul className="flex justify-center items-center">
            {navLinks.map(({ id, link }) => {
              if (link === "dashboard" && !user) {
                return null;
              }
              return (
                <li key={id} className={`capitalize px-4 font-bold dark:text-slate-300 text-slate-600 cursor-pointer duration-200 hover:text-[#DA4453] hover:scale-105 `}>
                  <Link to={link === "home" ? "/" : link} className={`${activeLink === link ? "text-transparent  bg-clip-text bg-gradient-to-r from-[#DA4453] to-[#89216B]" : ""}`} onClick={() => handleClick(link)}>
                    {link}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="shrink-0 flex gap-2 items-center">
          <div className="bg-slate-500 p-1 rounded-full text-white" onClick={toggleMode}>
            {darkMode ? <MdWbSunny size={30} /> : <MdNightsStay size={30} />}
          </div>
          <div>
            {user ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar mt-0.5">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </label>
                <ul tabIndex={0} className="mt-3 p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52">
                  <li>
                    <a className="hover:!bg-neutral/10">{user?.displayName}</a>
                  </li>
                  <li onClick={handleLogout}>
                    <a className="hover:!bg-neutral/10">Logout</a>
                  </li>
                </ul>
              </div>
            ) : (
              <>
                <Link to="/login" className="hidden md:inline-flex btn btn-gradient rounded-full min-h-fit h-10">
                  Login
                </Link>
                <Link to="/login" className="btn md:hidden btn-ghost text-2xl min-h-fit h-10 ">
                  <BiLogIn />
                </Link>
              </>
            )}
          </div>

          <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-gray-400 md:hidden">
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
        </div>
        {/* for mobile view */}
        {nav && (
          
          <ul className="flex flex-col justify-center gap-8 items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b dark:from-black from-white dark:via-black  via-white dark:to-[#DA4453] to-[#DA4453]">
            {navLinks.map(({ id, link }) => {
              if (link === "dashboard" && !user) {
                return null;
              }
              return (
                <li key={id} className={`capitalize text-3xl font-bold dark:text-slate-300 text-slate-600 cursor-pointer duration-200 hover:text-[#DA4453] hover:scale-105 `}>
                  <Link to={link === "home" ? "/" : link} className={`${activeLink === link ? "text-transparent  bg-clip-text bg-gradient-to-r from-[#DA4453] to-[#89216B]" : ""}`} onClick={() =>{handleClick(link), setNav(!nav) }}>
                    {link}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default NavigationBar;
