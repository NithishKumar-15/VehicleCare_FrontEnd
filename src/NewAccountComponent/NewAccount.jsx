import "./newAccount.css"
import {Link} from 'react-router-dom'
import { useRef,useState,React } from 'react'

export const NewAccount = () => {

  const name=useRef(null);
  const email=useRef("");
  const password=useRef("");
  const confirmPassword=useRef("");
  
  const[message, setMessage]=useState("");

  const createAccount=(e)=>{
    e.preventDefault();
    if(message!=""){
      setMessage("");
    }

    if(name.current.value!="" && email.current.value!="" &&password.current.value!="" && confirmPassword.current.value!=""){
      if(password.current.value===confirmPassword.current.value){
        name.current.value="";
        email.current.value="";
        password.current.value="";
        confirmPassword.current.value="";
      }else{
        setMessage("Password Miss Match")
      }
    }else{
      setMessage("Please Enter all the fields")
    }
  }

  return (
    <div id="newAccountPage" className='d-flex flex-column'>

        <div className='w-25 h-75 bg-white m-auto d-flex flex-column border-dark border'>
          <h3 className='text-white text-center bg-dark'>Create New Account</h3>
          <div className='w-75 h-75 m-auto'>
            <form method='post'onSubmit={createAccount}>
              <div className='mb-3'>
                <label htmlFor='name' className='form-label'>Name</label>
                <input type={"text"} className="form-control" id="name" ref={name} />
              </div>

              <div className='mb-3'>
                <label htmlFor='email' className='form-label'>Email</label>
                <input type={"email"} className="form-control" id="email" ref={email} />
              </div>

              <div className='mb-3'>
                <label htmlFor='password' className='form-label'>Password</label>
                <input type={"password"} className="form-control" id="password" ref={password} />
              </div>

              <div className='mb-3'>
                <label htmlFor='confirmPassword' className='form-label'>Confirm Password</label>
                <input type={"password"} className="form-control" id="confirmPassword" ref={confirmPassword}/>
              </div>
              {message!="" && 
                <div className='text-danger text-center form-text'>{message}</div>
              }
              <button className='btn bg-dark text-white d-flex m-auto'>Create Account</button>
            </form>
            <h4 className='text-dark text-center'>or</h4>
            <div className='d-flex'>
              <span className='text-body-secondary m-auto'>existing user? <Link to={"/"} className="text-body-secondary newcreatlink">Login</Link></span>
            </div>
          </div>
        </div>

    </div>


  )
}
