import { useState } from "react";
import Modal from "react-modal"
import DatePicker from "react-datepicker";
import Select from 'react-select'
import "react-datepicker/dist/react-datepicker.css"

const data = JSON.parse(localStorage.getItem('employees'))
console.log(data)

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    }
}

const options = [
    { value: 'Marketing', label: 'Marketing' },
    { value: 'Engineering', label: 'Engeneering' },
    { value: 'Human Resources', label: 'Human Resources' },
    { value: 'Legal', label: 'Legal' }
]


function Form(){
    const [startDate, setStartDate] = useState(new Date())
    const saveEmployee = (e) => {
        e.preventDefault()
        const employees = JSON.parse(localStorage.getItem('employees')) || []
        const employee = {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            dateOfBirth: e.target.dateOfBirth.value,
            startDate: e.target.startDate.value,
            street: e.target.street.value,
            city: e.target.city.value,
            zipCode: e.target.zipCode.value
        } 
        employees.push(employee)
        localStorage.setItem('employees', JSON.stringify(employees))
        openModal()
    }
    const [modalIsOpen, setIsOpen] = useState(false);
  
    function openModal() {
      setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false)
    }
    return(
        <form onSubmit={saveEmployee} id="create-employee">
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" name="firstName" required/>

            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" name="lastName" required/>

            <label htmlFor="date-of-birth">Date of Birth</label>
            <DatePicker id="date-of-birth" name="dateOfBirth" selected={startDate} onChange={(date) => setStartDate(date)} />

            <label htmlFor="start-date">Start Date</label>
            <DatePicker id="start-date" name="startDate" selected={startDate} onChange={(date) => setStartDate(date)} />

            <fieldset className="address">
                <legend>Address</legend>

                <label htmlFor="street">Street</label>
                <input id="street" type="text" name="street"/>

                <label htmlFor="city">City</label>
                <input id="city" type="text" name="city"/>

                <label htmlFor="state">State</label>


                <label htmlFor="zip-code">Zip Code</label>
                <input id="zip-code" type="number" name="zipCode" />
            </fieldset>

            <label htmlFor="department">Department</label>
            <Select options={options} />
            <button id="submit">save</button>
            <Modal
                isOpen={modalIsOpen}
                ariaHideApp={false}
                onRequestClose={closeModal}
                style={customStyles}>
                <button className="close" onClick={closeModal}>X</button>
                <h2 id="confirmation" className="modal">Employee Created!</h2>
            </Modal>
        </form>
    )
}

export default Form
