import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageLoading from "./components/PageLoading";
import AllRoutes from "./AllRoutes";
// import AboutLayout from "./layouts/AboutLayout";
function App() {
  // const name = window.$name;
  // console.log(name);
  return (
    <>
      <Suspense fallback={<PageLoading />}>
        <AllRoutes />
      </Suspense>
      <ToastContainer />
    </>
  );
}

export default App;
