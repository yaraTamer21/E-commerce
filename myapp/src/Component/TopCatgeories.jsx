import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const TopCatgeories = () => {

   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 1,
      autoplay: false,
      responsive: [
         {
           breakpoint: 1200,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1,
           },
         }
         ]

   };

   return (
      <>
         <div className="container py-3 ">
            <h1 className=' px-3 '>  <span>

               <i style={{color:"#b90e47",fontSize: "22px" }} class="fa-solid fa-table-cells-large fs-2  me-1"  ></i>
            </span>
               <span className='Top_Catgies-Header fs-1 '>
                  Top Catrogirs
               </span>
            </h1>


            <Slider {...settings} className='Sliders'>


               <div className="TopCateories-Images text-center">
                  <img src='./images/top/category-1.png' className='w-100' />
                  <div className="left">
                     <p>HeadPhone</p>
                  </div>
                  <div className="right">
                     <p>3K Order This Week</p>
                  </div>
               </div>


               <div className="TopCateories-Images m-auto ">
                  <img src='./images/top/category-2.png' className='w-100' />
                  <div className="left">
                     <p>HeadPhone</p>
                  </div>
                  <div className="right">
                     <p>3K Order This Week</p>
                  </div>
               </div>


               <div className="TopCateories-Images m-auto ">
                  <img src='./images/top/category-3.png' className='w-100' />
                  <div className="left">
                     <p>HeadPhone</p>
                  </div>
                  <div className="right">
                     <p>3K Order This Week</p>
                  </div>
               </div>

               <div className="TopCateories-Images m-auto ">
                  <img src='./images/top/category-3.png' className='w-100' />
                  <div className="left">
                     <p>HeadPhone</p>
                  </div>
                  <div className="right">
                     <p>3K Order This Week</p>
                  </div>
               </div>

            </Slider>
         </div>


      </>
   )
}

export default TopCatgeories