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



function App() {

  const newEmployeeData = []

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

  return (
    <div className="App">
      <Navigation />
      <AddEntry newEmployee={newEmployee}/>
      <ModalForm addEmployee={addEmployee} />
      <DisplayTable newEmployee={newEmployee} editEntry={editEntry} deleteEntry={deleteEntry} />
      {editData ? <EditEntry editData={editData} enteredData={enteredData} updateEntry={updateEntry} /> : <ModalForm addEmployee={addEmployee} />}

    </div >
  );
}

export default App;
