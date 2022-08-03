import React, { useContext } from 'react'
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Search from '@material-ui/icons/Search';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../Context';

const Searchs = () => {

  let data = useSelector((x) => x.HandleCart)
  const { user ,setuser} = useContext(UserContext)
  return (
    <>
      <div className="parent-search w-100 row">
        <div className=" text-center left col-12 col-lg-2 col-sm-2 col-md-2">
          <h2 className='Logo-search'>Bonik</h2>
        </div>


        <div className="  col-12 col-lg-6   col-sm-6 col-md-6">
          <div className="items">
            <input type='text' placeholder='Search...' className='form-control  w-50 m-auto rounded-5 '  />
          </div>
        </div>
      
        <div className="right-icons    col-12 col-sm-4 col-md-4 col-lg-2">
          <div className="d-flex m-auto mt-3 mt-sm-0  align-items-center justify-content-center" >
            {user ?<> <span className='fw-bolder fs-md-2 fs-sm-6'>welcome {user.first_name}</span>
             <span className="fs-3 text-center m-auto">  <i onClick={()=>setuser(null)} class="fa-solid fs-md-1 fs-sm-5 fa-arrow-right-from-bracket"></i>  </span></> : <NavLink to='/login'>
              <span><  AccountCircle className=" fs-1 text-center m-auto" /></span>

            </NavLink>}

            <div className="left-icons">
              <NavLink to='/cart'>
                <span > <ShoppingBasket className="fs-1 fs-sm-5 text-center m-auto" />
                </span>
              </NavLink>

              <div className="shopping-cart">
                <p>{data.length}</p>

              </div>

            </div>
          </div>

        </div>
      </div>

    </>
  )
}

export default Searchs