import React, { useState } from "react";
import ModalForm from "./ModalForm";



function DisplayTable() {
  const visible = {
    visiblity: 'visible'
  }
  const hidden = {
    visibility: 'hidden'
  }
  return (
    <>
    
    
      <div className="container display-table base">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <table className="table" 
            // style={(Employee.length > 0 ? visible : hidden)} 
             >
              <thead>
                <tr>
                  <th scope="col">First Name</th>
                  <th scope="col">Last Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Gender</th>
                  <th scope="col">Department</th>
                  <th scope="col">Skills</th>
                  <th scope="col">Actions</th>
                </tr>
              </thead>
              {/* {
                Employee && Employee.length > 0 &&
                Employee.map((item) => {
                  return (
                    <tbody>
                      <tr key={item.id}>
                        <td>
                          {item.firstName}
                        </td>
                        <td>
                          {item.lastName}
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
                          {item.skill}
                        </td>
                        <td>
                          {item.about}
                        </td>
                      </tr>
                    </tbody >)
                })
              } */}
            </table>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>

      <ModalForm ModalForm={ModalForm} />
    </>
  );
}

export default DisplayTable;
