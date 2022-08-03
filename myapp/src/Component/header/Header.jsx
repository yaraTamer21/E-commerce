import React from 'react'
import Head from './Head'
import Navbar from './Navbar'
import Searchs from './Search'

const Header = () => {
  return (
    <>
    <div className="row m-0 w-100">
      <div className="col-12 p-0">
      <Head/>
      </div>
      <div className="col-12 p-0">
      <Searchs/>
      </div>
      <div className="col-12 p-0">
      <Navbar/>
      </div>

    </div>
   


    </>
  )
}

export default Header