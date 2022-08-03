import React, { useContext } from 'react'
import { arrivals } from '../Data'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { Add, AddCart } from '../Redux/action';
import { toast } from 'react-toastify';
import { UserContext } from '../Context';
const NewArrival = () => {
    const dispatch = useDispatch()
    const {user} = useContext(UserContext)
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
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
    const Dispatch=useDispatch()
    const Dispaly=(x)=>{
       Dispatch(Add(x,"Arrivals"))
     

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
            <div className="arrival-header container py-3 ">
                <div className='d-flex  w-100 justify-content-between px-3'>
                    <h1 className='d-flex align-items-center'>
                        <span>NEW</span>
                        <h4 className="titl">Arrival</h4>
                    </h1>
                    <NavLink to='/all' className='nav-all '>
                                    <p onClick={() => Dispaly(arrivals)} className='fs-4 fw-bold '>View All<i class=" ms-2 fa-solid fa-right-long"></i></p>

                                </NavLink>
                </div>
                <Slider className='mt-3' {...settings}>
                    {arrivals.map((value, index) => {
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
                                            <div className="col-md-8 col-8 ">
                                                <h5 className='fw-bolder'>    ${value.price}.00</h5>
                                            </div>
                                            <div className="col-md-2  col-2">
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

export default NewArrival