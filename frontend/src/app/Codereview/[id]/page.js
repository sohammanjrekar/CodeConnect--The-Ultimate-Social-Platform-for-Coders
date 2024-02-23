import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import React from 'react'
import EachCode from './EachCode'
import GithubHistory from '@/app/components/GithubHistory'
import GithubFinder from '@/app/components/GithubFinder'

const page = ({ postId, title }) => {
  return (
    <div>
      <Navbar/>
   <div className="container">
   <EachCode />
   </div>
    <h1>{title}</h1>
    <GithubHistory/>
      <Footer/>

    </div>
  )
}

export default page
