import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { FaGoogle,FaEye, FaEyeSlash } from 'react-icons/fa';
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";

const SignUp = () => {
    const { createUser,googleSignIn,updateUserProfile,logOut} = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const { register, handleSubmit,watch,reset, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                updateUserProfile(data.name,data.photoURL)
                .then(()=>{
                    console.log('User Profile Updated');
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'User Created Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    logOut();
                    navigate('/');
                    reset();

                    
                })
                
            })


    };
    const handleGoogleSignIn =()=>{
        googleSignIn()
        .then(result=>{
            const loggedInUser = result.user;
            console.log(loggedInUser);
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'User Login SuccessFully',
                showConfirmButton: false,
                timer: 1500
            })
        })
    }
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    return (
        <div className="hero ">
            <Helmet><title>Learning School || Register</title></Helmet>
            <div className="card flex-shrink-0 w-1/2 rounded-none my-20 mx-20 shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
                    <div className="form-control mb-10">
                        <h2 className="text-3xl font-bold"> Please Register</h2>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name{errors.name && <span className="ml-5 text-2xl text-red-500">*</span>}</span>
                        </label>
                        <input type="name" {...register("name", { required: true })} placeholder="full name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email{errors.email && <span className="ml-5 text-2xl text-red-500">*</span>}</span>
                        </label>
                        <input type="email" {...register("email", { required: true })} placeholder="example@gmail.com" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">PhotoURL{errors.photoURL && <span className="ml-5 text-2xl text-red-500">*</span>}</span>
                        </label>
                        <input type="text" {...register("photoURL", { required: true })} placeholder="photoURL" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        
                        <input  type={showPassword ? "text" : "password"} {...register("password", {
                            required: true,
                            minLength: 6,
                            maxLength: 20,
                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                        })} placeholder="password" className="input input-bordered w-3/3" />
                       <div>
                       {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                        {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                        {errors.password?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                        {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                       </div>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Confirm Password</span>
                        </label>
                        <input type={showPassword ? "text" : "password"} {...register("confirmPassword", {
                            required: true,
                            validate: (value) => value === watch('password'),
                            minLength: 6,
                            maxLength: 20,
                            pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                        })} placeholder="confirm password" className="input input-bordered" />
                        {errors.confirmPassword?.type === 'required' && <p className="text-red-600">Password is required</p>}
                        {errors.confirmPassword?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                        {errors.confirmPassword?.type === 'maxLength' && <p className="text-red-600">Password must be less than 20 characters</p>}
                        {errors.confirmPassword?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase one lower case, one number and one special character.</p>}
                        {errors.confirmPassword?.type === 'validate' && <p className="text-red-600">Password do not match</p>}

                    </div>
                    <div className="my-3 w-10 mx-auto">
                        <span className="text-3xl" onClick={togglePasswordVisibility}>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                        </div>
                    <div className="text-center mt-6">
                        <input className="btn w-[580px] bg-red-500 text-white hover:bg-slate-950 rounded-sm" type="submit" value="Register" />
                    </div>

                </form>
                <div className="mt-3 text-center ">
                    <button onClick={handleGoogleSignIn} className="btn w-[580px] hover:bg-red-500 text-white text-2xl bg-slate-950 rounded-sm"><FaGoogle></FaGoogle></button>
                </div>
                <div className="my-5 text-center">
                    <p className="text-xl"><small>Already have an Account?<Link className="btn btn-link text-red-500" to={'/login'}>Login</Link> </small></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;