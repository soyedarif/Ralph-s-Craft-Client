import moment from "moment/moment";
import useEnrolledClasses from "../../../hooks/useEnrolledClasses";
import SectionHeader from "../../../components/SectionHeader";
import useAuth from "../../../hooks/useAuth";

const EnrolledClasses = () => {
  const { user } = useAuth();

  
  const { enrolledClasses } = useEnrolledClasses();
  console.log(enrolledClasses);

  return (
    <>
    <SectionHeader header={`Classes Enrolled By ${user.displayName}`}></SectionHeader>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                #
              </th>
              <th>Image</th>
              <th>Name</th>
              <th>Instructor</th>
              <th>Enrolled Date</th>
            </tr>
          </thead>
          <tbody>
            {enrolledClasses.map((course,i)=>(
                <tr key={course._id}>
                <th>
                  {i+1}
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={course.classImg} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  {course.course}
                </td>
                <td>{course.instructor}</td>
                <td>
                    {moment(course.date).format("DD MMM YYYY")}
                </td>
              </tr>
            ))}
            
          </tbody>
        </table>
      </div>
    </>
  );
};

export default EnrolledClasses;
