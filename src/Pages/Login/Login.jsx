import bannerImage from "../../assets/103084-new-yoga.json";
import Lottie from "lottie-react";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../providers/AuthProvider";
import SocalLogin from "../../shared/SocalLogin/SocalLogin";
import { FaRegEye } from "react-icons/fa";
import useTitle from "../../hooks/useTitle";

const Login = () => {
  useTitle("Login")
  const { signIn } = useContext(AuthContext);
  const [error, setError] = useState('')
  const navigate = useNavigate();
  const location = useLocation();
  const [show, setShow] = useState(true)
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setError('')
    signIn(data.email, data.password)
      .then((current) => {
        const user = current.user;
        console.log("user", user);
        reset()
        Swal.fire({
            icon: "success",
            title: "User created successfully.",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="hero min-h-[80vh]  pt-20 md:pt-0 ">
      <div className="hero-content w-full flex flex-col md:flex-row">
        <div className="w-1/2">
          <Lottie animationData={bannerImage} loop={true} />
        </div>
        <div className="card flex-shrink-0 md:w-1/3 shadow-2xl bg-base-100">
          <h1 className="text-xl font-semibold text-center mt-10">
            Login
          </h1>
          {/* todo worng */}
          <p className="text-center text-red-500 text-lg">{error}</p>
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                name="email"
                placeholder="email"
                className="input input-bordered"
              />
              {errors.email && (
                <span className="text-red-600">Email is required</span>
              )}
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={show? 'password': "text"}
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/,
                })}
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-600">Password is required</p>
              )}
              {errors.password?.type === "minLength" && (
                <p className="text-red-600">Password must be 6 characters</p>
              )}
              {errors.password?.type === "pattern" && (
                <p className="text-red-600">
                  Password must have one Uppercase, one special character.
                </p>
              )}
             <p onClick={()=>setShow(!show)} className="absolute right-2 bottom-4 text-xl"> <FaRegEye className=""></FaRegEye></p>
            </div>
            <div className="form-control mt-6">
              <input
                className="btn bg-cyan-300 hover:bg-cyan-600 hover:text-white"
                type="submit"
                value="Login"
              />
            </div>
          </form>
          <p className="text-center">
            <Link to="/registration">Create a new <span className="text-cyan-500">account</span></Link>
          </p>
        <SocalLogin></SocalLogin>
        </div>
      </div>
    </div>
  );
};

export default Login;
