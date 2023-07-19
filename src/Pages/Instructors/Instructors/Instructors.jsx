import { useEffect, useState } from "react";
import Instructor from "../../../components/Instructor";
import Loader from "../../../components/utilities/Loader";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    fetch(`https://ralph-crafts-server.vercel.app/users/instructors`)
      .then(res => res.json())
      .then(data => {
        setInstructors(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="grid md:grid-rows-2 gap-4 lg:grid-cols-3 ">
        {instructors.map(instructor => (
          <Instructor key={instructor._id} instructor={instructor}></Instructor>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
