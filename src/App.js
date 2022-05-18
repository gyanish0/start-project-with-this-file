import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./components/NotFound";
import AuthGuard from "./components/AuthGuard";
import HomeLayout from "./layouts/HomeLayout";
import PageLoading from "./components/PageLoading";
import Profile from "./views/pages/user/Profile";

const Home = lazy(() => import("./views/pages/Home/Home"));
const GitRepos = lazy(() => import("./views/pages/github/GitRepos"));
const Login = lazy(() => import("./views/pages/auth/Login"));
const SignUp = lazy(() => import("./views/pages/auth/SignUp"));
function App() {
  return (
    <>
      <HomeLayout>
        <Suspense fallback={<PageLoading />}>
          <Routes>
            <Route path="/" element={<Home />} />
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
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <ToastContainer />
      </HomeLayout>
    </>
  );
}

export default App;
