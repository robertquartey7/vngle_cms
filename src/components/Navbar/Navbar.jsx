import React from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";

export default function Navbar(props) {
  return (
    <nav className="top-header navbar-dark bg-dark">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/homepage">
          <img
            src={"/img/logo.png"}
            alt=""
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
          Vngle
        </Link>
      </div>

      <div className="menu-links">
        <Link to="/" className="btn-1">
          Stories
        </Link>

        <button className="btn btn-light" onClick={props?.signOut}>
          Logout
        </button>

        {/* <Link to='/' className="" onClick={handleRemoveCookie}>Logout</Link> */}
      </div>
    </nav>
  );
}
