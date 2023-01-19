import React, { useState } from "react";
import Navigation from "./components/Navigation";
import './css/style.css'
import './css/font.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import ModalForm from "./components/ModalForm";
import AddEntry from "./components/AddEntry";
import DisplayTable from "./components/DisplayTable";

function App() {
  const EmployeeData = []

  const [Employee, setEmployee] = useState(EmployeeData)
  const addEmployee = (Data) => {
    Data.id = Employee.id + 1
    setEmployee([...Employee, Data])
  }
  
  return (
    <div className="App">


      <Navigation />
      <AddEntry />
      <ModalForm addEmployee={addEmployee} />
      <DisplayTable />
    </div >
  );
}

export default App;
