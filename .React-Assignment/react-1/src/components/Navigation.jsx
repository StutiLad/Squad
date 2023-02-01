import React from "react";
import $ from 'jquery';

const navBackground = {
  backgroundColor: `#e3f2fd`,
};



export default function Navigation() {

  const handleSearch = (e) => {
    $('#data').on("keyup", function () {
      var value = (e).toLowerCase();
      $("#Datatbl tr").filter(function () {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      })
      
    })
  };

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg" style={navBackground}>
          <div className="container">
            <p className="navbar-brand fs-30 fw-bolder">
              CRUD
            </p>
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
                <input id="data"
                  className="form-control  me-2"
                  type="search"
                  placeholder="Search"
                  onChange={(e) => handleSearch(e.target.value)}
                />
              </form>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
