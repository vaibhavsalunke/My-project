import React, { useState } from "react";
import Nav from "./Nav";

import { Link, useNavigate } from "react-router-dom";

const AddProduct = () => {
  const navigate = useNavigate();
  const [category, SetCategory] = useState("");
  const [name, SetName] = useState("");
  const [packsize, SetSize] = useState("");
  const [mrp, SetMrp] = useState("");
  const [status, SetStatus] = useState("");

  const AddProduct = async () => {
    console.log(category, name, packsize, mrp, status);
    const result = await fetch("http://localhost:8080/add-product", {
      method: "post",
      body: JSON.stringify({ category, name, packsize, mrp, status }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    navigate("/product");
  };

  return (
    <>
      <Nav />
      <div className="row px-3">
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

        <div className="container pt-2  col-md-10">
          <div className="add-category">
            <div className="card ">
              <h4 className="pl-4 pt-3">Add Product</h4>
              <div className="card-body">
                <form>
                  <div class="row">
                    <div class="col-md-4">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Product Name "
                        value={name}
                        onChange={(e) => {
                          SetName(e.target.value);
                        }}
                      />
                    </div>
                    <div class="col-md-4">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Pack Size"
                        value={packsize}
                        onChange={(e) => {
                          SetSize(e.target.value);
                        }}
                      />
                    </div>
                    <div class="col-md-4">
                      <select
                        onChange={(e) => {
                          SetCategory(e.target.value);
                        }}
                        value={category}
                        id="inputState"
                        class="form-control"
                      >
                        <option selected>category...</option>

                        <option>milk</option>
                        <option>Fruit</option>
                      </select>
                    </div>
                  </div>
                  <div className="row pt-4">
                    <div class="col-md-4">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="MRP"
                        value={mrp}
                        onChange={(e) => {
                          SetMrp(e.target.value);
                        }}
                      />
                    </div>
                    <div class="col-md-4">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Status"
                        value={status}
                        onChange={(e) => {
                          SetStatus(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div class="footer float-right">
                <button
                  onClick={AddProduct}
                  type="submit"
                  class="btn btn-primary ml-4 mb-3"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
