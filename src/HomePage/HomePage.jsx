import React from 'react'
import { Link } from 'react-router-dom'
import "./homepage.css"

export const HomePage = () => {
  return (
    <>
      <header>
        <nav className='navbar navbar-expand-lg bg-dark navbar-dark '>
          <div className='container-fluid'>
            <Link className='navbar-brand mb-1'>Vevicare</Link>
            <button className='navbar-toggler' type='button' data-bs-toggle="collapse" data-bs-target="#navitemlink">
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
              <span className="navbar-text me-2">
                Nithish kumar
              </span>
              <img className="rounded-circle navbar-text" alt="avatar1" src="../images/profile.png" height={50} width={40} />
            </div>
          </div>
        </nav>
      </header>

      {/* <div className='container-fluid servicelist'>
        <div className='container mt-5'>

        <div className='row mx-auto'>

          <div className='col-md-auto'>
          <span className='filter mx-auto'>Filter:</span>
          </div>

        <div className='col-md-auto'>
        <select className='selhome mx-auto form-select'>
            <option>price</option>
            <option>All Services</option>
            <option>General Services</option>
            <option>Full Services</option>
            <option>All Services</option>
            <option>All Services</option>
            <option>All Services</option>
          </select>
        </div>

        <div className='col-md-auto'>
          <select className='selhome form-select'>
            <option>categories of services</option>
            <option>All Services</option>
            <option>General Services</option>
            <option>Full Services</option>
            <option>All Services</option>
            <option>All Services</option>
            <option>All Services</option>
          </select>
          </div>

        </div>
        
        <div className='row mt-5'>
            <div className='col-lg-4 col-auto mb-3'>
                <div className='w-75 border rounded items mx-auto'>
                  <h4  className='bg-dark text-white m-0 rounded-top'>General Service</h4>
                  <hr></hr>
                  <div className='p-3'>
                  <h6>Service Details:</h6>
                  <p className='text-justify'>Engine Oil check & top up Oil Wuerth for twins park engine, Motul 7100 for Himalayan, 650 twins ) Air Filter Cleaning. Chain Clean and Chain Lube [German Brand Lube only] General Maintenance of clutch and brakes. Chain Tightening.</p>
                  </div>
                  <hr></hr>
                  <div className='d-flex justify-content-between p-3'>
                    <span>Price:</span>
                    <span>480$</span>
                  </div>
                </div>
            </div>

            <div className='col-lg-4 col-auto mb-3'>
                <div className='w-75 border rounded items mx-auto'>
                  <h4 className='bg-dark text-white m-0 rounded-top'>General Service</h4>
                  <hr></hr>
                  <div className='p-3'>
                  <h6>Service Details:</h6>
                  <p className='text-justify'>Engine Oil check & top up Oil Wuerth for twins park engine, Motul 7100 for Himalayan, 650 twins ) Air Filter Cleaning. Chain Clean and Chain Lube [German Brand Lube only] General Maintenance of clutch and brakes. Chain Tightening.</p>
                  </div>
                  <hr></hr>
                  <div className='d-flex justify-content-between p-3'>
                    <span>Price:</span>
                    <span>480$</span>
                  </div>
                </div>
            </div>

            <div className='col-lg-4 col-auto mb-3'>
                <div className='w-75 border rounded items mx-auto'>
                  <h4 className='bg-dark text-white m-0 rounded-top'>General Service</h4>
                  <hr></hr>
                  <div className='p-3'>
                  <h6>Service Details:</h6>
                  <p className='text-justify'>Engine Oil check & top up Oil Wuerth for twins park engine, Motul 7100 for Himalayan, 650 twins ) Air Filter Cleaning. Chain Clean and Chain Lube [German Brand Lube only] General Maintenance of clutch and brakes. Chain Tightening.</p>
                  </div>
                  <hr></hr>
                  <div className='d-flex justify-content-between p-3'>
                    <span>Price:</span>
                    <span>480$</span>
                  </div>
                </div>
            </div>

            <div className='col-lg-4 col-auto mb-3'>
                <div className='w-75 border rounded items mx-auto'>
                  <h4 className='bg-dark text-white m-0 rounded-top'>General Service</h4>
                  <hr></hr>
                  <div className='p-3'>
                  <h6>Service Details:</h6>
                  <p className='text-justify'>Engine Oil check & top up Oil Wuerth for twins park engine, Motul 7100 for Himalayan, 650 twins ) Air Filter Cleaning. Chain Clean and Chain Lube [German Brand Lube only] General Maintenance of clutch and brakes. Chain Tightening.</p>
                  </div>
                  <hr></hr>
                  <div className='d-flex justify-content-between p-3'>
                    <span>Price:</span>
                    <span>480$</span>
                  </div>
                </div>
            </div>

            <div className='col-lg-4 col-auto mb-3'>
                <div className='w-75 border rounded items mx-auto'>
                  <h4 className='bg-dark text-white m-0 rounded-top'>General Service</h4>
                  <hr></hr>
                  <div className='p-3'>
                  <h6>Service Details:</h6>
                  <p className='text-justify'>Engine Oil check & top up Oil Wuerth for twins park engine, Motul 7100 for Himalayan, 650 twins ) Air Filter Cleaning. Chain Clean and Chain Lube [German Brand Lube only] General Maintenance of clutch and brakes. Chain Tightening.</p>
                  </div>
                  <hr></hr>
                  <div className='d-flex justify-content-between p-3'>
                    <span>Price:</span>
                    <span>480$</span>
                  </div>
                </div>
            </div>

            <div className='col-lg-4 col-auto mb-3'>
                <div className='w-75 border rounded items mx-auto'>
                  <h4 className='bg-dark text-white m-0 rounded-top'>General Service</h4>
                  <hr></hr>
                  <div className='p-3'>
                  <h6>Service Details:</h6>
                  <p className='text-justify'>Engine Oil check & top up Oil Wuerth for twins park engine, Motul 7100 for Himalayan, 650 twins ) Air Filter Cleaning. Chain Clean and Chain Lube [German Brand Lube only] General Maintenance of clutch and brakes. Chain Tightening.</p>
                  </div>
                  <hr></hr>
                  <div className='d-flex justify-content-between p-3'>
                    <span>Price:</span>
                    <span>480$</span>
                  </div>
                </div>
            </div>
            
            

        </div>

    
        <div className='d-flex flex-column'>
        <h2 className='text-center'>Customer Review
       </h2>
       <span className="mx-auto">
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill='#FFD700' width={30}><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>        
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill='#FFD700' width={30}><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>        
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill='#FFD700' width={30}><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>                
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill='#FFD700' width={30}><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill='#FFD700' width={30}><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>   
        </span>         
        </div>
        
        <div className='row mt-3'>

          <div className='col-lg-4 col-auto mb-3'>
            
            <div className='mx-auto w-75 items rounded border'>
              <h4 className='bg-dark text-white mx-auto rounded-top'>Nithish kumar</h4>
              <div className='p-3'>
                <h6>Review:</h6>
                <p style={{margin:"0"}}>
                Engine Oil check & top up Oil Wuerth for twins park engine, Motul 7100 for Himalayan, 650 twins ) Air Filter Cleaning. Chain Clean and Chain Lube [German Brand Lube only] General Maintenance of clutch and brakes. Chain Tightening.
                </p>
              </div>
              <div className='p-3'>
                <h6>Rating:</h6>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill='#FFD700' width={20}><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>        
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill='#FFD700' width={20}><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>        
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill='#FFD700' width={20}><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>                
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill='#FFD700' width={20}><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill='#FFD700' width={20}><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>   
              </div>
            </div>

        </div>

        <div className='col-lg-4 col-auto mb-3'>
            
            <div className='mx-auto w-75 items rounded border'>
              <h4 className='bg-dark text-white mx-auto rounded-top'>Nithish kumar</h4>
              <div className='p-3'>
                <h6>Review:</h6>
                <p style={{margin:"0"}}>
                Engine Oil check & top up Oil Wuerth for twins park engine, Motul 7100 for Himalayan, 650 twins ) Air Filter Cleaning. Chain Clean and Chain Lube [German Brand Lube only] General Maintenance of clutch and brakes. Chain Tightening.
                </p>
              </div>
              <div className='p-3'>
                <h6>Rating:</h6>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill='#FFD700' width={20}><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>        
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill='#FFD700' width={20}><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>        
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill='#FFD700' width={20}><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>                
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill='#FFD700' width={20}><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill='#FFD700' width={20}><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>   
              </div>
            </div>

        </div>

        <div className='col-lg-4 col-auto mb-3'>
            
            <div className='mx-auto w-75 items rounded border'>
              <h4 className='bg-dark text-white mx-auto rounded-top'>Nithish kumar</h4>
              <div className='p-3'>
                <h6>Review:</h6>
                <p style={{margin:"0"}}>
                Engine Oil check & top up Oil Wuerth for twins park engine, Motul 7100 for Himalayan, 650 twins ) Air Filter Cleaning. Chain Clean and Chain Lube [German Brand Lube only] General Maintenance of clutch and brakes. Chain Tightening.
                </p>
              </div>
              <div className='p-3'>
                <h6>Rating:</h6>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill='#FFD700' width={20}><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>        
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill='#FFD700' width={20}><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>        
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill='#FFD700' width={20}><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>                
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill='#FFD700' width={20}><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill='#FFD700' width={20}><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>   
              </div>
            </div>

        </div>

        <div className='col-lg-4 col-auto mb-3'>
            
            <div className='mx-auto w-75 items rounded border'>
              <h4 className='bg-dark text-white mx-auto rounded-top'>Nithish kumar</h4>
              <div className='p-3'>
                <h6>Review:</h6>
                <p style={{margin:"0"}}>
                Engine Oil check & top up Oil Wuerth for twins park engine, Motul 7100 for Himalayan, 650 twins ) Air Filter Cleaning. Chain Clean and Chain Lube [German Brand Lube only] General Maintenance of clutch and brakes. Chain Tightening.
                </p>
              </div>
              <div className='p-3'>
                <h6>Rating:</h6>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill='#FFD700' width={20}><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>        
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill='#FFD700' width={20}><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>        
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill='#FFD700' width={20}><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>                
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill='#FFD700' width={20}><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill='#FFD700' width={20}><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>   
              </div>
            </div>

        </div>

        <div className='col-lg-4 col-auto mb-3'>
            
            <div className='mx-auto w-75 items rounded border'>
              <h4 className='bg-dark text-white mx-auto rounded-top'>Nithish kumar</h4>
              <div className='p-3'>
                <h6>Review:</h6>
                <p style={{margin:"0"}}>
                Engine Oil check & top up Oil Wuerth for twins park engine, Motul 7100 for Himalayan, 650 twins ) Air Filter Cleaning. Chain Clean and Chain Lube [German Brand Lube only] General Maintenance of clutch and brakes. Chain Tightening.
                </p>
              </div>
              <div className='p-3'>
                <h6>Rating:</h6>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill='#FFD700' width={20}><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>        
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill='#FFD700' width={20}><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>        
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill='#FFD700' width={20}><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>                
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill='#FFD700' width={20}><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill='#FFD700' width={20}><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>   
              </div>
            </div>

        </div>

        <div className='col-lg-4 col-auto mb-3'>
            
            <div className='mx-auto w-75 items rounded border'>
              <h4 className='bg-dark text-white mx-auto rounded-top'>Nithish kumar</h4>
              <div className='p-3'>
                <h6>Review:</h6>
                <p style={{margin:"0"}}>
                Engine Oil check & top up Oil Wuerth for twins park engine, Motul 7100 for Himalayan, 650 twins ) Air Filter Cleaning. Chain Clean and Chain Lube [German Brand Lube only] General Maintenance of clutch and brakes. Chain Tightening.
                </p>
              </div>
              <div className='p-3'>
                <h6>Rating:</h6>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill='#FFD700' width={20}><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>        
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill='#FFD700' width={20}><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>        
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill='#FFD700' width={20}><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>                
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill='#FFD700' width={20}><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill='#FFD700' width={20}><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"/></svg>   
              </div>
            </div>

        </div>


        </div>

        </div>
      </div> */}

      {/* Appoiment Booking */}

      
    </>
  )
}
