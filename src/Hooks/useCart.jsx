import { useQuery } from '@tanstack/react-query'
import useAuth from './useAuth';
import useAxiosSecure from './useAxiosSecure';
const useCart = () =>{
    const { user,loading} = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { refetch, data:cart=[]} = useQuery({
        queryKey:['cart', user?.email],
        enabled: !loading && !!user?.email && !!localStorage.getItem('access-token'),
        queryFn: async()=>{
            const res = await axiosSecure(`/classSelects?email=${user?.email}`)
            return res.data;
        }
    })
    return [cart, refetch]

}
export default useCart;