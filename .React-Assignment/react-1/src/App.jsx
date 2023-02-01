import React, { useState } from "react";
import Navigation from "./components/Navigation";
import './css/style.css'
import './css/font.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import ModalForm from "./components/ModalForm";
import AddEntry from "./components/AddEntry";
import DisplayTable from "./components/DisplayTable";
import EditEntry from "./components/EditEntry";
import Pagination from './components/Pagination';


function App() {


  const newEmployeeData = [{
    id: 1,
    fname: 'Stuti',
    lname: 'Lad', 
    email: 'Stuti@gmail.com', 
    phone: '1234098567', 
    gender: 'Female', 
    department: 'PHP', 
    skills: 'Frontend Technology', 
    about: 'avababjkbjkbfceb'

  },{
    id: 2,
    fname: 'x',
    lname: 'y', 
    email: 'xy@gmail.com', 
    phone: '1234098567', 
    gender: 'Male', 
    department: '.NET', 
    skills: 'back-end Technology', 
    about: 'avababjkbjkbfceb'
  }
]

  const [newEmployee, setNewEmployee] = useState(newEmployeeData)

  const addEmployee = (Data) => {
    Data.id = newEmployee.length + 1
    setNewEmployee([...newEmployee, Data])
  }


  const [editData, setEditData] = useState(false)
  const data = ({ id: null, fname: '', lname: '', email: '', phone: '', gender: '', department: '', skills: '', about: '' })
  const [enteredData, setEnteredData] = useState(data)
  const editEntry = (newEmployee) => {
    setEditData(true)
    setEnteredData({ id: newEmployee.id, fname: newEmployee.fname, lname: newEmployee.lname, email: newEmployee.email, phone: newEmployee.phone, gender: newEmployee.gender, department: newEmployee.department, skills: newEmployee.skills, about: newEmployee.about })
  }

  const updateEntry = (id, updateEntry) => {
    setEditData(false)
    setNewEmployee(newEmployee.map((user) => (user.id === id ? updateEntry : user)))
  }

  const deleteEntry = (id) => {
    setNewEmployee(newEmployee.filter((user) => user.id !== id))
  }

  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);

  // // const indexOfLastRecord = currentPage * recordsPerPage;
  // // const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  // // const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord);
  // const nPages = Math.ceil(newEmployeeData.length / recordsPerPage)
  const nPages = 1


  return (
    <div className="App">
      <Navigation />
      <AddEntry newEmployee={newEmployee} />
      <ModalForm addEmployee={addEmployee} />
      <DisplayTable newEmployee={newEmployee} editEntry={editEntry} deleteEntry={deleteEntry} />
      {editData ? <EditEntry editData={editData} enteredData={enteredData} updateEntry={updateEntry} /> : <ModalForm addEmployee={addEmployee} />}
      <Pagination
        nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        newEmployee={newEmployee}
      />
    </div >
  );
}

export default App;
