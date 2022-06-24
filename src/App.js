import { Suspense } from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageLoading from "./components/PageLoading";
import AllRoutes from "./routes";
import { Toaster } from "react-hot-toast";
// import AboutLayout from "./layouts/AboutLayout";
function App() {
  // const name = window.$name;
  // console.log(name);
  return (
    <>
      <Suspense fallback={<PageLoading />}>
        <AllRoutes />
      </Suspense>
      <Toaster position="top-right" reverseOrder={true} />
      <ToastContainer />
    </>
  );
}

export default App;

