import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./components/NotFound";
import AuthGuard from "./components/AuthGuard";
import HomeLayout from "./layouts/HomeLayout";
import PageLoading from "./components/PageLoading";
import Test from "./views/pages/Test";
// import AboutLayout from "./layouts/AboutLayout";

const Home = lazy(() => import("./views/pages/Home/Home"));
const GitRepos = lazy(() => import("./views/pages/github/GitRepos"));
const Login = lazy(() => import("./views/pages/auth/Login2"));
const SignUp = lazy(() => import("./views/pages/auth/SignUp2"));
const Profile = lazy(() => import("./views/pages/user/Profile"));
function App() {
  // const name = window.$name;
  // console.log(name);
  return (
    <>
      <Suspense fallback={<PageLoading />}>
        <Routes comonent={HomeLayout}>
          <Route path="/" element={<HomeLayout />}>
            <Route index element={<Home />} />
            <Route
              path="/git"
              element={
                <AuthGuard>
                  <GitRepos />
                </AuthGuard>
              }
            />
            <Route
              path="/profile"
              element={
                <AuthGuard>
                  <Profile />
                </AuthGuard>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>
          {/* <Route path="/aboutme" element={<AboutLayout />}>
            <Route index element={<GitPort />} />
          </Route> */}
          <Route path="*" element={<NotFound />} />
          <Route path="demo" element={<Test />} />
        </Routes>
      </Suspense>
      <ToastContainer />
    </>
  );
}

export default App;
