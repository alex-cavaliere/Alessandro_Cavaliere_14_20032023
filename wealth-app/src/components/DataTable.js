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
                        }else{
                            chevronUp.classList.add('unsorted')
                            chevronDown.classList.add('unsorted')
                        }
                    })    
                    setAscendent(false) 
                }else{
                    setSortedData([...sortedData].sort((a, b) => {return b[filterId].localeCompare(a[filterId])}))
                    tableList.forEach((table) => {
                        let chevronUp = table.children[0].children[0].children[0]
                        let chevronDown = table.children[0].children[0].children[1]
                        if (table.id === filterId){
                            chevronDown.classList.remove('unsorted')
                            chevronUp.classList.add('unsorted')
                        }else{
                            chevronDown.classList.add('unsorted')
                            chevronUp.classList.add('unsorted')
                        }
                    })   
                    setAscendent(true) 
                }
            break;
            default :
            return sortedData
        }
    }
    const [entry, setEntry] = useState(10)
    const [firstEntry, setFirstEntry] = useState(0)
    const [maxEntries, setMaxEntries] = useState(0)

    const handleChange = (e) => {
        setEntry(JSON.parse(e.target.value))
    }
    console.log(entry)
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
                            {index < entry && Object.values(obj).map((key, index) => <td key={key + index}>{key}</td>)}
                        </tr>)
                        }
                    </tbody>) : <tbody><tr><td colSpan='10' className="empty-list">No Data Found</td></tr></tbody>
                }
                <tfoot>
                    <tr>
                        <td colSpan='6'>Showing {sortedData.indexOf(sortedData[1])} To {sortedData.length > entry ? entry : sortedData.length} Of {sortedData.length} Entries</td>
                        <td>
                            <button>Preview</button>
                        </td>
                        <td className="pages">
                            <div>
                                1
                            </div>
                        </td>
                        <td>
                            <button>Next</button>
                        </td>
                    </tr>
                </tfoot>
            </table>) : <div className="empty-list">There's no Data</div>}
            <NavLink to="/">Home</NavLink>
        </div>
    )
}

export default DataTable
