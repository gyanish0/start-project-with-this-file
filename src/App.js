import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./views/pages/auth/Login";
import SignUp from "./views/pages/auth/SignUp";
import Home from "./views/pages/Home/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "./components/NotFound";
import GitRepos from "./views/pages/github/GitRepos";
import AuthGuard from "./components/AuthGuard";
function App() {
  return (
    <div>
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
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
