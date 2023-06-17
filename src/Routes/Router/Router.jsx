import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Home from "../../pages/Home/Home/Home";
import Registration from "../../pages/Registration/Registration";
import Login from "../../pages/Login/Login";
import Instructors from "../../pages/Instructors/Instructors/Instructors";
import ClassesPage from "../../pages/ClassesPage/ClassesPage";
import Dashboard from "../../layouts/Dashboard/Dashboard";
import MyClass from "../../pages/Dashboard/StudentDashboard/MyClass/MyClass";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../../pages/Dashboard/AdminDashboard/AllUsers/AllUsers";
import AddAClass from "../../pages/Dashboard/InstructorDashboard/AddAClass/AddAClass";
import ManageClasses from "../../pages/Dashboard/AdminDashboard/ManageClasses/ManageClasses";
import InstructorClass from "../../pages/Dashboard/InstructorDashboard/InstructorClass/InstructorClass";
import Payment from "../../pages/Dashboard/StudentDashboard/Payment/Payment";
import StudentHome from "../../pages/Dashboard/StudentDashboard/StudentHome";
import InstructorHome from "../../pages/Dashboard/InstructorDashboard/InstructorHome";
import Instructor from "./Instructor";
import AdminRoute from "./AdminRoute";
import AdminHome from "../../pages/Dashboard/AdminDashboard/AdminHome";
import PaymentHistory from "../../pages/Dashboard/StudentDashboard/PaymentHistory/PaymentHistory";
import ErrorPage from "../../pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "registration",
        element: <Registration />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "instructors",
        element: <Instructors />,
      },
      {
        path: "classesPage",
        element: <ClassesPage />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    errorElement:<ErrorPage/>,
    children: [
      {
        path: "studentHome",
        element: <StudentHome />,
      },
      {
        path: "instructorHome",
        element: <Instructor><InstructorHome></InstructorHome></Instructor>
      },
      {
        path: "adminHome",
        element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
      },
      {
        path: "myClass",
        element: <MyClass />,
      },
      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory />,
      },
      {
        path: "allUsers",
        element: <AdminRoute><AllUsers /></AdminRoute>,
      },
      {
        path: "addAClass",
        element: <Instructor><AddAClass /></Instructor>,
      },
      {
        path: "pendingClass",
        element: <ManageClasses />,
      },
      {
        path: "instructorClass",
        element: <Instructor><InstructorClass /></Instructor>,
      },
    ],
  },
]);
