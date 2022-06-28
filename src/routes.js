import React, { lazy } from "react";
import { useRoutes } from "react-router";
import HomeLayout from "./layouts/HomeLayout";
import RandomImages from "./views/pages/user/RandomImages";
import AboutLayout from "./layouts/AboutLayout";
import GoogleSearch from "./views/pages/google/GoogleSearch";
import AuthGuard from "./components/AuthGuard";
import NotFound from "./components/NotFound";
const Home = lazy(() => import("./views/pages/Home/Home"));
const GitRepos = lazy(() => import("./views/pages/github/GitRepos"));
const Login = lazy(() => import("./views/pages/auth/Login2"));
const SignUp = lazy(() => import("./views/pages/auth/SignUp2"));
const Profile = lazy(() => import("./views/pages/user/Profile"));
const News = lazy(() => import("./views/pages/news/News"));
const Weather = lazy(() => import("./views/pages/weather/Weather"));
function AllRoutes() {
  let routes = useRoutes([
    {
      path: "/",
      element: <HomeLayout />,
      children: [
        {
          element: <Home />,
          index: true,
        },
        {
          path: "demo",
          element: <RandomImages />,
        },
        {
          path: "git",
          element: <GitRepos />,
        },
        {
          path: "profile",
          element: (
            <AuthGuard>
              <Profile />
            </AuthGuard>
          ),
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "signup",
          element: <SignUp />,
        },
      ],
    },
    {
      element: <AboutLayout />,
      children: [
        {
          path: "aboutme",
          element: <GoogleSearch />,
        },
        {
          path: "news",
          element: <News />,
        },
        {
          path: "weather",
          element: <Weather />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);
  return routes;
}

export default AllRoutes;
