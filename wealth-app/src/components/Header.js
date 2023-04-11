import { NavLink } from "react-router-dom";

function Header(){
    return(
        <header>
            <img src='https://user.oc-static.com/upload/2020/08/14/15974125765772_image2.jpg' alt="WealthHealth logo"/>
            <NavLink to='/employee-list'>
                View Current Employees
            </NavLink>
            <h2>
                Create Employee
            </h2>
            <button onClick={() => localStorage.clear()} className="prov">clear Storage</button>
        </header>
    )
}

export default Header;