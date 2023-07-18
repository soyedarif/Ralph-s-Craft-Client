import useAuth from './useAuth';
import useAxios from './useAxios';
import { useQuery } from '@tanstack/react-query';

const useEnrolledClasses = () => {
    const { user } = useAuth();
    const  [axiosSecure]= useAxios();
    const { data: enrolledClasses = [], isLoading } = useQuery({
      queryKey: ["enrolled-classes", user?.email],
      queryFn: async () => {
        const res = await axiosSecure.get(`/payments/${user?.email}`);
        return res.data;
      },
    });
    return { enrolledClasses, isLoading };
};

export default useEnrolledClasses;