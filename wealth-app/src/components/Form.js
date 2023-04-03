import { useState } from "react";
import DatePicker from "react-datepicker";
import Select from 'react-select'
import "react-datepicker/dist/react-datepicker.css"

const options = [
    { value: 'Marketing', label: 'Marketing' },
    { value: 'Engineering', label: 'Engeneering' },
    { value: 'Human Resources', label: 'Human Resources' },
    { value: 'Legal', label: 'Legal' }
]

function Form(){
    const [startDate, setStartDate] = useState(new Date())
    return(
        <form id="create-employee">
            <label htmlFor="first-name">First Name</label>
            <input type="text" id="first-name" />

            <label htmlFor="last-name">Last Name</label>
            <input type="text" id="last-name" />

            <label htmlFor="date-of-birth">Date of Birth</label>
            <DatePicker id="date-of-birth" selected={startDate} onChange={(date) => setStartDate(date)} />

            <label htmlFor="start-date">Start Date</label>
            <DatePicker id="start-date" selected={startDate} onChange={(date) => setStartDate(date)} />

            <fieldset className="address">
                <legend>Address</legend>

                <label htmlFor="street">Street</label>
                <input id="street" type="text" />

                <label htmlFor="city">City</label>
                <input id="city" type="text" />

                <label htmlFor="state">State</label>
                <select name="state" id="state"></select>

                <label htmlFor="zip-code">Zip Code</label>
                <input id="zip-code" type="number" />
            </fieldset>

            <label htmlFor="department">Department</label>
            <Select options={options} />
        </form>
    )
}

export default Form

const states = [
    {
        value: "Alabama",
        label: "AL"
    },
    {
        value: "Alaska",
        label: "AK"
    },
    {
        value: "American Samoa",
        label: "AS"
    },
    {
        value: "Arizona",
        label: "AZ"
    },
    {
        value: "Arkansas",
        label: "AR"
    },
    {
        value: "California",
        label: "CA"
    },
    {
        value: "Colorado",
        label: "CO"
    },
    {
        value: "Connecticut",
        label: "CT"
    },
    {
        value: "Delaware",
        label: "DE"
    },
    {
        value: "District Of Columbia",
        label: "DC"
    },
    {
        value: "Federated States Of Micronesia",
        label: "FM"
    },
    {
        value: "Florida",
        label: "FL"
    },
    {
        value: "Georgia",
        label: "GA"
    },
    {
        value: "Guam",
        label: "GU"
    },
    {
        value: "Hawaii",
        label: "HI"
    },
    {
        value: "Idaho",
        label: "ID"
    },
    {
        value: "Illinois",
        label: "IL"
    },
    {
        value: "Indiana",
        label: "IN"
    },
    {
        value: "Iowa",
        label: "IA"
    },
    {
        value: "Kansas",
        label: "KS"
    },
    {
        value: "Kentucky",
        label: "KY"
    },
    {
        value: "Louisiana",
        label: "LA"
    },
    {
        value: "Maine",
        label: "ME"
    },
    {
        value: "Marshall Islands",
        label: "MH"
    },
    {
        value: "Maryland",
        label: "MD"
    },
    {
        value: "Massachusetts",
        label: "MA"
    },
    {
        value: "Michigan",
        label: "MI"
    },
    {
        value: "Minnesota",
        label: "MN"
    },
    {
        value: "Mississippi",
        label: "MS"
    },
    {
        value: "Missouri",
        label: "MO"
    },
    {
        value: "Montana",
        label: "MT"
    },
    {
        value: "Nebraska",
        label: "NE"
    },
    {
        value: "Nevada",
        label: "NV"
    },
    {
        value: "New Hampshire",
        label: "NH"
    },
    {
        value: "New Jersey",
        label: "NJ"
    },
    {
        value: "New Mexico",
        label: "NM"
    },
    {
        value: "New York",
        label: "NY"
    },
    {
        value: "North Carolina",
        label: "NC"
    },
    {
        value: "North Dakota",
        label: "ND"
    },
    {
        value: "Northern Mariana Islands",
        label: "MP"
    },
    {
        value: "Ohio",
        label: "OH"
    },
    {
        value: "Oklahoma",
        label: "OK"
    },
    {
        value: "Oregon",
        label: "OR"
    },
    {
        value: "Palau",
        label: "PW"
    },
    {
        value: "Pennsylvania",
        label: "PA"
    },
    {
        value: "Puerto Rico",
        label: "PR"
    },
    {
        value: "Rhode Island",
        label: "RI"
    },
    {
        value: "South Carolina",
        label: "SC"
    },
    {
        value: "South Dakota",
        label: "SD"
    },
    {
        value: "Tennessee",
        label: "TN"
    },
    {
        value: "Texas",
        label: "TX"
    },
    {
        value: "Utah",
        label: "UT"
    },
    {
        value: "Vermont",
        label: "VT"
    },
    {
        value: "Virgin Islands",
        label: "VI"
    },
    {
        value: "Virginia",
        label: "VA"
    },
    {
        value: "Washington",
        label: "WA"
    },
    {
        value: "West Virginia",
        label: "WV"
    },
    {
        value: "Wisconsin",
        label: "WI"
    },
    {
        value: "Wyoming",
        label: "WY"
    }
]