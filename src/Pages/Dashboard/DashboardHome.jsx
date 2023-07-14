import { Navigate } from "react-router-dom";
import useUserRole from "../../hooks/useUserRole";

const DashboardHome = () => {
    const {role,isRoleLoading}=useUserRole()
    if(isRoleLoading) return <progress className="progress w-56"></progress>
    if(role==='admin')
    return <Navigate to={'manageClasses'} replace={true}></Navigate>
    if(role==='instructor')
    return <Navigate to={'myClasses'} replace={true}></Navigate>
    if(role==='student')
    return <Navigate to={'selectedClasses'} replace={true}></Navigate>
};

export default DashboardHome;