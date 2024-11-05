// import { firebase } from "..firebase";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import "bootstrap";
import UploadProducts from "./UploadProducts";
import ViewOrders from "./ViewOrders";
import CartOrderplace from "./cartOrderplace";
import ViewProducts from "./ViewProducts";
import MyProfile from "./myProfile";
import Home from "./Home";
import { BrowserRouter, Router, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Home/>
      <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/uploadproducts" element={<UploadProducts/>}/>
          <Route path="/vieworders" element={<ViewOrders/>}/>
          <Route path="/cart" element={<CartOrderplace/>}/>
          <Route path="/products" element={<ViewProducts/>}/>
      </BrowserRouter>

      

    </div>
  );
}

export default App;