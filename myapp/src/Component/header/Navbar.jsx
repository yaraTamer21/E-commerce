import React from 'react'
import {NavLink} from 'react-router-dom'
const Navbar = () => {
    
    return (
        <>
            <div className="parent-navbar">
                {/* <div className="left">
                <i class="fa-solid fa-table-cells-large  me-1"style={{fontSize:"22px"}} ></i><span className='navbar-cat'>Categories</span><i style={{fontSize:"22px"}} class="fa-solid fa-angle-down ms-2"></i>
                </div> */}
                <div className="right  d-flex  justify-content-center m-auto">
                    <ul className='w-100 ' >
                        <li><NavLink className="links" to='/'>Home</NavLink></li>
                        <li><NavLink className="links" to='/pages'>Products</NavLink></li>
                        <li><NavLink className="links" to='/about'>AboutUs</NavLink></li>
                        
                        <li><NavLink className="links" to='/contact'>ContactUs</NavLink></li>
                    </ul>
                    
                     {/* <div>
                     <i class="fa-solid fs-2 fa-bars"></i>
                     <div style={{width:"fit-content"}} className='bg-danger px-5'>
                        <ul className='d-flex flex-column'>
                        <li><NavLink className="links mb-2 fw-bolder" to='/'>Home</NavLink></li>
                        <li><NavLink  className="links mb-2 fw-bolder"to='/pages'>Products</NavLink></li>
                        <li><NavLink className="links mb-2 fw-bolder" to='/about'>About Us</NavLink></li>
                        
                        <li><NavLink  className="links mb-2 fw-bolder" to='/contact'>Contact Us</NavLink></li>
                    </ul>
                    
                     </div>
                
                     </div> */}
                </div>
            </div>
          

        </>
    )
}

export default Navbar