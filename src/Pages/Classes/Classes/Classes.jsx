import { useEffect, useState } from "react";
import SingleClass from "../../../components/SingleClass";

const Classes = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Simulating the API call to fetch the data
    const fetchData = async () => {
      const response = await fetch(`https://ralph-crafts-server.vercel.app/all-classes`);
      const data = await response.json();
      const approvedCourses = data.filter(course => course.status === "approved");
      setCourses(approvedCourses);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="grid md:grid-rows-2 gap-4 lg:grid-cols-3">
        {courses.map(c => (
          <SingleClass key={c._id} c={c}></SingleClass>
        ))}
      </div>
    </>
  );
};

export default Classes;
