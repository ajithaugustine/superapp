import React from 'react'
import Top from '../components/Top/Top'
import Main from '../components/Main/Main'
import Navbar from '../components/Navbar/Navbar'
import './Style.css'

function Dashbord() {
    return (
        <div className="bord">
         <Navbar title="Dashbord"/>
         <Top/>
         <Main/>
        </div>
    )
}

export default Dashbord
