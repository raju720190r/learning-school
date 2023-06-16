import { Helmet } from "react-helmet";
import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaChalkboardTeacher, FaChromecast,FaUserEdit, FaEdit, FaBook, FaBookmark, FaWallet, FaBookReader, FaRegPlusSquare } from 'react-icons/fa';
import useAuth from "../Hooks/usAuth";
import { useState } from "react";
import { useEffect } from "react";
import { getRole } from "../DataApi/Role";


const Dashboard = () => {
    const { user, role, logOut } = useAuth();
    const [isActive, setActive] = useState("false");
    const [userRole, setUserRole] = useState("user");
    console.log("ei user role", userRole);
    useEffect(() => {
        if (user) {
            getRole(user?.email).then((data) => {
                setUserRole(data);
            });
        }
    }, [user, userRole]);


    return (
        <div className="drawer h-full bg-red-100 lg:drawer-open">
            <Helmet><title>Learning School || Dashboard</title></Helmet>
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open Menu</label>

            </div>

            {/* Side Menu Bar */}
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-red-400 opacity-90 text-xl  text-base-content text-white">
                    {/* Sidebar content here */}
                    {userRole === "admin" && (
                        <>
                            <NavLink
                                to="/dashboard/allusers"
                                className={({ isActive }) =>
                                    `flex items-center px-4 py-2 mt-5 text transition-colors duration-300 transform hover:text-info hover:bg-neutral  ${isActive ? "bg-info/30 " : "text-gray"
                                    }`
                                }
                            >
                                <FaUserEdit className="w-5 h-5" />{" "}
                                <span className="mx-4 font-medium">Manage Users</span>
                            </NavLink>
                            <NavLink
                                to="/dashboard/manageclass"
                                className={({ isActive }) =>
                                    `flex items-center px-4 py-2 mt-5 text transition-colors duration-300 transform hover:text-info hover:bg-neutral  ${isActive ? "bg-info/30" : "text-gray"
                                    }`
                                }
                            >
                                <FaEdit className="w-5 h-5" />{" "}
                                <span className="mx-4 font-medium">Manage Classes</span>
                            </NavLink>
                        </>
                    )}

                    {userRole == "user" && (
                        <>
                            <NavLink
                                to="/dashboard/myClasses"
                                className={({ isActive }) =>
                                    `flex items-center px-4 py-2 mt-5 text transition-colors duration-300 transform hover:text-info hover:bg-neutral  ${isActive ? "bg-info/30" : "text-gray"
                                    }`
                                }
                            >
                                <FaBook className="w-5 h-5" />{" "}
                                <span className="mx-4 font-medium">
                                    My Selected Classes
                                </span>
                            </NavLink>
                            <NavLink
                                to="/dashboard/myEnrollClass"
                                className={({ isActive }) =>
                                    `flex items-center px-4 py-2 mt-5 text transition-colors duration-300 transform hover:text-info hover:bg-neutral  ${isActive ? "bg-info/30" : "text-gray"
                                    }`
                                }
                            >
                                <FaBookmark className="w-5 h-5" />{" "}
                                <span className="mx-4 font-medium">
                                    My Enrolled Classes
                                </span>
                            </NavLink>
                            <NavLink
                                to="/dashboard/paymenthistory"
                                className={({ isActive }) =>
                                    `flex items-center px-4 py-2 mt-5 text transition-colors duration-300 transform hover:text-info hover:bg-neutral  ${isActive ? "bg-info/30" : "text-gray"
                                    }`
                                }
                            >
                                <FaWallet className="w-5 h-5" />{" "}
                                <span className="mx-4 font-medium">Payment History</span>
                            </NavLink>
                        </>
                    )}


                    {userRole === "" && (
                        <>
                            <NavLink
                                to="/dashboard/myselectedclass"
                                className={({ isActive }) =>
                                    `flex items-center px-4 py-2 mt-5 text transition-colors duration-300 transform hover:text-info hover:bg-neutral  ${isActive ? "bg-info/30" : "text-gray"
                                    }`
                                }
                            >
                                <FaBook className="w-5 h-5" />{" "}
                                <span className="mx-4 font-medium">
                                    My Selected Classes
                                </span>
                            </NavLink>
                            <NavLink
                                to="/dashboard/myEnrollClass"
                                className={({ isActive }) =>
                                    `flex items-center px-4 py-2 mt-5 text transition-colors duration-300 transform hover:text-info hover:bg-neutral  ${isActive ? "bg-info/30" : "text-gray"
                                    }`
                                }
                            >
                                <FaBookmark className="w-5 h-5" />{" "}
                                <span className="mx-4 font-medium">
                                    My Enrolled Classes
                                </span>
                            </NavLink>
                            <NavLink
                                to="/dashboard/paymentHistory"
                                className={({ isActive }) =>
                                    `flex items-center px-4 py-2 mt-5 text transition-colors duration-300 transform hover:text-info hover:bg-neutral  ${isActive ? "bg-info/30" : "text-gray"
                                    }`
                                }
                            >
                                <FaWallet className="w-5 h-5" />{" "}
                                <span className="mx-4 font-medium">Payment History</span>
                            </NavLink>
                        </>
                    )}

                    {userRole === "instructor" && (
                        <>
                            <NavLink
                                to="/dashboard/myClass"
                                className={({ isActive }) =>
                                    `flex items-center px-4 py-2 mt-5 text transition-colors duration-300 transform hover:text-info hover:bg-neutral  ${isActive ? "bg-info/30" : "text-gray"
                                    }`
                                }
                            >
                                <FaBookReader className="w-5 h-5" />{" "}
                                <span className="mx-4 font-medium">My Classes</span>
                            </NavLink>
                            <NavLink
                                to="/dashboard/addClass"
                                className={({ isActive }) =>
                                    `flex items-center px-4 py-2 mt-5 text transition-colors duration-300 transform hover:text-info hover:bg-neutral  ${isActive ? "bg-info/30" : "text-gray"
                                    }`
                                }
                            >
                                <FaRegPlusSquare className="w-5 h-5" />{" "}
                                <span className="mx-4 font-medium">Add Class</span>
                            </NavLink>
                        </>
                    )}
                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome>Home</NavLink></li>
                    <li><NavLink to="/instructors"><FaChalkboardTeacher></FaChalkboardTeacher>Instructors</NavLink></li>
                    <li><NavLink to="/classes"><FaChromecast></FaChromecast>Classes</NavLink></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;