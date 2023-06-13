import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxios";
import SectionHeader from "../../../components/SectionHeader";

const MyClasses = () => {
  const { user, loading } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: myClasses = [] } = useQuery({
    queryKey: ["myClasses", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(`/classes?email=${user?.email}`);
      return res.data;
    },
  });
  return (
    <>
      <SectionHeader header={`Classes added By ${user.displayName}`}></SectionHeader>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 p-6">
        {myClasses.map(course => (
          <div key={course._id} className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img src={course.classImg} className="h-32 w-full object-cover" alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{course.course}</h2>
              <p>Status: {course.status}</p>
              <p>Student Enrolled: {course?.enrolled || 0}</p>
              <p>FeedBack: {course?.feedback || ''}</p>
              <div className="card-actions justify-end">
                <button className="btn bg-red-600 text-white hover:text-black">Update</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MyClasses;
