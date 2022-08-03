import React, { useState } from 'react'
import { MDBBtn, MDBInput } from 'mdb-react-ui-kit'
import { toast } from 'react-toastify'
import { init } from 'aos'
const Intials = {
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    selector:"",
    textArea:""
    

}

const ContactUs = () => {

    const [check, setCheck] = useState(Intials)
    const { first_name, last_name, email, phone ,selector,textArea} = check
    const Onhandleuser = (e) => {
        e.preventDefault()
        toast.success( "thanks for Your FeedBack"+first_name)
        setCheck(Intials)
        
     
     }
   
    const OnchangeInput = (e) => { 
        const  {value,name}=e.target;
        setCheck({...check,[name]:value})
  
    }
    console.log(check)
    return (
        <>
            <div className="container">
                <div className="parent-login">
                    <div className="row">
                        <div className="col-md-4">
                            <img className='w-100 py-3 h-100' src='./images/contact.png'  />
                        </div>
                        <div className="col-md-8 d-flex flex-column justify-content-center px-4 ">
                            <h1 className='fw-bolder text-dark pt-4 mt-2'> Contact Us</h1>
                            <form className='my-4' onSubmit={Onhandleuser} >
                                <div className=' mb-3 d-flex justjfy-content-center align-items-center   mb-3  '>
                                    <div className='me-4  w-100'>
                                        <MDBInput
                                            type='text'
                                            value={first_name || ""}
                                            name="first_name"

                                            onChange={OnchangeInput}
                                            label="First_name"
                                            class=" is-valid form-control "
                                            required
                                            validation="pleas enter your First_name"
                                            invalid

                                        />
                                    </div>
                                    <div className='me-4  w-100'>
                                        <MDBInput
                                            type='text'
                                            value={last_name || ""}
                                            name="last_name"

                                            onChange={OnchangeInput}
                                            label="last_name"
                                            class=" is-valid form-control "
                                            required
                                            validation="pleas enter your last_name"
                                            invalid

                                        />
                                    </div>
                                </div>
                                <div className=' d-flex justjfy-content-center align-items-center   mb-3  '>
                                    <div className='me-4  w-100'>
                                        <MDBInput
                                            type='email'
                                            value={email || ""}
                                            name="email"

                                            onChange={OnchangeInput}
                                            label="E-mail"
                                            class=" is-valid form-control "
                                            required
                                            validation="pleas enter your E-mail"
                                            invalid

                                        />
                                    </div>
                                    <div className='me-4  w-100'>
                                        <MDBInput
                                            type='phone'
                                            value={phone || ""}
                                            name="phone"

                                            onChange={OnchangeInput}
                                            label="Phone"
                                            class=" is-valid form-control "
                                            required
                                            validation="pleas enter your Phone"
                                            invalid

                                        />
                                    </div>
                                </div>

                                <div className='mt-4  '>
                                    <h3 className='fw-bolder fs-4 '>What the of website Do You Need ?</h3>
                                    <div className='row align-items-center '>
                                    <div className="col-sm-3 d-flex align-items-center">
                                     <div className="col-sm-1">
                                       <input onClick={OnchangeInput} className='me-1' type="radio" id="Web Design" name="selector" value='Web Design' />
                                       </div>
                                       <div className="col-sm-8 px-2">
                                       <label className='me-3 fw-bolder ' for="Web Design"> WebDesigner</label>
                                       </div>
                                     </div>

                                     <div className="col-sm-3 d-flex align-items-center">
                                     <div className="col-sm-1">
                                       <input onClick={OnchangeInput} className='me-1' type="radio" id="Web Design" name="selector" value='Web Design' />
                                       </div>
                                       <div className="col-sm-8 px-2">
                                       <label className='me-3 fw-bolder ' for="Web Design"> WebDeveloper</label>
                                       </div>
                                     </div>

                                     <div className="col-sm-3 d-flex align-items-center">
                                     <div className="col-sm-1">
                                       <input onClick={OnchangeInput} className='me-1' type="radio" id="Web Design" name="selector" value='Web Design' />
                                       </div>
                                       <div className="col-sm-8 px-2">
                                       <label className='me-3 fw-bolder ' for="Web Design"> ReactDevloper</label>
                                       </div>
                                     </div>
                                     <div className="col-sm-3 d-flex align-items-center">
                                     <div className="col-sm-1">
                                       <input onClick={OnchangeInput} className='me-1' type="radio" id="Web Design" name="selector" value='Web Design' />
                                       </div>
                                       <div className="col-sm-8 px-2">
                                       <label className='me-3 fw-bolder ' for="Web Design">Others</label>
                                       </div>
                                     </div>
                                    </div>


                                </div>
                                <textarea  placeholder='Message .......' onChange={OnchangeInput} name='textArea' value={textArea} rows={5} className=' is-valid form-control mt-4 w-75 text-area'></textarea>



                                <div className='d-flex align-items-center'>
                                    <MDBBtn className='px-5 fs-5 mt-4 fw-bolder ' type='sumbit' >
                                        Submit
                                    </MDBBtn>


                                </div>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactUs