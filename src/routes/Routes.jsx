import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Instructors from "../Pages/Instructors/Instructors/Instructors";
import Classes from "../Pages/Classes/Classes/Classes";
import Login from "../Pages/User/Login";
import SignUp from "../Pages/User/SignUp";
import Dashboard from "../Layouts/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../Pages/Dashboard/admin/AllUsers";
import AddaClass from "../Pages/Dashboard/instructor/AddaClass";
import MyClasses from "../Pages/Dashboard/instructor/MyClasses";
import ManageClasses from "../Pages/Dashboard/admin/ManageClasses";
import InstructorRoute from "./InstructorRoute";
import AdminRoute from "./AdminRoute";
import EnrolledClasses from "../Pages/Dashboard/users/EnrolledClasses";
import StudentRoute from "./StudentRoute";
import SelectedClasses from "../Pages/Dashboard/users/SelectedClasses";
import PaymentHistory from "../Pages/Dashboard/users/PaymentHistory";
import Payment from "../Pages/Dashboard/users/Payments/Payment";
import DashboardHome from "../Pages/Dashboard/DashboardHome";
import Home from "../Pages/Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/instructors",
        element: <Instructors></Instructors>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <DashboardHome />,
      },
      //admin
      {
        path: "manageUsers",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "manageClasses",
        element: (
          <AdminRoute>
            <ManageClasses></ManageClasses>
          </AdminRoute>
        ),
      },
      //instructor
      {
        path: "addClass",
        element: (
          <InstructorRoute>
            <AddaClass></AddaClass>
          </InstructorRoute>
        ),
      },
      {
        path: "myClasses",
        element: (
          <InstructorRoute>
            <MyClasses></MyClasses>
          </InstructorRoute>
        ),
      },
      //user
      {
        path: "enrolledClasses",
        element: (
          <StudentRoute>
            <EnrolledClasses></EnrolledClasses>
          </StudentRoute>
        ),
      },
      {
        path: "selectedClasses",
        element: (
          <StudentRoute>
            <SelectedClasses></SelectedClasses>
          </StudentRoute>
        ),
      },
      {
        path: "paymentHistory",
        element: (
          <StudentRoute>
            <PaymentHistory></PaymentHistory>
          </StudentRoute>
        ),
      },
      {
        path: "payment",
        element: (
          <StudentRoute>
            <Payment></Payment>
          </StudentRoute>
        ),
      },
    ],
  },
]);
