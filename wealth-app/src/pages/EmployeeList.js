import { NavLink } from "react-router-dom"

function EmployeeList() {
    return(
        <div id="employee-div" className="container">
            <h3>Current Employees</h3>
            <table></table>
            <NavLink to="/">Home</NavLink>
        </div>
    )
}

export default EmployeeList