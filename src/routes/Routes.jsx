import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Instructors from "../Pages/Instructors/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes/Classes";
import Login from "../Pages/User/Login";
import SignUp from "../Pages/User/SignUp";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../Pages/Dashboard/admin/AllUsers";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'/instructors',
            element: <Instructors></Instructors>
        },
        {
            path: '/classes',
            element: <PrivateRoute><Classes></Classes></PrivateRoute>
        },
        {
            path:'/login',
            element: <Login></Login>
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>
        }
      ]
    },
    {
        path:'dashboard',
        element:<PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children:[
            //admin
            {
                path:'manageUsers',
                element: <AllUsers></AllUsers>
            }
            //instructor

            //user
        ]
    }
  ]);
