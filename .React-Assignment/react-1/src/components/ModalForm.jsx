import React, { useState } from "react";
import { useForm } from "react-hook-form";

function ModalForm(props) {

  const Data = ({ id: null, fname: '', lname: '', email: '', phone: '', gender: '', department: '', skills: [], about: '' })

  const [employee, setEmployee] = useState(Data)



  // const { register, handleSubmit, watch, formState: { errors } } = useForm();
  // const onSubmit = data => console.log(data);

  // console.log(watch("example"));

  const handleInputFname = (event) => {
    event.persist();
    setEmployee((value) => ({
      ...value,
      fname: event.target.value,
    }));
  }

  const handleInputLname = (event) => {
    event.persist();
    setEmployee((value) => ({
      ...value,
      lname: event.target.value,
    }));
  }

  const handleInputEmail = (event) => {
    event.persist();
    setEmployee((value) => ({
      ...value,
      email: event.target.value,
    }));
  }
  const handleInputPhone = (event) => {
    event.persist();
    setEmployee((value) => ({
      ...value,
      phone: event.target.value,
    }));
  }

  const handleInputGender = (event) => {
    event.persist();
    setEmployee((value) => ({
      ...value,
      gender: event.target.value,
    }));
  };
  const handleInputSelect = (event) => {
    event.persist();
    setEmployee((value) => ({
      ...value,
      department: event.target.value,
    }));
  };

  const handleInputSkiills = (event) => {
    const { value, checked } = event.target;
    const { skills } = employee.skills;
    // console.log(`${value} is ${checked}`);
    // Case 1 : The user checks the box
    if (checked) {
      setEmployee({
        skills: [...skills, value],
      });
    }
    else {
      setEmployee({
        skills: skills.filter((event) => event !== value),
      });
    }
    // event.persist();
    // setEmployee((value) => ({
    //   ...value,
    //   skills: (event.target.value)
    // }));
  };

  const handleInputAbout = (event) => {
    event.persist();
    setEmployee((value) => ({
      ...value,
      about: event.target.value,
    }));
  }

  const handleSubmit = () => {
    props.addEmployee(employee)
    setEmployee(Data)
    // props.addEmployee(...[employee.response])

    // alert("Successfully entered")
  }


  return (
    <div>
      <form className="needs-validation" onSubmit={handleSubmit}>
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
                  {/* <form className="needs-validation" onSubmit={handleSubmit} novalidate> */}
                  <div className="col-md-12">

                    <div className="form-group">
                      <div className="row">
                        {/* ===== FIRST NAME ===== */}
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label htmlFor="fname" className="form-label">First Name</label>
                            <input type="text"
                              className="form-control" placeholder="Enter Your Name" value={employee.fname}
                              onChange={handleInputFname} required
                            />
                          </div>
                        </div>

                        {/* ===== LAST NAME ===== */}
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label htmlFor="lname" className="form-label">Last Name</label>
                            <input type="text"
                              className="form-control" name="last-name" id="lname" placeholder="Enter Your Surname" value={employee.lname} onChange={handleInputLname} required />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="row">
                        {/* ===== EMAIL ADDRESS ===== */}
                        <div div className="col-md-6">
                          <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>

                            <input type="email"
                              className="form-control" name="email" id="email" placeholder="Enter Your Email Address" value={employee.email} onChange={handleInputEmail} required />
                          </div>
                        </div>

                        {/*  ===== PHONE NUMBER ===== */}
                        <div className="col-md-6">
                          <div className="mb-3">
                            <label htmlFor="phn" className="form-label">Phone number</label>
                            <input type="number"
                              className="form-control" name="phn" id="phn" placeholder="Enter Your Phone number" value={employee.phone} onChange={handleInputPhone} required />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/*  ===== GENDER =====  */}
                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="mb-3">
                            <div className="form-check-inline">
                              <label htmlFor="gender">Gender</label>
                            </div>
                            <div className="form-check form-check-inline">
                              <input className="form-check-input" type="radio" name="gender" value="Male" id="Male"
                                onChange={handleInputGender} />
                              <label className="form-check-label" htmlFor="Male">
                                Male
                              </label>
                            </div>
                            <div className="form-check form-check-inline">
                              <input className="form-check-input" type="radio" name="gender" value="Female" id="Female" onChange={handleInputGender} />
                              <label className="form-check-label" htmlFor="Female">
                                Female
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* ===== DEPARTMENT =====  */}
                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="mb-3">
                            <label htmlFor="dept" className="form-label">Department</label>
                            <select className="form-select form-select" name="dept" id="dept" value={employee.department} onChange={handleInputSelect}>
                              <option defaultChecked>Select Option</option>
                              <option value="PHP">PHP</option>
                              <option value=".NET">.NET</option>
                              <option value="SEO">SEO</option>
                              <option value="Mobile">Mobile</option>
                              <option value="Admin/HR">Admin/HR</option>
                              <option value="Account">Account</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/*  ===== SKILLS =====  */}
                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="mb-3 ">
                            <div className="col-md-12">
                              <label htmlFor="skills" className="form-label">Skills</label><br />
                            </div>

                            <div className="col-md-12">
                              <ul className="d-inline-flex list-unstyled w-100">
                                <li>
                                  <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="skills" name="skills" value='Programming' onChange={handleInputSkiills} />
                                    <label className="form-check-label" htmlFor="skills">Programming</label>
                                  </div>
                                </li>
                                <li>
                                  <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="skills" name="skills" value='Communication' onChange={handleInputSkiills} />
                                    <label className="form-check-label" htmlFor="skills">Communication</label>
                                  </div>
                                </li>
                                <li>
                                  <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="skills" name="skills" value='Optimization' onChange={handleInputSkiills} />
                                    <label className="form-check-label" htmlFor="skills">Optimization</label>
                                  </div>
                                </li>
                                <li>
                                  <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="skills" name="skills" value='Frontend Technology' onChange={handleInputSkiills} />
                                    <label className="form-check-label" htmlFor="skills">Frontend Technology</label>
                                  </div>
                                </li>
                              </ul>
                            </div>

                            <div className="col-md-12">
                              <ul className="d-inline-flex list-unstyled w-100">
                                <li>
                                  <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="skills" name="skills" value='Recruitment' onChange={handleInputSkiills} />
                                    <label className="form-check-label" htmlFor="skills">Recruitment</label>
                                  </div>
                                </li>
                                <li>
                                  <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="skills" name="skills" value='App Development' onChange={handleInputSkiills} />
                                    <label className="form-check-label" htmlFor="skills">App Development</label>
                                  </div>
                                </li>
                                <li>
                                  <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="skills" name="skills" value='Finance' onChange={handleInputSkiills} />
                                    <label className="form-check-label" htmlFor="skills">Finance</label>
                                  </div>
                                </li>
                                <li>
                                  <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="skills" name="skills"
                                      value='Back-end Technology' onChange={handleInputSkiills} />
                                    <label className="form-check-label" htmlFor="skills">Back-end Technology</label>
                                  </div>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/*  ===== About =====  */}
                    <div className="form-group">
                      <div className="row">
                        <div className="col-md-12">
                          <div className="mb-3">
                            <label htmlFor="abt" className="form-label">About</label>
                            <textarea className="form-control" name="abt" id="abt" rows="3" value={employee.about}
                              onChange={handleInputAbout}></textarea>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                  {/* </form> */}
                </div>
              </div>

              <div className="modal-footer">
                {/* 
                <button type="button" className="btn btn-primary 'float-end" data-bs-dismiss="modal" >Submit</button> */}

                {/* <button type="submit" className="btn btn-primary float-end" data-bs-dismiss="modal" onClick={handleSubmit}>Submit</button> */}

                {((employee.fname === '') && (employee.lname === '') && (employee.email === '')) ?
                  (<button type="button" className="btn btn-primary 'float-end" >Submit</button>) : (<button type="submit" className="btn btn-primary float-end" data-bs-dismiss="modal" onClick={handleSubmit}>Submit</button>)}
              </div>
            </div>
          </div>
        </div >
      </form >
    </div >
  );
}


export default ModalForm;

