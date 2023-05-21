import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate("/dashboard");

  const [mail, setMail] = useState();
  const [password, setPassword] = useState();
  return (
    <>
      <div className="container m-auto">
        <div className="px-5 border border-dark py-5">
          <div className="row">
            <div class="card w-50 col-md-6 text-center">
              <h1 class="">Digital Flake</h1>
              <p>Welcome To Digitalflake Admin</p>
              <div class="card-body">
                <form>
                  <div class="form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="formGroupExampleInput"
                      placeholder="Enter Your Mail"
                      onChange={(e) => {
                        setMail(e.target.value);
                      }}
                      required
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="password"
                      class="form-control"
                      id="formGroupExampleInput2"
                      placeholder="Enter Your Password"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                      required
                    />
                  </div>
                  <button
                    onClick={handleClick}
                    className="btn btn-primary w-50"
                  >
                    Log IN
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYFqufRoE50kdbNP20g4y_5xxaDehc1bCIOg&usqp=CAU"
                width="400"
              ></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
