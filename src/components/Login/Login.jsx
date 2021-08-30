import React ,{useState}from 'react'
import './Login.css'

function Login() {
  const [user, setuser] = useState('')
  const login =()=>{
    localStorage.setItem("user",user)
  }
    return (
        <div>
  
        <div className="login">
          <form className='loginform' onSubmit={login}>
                <h3>Login</h3>
 
            <div className="form-floating mb-3">
              <input
                type="email"
                className="form-control"
                required
                placeholder="name@example.com"
                onChange={(e)=>setuser(e.target.value)}
              />
              <label >Email address</label>
            </div>
            <button className="btn ">Login</button>
       
          </form>
        </div>
     
      </div>
    )
}

export default Login
