import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import Topbar from "./layouts/Topbar";
import EditPage from "./pages/EditPage";
import { ToastContainer } from "react-toastify";
import SignUp from "./pages/SignUp";
function App() {
  return (
    <>
    <ToastContainer/>
      <BrowserRouter>
      <Topbar/>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/homepage" element={<HomePage />}></Route>
          <Route path="/edit" element={<EditPage />}></Route>
          {/* <Route
            path="/productdetails/:productId"
            element={<ProductDetail />}
          ></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
