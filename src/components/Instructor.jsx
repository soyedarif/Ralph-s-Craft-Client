import { useState } from "react";
import "./Instructor.css";

const Instructor = ({ instructor }) => {
  const [hover, setHover] = useState(false);
  const { name, email, photoURL } = instructor;
  return (
    <>
      <div className={`w-[21.875rem] relative mx-auto rounded-2xl overflow-hidden h-[28.125rem]`} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
        <div className="w-full  h-full">
          <img className={`w-full duration-300 h-full object-cover ${hover ? 'scale-110':''}`} src={photoURL} />
        </div>
        <div className={`${hover?"mb-0":""} absolute p-8 bg-opacity-60 bg-[#89216B] -mb-14 z-10 w-full text-center bottom-0 duration-300`}>
          <h3 className="text-4xl mb-4 font-bold text-white">{name}</h3>
          <p className="bottom-text text-white">Email: {email}</p>
        </div>
      </div>
    </>
  );
};

export default Instructor;
