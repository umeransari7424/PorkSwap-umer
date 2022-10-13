import React from "react";
import "bootstrap/dist/css/bootstrap.css";

function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg py-4">
        <div className="container">
          <img src="Assets/logo.png" width={"190px"} alt="PorkSwap" />

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Features
                </a>
              </li>{" "}
              &nbsp; &nbsp; &nbsp;
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Litepaper
                </a>
              </li>
              &nbsp; &nbsp;&nbsp;
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Plateform
                </a>
              </li>{" "}
              &nbsp; &nbsp;&nbsp;
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Roadmap
                </a>
              </li>
              &nbsp; &nbsp;&nbsp;
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  FAQs
                </a>
              </li>{" "}
              &nbsp; &nbsp;&nbsp;
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Audit Report
                </a>
              </li>{" "}
              &nbsp; &nbsp;&nbsp;
              
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
