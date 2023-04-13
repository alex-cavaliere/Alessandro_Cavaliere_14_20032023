import { useState } from "react"
import { NavLink } from "react-router-dom"


function EmployeeList() {
    //console.log(data)
    const data = JSON.parse(localStorage.getItem('employees'))
    
    const [sortedData, setSortedData] = useState(data)
    const sortData = (e) => {
        console.log(e.target.innerHTML)
        //
        //
        switch (e.target.innerHTML) {
            case 'First Name': 
            setSortedData(sortedData.sort((a, b) => {
                return a.firstName.toUpperCase() - b.firstName.toUpperCase()
            }))
            break;
            case 'Last Name': 
            setSortedData(sortedData.sort((a, b) => {return a.firstName.toUpperCase() - b.firstName.toUpperCase()}))
            break;
            case 'Date Of Birth': 
            setSortedData(sortedData.sort((a, b) => {return a.firstName.toUpperCase() - b.firstName.toUpperCase()}))
            break;
            case 'Start Date': 
            setSortedData(sortedData.sort((a, b) => {return a.firstName.toUpperCase() - b.firstName.toUpperCase()}))
            break;
            case 'Department': 
            setSortedData(sortedData.sort((a, b) => {return a.firstName.toUpperCase() - b.firstName.toUpperCase()}))
            break;
            case 'Street': 
            setSortedData(sortedData.sort((a, b) => {return a.firstName.toUpperCase() - b.firstName.toUpperCase()}))
            break;
            case 'State': 
            setSortedData(sortedData.sort((a, b) => {return a.firstName.toUpperCase() - b.firstName.toUpperCase()}))
            break;
            case 'City': 
            setSortedData(sortedData.sort((a, b) => {return a.firstName.toUpperCase() - b.firstName.toUpperCase()}))
            break;
            case 'Zip Code': 
            setSortedData(sortedData.sort((a, b) => {return a.firstName.toUpperCase() - b.firstName.toUpperCase()}))
            break;
            default: 
            return sortedData
        }
        console.log(sortedData)
    }
    const searchEmployee = (e) => {
        console.log(e.target.value)
        let value = e.target.value
        if (value.length >= 3){
            sortedData.forEach((obj) => {
                if(value.includes(Object.values(obj))){
                    setSortedData(obj)
                }
            })
        }
    }
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
                    <input onKeyDown={searchEmployee} type="text" id="searchbar" name="searchbar"/>
                </div>
            </div>
            {localStorage.length > 0 ? (<table>
                <thead>
                    <tr>
                    {
                        Object.keys(sortedData[0]).map((key, index) => <th onClick={sortData} key={key + index}>{key.replace(/([A-Z])/g, ' $1')
                        .replace(/^./, function(str){ return str.toUpperCase()})}</th>)
                    }
                    </tr>
                </thead>
                <tbody>
                    {
                        sortedData.map((obj, index) => <tr key={obj + index}>
                                {Object.values(obj).map((key, index) => <td key={key + index}>{key}</td>)}
                        </tr>)
                    }
                </tbody>
            </table>) : <div className="empty-list">There's no Data</div>}
            <NavLink to="/">Home</NavLink>
        </div>
    )
}

export default EmployeeList