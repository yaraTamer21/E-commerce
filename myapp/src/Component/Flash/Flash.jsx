import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { Add } from '../../Redux/action';
import Sdata from '../../Data';
import FlashDetails from './FlashDetails'

const Flash = () => {

  AOS.init({
    duration: 500,
    once: false

  });
  const Dispatch = useDispatch()
  const Dispaly = (x) => {
    Dispatch(Add(x, "Flash Details"))


  }
  return (
    <>

      <div className="headrer-flash py-3">

        <div className="container   ">

          <div className=' w-100 d-flex justify-content-between px-3'>
            <h1 className='fw-bolder fs-2 '><i class="fa-solid fa-bolt text-danger me-1"></i>Flash Deals</h1>
            <NavLink to='/all' className='nav-all '>
            <p onClick={() => Dispaly(Sdata)} className='fs-4 fw-bold '>View All<i class=" ms-2 fa-solid fa-right-long"></i></p>

          </NavLink>
          </div>

      


        </div>
        <FlashDetails />

      </div>

    </>
  )
}

export default Flash