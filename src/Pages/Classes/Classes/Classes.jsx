import { useEffect, useState } from "react";
import SingleClass from "../../../components/SingleClass";
import Loader from "../../../components/utilities/Loader";

const Classes = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   // Simulating the API call to fetch the data
  //   const fetchData = async () => {
  //     const response = await fetch(`https://ralph-crafts-server.vercel.app/all-classes`);
  //     const data = await response.json();
  //     const approvedCourses = data.filter(course => course.status === "approved");
  //     setCourses(approvedCourses);
  //   };
  //   fetchData();
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`https://ralph-crafts-server.vercel.app/all-classes`);
        const data = await response.json();
        const approvedCourses = data.filter(course => course.status === "approved");
        setCourses(approvedCourses);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading){
    return <Loader/>
  }
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="grid p-4 md:grid-cols-2 gap-7 lg:grid-cols-3">
        {courses.map(c => (
          <SingleClass key={c._id} c={c}></SingleClass>
        ))}
      </div>
    </div>
  );
};

export default Classes;
