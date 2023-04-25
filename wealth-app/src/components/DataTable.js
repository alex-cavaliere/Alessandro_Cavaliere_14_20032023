import { useState } from "react"
import { NavLink } from "react-router-dom"

function DataTable(props) {
    const data = props.data
    const [sortedData, setSortedData] = useState(data)
    const [ascendent, setAscendent] = useState(true)
    const [unFound, setUnFound] = useState(false)
    const sortData = (e) => {
        //
        //
        const filterId = e.target.id
        const tableList = document.querySelectorAll('th')
        //
        //
        switch(filterId) {
            case filterId :
                if(ascendent){
                    setSortedData([...sortedData].sort((a, b) => {return a[filterId].localeCompare(b[filterId])}))
                    tableList.forEach((table) => {
                        let chevronUp = table.children[0].children[0].children[0]
                        let chevronDown = table.children[0].children[0].children[1]
                        if (table.id === filterId){
                            chevronUp.classList.remove('unsorted')
                            chevronDown.classList.add('unsorted')
                            setAscendent(false)
                        }else{
                            chevronUp.classList.add('unsorted')
                            chevronDown.classList.remove('unsorted')
                        }
                    })    
                }else{
                    setSortedData([...sortedData].sort((a, b) => {return b[filterId].localeCompare(a[filterId])}))
                    tableList.forEach((table) => {
                        let chevronUp = table.children[0].children[0].children[0]
                        let chevronDown = table.children[0].children[0].children[1]
                        if (table.id === filterId){
                            chevronUp.classList.add('unsorted')
                            chevronDown.classList.remove('unsorted')
                            setAscendent(true)
                        }else{
                            chevronUp.classList.add('unsorted')
                            chevronDown.classList.remove('unsorted')
                        }
                    })    
                }
                break;
                default :
                    return sortedData
        }
        /*
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
        */
        //console.log(sortedData)
    }
    /*
    const [entry, setEntry] = useState(10)
    const [firstEntry, setFirstEntry] = useState(0)
    const maxEntries, setMaxEntries] = useState(0)
    */
    const handleChange = (e) => {
        console.log(e.target.value)
    }

    const searchEmployee = (e) => {
        let value = e.target.value
        let result = []
        data.filter((employee) => {
            const EmployeeList = JSON.stringify(Object.values(employee))
            if(EmployeeList.toLowerCase().includes(value.toLowerCase())) {
                result.push(employee)
                setSortedData(result)
            }if(result.length < 1){
                setUnFound(true)
                console.log('not found')
            }else{
                setUnFound(false)
            }
            return sortedData
        })
        console.log(result)
    }
    return(
        <div id="employee-div" className="container">
            <h3 className='list-title'>Current Employees</h3>
            <div className="table-header">
                <div className="entries">
                Show
                <select onChange={handleChange}>
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
                        Object.keys(data[0]).map((key, index) => <th id={key} onClick={sortData} key={key + index}>
                            <div id={key} className="data-title" >
                                {key.replace(/([A-Z])/g, ' $1')
                                .replace(/^./, function(str){ return str.toUpperCase()})}
                                <span className="chevrons">
                                    <i id='chevron-up' className="fa-solid fa-caret-up unsorted"></i>
                                    <i id="chevron-down" className="fa-solid fa-caret-down unsorted"></i>
                                </span>
                            </div>
                        </th>)
                    }
                    </tr>
                </thead>
                {
                    !unFound ? (<tbody>
                        {
                            sortedData.map((obj, index) => <tr key={obj + index}>
                                    {Object.values(obj).map((key, index) => <td key={key + index}>{key}</td>)}
                            </tr>)
                        }
                    </tbody>) : <tbody><tr><td colSpan='10' className="empty-list">No Data Found</td></tr></tbody>
                }
                <tfoot>
                    <tr>
                        <td colSpan='7' style={{border:'none'}}>Showing {sortedData.indexOf(sortedData[1])} To {sortedData.length} Of {sortedData.length} Entries</td>
                    </tr>
                </tfoot>
            </table>) : <div className="empty-list">There's no Data</div>}
            <NavLink to="/">Home</NavLink>
        </div>
    )
}

export default DataTable
