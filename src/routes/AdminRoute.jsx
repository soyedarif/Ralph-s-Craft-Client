import { Navigate } from "react-router-dom";
import useUserRole from "../hooks/useUserRole";

const AdminRoute = ({children}) => {
    const { role, isRoleLoading } = useUserRole();
    if(isRoleLoading) return <progress className="progress w-56"></progress>

    if(role==='admin'){
        return children
    }
    return <Navigate to='/' replace={true}></Navigate>
};

export default AdminRoute;