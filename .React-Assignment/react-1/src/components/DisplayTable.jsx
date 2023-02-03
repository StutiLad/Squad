import React, { useState } from "react";
// import ModalForm from "./ModalForm";
// import newEmployee from './AddEntry'
// import $ from 'jquery';
// import Pagination from './Pagination';


function DisplayTable(props) {

  const editSVG = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pen-fill" viewBox="0 0 16 16">
    <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z" />
  </svg>

  const deleteSVG = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash3-fill" viewBox="0 0 16 16">
    <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z" />
  </svg>

  const visible = {
    visiblity: 'visible'
  }
  const hidden = {
    visibility: 'hidden',
  }

  // const [entry, setEntry] = useState(2)
  // const handleChoose = (event) => {
  //   setEntry(
  //     event.target.value
  //   )
  // }

  // function currentData() {
  //      const begin = (currentPage - 1) * itemsPerPage;
  //      const end = begin + itemsPerPage;
  //      return data.slice(begin, end);
  //    }

  console.log('props.currentRecords', props.currentRecords, 'props.newemployee', props.newEmployee)



  return (
    <>

      <div className="container display-table base">
        <div className="row">
          <div className="col-md-12">

            <table className="table text-center"
              style={(props.newEmployee.length > 0 ? visible : hidden)}
            >
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Department</th>
                  <th scope="col">Skills</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              <tbody id="Datatbl">

                {/* {
                  ( props.entry == 2 ) ?
                    (props.newEmployee.map((item) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>
                          {item.fname}
                        </td>
                        <td>
                          {item.lname}
                        </td>
                        <td>
                          {item.email}
                        </td>
                        <td>
                          {item.gender}
                        </td>
                        <td>
                          {item.department}
                        </td>
                        <td>
                          {item.skills}
                        </td>
                        <td>
                          <button type="button" className="btn btn-outline-success mx-1" data-bs-toggle="modal" data-bs-target="#staticBackdropEdit" onClick={() => props.editEntry(item)}>{editSVG}</button>

                          <button type="button" className="btn btn-outline-danger mx-1" onClick={() => props.deleteEntry(item.id)}>{deleteSVG}</button>

                        </td>
                      </tr>
                    ))) :
                    (
                      props.currentRecords.length < props.newEmployee.length ?
                    (props.currentRecords.map((item) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>
                          {item.fname}
                        </td>
                        <td>
                          {item.lname}
                        </td>
                        <td>
                          {item.email}
                        </td>
                        <td>
                          {item.gender}
                        </td>
                        <td>
                          {item.department}
                        </td>
                        <td>
                          {item.skills}
                        </td>
                        <td>
                          <button type="button" className="btn btn-outline-success mx-1" data-bs-toggle="modal" data-bs-target="#staticBackdropEdit" onClick={() => props.editEntry(item)}>{editSVG}</button>

                          <button type="button" className="btn btn-outline-danger mx-1" onClick={() => props.deleteEntry(item.id)}>{deleteSVG}</button>

                        </td>
                      </tr>
                    )) ) :
                    (
                      <tr></tr>
                    )
                    )

                } */}


                {
                  props.currentRecords.length > 0 ?
                    (props.currentRecords.map((item) => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>
                          {item.fname}
                        </td>
                        <td>
                          {item.lname}
                        </td>
                        <td>
                          {item.email}
                        </td>
                        <td>
                          {item.gender}
                        </td>
                        <td>
                          {item.department}
                        </td>
                        <td>
                          {item.skills}
                        </td>
                        <td>
                          <button type="button" className="btn btn-outline-success mx-1" data-bs-toggle="modal" data-bs-target="#staticBackdropEdit" onClick={() => props.editEntry(item)}>{editSVG}</button>

                          <button type="button" className="btn btn-outline-danger mx-1" onClick={() => props.deleteEntry(item.id)}>{deleteSVG}</button>

                        </td>
                      </tr>
                    ))) :
                    (
                      <tr></tr>
                    )
                }

                {/* {console.log("item.skills" + props.currentRecords.skills)} */}

                
              </tbody>

            </table>

            <div>
              <p className="text-center fs-20" style={(props.newEmployee.length > 0 ? hidden : visible)}>Nothing to display. Make an entry to view</p>
            </div>
          </div>
        </div>
      </div>
      {/* <Pagination entry={entry} handleChoose={handleChoose} newEmployee={props.newEmployee} /> */}
    </>
  );
}

export default DisplayTable;
