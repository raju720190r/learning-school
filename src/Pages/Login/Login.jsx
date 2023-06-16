import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash} from 'react-icons/fa';
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";
import SocialLogin from "../SocialLogin/SocialLogin";

const Login = () => {
    const { signIn} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const [showPassword, setShowPassword] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'User Login SuccessFully',
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true });
            })
    };
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <>
            <Helmet><title>Learning School || Login</title></Helmet>
            <div className="hero ">

                <div className="card flex-shrink-0 w-1/3 rounded-none my-20 mx-20 shadow-2xl bg-base-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body text-center">
                        <div className="form-control mb-10">
                            <h2 className="text-3xl font-bold"> Please Login </h2>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email{errors.email && <span className="ml-5 text-2xl text-red-500">*</span>}</span>
                            </label>
                            <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password{errors.email && <span className="ml-5 text-2xl text-red-500">*</span>}</span>
                            </label>
                            <input type={showPassword ? "text" : "password"} {...register("password", { required: true })} placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="my-3 w-10 mx-auto">
                            <span className="text-3xl" onClick={togglePasswordVisibility}>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                        </div>
                        <div className="mt-6">
                            <input className="btn w-80 bg-red-500 text-white hover:bg-slate-950 rounded-sm" type="submit" value="Login" />
                        </div>

                    </form>
                    <div className="mt-3 text-center">
                        <SocialLogin></SocialLogin>
                    </div>
                    <div className="my-5 text-center">
                        <p className="text-xl"><small>New User ?
                            <Link className="btn btn-link text-red-500" to={'/signUp'}> Register</Link> </small></p>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Login;