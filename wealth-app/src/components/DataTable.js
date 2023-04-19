import { useState } from "react"
import { NavLink } from "react-router-dom"

function DataTable(props) {
    const data = props.data
    const [sortedData, setSortedData] = useState(data)
    const [ascendent, setAscendent] = useState(true)
    const sortData = (e) => {
        //
        //
        const chevrons = document.querySelectorAll('.chevrons')
        console.log(chevrons)
        chevrons.forEach((chevron, index) => {
            console.log(chevron, index)
            if(ascendent) {
                chevron.children[0].classList.remove('unsorted')
                chevron.children[1].classList.add('unsorted')
                console.log('chevron up', chevron.children[0])
            }else{
                chevron.children[1].classList.remove('unsorted')
                chevron.children[0].classList.add('unsorted')
                console.log('chevron down', chevron.children[1])
            }
        })
        //
        //
        switch (e.target.innerText) {
            case 'First Name': 
            if(ascendent){
                setSortedData([...sortedData].sort((a, b) => {return a.firstName.localeCompare(b.firstName)}))
                setAscendent(false)
            }else{
                setSortedData([...sortedData].sort((a, b) => {return b.firstName.localeCompare(a.firstName)}))
                setAscendent(true)
            }
            break;
            case 'Last Name': 
            if(ascendent){
                setSortedData([...sortedData].sort((a, b) => {return a.lastName.localeCompare(b.lastName)}))
                setAscendent(false)
            }else{
                setSortedData([...sortedData].sort((a, b) => {return b.lastName.localeCompare(a.lastName)}))
                setAscendent(true)
            }
            break;
            case 'Date Of Birth': 
            if(ascendent){
                setSortedData([...sortedData].sort((a, b) => {return new Date(a.dateOfBirth) - new Date(b.dateOfBirth)}))
                setAscendent(false)
            }else{
                setSortedData([...sortedData].sort((a, b) => {return new Date(b.dateOfBirth) - new Date(a.dateOfBirth)}))
                setAscendent(true)    
            }
            break;
            case 'Start Date': 
            if(ascendent){
                setSortedData([...sortedData].sort((a, b) => {return new Date(a.startDate) - new Date(b.startDate)}))
                setAscendent(false)
            }else{
                setSortedData([...sortedData].sort((a, b) => {return new Date(b.startDate) - new Date(a.startDate)}))
                setAscendent(true)
            }
            break;
            case 'Department': 
            if(ascendent){
                setSortedData([...sortedData].sort((a, b) => {return a.department.localeCompare(b.department)}))
                setAscendent(false)
            }else{
                setSortedData([...sortedData].sort((a, b) => {return b.department.localeCompare(a.department)}))
                setAscendent(true)
            }
            break;
            case 'Street':
            if(ascendent){
                setSortedData([...sortedData].sort((a, b) => {return a.street.localeCompare(b.street)}))
                setAscendent(false)
            }else{
                setSortedData([...sortedData].sort((a, b) => {return b.street.localeCompare(a.street)}))
                setAscendent(true)
            }
            break;
            case 'State': 
            if(ascendent){
                setSortedData([...sortedData].sort((a, b) => {return a.state.localeCompare(b.state)}))
                setAscendent(false)
            }else{
                setSortedData([...sortedData].sort((a, b) => {return b.state.localeCompare(a.state)}))
                setAscendent(true)
            }
            break;
            case 'City':
            if(ascendent){
                setSortedData([...sortedData].sort((a, b) => {return a.city.localeCompare(b.city)}))
                setAscendent(false)
            }else{
                setSortedData([...sortedData].sort((a, b) => {return b.city.localeCompare(a.city)}))
                setAscendent(true)
            }
            break;
            case 'Zip Code': 
            if(ascendent){
                setSortedData([...sortedData].sort((a, b) => {return a.zipCode - b.zipCode}))
                setAscendent(false)
            }else{
                setSortedData([...sortedData].sort((a, b) => {return b.zipCode - a.zipCode}))
                setAscendent(true)
            }
            break;
            default: 
            return sortedData
        }
        console.log(sortedData)
    }
    const searchEmployee = (e) => {
        let value = e.target.value
        let result = []
        sortedData.filter((employee) => {
            console.log(value)
            if(employee.firstName.toLowerCase().includes(value.toLowerCase())) {
                result.push(employee)
            }
        })
        console.log(result)
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
                    <input onKeyUp={searchEmployee} type="text" id="searchbar" name="searchbar"/>
                </div>
            </div>
            {localStorage.length > 0 ? (<table>
                <thead>
                    <tr>
                    {
                        Object.keys(sortedData[0]).map((key, index) => <th onClick={sortData} key={key + index}>
                            <span className="data-title">
                                {key.replace(/([A-Z])/g, ' $1')
                                .replace(/^./, function(str){ return str.toUpperCase()})}
                                <span className="chevrons">
                                    <i id='chevron-up' className="fa-solid fa-caret-up unsorted"></i>
                                    <i id="chevron-down" className="fa-solid fa-caret-down unsorted"></i>
                                </span>
                            </span>
                        </th>)
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

export default DataTable
