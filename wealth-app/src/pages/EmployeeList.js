import React, { useContext } from 'react';
import { EmployeeContext } from '../components/employeeContext';
import { NavLink } from "react-router-dom"
import { DataTable } from "my-personal-table"
 
// prendre compte d'il y a un objet dans 'keys'

const data = [
    { id: 1, name: {firstName: 'Jhon', lastName: 'Doe'}, age: 25 },
    { id: 2, name: 'Jane Smith', age: 30 },
    { id: 3, name: 'Bob Johnson', age: 35 },
  ];

function EmployeeList() {
    //console.log(data)
    const { employees } = useContext(EmployeeContext)
    return(
        <>       
            <h3 className='list-title'>Current Employees</h3>
            <DataTable data={employees}/>
            <footer>
                <NavLink to="/">Home</NavLink>
            </footer>
        </>
    )
}

export default EmployeeList