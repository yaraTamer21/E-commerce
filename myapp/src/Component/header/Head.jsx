import React from 'react'
import Phone from '@material-ui/icons/Phone';
import Email from '@material-ui/icons/Email';
import Flag from '@material-ui/icons/Flag';

const Head = () => {
    return (
        <>
            <div className="parent-head  w-100 d-none  d-sm-flex ">
                <div className='left'>
                    <ul>
                        <li>
                            <span className='  icons-head'><Phone  className="fs-6" /></span> <span>+856451651648461 </span>
                        </li>
                        <li>
                            <span  className='  icons-head'> <Email  className="fs-6" /></span> <span>Example@gmail.com </span>
                        </li>
                      
                    </ul>
                </div>
                <div className='right'>
                    <ul>
                        <li>
                            ThemeFAQ,S
                        </li>
                        <li>
                           NEEDHelps
                        </li>
                        <li className='d-flex align-items-center'>
                              <Flag  className="fs-6"/><span>EN</span>
                        </li>
                        <li>
                             <span>USD</span>
                        </li>
                      
                    </ul>
                </div>
            </div>

        </>
    )
}

export default Head