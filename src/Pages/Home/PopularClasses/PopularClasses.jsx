import { useQuery } from "@tanstack/react-query";
import SectionHeader from "../../../components/SectionHeader";
import SingleClass from "../../../components/SingleClass";
import { Link } from "react-router-dom";
import Loader from "../../../components/utilities/Loader";

const PopularClasses = () => {
    const {data:courses=[],isLoading}=useQuery(["all-classes"], async () => {
 // Define the limit variable
        const response = await fetch(`https://ralph-crafts-server.vercel.app/all-classes?limit=6`);
        const data = await response.json();
        const mostEnrolled= data?.sort((a, b) => (a.enrolled > b.enrolled ? -1 : 1))
        return mostEnrolled;
    })
    if(isLoading)return <Loader></Loader>
    return (
        <div className="mb-20">
            <SectionHeader header="Choose Your Desired Course" description="Try from our most enrolled courses for your learning journey"></SectionHeader>
            <div className="grid mb-10 md:grid-cols-2 gap-7 p-4 lg:grid-cols-3">
                {
                    courses.map(c=>(
                        <SingleClass key={c._id} c={c}></SingleClass>
                    ))
                }
            </div>
            <div className="text-center">
                <Link to='classes' className=" hover:scale-105 btn duration-200 border-0 bg-gradient-to-r from-[#DA4453] to-[#89216B] text-white">
                  Show More
                </Link>
            </div>
        </div>
    );
};

export default PopularClasses;