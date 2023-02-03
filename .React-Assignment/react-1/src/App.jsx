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

  // const newEmployeeData = [
  //   {
  //     id: 1,
  //     fname: 'Stuti',
  //     lname: 'Lad',
  //     email: 'Stuti@gmail.com',
  //     phone: '1234098567',
  //     gender: 'Female',
  //     department: 'PHP',
  //     skills: ['Frontend Technology', 'App development'],
  //     about: 'avababjkbjkbfceb'
  //   }
  // ]

  const newEmployeeData = [
    {
      id: 1,
      fname: 'Jewel',
      lname: 'Lad',
      email: 'jewel@gmail.com',
      phone: '1234098567',
      gender: 'Male',
      department: 'Mobile',
      skills: 'App development',
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
      fname: 'krish',
      lname: 'mehta',
      email: 'krish@gmail.com',
      phone: '83218650385',
      gender: 'Male',
      department: '.NET',
      skills: 'back-end Technology',
      about: 'avababjkbjkbfceb'
    },
    {
      id: 4,
      fname: 'Rekha',
      lname: 'Patel',
      email: 'rp@gmail.com',
      phone: '1234098567',
      gender: 'Female',
      department: 'SEO',
      skills: 'Optimization',
      about: 'avababjkbjkbfceb'
    },
    {
      id: 5,
      fname: 'Kavya',
      lname: 'Shah',
      email: 'xy@gmail.com',
      phone: '9998345627',
      gender: 'Female',
      department: 'Admin/HR',
      skills: 'Communication',
      about: 'avababjkbjkbfceb'
    },
    {
      id: 6,
      fname: 'Keyur',
      lname: 'Patel',
      email: 'patelkeyur@gmail.com',
      phone: '1234098567',
      gender: 'Male',
      department: 'Account',
      skills: 'Finance',
      about: 'avababjkbjkbfceb'
    }
  ] 

  const [newEmployee, setNewEmployee] = useState(newEmployeeData)

  const addEmployee = (Data) => {
    Data.id = newEmployee.length + 1
    setNewEmployee([...newEmployee, Data])
  }

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

  const currentRecords = newEmployee.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(newEmployee.length / recordsPerPage)

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
    setNewEmployee(newEmployee.filter((user) => user.id !== id));
    if (currentRecords.length == 1)
      setCurrentPage(currentPage - 1)
    // alert('Entry Deleted successfully')
  }


  return (
    <div className="App">
      <Navigation />
      <AddEntry newEmployee={newEmployee} entry={entry} handleChoose={handleChoose} />
      <ModalForm addEmployee={addEmployee} />
      <DisplayTable newEmployee={newEmployee} editEntry={editEntry} deleteEntry={deleteEntry} entry={entry} currentRecords={currentRecords} />

      {editData ? <EditEntry  editData={editData} enteredData={enteredData} updateEntry={updateEntry} /> : <ModalForm addEmployee={addEmployee} />}

      {/* {editData ? <EditEntry editData={editData} enteredData={enteredData} updateEntry={updateEntry} /> : <ModalForm addEmployee={addEmployee} />} */}

      {entry > 1 ? <Pagination entry={entry} handleChoose={handleChoose} newEmployee={newEmployee} nPages={nPages} currentPage={currentPage} setCurrentPage={setCurrentPage} currentRecords={currentRecords} /> : ''}
    </div >
  );
}

export default App;
