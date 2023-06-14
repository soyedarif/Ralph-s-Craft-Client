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
    <div>
        
    </div>
      {/* <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
        </div>
        <figure>
          <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
        </figure>
      </div> */}
    </>
  );
};

export default Classes;
