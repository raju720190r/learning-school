import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className="hero ">
            <div className="card flex-shrink-0 w-1/3 rounded-none my-20 mx-20 shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body my-10">
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
                        <input type="password" {...register("password", { required: true })} placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-red-500 text-white hover:bg-slate-950 rounded-sm">Login</button>
                    </div>
                    <div className="mt-5">
                        <p className="text-xl"><small>Already have an Account? <Link className="text-red-500">Register</Link> </small></p>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default Login;