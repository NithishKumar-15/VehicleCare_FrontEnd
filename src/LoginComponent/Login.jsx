import React from 'react'
import "./login.css"
import {Link} from 'react-router-dom'
import { useRef } from 'react'

export const Login = () => {

  const email=useRef("");
  const password=useRef("");
  return (
    <div id='loginpage' className='d-flex flex-column'>
      <div className='row m-auto w-50 h-75 overflow-hidden' id='loginConetntDiv'>
        <div className='col'>
        <img src="./images/mechanicPhoto.jpg" className='img-fluid h-100' loading='lazy'></img>
        </div>
          
        <div className='col-sm d-flex flex-column'>

          <div className='w-75 m-auto'>
            <h4 className='text-center h4login'>Vevicare Login</h4>
             <form action="post">
            <div className='mb-3'>
              <label htmlFor='emailName' className='form-label'>Email</label>
              <input type={"email"} className="form-control form-control-lg" id='emailName' placeholder='Email'ref={email} />
            </div>

            <div className='mb-3'>
              <label htmlFor='password' className='form-label'>Password</label>
              <input type={"password"} className="form-control form-control-lg" id='password' placeholder='Password' ref={password}/>
            </div>

            <div className='mb-3  text-center'>
            <label className='form-text text-danger'>Invalid Email or Password</label>
            </div>

            <button className='btn btn-dark text-white d-flex m-auto mb-3'>Login</button>
            </form> 
            <h5 className='text-center text-body'>or</h5>
            <div className='d-flex'>
            <Link to="/NewAccount" className='text-body-secondary m-auto loglink'>Create New Account</Link>
            <Link to="" className='text-center text-body-secondary m-auto loglink'>Forgot Password</Link>
            </div>
        </div>

        </div>
      </div>
    </div>
  )
}
