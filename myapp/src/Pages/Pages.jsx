import React from 'react'
import BigComponent from '../Component/BigComponent'
import Flash from '../Component/Flash/Flash'
import Mobile from '../Component/Mobile'
import NewArrival from '../Component/NewArrival'
import { BigComponents } from '../Data'

const Pages = () => {
  return (
    <>
  <div className='mt-5'>
  <Flash/>
     <NewArrival/>
    <BigComponent/>
    <Mobile/>
  </div>

    
    </>
  )
}

export default Pages