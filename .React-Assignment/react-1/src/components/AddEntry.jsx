import React, { useState } from "react";
// import Pagination from './Pagination';

function AddEntry(props) {

  const count = props.newEmployee.length
  console.log(props.newEmployee.length)
  const visible = {
    visiblity: 'visible'
  }
  const hidden = {
    visibility: 'hidden',
  }


  return (
    <>
      <div className="add-area">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="button-section d-flex justify-content-between">
                <div className="entry-count">
                  <p>Number of entry : <b> {count} </b> </p>
                </div>
              </div>
            </div>
            <div className="col-md-8" >
              <div className="add float-lg-end float-start">
                <div className="show-count d-flex justify-content-center align-items-center " style={(props.newEmployee.length > 2 ? visible : hidden)}>
                  <label htmlFor="entryList" className="me-2">Entry per page : </label>
                  <select className="form-select form-select-sm w-25 me-4 h-25" name="entryList" id="entryList" value={props.entry} onChange={props.handleChoose}>
                    {/* <option >choose</option> */}
                    <option value='2'>2</option>
                    <option value='5'>5</option>
                  </select>
                  {/* {console.log(props.entry)} */}
                </div>

                <button className="btn btn-success m-auto" data-bs-toggle="modal" data-bs-target="#staticBackdrop" >
                  {''}  Add Entry
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Pagination entry={entry}/> */}
    </>
  );
}


export default AddEntry;