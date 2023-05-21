import React, { useState, useContext } from 'react';
import { EmployeeContext } from './employeeContext';
import Modal from "react-modal"
import DatePicker from "react-datepicker";
import Select from 'react-select'
import "react-datepicker/dist/react-datepicker.css"

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
    const { addEmployee } = useContext(EmployeeContext)
    const [startDate, setStartDate] = useState(new Date())
    const [dayOfBirth, setDayOfBirth] = useState(new Date())
    const saveEmployee = (e) => {
        e.preventDefault()
        const employee = {
            firstName: e.target.firstName.value,
            lastName: e.target.lastName.value,
            dateOfBirth: e.target.dateOfBirth.value,
            startDate: e.target.startDate.value,
            department: e.target.department.value,
            street: e.target.street.value,
            state: e.target.state.value,
            city: e.target.city.value,
            zipCode: e.target.zipCode.value
        }
        addEmployee(employee)
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
                <DatePicker id="date-of-birth" name="dateOfBirth" selected={dayOfBirth} onChange={(date) => setDayOfBirth(date)} />

                <label htmlFor="start-date">Start Date</label>
                <DatePicker id="start-date" name="startDate" selected={startDate} onChange={(date) => setStartDate(date)} />

                <fieldset className="address">
                    <legend>Address</legend>

                    <label htmlFor="street">Street</label>
                    <input id="street" type="text" name="street"/>

                    <label htmlFor="city">City</label>
                    <input id="city" type="text" name="city"/>

                    <label htmlFor="state">State</label>
                    <Select options={states} name="state" />


                    <label htmlFor="zip-code">Zip Code</label>
                    <input id="zip-code" type="number" name="zipCode" />
                </fieldset>

                <label htmlFor="department">Department</label>
                <Select options={options} name="department" />
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


const states = [
    {
        label: "Alabama",
        value: "AL"
    },
    {
        label: "Alaska",
        value: "AK"
    },
    {
        label: "American Samoa",
        value: "AS"
    },
    {
        label: "Arizona",
        value: "AZ"
    },
    {
        label: "Arkansas",
        value: "AR"
    },
    {
        label: "California",
        value: "CA"
    },
    {
        label: "Colorado",
        value: "CO"
    },
    {
        label: "Connecticut",
        value: "CT"
    },
    {
        label: "Delaware",
        value: "DE"
    },
    {
        label: "District Of Columbia",
        value: "DC"
    },
    {
        label: "Federated States Of Micronesia",
        value: "FM"
    },
    {
        label: "Florida",
        value: "FL"
    },
    {
        label: "Georgia",
        value: "GA"
    },
    {
        label: "Guam",
        value: "GU"
    },
    {
        label: "Hawaii",
        value: "HI"
    },
    {
        label: "Idaho",
        value: "ID"
    },
    {
        label: "Illinois",
        value: "IL"
    },
    {
        label: "Indiana",
        value: "IN"
    },
    {
        label: "Iowa",
        value: "IA"
    },
    {
        label: "Kansas",
        value: "KS"
    },
    {
        label: "Kentucky",
        value: "KY"
    },
    {
        label: "Louisiana",
        value: "LA"
    },
    {
        label: "Maine",
        value: "ME"
    },
    {
        label: "Marshall Islands",
        value: "MH"
    },
    {
        label: "Maryland",
        value: "MD"
    },
    {
        label: "Massachusetts",
        value: "MA"
    },
    {
        label: "Michigan",
        value: "MI"
    },
    {
        label: "Minnesota",
        value: "MN"
    },
    {
        label: "Mississippi",
        value: "MS"
    },
    {
        label: "Missouri",
        value: "MO"
    },
    {
        label: "Montana",
        value: "MT"
    },
    {
        label: "Nebraska",
        value: "NE"
    },
    {
        label: "Nevada",
        value: "NV"
    },
    {
        label: "New Hampshire",
        value: "NH"
    },
    {
        label: "New Jersey",
        value: "NJ"
    },
    {
        label: "New Mexico",
        value: "NM"
    },
    {
        label: "New York",
        value: "NY"
    },
    {
        label: "North Carolina",
        value: "NC"
    },
    {
        label: "North Dakota",
        value: "ND"
    },
    {
        label: "Northern Mariana Islands",
        value: "MP"
    },
    {
        label: "Ohio",
        value: "OH"
    },
    {
        label: "Oklahoma",
        value: "OK"
    },
    {
        label: "Oregon",
        value: "OR"
    },
    {
        label: "Palau",
        value: "PW"
    },
    {
        label: "Pennsylvania",
        value: "PA"
    },
    {
        label: "Puerto Rico",
        value: "PR"
    },
    {
        label: "Rhode Island",
        value: "RI"
    },
    {
        label: "South Carolina",
        value: "SC"
    },
    {
        label: "South Dakota",
        value: "SD"
    },
    {
        label: "Tennessee",
        value: "TN"
    },
    {
        label: "Texas",
        value: "TX"
    },
    {
        label: "Utah",
        value: "UT"
    },
    {
        label: "Vermont",
        value: "VT"
    },
    {
        label: "Virgin Islands",
        value: "VI"
    },
    {
        label: "Virginia",
        value: "VA"
    },
    {
        label: "Washington",
        value: "WA"
    },
    {
        label: "West Virginia",
        value: "WV"
    },
    {
        label: "Wisconsin",
        value: "WI"
    },
    {
        label: "Wyoming",
        value: "WY"
    }
]