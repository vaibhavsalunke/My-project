import React, { useState } from "react";
import Nav from "./Nav";
import { Link, useNavigate } from "react-router-dom";

const AddCategory = () => {
  const navigate = useNavigate();
  const [name, SetName] = useState("");
  const [description, SetDescription] = useState("");
  const [status, SetStatus] = useState("");

  const addcategory = async () => {
    console.log(name, description, status);
    const result = await fetch("http://localhost:5000/add-category", {
      method: "post",
      body: JSON.stringify({ name, description, status }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    navigate("/category");
  };
  return (
    <>
      <Nav />
      <div className="row">
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
      </div>
      <div className="container col-md-10">
        <div className="add-category">
          <div className="card">
            <h1>Add Category</h1>
            <div className="card-body">
              <form>
                <div class="form-row">
                  <div class="col-md-4">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Category Name"
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
                      placeholder="Description"
                      value={description}
                      onChange={(e) => {
                        SetDescription(e.target.value);
                      }}
                    />
                  </div>
                  <div class="col-md-4">
                    <select
                      onChange={(e) => {
                        SetStatus(e.target.value);
                      }}
                      value={status}
                      id="inputState"
                      class="form-control"
                    >
                      <option selected>Choose...</option>

                      <option>Active</option>
                      <option>INActive</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
            <div class="footer float-right">
              <button
                onClick={addcategory}
                type="submit"
                class="btn btn-primary"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCategory;
