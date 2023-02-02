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

  const newEmployeeData = [
    {
      id: 1,
      fname: 'x',
      lname: 'y',
      email: 'xy@gmail.com',
      phone: '1234098567',
      gender: 'Male',
      department: '.NET',
      skills: 'back-end Technology',
      about: 'avababjkbjkbfceb'
    },
    {
      id: 2,
      fname: 'Stuti',
      lname: 'Lad',
      email: 'Stuti@gmail.com',
      phone: '1234098567',
      gender: 'Female',
      department: 'PHP',
      skills: 'Frontend Technology',
      about: 'avababjkbjkbfceb'

    },
    {
      id: 3,
      fname: 'x',
      lname: 'y',
      email: 'xy@gmail.com',
      phone: '1234098567',
      gender: 'Male',
      department: '.NET',
      skills: 'back-end Technology',
      about: 'avababjkbjkbfceb'
    },
    {
      id: 4,
      fname: 'x',
      lname: 'y',
      email: 'xy@gmail.com',
      phone: '1234098567',
      gender: 'Male',
      department: '.NET',
      skills: 'back-end Technology',
      about: 'avababjkbjkbfceb'
    },
    {
      id: 5,
      fname: 'x',
      lname: 'y',
      email: 'xy@gmail.com',
      phone: '1234098567',
      gender: 'Male',
      department: '.NET',
      skills: 'back-end Technology',
      about: 'avababjkbjkbfceb'
    },
    {
      id: 6,
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

  // console.log("ADD JSX newEmployee.length : ",newEmployee.length)

  const [entry, setEntry] = useState('2')

  const handleChoose = (event) => {
    setEntry(
      event.target.value
    )
  }

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = entry;

  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  // const [currentRecords, setCurrentRecords] = useState(newEmployee.slice(indexOfFirstRecord, indexOfLastRecord))

  const currentRecords = newEmployee.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(newEmployee.length / recordsPerPage)

  // const [empData, setempData] = useState([])

  // console.log('current records', currentRecords, 'entry', entry, 'current records.length',  currentRecords.length , 'recordsPerPage ', recordsPerPage )

  // const addEmployee = (Data) => {
  //   Data.id = newEmployee.length + 1
  //   setNewEmployee([...newEmployee, Data])
  //   // setCurrentRecords[[...newEmployee, Data]]
  // }

  return (
    <div className="App">
      <Navigation />
      <AddEntry newEmployee={newEmployee} entry={entry} handleChoose={handleChoose} />
      <ModalForm addEmployee={addEmployee} />
      <DisplayTable newEmployee={newEmployee} editEntry={editEntry} deleteEntry={deleteEntry} entry={entry} currentRecords={currentRecords} />
      {editData ? <EditEntry editData={editData} enteredData={enteredData} updateEntry={updateEntry} /> : <ModalForm addEmployee={addEmployee} />}
      {entry > 2 ? <Pagination entry={entry} handleChoose={handleChoose} newEmployee={newEmployee} nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage} currentRecords={currentRecords} /> : ''}
    </div >
  );
}

export default App;
