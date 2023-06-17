import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const SocalLogin = () => {
  const { googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const handelGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        const saveUser = { name: user.displayName, email: user.email, image: user.photoURL };
        console.log('saveUser', saveUser);
        fetch(`https://l-school-server.vercel.app/users`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then(() => {
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        console.log("google error message", error.message);
      });
  };

  return (
    <div className="pb-5 px-8">
      <div className="divider"></div>
      <div className="w-full text-center mb-4">
        <button
          onClick={handelGoogleLogin}
          className="btn w-full bg-cyan-300 "
        >
          <FaGoogle></FaGoogle>
          <span>Google</span>
        </button>
      </div>
    </div>
  );
};

export default SocalLogin;
