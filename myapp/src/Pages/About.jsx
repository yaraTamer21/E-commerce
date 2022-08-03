import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Banner from '../Component/Banner';

const About = () => {

    AOS.init({
        duration: 3000,
        once: false
    });
  return (
    <>
       <div className="parent-about mb-5">

       </div>
       <div className="container text-center fw-bolder container-about text-dark  ">
        <h1>About Us</h1>
     
       <hr data-aos="zoom-in" className='parent-about-hr'/>
      
       </div>

       <div className=" px-md-5 container-lg ">
        <p className='fw-bolder fs-lg-5 fs-md-6   text-muted'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repudiandae, sint natus fuga, eaque accusamus voluptas mollitia facilis ipsa magnam officia! Nostrum similique laborum explicabo voluptate! Architecto reprehenderit magnam iure quod atque sequi numquam facilis eaque vel soluta velit sit accusantium beatae, nesciunt provident? Numquam modi ullam dignissimos illo alias adipisci tempora nisi voluptatem distinctio nemo, quos voluptate aliquam non soluta eum blanditiis debitis nobis. Aperiam fuga animi delectus non corporis voluptates omnis molestiae consequatur culpa ullam asperiores optio nesciunt ex nostrum, consectetur numquam perferendis voluptatibus rerum beatae commodi! Officiis rerum placeat laborum expedita inventore molestiae, quaerat corporis rem voluptatibus!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repudiandae, sint natus fuga, eaque accusamus voluptas mollitia facilis ipsa magnam officia! Nostrum similique laborum explicabo voluptate! Architecto reprehenderit magnam iure quod atque sequi numquam facilis eaque vel soluta velit sit accusantium beatae, nesciunt provident? Numquam modi ullam dignissimos illo alias adipisci tempora nisi voluptatem distinctio nemo, quos voluptate aliquam non soluta eum blanditiis debitis nobis. Aperiam fuga animi delectus non corporis voluptates omnis molestiae consequatur culpa ullam asperiores optio nesciunt ex nostrum, consectetur numquam perferendis voluptatibus rerum beatae commodi! Officiis rerum placeat laborum expedita inventore molestiae, quaerat corporis rem voluptatibus!
        placeat laborum expedita inventore molestiae, quaerat corporis rem voluptatibus!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis repudiandae, sint natus fuga, eaque accusamus voluptas mollitia facilis ipsa magnam officia! Nostrum similique laborum explicabo voluptate! Architecto reprehenderit magnam iure quod atque sequi numquam facilis eaque vel soluta velit sit accusantium beatae, nesciunt provident? Numquam modi ullam dignissimos illo alias adipisci tempora nisi voluptatem distinctio nemo, quos voluptate aliquam non soluta eum blanditiis debitis nobis. Aperiam fuga animi delectus non corporis voluptates omnis molestiae consequatur culpa ullam asperiores optio nesciunt ex nostrum, consectetur numquam perferendis voluptatibus rerum beatae commodi! Officiis rerum placeat laborum expedita inventore molestiae, quaerat corporis rem voluptatibus!
        </p>
        <Banner/>
       </div>

    
    </>
  )
}

export default About