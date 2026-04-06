import { lazy } from "react";
import { Navigate } from "react-router-dom";
const Home = lazy(() => import("../pages/Home/Home"));
const Login = lazy(() => import("../pages/Login/Login"));
const Profile = lazy(() => import("../pages/profile/Profile"));
const Donate = lazy(() => import("../pages/navigationbar/Donate/Donate"));
const About = lazy(() => import("../pages/about/About"));
const Fundraise = lazy(
  () => import("../pages/navigationbar/Fondraise/Fondraise"),
);
const Router = [
  {
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    path: "/home",
    stuff: {},
    element: <Home />,
  },
  {
    path: "/login",
    stuff: { title: "Login" },
    element: <Login />,
  },
  {
    path: "/profile/:id",
    stuff: { title: "User profile" },
    element: <Profile />,
  },
  {
    path: "/donate",
    nav: { title: "Donate" },
    element: <Donate />,
  },
  {
    path: "/fundraise",
    nav: { title: "Fundraise" },
    element: <Fundraise />,
  },
  {
    path: "/about",
    stuff: { title: "About" },
    element: <About />,
  },
];
export default Router;
