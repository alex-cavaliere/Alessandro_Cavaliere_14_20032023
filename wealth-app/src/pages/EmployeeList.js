import { NavLink } from "react-router-dom"

const data = JSON.parse(localStorage.getItem('employees'))

function EmployeeList() {
    console.log(data)
    return(
        <div id="employee-div" className="container">
            <h3>Current Employees</h3>
            <div className="table-header">
                <div className="entries">
                Show
                <select>
                    <option>10</option>
                    <option>25</option>
                    <option>50</option>
                    <option>100</option>
                </select>
                Entries
                </div>
                <div className="search-container">
                    <label htmlFor="searchbar">Search:</label>
                    <input type="text" id="searchbar" name="searchbar"/>
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Start Date</th>
                        <th>Department</th>
                        <th>Date Of Birth</th>
                        <th>Street</th>
                        <th>City</th>
                        <th>State</th>
                        <th>Zip Code</th>
                    </tr>
                </thead>
                <tbody>
                        {
                            data.map((obj, index) => <tr>
                                <td>{obj.firstName}</td>
                                <td>{obj.lastName}</td>
                                <td>{obj.startDate}</td>
                                <td>{obj.departement}</td>
                                <td>{obj.dateOfBirth}</td>
                                <td>{obj.street}</td>
                                <td>{obj.city}</td>
                                <td>{obj.state}</td>
                                <td>{obj.zipCode}</td>
                            </tr>)
                        }
                </tbody>
            </table>
            <NavLink to="/">Home</NavLink>
        </div>
    )
}

export default EmployeeList