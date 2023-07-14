import SectionHeader from "../../../components/SectionHeader";
import useAuth from "../../../hooks/useAuth";
import { useForm } from "react-hook-form";
import useAxios from "../../../hooks/useAxios";
import { toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddaClass = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const imgbbUrl = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_KEY}`;
  const [axiosSecure] = useAxios();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const addClass = async data => {
    try {
      setLoading(true);
      const { course, classImg, seat, price } = data;
      if(!classImg[0]?.type?.includes('image'))
        throw new Error("Please Input valid File");
        const formData= new FormData();
        formData.append("image",classImg[0])
        const imgbbResult=await axios.post(imgbbUrl,formData)

        if(imgbbResult?.data?.data?.display_url){
          const classImg=imgbbResult?.data?.data?.display_url;
          const res=await axiosSecure.post('classes',{
            course,
            classImg,
            instructor: user?.displayName,
            seat,
            price,
            instructorEmail:user?.email
          })
          if (res.data?.insertedId) {
            toast.success(`${course} class added`, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "light",
              });
            reset();
            navigate("/dashboard/myClasses");
          }
        }
    } catch (error) {
      toast.error(`${error.message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <SectionHeader header="Add Class" description="Make sure you fulfill all the requirements"></SectionHeader>
      <div className="max-w-4xl mx-auto">
        <form onSubmit={handleSubmit(addClass)} className="">
          {/* class name */}
          <div className="form-control mb-4">
            <label className="label" htmlFor="name">
              <span className="label-text text-base">Class Name</span>
            </label>
            <input type="text" id="name" placeholder="class name" className="input md:py-7 input-bordered border-2 focus:outline-none focus:border-primary" {...register("course", { required: true })} />
            {errors.course && <span className="text-red-500 text-sm p-1">Class Name is required</span>}
          </div>
          {/* class image */}
          <div className="form-control mb-4">
            <label className="label" htmlFor="image">
              <span className="label-text text-base">Class Image</span>
            </label>
            <input type="file" id="image" className="file-input border-2 file-input-bordered w-full focus:outline-none" {...register("classImg", { required: true })} />
            {errors.classImg && <span className="text-red-500 text-sm p-1">Class Image is required</span>}
          </div>
          {/* Instructor name */}
          <div className="form-control mb-4">
            <label className="label" htmlFor="instructorName">
              <span className="label-text text-base">Instructor Name</span>
            </label>
            <input type="text" id="instructorName" placeholder="instructor name" className="input md:py-7 input-bordered border-2 focus:outline-none focus:border-primary" defaultValue={user?.displayName} readOnly />
          </div>
          {/* Instructor email */}
          <div className="form-control mb-4">
            <label className="label" htmlFor="instructorEmail">
              <span className="label-text text-base">Instructor Email</span>
            </label>
            <input type="text" id="instructorEmail" placeholder="instructor email" className="input md:py-7 input-bordered border-2 focus:outline-none focus:border-primary" defaultValue={user?.email} readOnly />
          </div>
          {/* available seats */}
          <div className="form-control mb-4">
            <label className="label" htmlFor="seats">
              <span className="label-text text-base">Available Seats</span>
            </label>
            <input type="number" id="seats" placeholder="available seats" className="input md:py-7 input-bordered border-2 focus:outline-none focus:border-primary" {...register("seat", { required: true })} />
            {errors.seat && <span className="text-red-500 text-sm p-1">Available Seats is required</span>}
          </div>
          {/* price */}
          <div className="form-control mb-4">
            <label className="label" htmlFor="price">
              <span className="label-text text-base">Price</span>
            </label>
            <input type="text" id="price" placeholder="price" className="input md:py-7 input-bordered border-2 focus:outline-none focus:border-primary" {...register("price", { required: true })} />
            {errors.price && <span className="text-red-500 text-sm p-1">Price is required</span>}
          </div>

          {/* add class button */}
          <div className="form-control mb-6">
            <button disabled={loading} type="submit" className="btn btn-gradient md:btn-lg normal-case md:text-xl disabled:text-white">
              {loading ? <span className="loading loading-spinner"></span> : "Add Class"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddaClass;
