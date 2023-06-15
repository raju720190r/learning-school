import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";


const Navbar = () => {
    const { user,logOut } = useContext(AuthContext)
    const navbar = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/instructors">Instructors</Link></li>
        <li><Link to="/classes">Classes</Link></li>
        {
            user ? <><li><Link to="/dashboard/myClasses">Dashboard</Link></li></> : <></>
        }

    </>

const handleLogOut = () => {
    logOut()
        .then(() => { })
        .catch(error => console.log(error));
}



    return (
        <div className="navbar max-w-screen-xl fixed bg-transparent mx-auto z-10 bg-base-100 mb-5">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navbar}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-3xl md:text-5xl font bold">Learning School</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navbar}
                </ul>
            </div>
            {/* Navar Login Register section */}
            <div className="navbar-end">
                {
                    user ? <>
                         <div className=" gap-2">
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-10 rounded-full">
                                        <img src={user?.photoURL} />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                    <li>
                                        <a className="justify-between">
                                           {
                                            user ?.displayName
                                           }
                                        </a>
                                    </li>
                                    <li><button className="btn" onClick={handleLogOut}>LogOut</button></li>
                                </ul>
                            </div>
                        </div>
                    </> :
                    
                    <><Link to={'/login'} className="btn bg-red-500 text-white hover:bg-slate-950">Login / Register</Link></>
                }
                
            </div>
        </div>
    );
};

export default Navbar;