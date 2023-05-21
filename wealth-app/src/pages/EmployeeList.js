import React, { useContext } from 'react';
import { EmployeeContext } from '../components/employeeContext';
import { NavLink } from "react-router-dom"
import { DataTable } from "my-personal-table"

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