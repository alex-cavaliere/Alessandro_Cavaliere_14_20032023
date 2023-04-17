import DataTable from "../components/DataTable"

function EmployeeList() {
    //console.log(data)
    const data = JSON.parse(localStorage.getItem('employees'))

    return(
     <DataTable data={data} />
    )
}

export default EmployeeList