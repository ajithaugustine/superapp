import React,{useState,useEffect} from 'react'
import Doughnutdiagram from '../Doughnut/Doughnutdiagram'
import Hprogressbar from '../Hprogressbar/Hprogressbar'
import Linediagram from '../Linechart/Linediagram'
import { RiGitlabFill } from "react-icons/ri";
import axios from "axios"

import "./Main.css"
function Main() {
    const [value, setvalue] = useState([])
    useEffect(() => {
   fetch()
    }, [])
  
    const fetch = ()=>{
      axios.get("https://superappserverside.herokuapp.com/").then((res)=>{
          const data =res.data
          setvalue(data[0].feed)
          
      })
  }
  
  console.log(value)
    return (
        <div className ="main">
        <div className="sections">
            <h6>Aqusition Channels</h6>
            <h5></h5>
            <div className="content">
            <div className="Doughnut">
                <Doughnutdiagram/>
                </div>
            <div className="hbar">  
            <Hprogressbar title={"Ad Campaigns"} percentage={89}/>
            <Hprogressbar title={"Direct Traffic"} percentage={73}/>
            <Hprogressbar title={"Search Engines"} percentage={34}/> 
            <Hprogressbar title={"Other"} percentage={55}/>
            </div>

            </div>
        </div>
        <div className="sections">
        <h6>Users By Country</h6>
            <h5></h5>
            <img src="https://i.ytimg.com/vi/FujhmGYT8XM/maxresdefault.jpg" alt="" srcset="" />
        </div>
        <div className="sections">
        <h6>Revenue</h6>
            <h5></h5>
          <div className="line">
              <Linediagram/>
              </div> 
        </div>
        <div className="section4">
         <div className="box1">
             <h3>Super App</h3>
             <h1><RiGitlabFill/></h1>
         </div>
         <div className="box2">
         <h6>feeds</h6>
            <h5></h5>
           {value.map((val)=>{
               return <div>
             <div className="feeds">
            <img src={val.imgurl} alt="" />
            <p>{val.content}</p>
           </div>
           <h5></h5>
               </div>
           }) 

            }
     
         </div>
        </div>
        </div>
    )
}

export default Main
