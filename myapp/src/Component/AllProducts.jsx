
import React, { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'
import { UserContext } from '../Context'
import Home from '../Pages/Home'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AddCart } from '../Redux/action'

const AllProducts = () => {

    const Dispatch = useDispatch()
    const { user } = useContext(UserContext)
    const History = useHistory()
    const Data = useSelector((x) => x.HandleReducer)
    console.log(Data)
    const Display1 = (data) => {

        Dispatch(AddCart(data))
        toast.success("Product add successfull")

    }
    AOS.init({
        duration: 700,
        once: false
    });


    const experties = (str) => {
        if (str.length > 10) {
            str = str.substring(0, 10) + "..."
        }
        return str

    }
    return (
        <>
            <div className=" my-5 py-5">
                <div className="row">


                  
                        <div className="container">
                            {Data && Data.Title !== "" ? <h1 className='fw-bolder fs-1 mb-4  ' style={{width:"fit-content" , margin:"auto"}}>{Data.Title}</h1> : ""}




                            <div class="row w-100  container-fluid m-auto">
                                {Data && Data.Containe.length > 1 ?
                                Data.Containe.map((value, index) => {
                        return (<>
                       
<div className="col-lg-4 col-xl-3   col-sm-6">
    
<div className=" mobiles-child">
                                <div   data-aos="zoom-in" className="items mx-3 bg-white shadow-3-strong mb-5 border rounded-4">
                                <NavLink to={`/products/${value.id}`} >
                                        <img className='w-100' src={value.cover} />

                                    </NavLink>
                                    <div className="content ps-3 ">
                                        <h3> {experties(value.name)}</h3>
                                        <div className="icon-mobil my-3">
                                            <i class="fa-solid text-warning fa-star"></i>
                                            <i class="fa-solid   text-warning fa-star"></i>
                                            <i class="fa-solid   text-warning fa-star"></i>
                                            <i class="fa-solid   text-warning fa-star"></i>
                                            <i class="fa-solid fa-star"></i>
                                        </div>
                                        <div className="row   mt-2 pb-4">
                                            <div className="col-8 ">
                                                <h5 className='fw-bolder'>    ${value.price}.00</h5>
                                            </div>
                                            <div className="col-2 ">
                                                {user && <i onClick={() => Display1(value)} class="fa-solid fa-plus fs-4 icons-mobile"></i>}



                                            </div>
                                        </div>                                                </div>
                                </div>
                            </div>
</div>

                        </>)

                    })

                                  

                                 : History.push('/')}

                            </div>

                        </div>
               
                </div>





            </div>

        </>
    )
}

export default AllProducts