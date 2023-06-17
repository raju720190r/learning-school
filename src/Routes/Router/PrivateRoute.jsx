import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import Lottie from "lottie-react";
import loadingImage from "../../assets/98432-loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log("loading", loading);
  if (loading) {
    return (
      <div className="h-80vh">
        <Lottie className="h-screen" animationData={loadingImage} loop={true} />
      </div>
    );
  }

  if (user) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
