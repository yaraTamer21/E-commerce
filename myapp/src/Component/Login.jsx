import React, { useContext, useState } from 'react'
import { MDBInput, MDBValidation, MDBBtn } from 'mdb-react-ui-kit'
import axios from 'axios'
import { toast } from 'react-toastify'
import { NavLink, useHistory } from 'react-router-dom'
import  jwtDecode from 'jwt-decode'
import { UserContext } from '../Context'


const Intials = {
    email: "",
    password: ""
}
const Login = () => {

    const [FormValue, setFormValue] = useState(Intials)
    const { email, password } = FormValue
    const [Token, setToken] = useState({})
    const {setuser}= useContext(UserContext)
    const History = useHistory()
    const OnchangeInput = (e) => {
        const { value, name } = e.target;
        setFormValue({ ...FormValue, [name]: value })


    }


    const Onhandleuser = async (e) => {
        e.preventDefault();
        let { data } = await axios.post('https://route-egypt-api.herokuapp.com/signin', FormValue)

        if (data.message === "success") {
            History.push("/")
            localStorage.setItem('token', data.token);
           let Token=localStorage.getItem('token');
           let Decoder=jwtDecode(Token)
           setuser(Decoder)
           console.log(Decoder)


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
                        <div className="col-md-6 d-md-flex d-none d-md-flex d-sm-none">
                            <img className='w-100 py-3' src='./images/login2.webp' />
                        </div>
                        <div className="col-md-6 px-5  py-4 py-md-0 px-md-0 px-sm-5 py-sm-4 d-flex flex-column justify-content-center px-4 ">
                            <h1 className='fw-bolder text-dark'>Sign In</h1>
                            <form className='my-4' onSubmit={Onhandleuser} >
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
                               <MDBBtn className='px-5 fs-6 px-sm-4 mt-4 fw-bolder ' type='sumbit' >
                                    Login
                                </MDBBtn>
                                    
                                <NavLink to='/signup'>
                                    <p className='mt-5 ms-4 fs-6 fw-bolder'> Or  Create Account </p>
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

export default Login