import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const Sliders = () => {

 
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      appendDots:(dots)=>{
        return <ul style={{margin:"0"}}>{dots}</ul>

      },
      nextArrow:false
    };
  return (
    <>
         
     <div className="slider">
     <Slider {...settings}>
         <div className="row w-100 slider-carsol p-1">
          <div className="col-md-8 col-sm-8 col-8">
            <h1>
              50% Off For Your First Shopping 
            </h1>
            <p className='text-muted'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam iure corrupti itaque! Voluptates</p>
            <button>Visit Collection</button>

          </div>
          <div className="col-md-4 col-sm-4 col-4">
            <img className='w-100' src='./images/SlideCard/slide-2.png' />
          </div>
         </div>

         <div className="row w-100 slider-carsol p-1">
          <div className="col-sm-8 col-8">
            <h1>
              50% Off For Your First Shopping 
            </h1>
            <p className='text-muted'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam iure corrupti itaque! Voluptates</p>
            <button>Visit Collection</button>

          </div>
          <div className="col-sm-4 col-4">
            <img className='w-100' src='./images/SlideCard/slide-3.png' />
          </div>
         </div>




         <div className="row w-100 slider-carsol p-1">
          <div className="col-sm-8 col-8">
            <h1>
              50% Off For Your First Shopping 
            </h1>
            <p className='text-muted'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam iure corrupti itaque! Voluptates</p>
            <button>Visit Collection</button>

          </div>
          <div className="col-sm-4 col-4">
            <img className='w-100' src='./images/SlideCard/slide-4.png' />
          </div>
         </div>
       </Slider>



     </div>
    
    
    
    </>
  )
}

export default Sliders