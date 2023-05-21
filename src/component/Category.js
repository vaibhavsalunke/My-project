import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import { Link, useNavigate } from "react-router-dom";

const Category = () => {
  const [category, setCatagory] = useState([""]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async (e) => {
    let result = await fetch("http://localhost:8080/category");
    result = await result.json();
    setCatagory(result);
  };

  const deleteProduct = async (id) => {
    let result = await fetch(`http://localhost:8080/category/${id}`, {
      method: "Delete",
    });
    result = await result.json();
    if (result) {
      getProducts();
    }
  };

  const navigate = useNavigate();
  function add() {
    navigate("/addcategory");
  }
  return (
    <>
      <Nav />
      <div className="row ">
        <div className="col-md-2">
          <ul className="bg-light h-full   ">
            <li className="">
              <Link to="/dashboard">Home</Link>
            </li>
            <li>
              <Link to="/category">Category</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
            </li>
          </ul>
        </div>

        <div className="container">
          <div className="col-md-10 py-3">
            <div className="row">
              <div className="col-md-2">
                <h5>Category</h5>
              </div>
              <div className="col-md-8">
                <div class="input-group">
                  <input
                    type="search"
                    class="border border-info pl-2 w-75 rounded"
                    placeholder="Search..."
                    aria-label="Search"
                    aria-describedby="search-addon"
                  />
                  <button type="button" class="btn btn-outline-primary">
                    search
                  </button>
                </div>
              </div>
              <div className="col-md-2">
                <button onClick={add} className="btn btn-primary">
                  Add New
                </button>
              </div>
            </div>
          </div>
          <table className="table pt-4">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Description</th>
                <th scope="col">Status</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {category.map((item, index) => {
                return (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>{item.status}</td>
                    <td>
                      <Link to={"/updatecategory/" + item._id}>
                        {" "}
                        <button className="btn btn-danger">Edit</button>
                      </Link>
                      <button
                        onClick={() => deleteProduct(item._id)}
                        className="btn btn-primary"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Category;
