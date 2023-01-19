
import React, { useState } from "react";
import DisplayTable from "./DisplayTable";


function ModalForm(props) {

  // const newData = { id: null, fname: '', lname: '', email: '', phone: '', gender: '', department: '', skills: '', about: '' }
  const newData = { id: null, fname: ' '};
  const [Emp, setEmp] = useState(newData.fname);
  // const [fname, setfname] = useState(newData)
  // const [lname, setlname] = useState(newData)
  // const [email, setemail] = useState(newData)
  // const [phone, setphone] = useState(newData)
  // const [gender, setgender] = useState(newData)
  // const [department, setdepartment] = useState(newData)
  // const [skill, setskill] = useState(newData)
  // const [about, setabout] = useState(newData)
  const handleSubmit = (e) => {
    // console.log(fname, lname, email, phone, gender, department, about)
    console.log(Emp)
    e.preventDefault();
    // const newEmployee = { fname:fname, lname:lname, email:email, phone:phone, gender:gender, department:department, about:about }
    // (newEmployee);
    // setfname(newData);
    // setlname('');
    // setemail('');
    // setphone('');
    // setgender('');
    // setdepartment('');
    // setabout('')
  }

  return (
    <>
      <div
        className="modal fade modal-xl"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Details
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            {/* ----- Model Body ----- */}
            <div className="modal-body">
              <div className="col-md-12">
                <form onSubmit={handleSubmit}>
                  <div className="col-md-12">

                    <div className="form-group">
                      <div className="row">
                        {/* ===== FIRST NAME ===== */}
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label htmlFor="fname" className="form-label">First Name</label>
                            <input type="text"
                              className="form-control" placeholder="Enter Your Name" value={Emp.fname}
                              onChange={(event) => setEmp(event.target.value)} />
                          </div>
                        </div>

                        {/* ===== LAST NAME ===== */}
                        {/* <div className="col-md-6">
                          <div className="mb-3">
                            <label htmlFor="lname" className="form-label">Last Name</label>
                            <input type="text"
                              className="form-control" name="last-name" id="lname" placeholder="Enter Your Surname" value={employee.lname} onChange={(e) => setEmployee([e.target.value])} />
                          </div>
                        </div> */}
                      </div>
                    </div>

                  </div>
                </form>
              </div>
            </div>

            <div className="modal-footer">
              <button type="submit" className="btn btn-primary" data-bs-dismiss="modal" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export default ModalForm;

