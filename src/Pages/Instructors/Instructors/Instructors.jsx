import { useEffect, useState } from "react";
import Instructor from "../../../components/Instructor";
import Loader from "../../../components/utilities/Loader";
import PageHeader from "../../../components/utilities/PageHeader";
import { Link } from "react-router-dom";

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
    <>
    <PageHeader heading="Our Instructors">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>Instructors</li>
      </PageHeader>
    <div className="max-w-screen-xl mx-auto">
      <div className="grid md:grid-rows-2 p-4 gap-4 lg:grid-cols-3 ">
        {instructors.map(instructor => (
          <Instructor key={instructor._id} instructor={instructor}></Instructor>
        ))}
      </div>
    </div>
    </>
  );
};

export default Instructors;
