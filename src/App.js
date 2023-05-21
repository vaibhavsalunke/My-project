import React from "react";
import Login from "./component/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import Category from "./component/Category";
import AddCategory from "./component/AddCategory";
import Product from "./component/Product";
import AddProduct from "./component/AddProduct";
import Signup from "./component/Signup";
import UpdateProduct from "./component/UpdateProduct";
import UpdateCategory from "./component/UpdateCategory";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/category" element={<Category />} />
          <Route path="/addcategory" element={<AddCategory />} />
          <Route path="/updatecategory/:id" element={<UpdateCategory />} />
          <Route path="/product" element={<Product />} />
          <Route path="/addproduct" element={<AddProduct />} />
          <Route path="/updateproduct/:id" element={<UpdateProduct />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
