import React from "react";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Mitiyal Deco
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link">Contacto</a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Productos
                </a>
                <ul className="dropdown-menu" id="dropMenu">
                  <li>
                    <Link to="category/cascada" className="dropdown-item">
                      Cascadas
                    </Link>
                  </li>
                  <li>
                    <Link to="category/sahumerio" className="dropdown-item">
                      Sahumerios
                    </Link>
                  </li>
                  <li>
                    <Link to="category/macetas" className="dropdown-item">
                      Macetas
                    </Link>
                  </li>
                  <li>
                    <Link to="category/combo" className="dropdown-item">
                      Combos
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <div>
              <Link to="/cart" className="icon">
                <CartWidget />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
