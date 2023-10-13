import React from 'react'
import JobAD from './JobAD'
import Jobcard from './Jobcard'
import Jobcard2 from './Jobcard2'
import Jobcard3 from './Jobcard3'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const page = () => {
  return (
   
    <div>
         <Navbar/>
      <div className='columns-3'>
      <div className=''> <Jobcard/></div>
      <div className=''> <Jobcard/></div>
      <div className=''> <Jobcard/></div>
</div>
<div className='columns-3'>
      <div className=''> <Jobcard/></div>
      <div className=''> <Jobcard/></div>
      <div className=''> <Jobcard/></div>
</div>
<div className='columns-3'>
      <div className=''> <Jobcard/></div>
      <div className=''> <Jobcard/></div>
      <div className=''> <Jobcard/></div>
</div>
      <Jobcard2/>
     <Footer/>
    </div>
  )
}

export default page
