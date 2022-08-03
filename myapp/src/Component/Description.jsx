import axios from 'axios'
import React ,{useContext, useEffect , useState} from 'react'
import { NavLink, useParams } from 'react-router-dom'
import { All } from '../Data'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useSelector, useDispatch } from 'react-redux';
import { AddCart } from '../Redux/action';
import { toast } from 'react-toastify';
import { UserContext } from '../Context';


const Description = () => {
    
    let{id} = useParams()
    const {user}=useContext(UserContext)
    const Dispatch=useDispatch()
     let products= All.filter((x)=>x.id==id)
     let product= products[0]
     const [Data,setData]=useState(product)
     let images=product.cover
     AOS.init({
        duration: 3000,
        once: false
    });


const Display=(x)=>{
    Dispatch(AddCart(x))
    toast.success("Product Added Successfully!")

}





    return (
        <> 
       
          <div className="container py-5 ">
            <div className="row ">
                <div data-aos="zoom-in" className="col-md-4  col-sm-8 mb-sm-5 m-sm-auto">
                    <img  src={images} className='w-100 border rounded-5 shadow-sm shadow-3-strong' />
                </div>

                <div className="col-md-6 d-flex flex-column  justify-content-center align-content-center">
                    <h2 className='fs-1 fw-bolder mb-4'>{Data.name}</h2>
                    
                    <p className='mb-4 fw-bold text-muted fs-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente quod non eius quis iste numquam, labore facere asperiores itaque amet dignissimos reprehenderit blanditiis magnam quidem rerum pariatur sequi, hic beatae.</p>
                    <h4 className='fw-bolder fs-3 mb-4'>${Data.price}</h4>
                    
     <NavLink to= {user?'/cart':'/login'}>
     <button onClick={()=>user?Display(Data):toast.error("must login to add in cart")} className='btn btn-danger w-50'>Add To Cart </button>

     </NavLink>
                   
                </div>
            </div>
          </div>


        </>

    )
}

export default Description