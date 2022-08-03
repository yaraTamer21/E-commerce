import React, { useContext } from 'react'
import { Mobiles } from '../Data'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavLink, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Add, AddCart } from '../Redux/action';
import { toast } from 'react-toastify';
import { UserContext } from '../Context';
import { useState } from 'react';

const Mobile = () => {

    const { user } = useContext(UserContext)



    AOS.init({
        duration: 2000,
        once: false
    });
    const Dispatch = useDispatch()
    const Dispaly = (x) => {
        Dispatch(Add(x, "Mobiles"))


    }
    const Display1 = (data) => {

        Dispatch(AddCart(data))
        toast.success("Product add successfull")

    }

    const experties = (str) => {
        if (str.length > 10) {
            str = str.substring(0, 10) + "..."
        }
        return str

    }

    return (
        <>
            <div className="container py-3">
                <div className="row w-100">
                    <div data-aos="zoom-in" className=" col-8 col-md-4 col-sm-8  m-auto m-md-0  m-sm-auto mb-2 left-mobiles ">
                        <div className="row mt-4 text-center mobiles-names ">
                            <div className=" col-6 col-md-6 col-sm-6 Brands-shops">
                                <h3>Brands</h3>
                            </div>
                            <div className=" col-6 col-md-6 col-sm-6">
                                <h3>Shops</h3>
                            </div>
                        </div>

                        <div className="container container_h1">
                            <div className="row w-100 align-items-center my-4 justify-content-center  container-mobiles   px-4">
                                <div className=" col-3 col-sm-2">
                                    <img className='w-100' src='./images/category/cat-1.png' />
                                </div>
                                <div className=" col-8  col-sm-10">
                                    <h2>Apple</h2>
                                </div>
                            </div>

                            <div className="row w-100 align-items-center  my-4  justify-content-center  container-mobiles   px-4">
                                <div className="col-3 col-sm-2">
                                    <img className='w-100' src='./images/category/cat-2.png' />
                                </div>
                                <div className=" col-8 col-sm-10">
                                    <h2 >SammSoung</h2>
                                </div>
                            </div>

                            <div className="row w-100 align-items-center  my-4  justify-content-center  container-mobiles   px-4">
                                <div className="col-3 col-sm-2">
                                    <img className='w-100' src='./images/category/cat-3.png' />
                                </div>
                                <div className="col-8 col-sm-10">
                                    <h2 >Oppo</h2>
                                </div>
                            </div>

                            <div className="row align-items-center  my-4  justify-content-center  container-mobiles   px-4">
                                <div className=" col-3 col-sm-2">
                                    <img className='w-100' src='./images/category/cat-2.png' />
                                </div>
                                <div className=" col-8 col-sm-10">
                                    <h2 >Vivo</h2>
                                </div>
                            </div>

                            <div className="row align-items-center  my-4  justify-content-center  container-mobiles   px-4">
                                <div className= " col-3 col-sm-2">
                                    <img className='w-100' src='./images/category/cat-1.png' />
                                </div>
                                <div className=" col-8  col-sm-10">
                                    <h2 >Redmi</h2>
                                </div>
                            </div>

                            <div className="row align-items-center  my-4  justify-content-center  container-mobiles   px-4">
                                <div className=" col-3 col-sm-2">
                                    <img className='w-100' src='./images/category/cat-2.png' />
                                </div>
                                <div className=" col-8 col-sm-10">
                                    <h2 >Sony</h2>
                                </div>
                            </div>
                        </div>

                    </div>


                    <div className=" col-12 col-md-8 mt-sm-4 mt-4  mt-md-0 col-sm-12 ">
                        <div className="container">
                            <div className='d-flex w-100 justify-content-between'>
                                <h1 className='fw-bolder fs-2 '>Mobile Phones</h1>
                                <NavLink to='/all' className='nav-all '>
                                    <p onClick={() => Dispaly(Mobiles)} className='fs-4 fw-bold '>View All<i class=" ms-2 fa-solid fa-right-long"></i></p>

                                </NavLink>
                            </div>
                            <div className="row  ">
                                {Mobiles.map((value, index) => {
                                    return (<>

                                        <div className="col-lg-4 col-sm-6 col-md-6 mobiles-child">
                                            <div  data-aos="flip-down" className="items bg-white shadow-3-strong mb-3 border rounded-4">
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

                                    </>)

                                })}

                            </div>

                        </div>
                    </div>



                </div>





            </div>

        </>
    )
}

export default Mobile