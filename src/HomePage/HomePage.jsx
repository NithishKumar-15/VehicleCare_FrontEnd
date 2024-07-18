import React from 'react'
import { Link } from 'react-router-dom'
import "./homepage.css"
export const HomePage = () => {
  return (
    <>
    <header>
      <nav className='navbar navbar-expand-lg bg-dark navbar-dark'>
        <Link className='navbar-brand mb-1'>Vevicare</Link>
        <button className='navbar-toggler' type='button' data-bs-toggle="collapse"  data-bs-target="#navitemlink">
          <span className='navbar-toggler-icon'></span>
        </button>
    <div className='collapse navbar-collapse' id="navitemlink">
        <ul className='navbar-nav me-auto'>
          <li className='navbar-item'>
            <Link className='nav-link active'>Home</Link>
          </li>
          <li className='navbar-item'>
            <Link className='nav-link'>Appoiment Booking</Link>
          </li>
          <li className='navbar-item'>
            <Link className='nav-link'>Previous History</Link>
          </li>
        </ul>
      </div>
      </nav>
    </header>
    
    </>
  )
}
