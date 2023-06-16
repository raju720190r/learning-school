import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Instructors from "../Pages/Instructors/Instructors";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layout/Dashboard";
import MyClass from "../Pages/Dashboard/MyClass";
import EnrollClass from "../Pages/Dashboard/EnrollClass";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory";
import AllUsers from "../Pages/Dashboard/AllUsers";
import Classes from "../Pages/Classes/Classes";
import AddClass from "../Pages/Dashboard/AddClass";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element:<Home></Home>
            },
            {
                path:'login',
                element:<Login></Login>
            },
            {
                path:'signUp',
                element:<SignUp></SignUp>
            },
            {
                path:'instructors',
                element:<PrivateRoute><Instructors></Instructors></PrivateRoute>
            },
            {
                path:'classes',
                element:<Classes></Classes>
            }

        ]
    },
    {
        path:'dashboard',
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:[
             {
                path:'myClasses',
                element:<MyClass></MyClass>

             },
             {
                path:'myEnrollClass',
                element:<EnrollClass></EnrollClass>
             },
             {
                path:'paymentHistory',
                element:<PaymentHistory></PaymentHistory>
             },
             {
                path:'allUsers',
                element:<PrivateRoute><AllUsers></AllUsers></PrivateRoute>
             },
             {
                path:'addClass',
                element:<AddClass></AddClass>,
             },
             {
                path:'myClass',
                element:
             }
             
            

        ]
    }
]);