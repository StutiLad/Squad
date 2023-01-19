import React from "react";

const navBackground = {
  backgroundColor: `#e3f2fd`,
};

export default function () {
  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg" style={navBackground}>
          <div className="container">
            <a className="navbar-brand fs-30">
              <b>CRUD</b>
            </a>
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
              <form className="d-flex po" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-dark">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
