import React from 'react'

import "./Navbar.css"
function Navbar(props) {
    return (
        <div className="navbar">
            <h5>{props.title}</h5>
            <div className="link">
            <h6><span>Home </span>/ Dashbord</h6>
            </div>
        </div>
    )
}

export default Navbar
