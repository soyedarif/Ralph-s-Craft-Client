import { useState } from "react";
import useAuth from "../hooks/useAuth";
import useUserRole from "../hooks/useUserRole";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxios from "../hooks/useAxios";

const SingleClass = ({ c }) => {
  const { user } = useAuth();
  const { role } = useUserRole();
  const [axiosSecure]=useAxios()
  const navigate=useNavigate()
  const location=useLocation();
  const {_id, course, instructor, price, seat, classImg } = c;
  const [loading, setLoading] = useState(false);
  const handleBookClass = async() => {
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
                state: {from:location},
              });
            }
          });
      }
      const res=await axiosSecure.post('/booked-classes',{
        courseId:_id,
        course,
        seat,
        price,
        instructor,
        classImg,
        email:user?.email,
      })
      if (res.data?.message) {
        Swal.fire({
          icon: "error",
          title: "Failed!",
          text: res.data.message,
          timer: 2000,
          position: "center",
        });
      }
      if(res.data.insertedId){
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
    <div className="card w-96 bg-base-100 shadow-xl bg-gradient-to-t from-red-400 to-red-200">
      <div className="card-body">
        <h2 className="card-title">{course}</h2>
        <p>Course Instructor: {instructor}</p>
        <p>Course Fee: ${price}</p>
        <p>Seat: {seat}</p>
        <button onClick={handleBookClass} disabled={!seat || role === "admin" || role === "instructor"} className="btn bg-red-600 text-white hover:text-black">
          {loading ? <span className="loading loading-spinner" /> : "Select Course"}
        </button>
      </div>
      <figure className="h-48 w-full">
        <img src={classImg} />
      </figure>
    </div>
  );
};

export default SingleClass;
