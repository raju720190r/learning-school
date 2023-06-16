import { useQuery } from "react-query";


const useClass = () => {
  
  const {data : classes = [], isLoading: loading } = useQuery({
    queryKey: "classes",
    queryFn: async() => {
        const res = await fetch(`${import.meta.env.VITE_serverURL}/classes`)
        return res.json();
    }
  })
  
  
  
    return [classes, loading]
};

export default useClass;