import React, { useContext } from 'react'
import { BigComponents } from '../Data'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { NavLink } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux'
import { Add, AddCart } from '../Redux/action';
import { toast } from 'react-toastify';
import { UserContext } from '../Context';


const BigComponent = () => {
    const { user } = useContext(UserContext)
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            }
        ]

    };
    const Dispatch = useDispatch()
    const Dispaly = (x) => {
        Dispatch(Add(x, "BigComponent"))


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
            <div className="big-header container py-3 ">
                <div className='d-flex justify-content-between align-content-center px-3'>
                    <h1 className='fw-bolder d-flex align-items-center '>
                        <span className='Big'>Big</span>
                        <h4  className='titl' > Component</h4>

                    </h1>
                    <NavLink to='/all' className='nav-all '>
                                    <p onClick={() => Dispaly(BigComponent)} className='fs-4 fw-bold '>View All<i class=" ms-2 fa-solid fa-right-long"></i></p>

                                </NavLink>
                </div>

            
            
                    <Slider className='mt-3' {...settings}>
                    {BigComponents.map((value, index) => {
                        return (<>
                       

                       <div className=" mobiles-child">
                                <div  className="items mx-3 bg-white shadow-3-strong mb-3 border rounded-4">
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

                    </Slider>
                 
              



            </div>






























































            {/* <div className="big-content container my-4">
                <Slider {...settings} className='Sliders'>

                    {BigComponents.map((value, index) => {
                        return (<>

                            <div className="parent-big mb-5 m-auto " >
                                <div className="offers">
                                    <p> {value.discount}% Offers</p>
                                </div>
                                <div>
                                    <NavLink to={`/products/${value.id}`}>
                                        <img className='w-100' src={value.cover} />

                                    </NavLink>

                                </div>
                                <div className='w-100 px-4 prices-Big  '>
                                    <div className="height-big">
                                        <h3> {value.name}</h3>
                                    </div>
                                    <div className='mt-4'>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </div>
                                    <div className="row  prices-big mt-2 pb-4">
                                        <div className="col-md-8 dolar">
                                            ${value.price}.00
                                        </div>
                                        {user && <div className="col-md-2 prices-Big1 ">
                                            <i onClick={() => Dispaly1(value)} class="fa-solid fa-plus   "></i>
                                        </div>}
                                    </div>
                                </div>
                            </div>




                        </>)
                    })}

                    {/* 

 <div className="parent-flash mb-5 " >
                                <div className="offers">
                                    <p> {value.discount}% Offers</p>
                                </div>
                                <div>
                                    <img className='w-100' src={value.cover} />

                                </div>
                                <div className='w-100 px-4  '>
                                    <div className="height-slider">
                                        <h3> {erperies(value.name)}</h3>
                                    </div>
                                    <div className='mt-4'>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                        <i class="fa-solid fa-star"></i>
                                    </div>
                                    <div className="row  prices-flash mt-2 pb-4">
                                        <div className="col-md-8 dolar">
                                            ${value.price}.00
                                        </div>
                                        <div className="col-md-2 ">
                                            <i class="fa-solid fa-plus "></i>
                                        </div>
                                    </div>
                                </div>
                            </div>



*/}





















            {/* 
                </Slider> */}


            {/* </div> */}

        </>
    )
}

export default BigComponent