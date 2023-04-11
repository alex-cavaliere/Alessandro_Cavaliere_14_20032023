import { NavLink } from "react-router-dom"


function EmployeeList() {
    //console.log(data)
    const data = JSON.parse(localStorage.getItem('employees'))
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
            {localStorage.length > 0 ? (<table>
                <thead>
                    <tr>
                    {
                        Object.keys(data[0]).map((key, index) => <th key={key + index}>{key.replace(/([A-Z])/g, ' $1')
                        .replace(/^./, function(str){ return str.toUpperCase(); })}</th>)
                    }
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((obj, index) => <tr key={obj + index}>
                                {Object.values(obj).map((key, index) => <td key={key + index}>{key}</td>)}
                        </tr>)
                    }
                </tbody>
            </table>) : <div className="empty-list">There's no Employees</div>}
            <NavLink to="/">Home</NavLink>
        </div>
    )
}

export default EmployeeList