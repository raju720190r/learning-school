import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const usePendingClass = () => {
    const { user,loading} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data:pendingClass=[]} = useQuery({
        queryKey:['pendingClass', user?.email],
        enabled: !loading && !!user?.email && !!localStorage.getItem('access-token'),
        queryFn: async()=>{
            const res = await axiosSecure(`/pendingClass?email=${user?.email}`)
            console.log('res use Card', res);
            return res.data;
        }
    })
    return [pendingClass, refetch]
};

export default usePendingClass;