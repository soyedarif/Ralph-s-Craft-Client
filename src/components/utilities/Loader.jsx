import { CirclesWithBar } from "react-loader-spinner";
import logo from '/src/assets/website-logo.png'

const Loader = () => {
  return (
    <>
     <div className="flex justify-center items-center h-[calc(100vh-68px)]">
        <img className="w-28 h-24"  src={logo} alt="loading" />
        <p className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#DA4453] to-[#89216B]">L</p>
        <CirclesWithBar height="100" width="100" color="#DA4453" wrapperStyle={{}} wrapperClass="" visible={true} outerCircleColor="" innerCircleColor="" barColor="" ariaLabel="circles-with-bar-loading" />
        <p className="text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#DA4453] to-[#89216B]">ading....</p>
      </div>
      </>
  );
};

export default Loader;
