import { useEffect, useState } from "react";

const Classes = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // Simulating the API call to fetch the data
    const fetchData = async () => {
      const response = await fetch(`http://localhost:5000/classes`);
      const data = await response.json();
      const approvedCourses = data.filter(course => course.status === "approved");
      setCourses(approvedCourses);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="grid md:grid-rows-2 gap-4 lg:grid-cols-3 mt-20">
        {courses.map(course => (
          <div key={course._id} className="card w-96 bg-base-100 shadow-xl bg-gradient-to-t from-red-400 to-red-200">
            <div className="card-body">
              <h2 className="card-title">{course.course}</h2>
              <p>Course Instructor: {course.instructor}</p>
              <p>Course Fee: ${course.price}</p>
              <p>Seat: {course.seat}</p>
              <button className="btn bg-red-600 text-white hover:text-black">Select Course</button>
            </div>
            <figure className="h-48 w-full">
              <img src={course.classImg} />
            </figure>
          </div>
        ))}
      </div>
    </>
  );
};

export default Classes;
