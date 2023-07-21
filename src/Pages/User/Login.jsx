import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { useState } from "react";
import SectionHeader from "../../components/SectionHeader";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const from = state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    try {
      setLoading(true);
      login(data.email, data.password)
        .then(result => {
          const user = result.user;
          console.log(user);
          Swal.fire({
            title: "User Login Successful!",
            showClass: {
              popup: "animate__animated animate__fadeInDown",
            },
            hideClass: {
              popup: "animate__animated animate__fadeOutUp",
            },
          });
          navigate(from, { replace: true });
        })
        .catch(error => {
          console.error("Error during login:", error);
          Swal.fire({
            title: "Login Error",
            text: "An error occurred during login.",
            icon: "error",
          });
        });
    } catch (error) {
      Swal.fire({
        title: "Submission Error",
        text: "An error occurred while processing the form submission.",
        icon: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="max-w-2xl mx-auto mb-0 ">
        <div className="bg-white  pt-20  shadow-md p-20 mt-5">
          <SectionHeader header="Login Now" />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="pt-5">
              <label className="" htmlFor="text">
                Your Email
              </label>
              <input className=" w-full  p-2 lg:p-3 rounded-md focus:outline-none my-2 border border-[#89216B]" {...register("email", { required: true })} />
              {errors.email && <span className="text-red-500 text-sm p-1">Email is required</span>}
            </div>
            <div className="pt-5 relative">
              <label className="" htmlFor="text">
                Your Password
              </label>
              <input type={showPassword ? "text" : "password"} className=" w-full t p-2 lg:p-3 rounded-md focus:outline-none my-2 border border-[#89216B]" {...register("password", { required: true })} />
              {!showPassword ? <FaEyeSlash onClick={() => setShowPassword(true)} className="absolute text-xl" style={{ top: "70px", right: "10px" }} /> : <FaEye onClick={() => setShowPassword(false)} className="absolute text-xl" style={{ top: "70px", right: "10px" }} />}
              {errors.password && <span className="text-red-500 text-sm p-1">Password is required</span>}
            </div>
            <div className="text-center pt-8">
              <button type="submit" className="btn hover:scale-105 duration-200 border-0 bg-gradient-to-r from-[#DA4453] to-[#89216B] text-white">
                {loading ? <span className="loading loading-spinner"></span> : "Login"}
              </button>
            </div>
          </form>
          <div>
            <p className="text-center pt-5 ">
              Don&apos;t have an account?{" "}
              <Link className="text-[#89216B]" to="/signup">
                Sign Up
              </Link>
            </p>
            <div className="text-center my-4">
              <span className="content-style">OR</span>
            </div>
            <button onClick={""} className="btn btn-outline  w-full mt-5">
              <FaGoogle className="text-green-500 text-4xl pe-3" /> <span className="">Login with Google</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
