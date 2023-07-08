import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxios from "./useAxios";

const useUserRole = () => {
    const {user,userLoading}=useAuth();
    const [axiosSecure]=useAxios()
    const {data,isLoading:isRoleLoading}=useQuery({
        queryKey:['role',user],
        enabled: !userLoading,
        queryFn: async()=>{
            const res= await axiosSecure.get(`/users/${user?.email}`)
            return res.data;
        }
    })
    return {role:data?.role, isRoleLoading}
};

export default useUserRole;