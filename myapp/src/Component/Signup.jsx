import React, { useState } from 'react'
import { MDBInput, MDBValidation, MDBBtn } from 'mdb-react-ui-kit'
import axios from 'axios'
import { toast } from 'react-toastify'
import { NavLink, useHistory } from 'react-router-dom'

const Intials = {
    first_name: "",
    last_name: "",
    age: 0,
    email: "",
    password: ""
}
const Signup = () => {

    const [FormValue, setFormValue] = useState(Intials)
    const { first_name, last_name, age, email, password } = FormValue

    const History = useHistory()
    const OnchangeInput = (e) => {
        const { value, name } = e.target;
        setFormValue({ ...FormValue, [name]: value })

    }
    const Onhandleuser = async (e) => {
        e.preventDefault()
        const {data}= await axios.post('https://route-egypt-api.herokuapp.com/signup',FormValue)
        if(data.message==='success'){
            toast.success('you created account successfully')
            History.push('/login')
        }
        else {
            toast.error(data.message)
        }

    }


    return (
        <>
            <div className="container">
                <div className="parent-login">
                    <div className="row">
                        <div className="col-md-6  d-none d-md-flex d-sm-none">
                            <img className='w-100 py-3' src='./images/login2.webp' />
                        </div>
                        <div className="col-md-6 px-5  py-4 py-md-0 px-md-0 px-sm-5 py-sm-4 d-flex flex-column justify-content-center px-4 ">
                            <h1 className='fw-bolder text-dark'>Sign Up</h1>
                            <form className='my-4  ' onSubmit={Onhandleuser} >

                                <div className='w-75  mb-3  '>
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

                                <div className='w-75 mb-3  '>
                                    <MDBInput
                                        type='text'
                                        value={last_name || ""}
                                        name="last_name"
                                        onChange={OnchangeInput}
                                        label="Last_name"
                                        class=" is-valid form-control "
                                        required
                                        validation="pleas enter your Last_name"
                                        invalid

                                    />
                                </div>
                                <div className='w-75 mb-3  '>
                                    <MDBInput
                                        type='number'
                                        value={age || ""}
                                        name="age"
                                        onChange={OnchangeInput}
                                        label="Age"
                                        class=" is-valid form-control "
                                        required
                                        validation="pleas enter your Age"
                                        invalid

                                    />
                                </div>




                                <div className='w-75 mb-3  '>
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
                                <div className='w-75 '>
                                    <MDBInput
                                        type='password'
                                        value={password || ""}
                                        name="password"
                                        onChange={OnchangeInput}
                                        label="Password"
                                        class=" is-valid form-control "
                                        required
                                        validation="pleas enter your Password"
                                        invalid

                                    />
                                </div>



                                <div className='d-flex align-items-center'>
                                    <MDBBtn className='px-5 fs-6 px-md-3 px-sm-4 mt-4 fw-bolder ' type='sumbit' >
                                       <span className='pe-lg-0 pe-md-5'> Register</span>
                                    </MDBBtn>
                                    <span className='mt-4 ms-3  fw-bolder '>are you have account? </span>
                                    <NavLink to='/login'>
                                        <p className='mt-4 pt-3 ms-2 fs-6  fw-bolder'> SignIn </p>
                                    </NavLink>
                                </div>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup