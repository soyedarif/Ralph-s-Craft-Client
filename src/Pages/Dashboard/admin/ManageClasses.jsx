import { useQuery } from "@tanstack/react-query";
import useAxios from "../../../hooks/useAxios";
import SectionHeader from "../../../components/SectionHeader";
import { toast } from "react-toastify";
import FeedBack from "./FeedBack";
import { useState } from "react";

const ManageClasses = () => {
  const [axiosSecure] = useAxios();
  const [updateId, setUpdateId] = useState(null);

  const { data: classes = [], refetch } = useQuery(["manageClasses"], async () => {
    const res = await axiosSecure.get("/all-classes");
    return res.data;
  });

  const handleApprove = course => {
    axiosSecure.patch(`/classes/approve/${course._id}`).then(res => {
      const data = res.data;
      if (data.modifiedCount) {
        refetch();
        toast.success(`${course.course} is Approved`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    });
  };
  const handleDenied = course => {
    axiosSecure.patch(`/classes/denied/${course._id}`).then(res => {
      const data = res.data;
      if (data.modifiedCount) {
        refetch();
        toast.success(`${course.course} is Denied`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    });
  };

  return (
    <>
      <SectionHeader header="Manage Classes"></SectionHeader>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>*</th>
              <th>Name</th>
              <th>Email</th>
              <th>Price</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((course, i) => (
              <tr key={course._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={course.classImg} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{course.course}</div>
                      <div className="text-sm opacity-50">{course.instructor}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {course.instructorEmail}
                  <br />
                  <span className="badge badge-ghost badge-sm">Seats Available: {course.seat}</span>
                </td>
                <td className="text-right">${course.price}</td>
                <td>{course.status}</td>
                <td className="flex flex-col gap-1">
                  <button disabled={course.status == "approved" || course.status == "denied"} onClick={() => handleApprove(course)} className="btn bg-green-500 btn-xs">
                    Approve
                  </button>
                  <button disabled={course.status == "approved" || course.status == "denied"} onClick={() => handleDenied(course)} className="btn bg-red-500 text-white hover:text-black btn-xs">
                    Deny
                  </button>
                  <label htmlFor="my_modal_7" onClick={() => setUpdateId(course._id)} className="btn btn-ghost btn-xs">
                    Feedback
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <FeedBack updateId={updateId}></FeedBack>
    </>
  );
};

export default ManageClasses;
