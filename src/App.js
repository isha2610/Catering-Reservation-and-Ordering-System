// import { firebase } from "..firebase";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import "bootstrap";
import UploadProducts from "./components/UploadProducts";
import ViewOrders from "./components/ViewOrders";
import CartOrderplace from "./components/cartOrderplace";
import ViewProducts from "./components/ViewProducts";
import MyProfile from "./components/MyProfile";
import Home from "./components/Home"; // home renders to nav, sign in and sign up
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/signin" element={<SignIn/>}/>
        <Route path="/uploadproducts" element={<UploadProducts/>}/>
        <Route path="/vieworders" element={<ViewOrders/>}/>
        <Route path="/cart" element={<CartOrderplace/>}/>
        <Route path="/products" element={<ViewProducts/>}/>
        <Route path="/profile" element={<MyProfile/>}/>
        </Routes>
      </BrowserRouter>

      

    </div>
  );
}

export default App;