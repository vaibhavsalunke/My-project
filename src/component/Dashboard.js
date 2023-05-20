import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <Nav />
      <div className="row">
        <div className="col-md-2">
          <ul className="bg-light  text-none  ">
            <li className="">
              <Link to="">Home</Link>
            </li>
            <li>
              <Link to="/category">Category</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
          </ul>
        </div>
        <div className="col-md-10 pt-5 text-center">
          <h1 className="text-primary">Digital Flake </h1>
          <h4>Welcome to Digitalflake Admin</h4>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
