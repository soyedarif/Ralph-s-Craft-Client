import moment from "moment";
import useEnrolledClasses from "../../../hooks/useEnrolledClasses";
import useAuth from "../../../hooks/useAuth";
import SectionHeader from "../../../components/SectionHeader";

const PaymentHistory = () => {
  const {user}=useAuth()
  const { enrolledClasses } = useEnrolledClasses();

  return (
    
    <div>
                <SectionHeader header={`Payments of ${user.displayName}`}></SectionHeader>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Payment</th>
              <th>Transaction ID</th>
              <th>Payment Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {enrolledClasses.map((course, i) => (
              <tr key={course._id}>
                <th>{i + 1}</th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={course.classImg} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{course.course}</div>
                    </div>
                  </div>
                </td>
                <td>{course.transactionID}</td>
                <td>{moment(course.date).format("DD MMM YYYY")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
