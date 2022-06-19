import React from "react";
import { Link } from "react-router-dom";
import './style.css'

const Navigation = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-dark ">
        <div className="container-fluid mx-5">
          <Link className="navbar-brand text-white" to="/">
            <img src="https://cdn-icons-png.flaticon.com/512/948/948036.png" alt="logo"
            style={{
                maxWidth:'50px'
            }} />
          </Link>
          <button
            className="navbar-toggler text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-white"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link text-white" aria-current="page" to="/">
                  Blog
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/menu">
                  Menu
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-white" to="/reservaciones">
                  Reservaciones
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
