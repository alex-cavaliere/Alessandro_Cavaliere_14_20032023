import { NavLink } from "react-router-dom"
import { DataTable } from "my-personal-table"

function EmployeeList() {
    //console.log(data)
    const data = JSON.parse(localStorage.getItem('employees'))
    console.log(data)
    return(
        <>       
            <h3 className='list-title'>Current Employees</h3>
            <DataTable data={data}/>
            <footer>
                <NavLink to="/">Home</NavLink>
            </footer>
        </>
    )
}

export default EmployeeList