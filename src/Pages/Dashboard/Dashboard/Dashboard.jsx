import { Link, Outlet } from "react-router-dom";
import { FaHome,FaChalkboardTeacher,FaChromecast,FaAccessibleIcon,FaCheckDouble} from 'react-icons/fa';
import { Helmet } from "react-helmet";


const Dashboard = () => {
    return (

        <div className="drawer h-full bg-red-100 lg:drawer-open">
            <Helmet><title>Learning School || Dashboard</title></Helmet>
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-red-400 opacity-90 text-xl  text-base-content text-white">
                    {/* Sidebar content here */}
                    <li><Link to="dashboard/selectedClasses" ><FaCheckDouble></FaCheckDouble>My Selected Classes</Link></li>
                    <li><Link to=""><FaAccessibleIcon></FaAccessibleIcon>My Enrolled Classes</Link></li>
                    <li><Link to="dashboard/selectedClasses" ><FaCheckDouble></FaCheckDouble>My Selected Classes</Link></li>
                    <li><Link to=""><FaAccessibleIcon></FaAccessibleIcon>My Enrolled Classes</Link></li>
                    <div className="divider"></div>
                    <li><Link to="/"><FaHome></FaHome>Home</Link></li>
                    <li><Link to="/instructors"><FaChalkboardTeacher></FaChalkboardTeacher>Instructors</Link></li>
                    <li><Link to="/classes"><FaChromecast></FaChromecast>Classes</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;