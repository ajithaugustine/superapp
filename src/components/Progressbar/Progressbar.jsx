import React ,{useState,useEffect}from 'react'
import "./Progressbar.css"
function Progressbar({percentage}) {
    const [data, setdata] = useState(0)

    useEffect(() => {
       let value =Math.round(155-(155*(percentage/100))) 
       setdata(value)
    }, [data])


    return (
        <div >
            <span id="number">{percentage}%</span>
            <svg className="svg" height="60" width="60">
             <circle cx="30" cy="30" r="25" strokeLinecap="round"   strokeDashoffset={data} />
            </svg>
        </div>
    )
}

export default Progressbar
