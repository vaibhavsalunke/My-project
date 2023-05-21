import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();
  const navigatation = (e) => {
    navigate("/");
  };
  return (
    <>
      <nav class="navbar navbar-light bg-primary justify-content-between">
        <a class="navbar-brand text-white">Digital Flake</a>

        <button type="button" onClick={navigatation} class="btn btn-primary">
          LogOut
        </button>

        {/* <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  LogOut
                </h5>
                <button
                  type="button"
                  class="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">Are you sure you want to logout?</div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Cancle
                </button>
                <button
                  type="button"
                  onClick={navigatation}
                  class="btn btn-primary"
                >
                  Confirm
                </button>
              </div>
            </div>
          </div>
        </div> */}
      </nav>
    </>
  );
};

export default Nav;
