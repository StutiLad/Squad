import React from "react";

function AddEntry() {
  return (
    <>
      <div className="add-area">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="button-section d-flex justify-content-between">
                <div className="entry-count">
                  <p>Number of entry : </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="add float-lg-end float-start">
                <div className="show-count">
                  <p className="m-auto me-lg-5 me-sm-3">Number of entry per page</p>
                </div>

                <button className="btn btn-success m-auto" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                  <b>+</b> Add Entry
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default AddEntry;
