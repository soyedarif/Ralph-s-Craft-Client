import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxios from "../../../hooks/useAxios";
import SectionHeader from "../../../components/SectionHeader";

const MyClasses = () => {
  const { user, userLoading } = useAuth();
  const [axiosSecure] = useAxios();
  const { data: myClasses = [] } = useQuery({
    queryKey: ["myClasses", user?.email],
    enabled: !userLoading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/classes?email=${user?.email}`);
      return res.data;
    },
  });
  return (
    <>
      <SectionHeader header={`Classes added By ${user.displayName}`}></SectionHeader>
      
        <div className="overflow-x-auto">
  <table className="table dark:text-white">
    {/* head */}
    <thead className="dark:text-white">
      <tr>
        <th>
          #
        </th>
        <th>Course</th>
        <th>Status</th>
        <th>Total Enrolled</th>
        <th>Feedback</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {myClasses.map((course,i) =>( <tr key={course._id}>
        <th>
          <span>{i+1}</span>
        </th>
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
        <td>
         {course.status}
        </td>
        <td>{course.enrolled}</td>
        <th>
          {course.feedback}
        </th>
        <th>
          <button className="btn btn-xs">Update</button>
        </th>
      </tr>))}
     
    </tbody>

    
  </table>
</div>
     
    </>
  );
};

export default MyClasses;
