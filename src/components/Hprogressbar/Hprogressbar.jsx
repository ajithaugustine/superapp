import React from 'react'
import "./Hprogressbar.css"
function Hprogressbar({percentage,title}) {
    return (
        <div className="container">
              <div className="info">
                  <h6>{title}</h6>
                  <h6>{percentage}%</h6>
              </div>
              <div className="hbar">
                  <div className="outer">
                      <div className="inner" style={{width:`${percentage}%`}}>

                      </div>
                  </div>
              </div>
          
        </div>
    )
}

export default Hprogressbar
