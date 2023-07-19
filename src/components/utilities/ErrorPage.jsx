import { Link } from 'react-router-dom';
import error from '/src/assets/error.svg'
import { FaArrowLeft } from 'react-icons/fa';
const ErrorPage = () => {
    return (
        <div className="w-full bg-dark h-[100vh] flex flex-col justify-center items-center">
        <img
          src={error}
          className="w-1/2 p-5 md:w-1/3 mx-auto object-cover "
          alt=""
        />
        <h1 className="text-4xl text-gray-200 m-4">
          <span className="text-red-600">404 </span>
          Page not found
        </h1>
        <Link to={"/"}>
          <button className="px-5 mx-auto py-2 btn hover:bg-violet-800 text-white  bg-red-600">
            <FaArrowLeft/> Back to Home
          </button>
        </Link>
      </div>
    );
};

export default ErrorPage;