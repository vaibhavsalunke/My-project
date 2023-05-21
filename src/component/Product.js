import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import { Link, useNavigate } from "react-router-dom";

const Product = () => {
  const [product, setProduct] = useState([""]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async (e) => {
    let result = await fetch("http://localhost:8080/product");
    result = await result.json();
    setProduct(result);
  };
  console.log("product", product);
  const navigate = useNavigate();
  function add() {
    navigate("/addproduct");
  }

  const deleteProduct = async (id) => {
    let result = await fetch(`http://localhost:8080/product/${id}`, {
      method: "Delete",
    });
    result = await result.json();
    if (result) {
      getProducts();
    }
  };
  return (
    <>
      <Nav />
      <div className="row ">
        <div className="col-md-2">
          <ul className="bg-light h-full b-0   ">
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
        <div className="col-md-10 py-3">
          <div className="row">
            <div className="col-md-2">
              <h5>Product</h5>
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

          <table className="table container pt-5 mt-4">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">PackSize</th>
                <th scope="col">category</th>
                <th scope="col">MRP</th>

                <th scope="col">Status</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {product.map((item, index) => {
                return (
                  <tr>
                    <th scope="row">{index + 1}</th>
                    <td>{item.name}</td>
                    <td>{item.packsize}</td>
                    <td>{item.category}</td>
                    <td>{item.mrp}</td>
                    <td>{item.status}</td>

                    <td>
                      <Link to={"/updateproduct/" + item._id}>
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

export default Product;
