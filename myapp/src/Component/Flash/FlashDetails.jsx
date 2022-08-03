import React, { useState, useEffect, useContext } from 'react'
import axios from 'axios'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Sdata from '../../Data';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { AddCart } from '../../Redux/action';
import { toast } from 'react-toastify'
import { UserContext } from '../../Context';



const NextArrow = (props) => {
    
    const { onClick } = props;
    return (<>
        <div className='control' onClick={onClick}>
            <button className='bottons-control-next'>
                <i class="fa-solid fa-arrow-right-long"></i>
            </button>
        </div>

    </>)

}
const PrevArrow = (props) => {
    const { onClick } = props;
    return (<>
        <div className='control' onClick={onClick}>
            <button className='bottons-control-prev'>
                <i class="fa-solid fa-arrow-left-long"></i>
            </button>
        </div>

    </>)

}
const FlashDetails = () => {

    const {user}=useContext(UserContext)
    console.log(user)
    const dispatch = useDispatch()

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
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
    const Display1 = (data) => {

        dispatch(AddCart(data))
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
            <div className="slider-flashDetails">
                <Slider {...settings} className='Sliders'>
                {Sdata.map((value, index) => {
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
                                        <div className="row  w-100  mt-2 pb-4">
                                            <div className=" col-8 col-sm-8 ">
                                                <h5 className='fw-bolder'>    ${value.price}.00</h5>
                                            </div>
                                            <div className=" col-2 col-sm-2 ">
                                                {user && <i onClick={() => Display1(value)} class="fa-solid fa-plus fs-4 icons-mobile"></i>}



                                            </div>
                                        </div>                                                </div>
                                </div>
                            </div>

                        </>)

                    })}

                </Slider>

            </div>



        </>
    )
}

export default FlashDetails




