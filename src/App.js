import React ,{useState,useEffect}from 'react'
import Dashbord from './Pages/Dashbord';
import Login from './components/Login/Login';
import './App.css';


function App() {
const [user, setuser] = useState('')
useEffect(() => {
  setuser(localStorage.getItem("user"))
}, [user])


  return (
    <div className="App">

       {user? <Dashbord/> : <Login/>}
      
    </div>
  );
}

export default App;
