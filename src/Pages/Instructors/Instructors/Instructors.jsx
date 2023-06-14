import { useEffect, useState } from "react";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetch(`https://ralph-crafts-server.vercel.app/instructors`)
      .then(res => res.json())
      .then(data => setInstructors(data));
  }, []);

  return (
    <>
    <div className="grid md:grid-rows-2 gap-4 lg:grid-cols-3 mt-20">
      {instructors.map(instructor => (
        <div key={instructor._id} className="h-72 card card-side bg-base-100 shadow-xl">
          <figure className="w-1/2">
            <img src={instructor.photoUrl} className="object-fit" alt="Movie" />
          </figure>
          <div className="w-1/2 card-body">
            <h2 className="card-title">{instructor.name}</h2>
            <p><span className="font-semibold">Specialist:</span> {instructor.assignedClass}</p>
            <p><span className="font-semibold">Email:</span> {instructor.email}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Instructors;
