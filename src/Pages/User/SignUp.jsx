import { useForm } from "react-hook-form";
import useAuth from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import SectionHeader from "../../components/SectionHeader";
import { useState } from "react";
const SignUp = () => {
  const { createNewUser, updateUserProfile } = useAuth();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm();
  
  const onSubmit = async (data) => {
    try {
      setLoading(true)
      console.log(data);
      const result = await createNewUser(data.email, data.password);
      const createdUser = result.user;
      console.log(createdUser);
      // updateUserProfile();
      await updateUserProfile(data.name, data.photoURL);
  
      const savedUser = { name: data.name, email: data.email, photoURL: data.photoURL };
      const res = await fetch(`https://ralph-crafts-server.vercel.app/users`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(savedUser),
      });
      
      const responseData = await res.json();
      if (responseData.insertedId) {
        reset();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "New User Created",
          showConfirmButton: false,
          timer: 1500,
        });
      }
      navigate("/");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  };
  
  return (
    <>

      <div className="max-w-2xl mx-auto mb-0 ">
        <div className="bg-white  pt-20  shadow-md p-20 mt-5">
          <SectionHeader header="Sign Up Now" />
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="pt-5">
              <label className="" htmlFor="text">
                Your Name
              </label>
              <input className=" w-full  p-2 lg:p-3 rounded-md focus:outline-none my-2 border border-[#89216B]" {...register("name", { required: true })} />
              {errors.name && <span className="text-red-500 text-sm p-1">Name is required</span>}
            </div>
            <div className="pt-5">
              <label className="" htmlFor="text">
                Your Photo
              </label>
              <input className=" w-full  p-2 lg:p-3 rounded-md focus:outline-none my-2 border border-[#89216B]" {...register("photoURL", { required: true })} />
              {errors.photoURL && <span className="text-red-500 text-sm p-1">photoURL is required</span>}
            </div>
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
            <div className="pt-5 relative">
              <label className="" htmlFor="text">
                Re-type Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                className=" w-full t p-2 lg:p-3 rounded-md focus:outline-none my-2 border border-[#89216B]"
                {...register("rePassword", {
                  required: true,
                  validate: value => value === watch("password") || "Passwords do not match",
                })}
              />
              {!showPassword ? <FaEyeSlash onClick={() => setShowPassword(true)} className="absolute text-xl" style={{ top: "70px", right: "10px" }} /> : <FaEye onClick={() => setShowPassword(false)} className="absolute text-xl" style={{ top: "70px", right: "10px" }} />}
              {errors.rePassword && <span className="text-red-500 text-sm p-1">Password Doesn&apos;t Match</span>}
            </div>
            <div className="text-center pt-8">
              <button type="submit" className="btn hover:scale-105 duration-200 border-0 bg-gradient-to-r from-[#DA4453] to-[#89216B] text-white">
                {loading ? <span className="loading loading-spinner"></span> : "Sign Up"}
              </button>
            </div>
          </form>
          <div>
            <p className="text-center pt-5 ">
              Already have an account?{" "}
              <Link className="text-[#89216B]" to="/login">
                Login
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

export default SignUp;
