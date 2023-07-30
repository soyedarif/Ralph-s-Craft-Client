import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxios from "../../../hooks/useAxios";
import Swal from "sweetalert2";
import {  useNavigate } from "react-router-dom";
import SectionHeader from "../../../components/SectionHeader";

const SelectedClasses = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxios();
  const navigate = useNavigate();
  const {
    data: selectedClasses = [],
    
    refetch,
  } = useQuery({
    queryKey: ["booked-classes", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/booked-classes/${user.email}`);
      return res.data;
    },
  });
  const handleDelete = id => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async result => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/booked-classes/${id}`);
        if (res.data?.deletedCount) {
          refetch();
          Swal.fire("Deleted!", "Your Course has been deleted.", "success");
        }
      }
    });
  };
  const handlePayment = course => {
    navigate("/dashboard/payment", {
      state: course,
    });
  };

  return (
    <div>
          <SectionHeader header={`Classes Selected By ${user.displayName}`}></SectionHeader>

      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr className="text-center dark:text-white">
              <th>#</th>
              <th>Course</th>
              <th>Price</th>
              <th>Seats Avaiable</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {selectedClasses.map((course, i) => (
              <tr key={course._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={course.classImg} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{course.course}</div>
                      <div className="text-sm opacity-50">{course.instructor}</div>
                    </div>
                  </div>
                </td>
                <td>{course.price}</td>
                <td>{course.seat}</td>
                <th className="space-x-3">
                  <button onClick={()=>handlePayment(course)}
                    className="btn border-0 hover:scale-105 duration-200 bg-gradient-to-r from-green-500 via-green-600 to-green-700 
    text-white btn-xs"
                  >
                    Purchase
                  </button>

                  <button onClick={() => handleDelete(course._id)} className="btn border-0 hover:scale-105 duration-200 bg-gradient-to-r from-[#DA4453] to-[#89216B] btn-xs text-white">
                    Delete
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SelectedClasses;
