
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FaRegEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import bannerImage from "../../assets/register.gif";
import useTitle from "../../hooks/useTitle";
import { AuthContext } from "../../providers/AuthProvider";
import SocalLogin from "../../shared/SocalLogin/SocalLogin";

const Registration = () => {
  useTitle('Registration')
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const [show, setShow] = useState(true)
  const [confirmShow, setConfirmShow] = useState(true)
  const[error, setError] = useState('')
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    setError('')
    console.log('data', data);
    if (data.confirmPassword === data.password) {
        createUser(data.email, data.password).then((result) => {
          const loggedUser = result.user;
          console.log(loggedUser);
          updateUserProfile(data.name, data.photoURL)
            .then(() => {
              const saveUser = { name: data.name, email: data.email, image: data.photoURL };
              console.log("saveUser", saveUser);
              fetch(`https://l-school-server.vercel.app/users`, {
                method: "POST",
                headers: {
                  "content-type": "application/json",
                },
                body: JSON.stringify(saveUser),
              })
                .then((res) => res.json())
                .then((data) => {
                  if (data.insertedId) {
                    reset();
                    Swal.fire({
                      icon: "success",
                      title: "User created successfully.",
                      showConfirmButton: false,
                      timer: 1500,
                    });
                    navigate("/");
                  }
                });
            })
            .catch((error) => setError(error));
        });
    } else {
        // todo
        setError('Confirm password and password are not same , please try again!!')
    }
  };
  return (
    <>
      <div className="hero min-h-[80vh] pt-20">
        <div className="hero-content w-full flex flex-col md:flex-row">
          <div className="w-1/2">
            <img className="h-[700px]" src={bannerImage} alt="" />
          </div>
          <div className="card flex-shrink-0 md:w-1/3 shadow-2xl bg-base-100">
            <h1 className="text-xl font-semibold text-center mt-10">
              Registration
            </h1>
            {/* todo worng */}
            <p className="text-center text-red-500 text-lg">{error}</p>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="url"
                  {...register("photoURL", { required: true })}
                  placeholder="Photo URL"
                  className="input input-bordered"
                />
                {errors.photoURL && (
                  <span className="text-red-600">Photo URL is required</span>
                )}
              </div>
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
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type={confirmShow? 'password': "text"}
                  {...register("confirmPassword", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])/,
                  })}
                  placeholder="confirmPassword"
                  className="input input-bordered"
                />
                {errors.confirmPassword?.type === "required" && (
                  <p className="text-red-600">Confirm Password is required</p>
                )}
                {errors.confirmPassword?.type === "minLength" && (
                  <p className="text-red-600">
                    Confirm Password must be 6 characters
                  </p>
                )}
                {errors.confirmPassword?.type === "pattern" && (
                  <p className="text-red-600">
                    Password must have one Uppercase, one special character.
                  </p>
                )}
                <p onClick={()=>setConfirmShow(!confirmShow)} className="absolute right-2 bottom-4 text-xl"> <FaRegEye className=""></FaRegEye></p>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn bg-cyan-300 hover:bg-cyan-600 hover:text-white"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="text-center ">
            <Link to="/login">
                Already have an account <span className="text-cyan-500">Login</span>
                </Link>
            </p>
        <SocalLogin></SocalLogin>
          </div>
        </div>
      </div>
    </>
  );
};

export default Registration;
