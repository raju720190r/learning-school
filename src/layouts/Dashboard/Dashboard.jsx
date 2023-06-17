import { NavLink, Outlet } from "react-router-dom";
import {
  FaCalendarAlt,
  FaHome,
  FaSchool,
  FaShoppingCart,
  FaWallet,
  FaPersonBooth,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";
import useInstructor from "../../hooks/useInstructor";
import useAuth from "../../hooks/useAuth";

const Dashboard = () => {
  const {user}= useAuth()
  console.log('user',user);
  const [cart] = useCart();
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const handleTheme = (event) => {
    if (event.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();
  return (
    <div className="drawer lg:drawer-open bg-pink-100">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <Outlet></Outlet>
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button lg:hidden"
        >
          Open drawer
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full bg-pink-300 text-base-content">
          {/* Sidebar content here */}
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome></FaHome> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/pendingClass">
                  <FaCalendarAlt></FaCalendarAlt> Manage Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/allUsers">
                  <FaShoppingCart></FaShoppingCart> All users
                </NavLink>
              </li>
            </>
          ) : isInstructor ? (
            <>
              <li>
                <NavLink to="/dashboard/instructorHome">
                  <FaHome></FaHome> Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addAClass">
                  <FaHome></FaHome> Add a class
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/instructorClass">
                  <FaCalendarAlt></FaCalendarAlt> My Classes
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/studentHome">
                  <FaHome></FaHome> Student Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/paymentHistory">
                  <FaWallet></FaWallet> My Enrolled Classes
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myClass">
                  <FaShoppingCart></FaShoppingCart> My Class
                  <span className="badge inl badge-secondary">
                    +{cart?.length || 0}
                  </span>
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li>
            <NavLink to="/">
              <FaHome></FaHome> Home
            </NavLink>{" "}
          </li>
          <li>
            <NavLink to="/instructors">
              <FaPersonBooth></FaPersonBooth>Instructor
            </NavLink>
          </li>
          <li>
            <NavLink to="/classesPage">
              <FaSchool></FaSchool>Classes
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
