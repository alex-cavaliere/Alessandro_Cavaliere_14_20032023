import { NavLink } from "react-router-dom"
import { DataTable } from "my-personal-table"

function EmployeeList() {
    //console.log(data)
    const data = JSON.parse(localStorage.getItem('employees'))

    return(
        <>       
            <DataTable data={data}/>
            <h3 className='list-title'>Current Employees</h3>
            <footer>
                <NavLink to="/">Home</NavLink>
            </footer>
        </>
    )
}

export default EmployeeList