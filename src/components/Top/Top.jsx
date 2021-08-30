import React,{useState,useEffect} from "react";
import { GoPerson } from "react-icons/go";
import { MdAttachMoney, MdRefresh } from "react-icons/md";
import { ImSmile2 } from "react-icons/im";
import Progressbar from "../Progressbar/Progressbar";
import axios from "axios"
import "./Top.css";
function Top() {

  const [value, setvalue] = useState('')
  useEffect(() => {
 fetch()
  }, [])

  const fetch = ()=>{
    axios.get("https://superappserverside.herokuapp.com/").then((res)=>{
        const data =res.data
        setvalue(data[0].Top)
        
    })
}

console.log(value)
  return (
    <div >
    { value && <div className="tiles">
      <div className="Card">
        <div className="bar">
          <Progressbar percentage={value[0].percentage} />
        </div>
        <div className="tags">
          <h6>New Visits</h6>
          <h6>{value[0].value}</h6>
        </div>
        <h3 className="icon">
          <GoPerson />
        </h3>
      </div>

      <div className="Card">
        <Progressbar percentage={value[1].percentage} />
        <div className="tags">
          <h6>Purchases</h6>
          <h6> <i><MdAttachMoney /></i>
            {value[1].value}
          </h6>
        </div>
        <h1 className="icon">
          <MdAttachMoney />
        </h1>
      </div>

      <div className="Card">
        <Progressbar percentage={value[2].percentage} />
        <div className="tags">
          <h6>Active Users</h6>
          <h6>{value[2].value}</h6>
        </div>
        <h3 className="icon">
          <ImSmile2 />
        </h3>
      </div>
      <div className="Card">
        <Progressbar percentage={value[3].percentage} />
        <div className="tags">
          <h6>Returned</h6>
          <h6>{value[3].value}</h6>
        </div>
        <h1 className="icon">
          <MdRefresh />
        </h1>
      </div>
      </div>}
      
    </div>
  );
}

export default Top;
