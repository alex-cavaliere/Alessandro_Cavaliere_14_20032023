import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"

function DataTable(props) {
    const data = props.data
    const [sortedData, setSortedData] = useState(data)
    const [ascendent, setAscendent] = useState(true)
    const [unFound, setUnFound] = useState(false)

    const sortData = (filterId) => {
        //const filterId = e.target.id
        const tableList = document.querySelectorAll('th')
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
    const [firstEntry, setFirstEntry] = useState(1)
    const [maxEntries, setMaxEntries] = useState(entry)
    const [currentPage, setCurrentPage] = useState(1)

    const handleChange = (e) => {
        setEntry(JSON.parse(e.target.value))
    }
    const handleNext = () => {
        pages.forEach(page => {
            if(page === currentPage && currentPage < pages.length){
                setCurrentPage(page + 1)
            }
        })
    }
    const handlePrev = () => {
        pages.forEach(page => {
            if(currentPage === page && currentPage > 1){
                setCurrentPage(page - 1)
            }
        })
    }
    const searchEmployee = (e) => {
        let value = e.target.value
        let result = []
        if(localStorage.length > 0){
            data.filter((employee) => {
                const EmployeeList = JSON.stringify(Object.values(employee))
                if(EmployeeList.toLowerCase().includes(value.toLowerCase())) {
                    result.push(employee)
                }if(result.length < 1){
                    setUnFound(true)
                }else{
                    setUnFound(false)
                }
                return setSortedData(result)
            })
        }
        //console.log(result)
    }
    
    let pages = []
    if(localStorage.length > 0){
        const NumberOfPages = Math.ceil(sortedData.length/entry)
        for(let i = 1; i <= NumberOfPages; i++){
            pages.push(i)
        }
    }
    const selectPage = (e) => {
        const page = JSON.parse(e.target.innerText)
        if(page === 1){
            setCurrentPage(1)
        }
        setCurrentPage((entry * page)/entry)
    }
    console.log(currentPage)
    useEffect(() => {
        if(localStorage.length > 0){
            if(unFound){
                setFirstEntry(0)
                setMaxEntries(0)
                setCurrentPage(0)
            }else{
                setFirstEntry(1)
                setCurrentPage(1)
            }
        }
    },[entry, sortedData, unFound])
    //console.log(firstEntry,maxEntries)
    useEffect(() => {    
        if(localStorage.length > 0) {
            if(currentPage === 1 && sortedData.length >= entry){
                setFirstEntry(1)
                setMaxEntries(entry)
                setCurrentPage(1)
                document.getElementById('prev-btn').style.background = 'none'
                document.getElementById('next-btn').style.background = '#687e12'
            }else if(sortedData.length <= entry * currentPage) {
                setMaxEntries(sortedData.length)
                document.getElementById('next-btn').style.background = 'none'
                document.getElementById('prev-btn').style.background = '#687e12'
            }else{
                document.getElementById('prev-btn').style.background = '#687e12'
                document.getElementById('next-btn').style.background = '#687e12'
                setMaxEntries(entry * currentPage)
            }
            setCurrentPage((entry * currentPage)/entry)
            setFirstEntry(((currentPage * entry) - entry + 1))
            if(pages.length === 0 || pages.length === 1){
                document.getElementById('prev-btn').style.background = 'none'
                document.getElementById('next-btn').style.background = 'none'
            }
        }
    },[currentPage, entry, maxEntries, pages.length, sortedData])
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
                        Object.keys(data[0]).map((key, index) => <th id={key} onClick={() => sortData(key)} key={key + index}>
                            <div id={key} className="data-title">
                                {key.replace(/([A-Z])/g, ' $1')
                                .replace(/^./, function(str){ return str.toUpperCase()})}
                                <span className="chevrons">
                                    <i id='chevron-up' onClick={() => sortData(key)} className="fa-solid fa-caret-up unsorted"></i>
                                    <i id="chevron-down" onClick={() => sortData(key)} className="fa-solid fa-caret-down unsorted"></i>
                                </span>
                            </div>
                        </th>)
                    }
                    </tr>
                </thead>
                {
                    !unFound ? (<tbody className='data-table'>
                        {
                            sortedData.map((obj, index) => <tr key={index}>
                            {index + 1 >= firstEntry && index < maxEntries && Object.values(obj).map((key, index) => <td key={key + index}>{key}</td>)}
                        </tr>)
                        }
                    </tbody>) : <tbody><tr><td colSpan='10' className="empty-list">No Data Found</td></tr></tbody>
                }
                <tfoot>
                    <tr> 
                        <td colSpan='6'>Showing {firstEntry} To {maxEntries} Of {sortedData.length} Entries {sortedData.length < data.length && ' (filtered from ' + data.length + ' total entries)'}</td>
                        <td>
                            <button id='prev-btn' onClick={handlePrev}>Preview</button>
                        </td>
                        <td className="pages">
                            {data.length > 0 && pages.map(page => {return <div onClick={selectPage} key={page}>{(page)}</div>})}
                        </td>
                        <td>
                            <button id='next-btn' onClick={handleNext}>Next</button>
                        </td>
                    </tr>
                </tfoot>
            </table>) : <div className="empty-list">There's no Data</div>}
            <NavLink to="/">Home</NavLink>
        </div>
    )
}

export default DataTable
