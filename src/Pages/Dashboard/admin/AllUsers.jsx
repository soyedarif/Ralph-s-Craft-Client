import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxios";
import { FaUserGraduate, FaUserSecret } from "react-icons/fa";
import { toast } from "react-toastify";

const AllUsers = () => {
  const [axiosSecure] = useAxiosSecure();
  const { data: users = [], refetch } = useQuery(["users"], async () => {
    const res = await axiosSecure.get("/users");
    return res.data;
  });
  const handleMakeAdmin = user => {
    axiosSecure.patch(`users/admin/${user._id}`).then(res => {
      const data = res.data;
      if (data.modifiedCount) {
        refetch();
        toast.success(`${user.name} is now an Admin`, {
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
  const handleMakeInstructor = user => {
    axiosSecure.patch(`users/instructor/${user._id}`).then(res => {
      const data = res.data;
      if (data.modifiedCount) {
        refetch();
        toast.success(`${user.name} is now an Instructor`, {
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
    <div>
      <h2 className="text-5xl font-medium text-center">Manage All Users</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Make Instructor</th>
              <th>Make Admin</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={user.photoURL} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                    </div>
                  </div>
                </td>
                <td className="">{user.email}</td>
                <td className="uppercase">{user.role}</td>
                <td>
                  <button disabled={user.role === "instructor"} onClick={() => handleMakeInstructor(user)} className="btn bg-yellow-400 text-2xl">
                    <FaUserGraduate />
                  </button>
                </td>
                <td>
                  <button disabled={user.role === "admin"} onClick={() => handleMakeAdmin(user)} className="btn bg-red-500 text-white text-2xl">
                    <FaUserSecret />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
