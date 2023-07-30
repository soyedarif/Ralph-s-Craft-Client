import { useState } from "react";
import useAuth from "../hooks/useAuth";
import useUserRole from "../hooks/useUserRole";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxios from "../hooks/useAxios";

const SingleClass = ({ c }) => {
  const [hover, setHover] = useState(false);
  const { user } = useAuth();
  const { role } = useUserRole();
  const [axiosSecure] = useAxios();
  const navigate = useNavigate();
  const location = useLocation();
  const { _id,enrolled, course, instructor, price, seat, classImg } = c;
  const [loading, setLoading] = useState(false);
  const handleBookClass = async () => {
    setLoading(true);
    try {
      if (!user) {
        Swal.fire({
          icon: "warning",
          title: "Failed!",
          text: "Please login first to select a class",
          showCancelButton: true,
        }).then(result => {
          if (result.isConfirmed) {
            navigate("/login", {
              state: { from: location },
            });
          }
        });
      }
      const res = await axiosSecure.post("/booked-classes", {
        courseId: _id,
        course,
        seat,
        price,
        instructor,
        classImg,
        email: user?.email,
      });
      if (res.data?.message) {
        Swal.fire({
          icon: "error",
          title: "Failed!",
          text: res.data.message,
          timer: 2000,
          position: "center",
        });
      }
      if (res.data.insertedId) {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: `${course} is selected`,
          timer: 2000,
          position: "center",
        });
      }
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className={`w-96 h-96 mx-auto [perspective:1000px]`} data-aos="fade-right" onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
      <div className={`relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] ${hover ? "[transform:rotateY(180deg)]" : ""}`}>
        <div className="absolute inset-0">
          <img className="h-full w-full rounded-xl object-cover shadow-xl shadow-black/40" src={classImg} alt="" />
        </div>
        <div className="absolute inset-0 h-full w-full rounded-xl bg-white/90 dark:bg-black/90 px-12  text-slate-200 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          <div className="flex min-h-full flex-col justify-center items-center">
            <h3 className="text-4xl text-center font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[#DA4453] to-[#89216B]">{course}</h3>
            <div className="mb-8 space-y-1 text-gray-800 dark:text-white text-lg">
              <p>Instructor: {instructor}</p>
              <p>Fee: ${price}</p>
              <p>Total Enrolled: {enrolled}</p>
              <p>Seat Available: {seat}</p>
            </div>
            <button onClick={handleBookClass} disabled={!seat || role === "admin" || role === "instructor"} className="hover:scale-105 btn duration-200 border-0 bg-gradient-to-r from-[#DA4453] to-[#89216B] text-white">
              {loading ? <span className="loading loading-spinner" /> : "Select Course"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleClass;
