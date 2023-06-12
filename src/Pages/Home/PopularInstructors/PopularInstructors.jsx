import { useQuery } from "@tanstack/react-query";
import SectionHeader from "../../../components/SectionHeader";
import Instructor from "./Instructor";

const PopularInstructors = () => {
    const { data: instructors = [] } = useQuery(['instructors'], async () => {
        const limit = 6; // Define the limit variable
        const response = await fetch(`http://localhost:5000/instructors?limit=${limit}`);
        const data = await response.json();
        return data;
      });
      console.log(instructors);
    return (
        <>
            <SectionHeader header='Pick Your Instructor' description='Try from our Best of the Best Instructor for your learning journey'></SectionHeader>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    instructors.map(instructor=><Instructor instructor={instructor} key={instructor._id}></Instructor>)
                }
            </div>
        </>
    );
};

export default PopularInstructors;