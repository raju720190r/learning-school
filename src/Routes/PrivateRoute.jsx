import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";


const PrivateRoute = ({children})=>{
    const {user,loading}= useContext(AuthContext);
    const location = useLocation();
    if (loading){
        <span className="loading loading-spinner text-accent"></span>
    }
    if (user){
        return children;
    }
    return <Navigate to="/login" state={{from:location}} replace></Navigate>
};
export default PrivateRoute;