import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Searchbar from '../components/Searchbar'

import Link from 'next/link'


const page = () => {
  return (
    <>
      <>
      <Navbar/>
      <Searchbar/>
      <>
  {/* component */}
  <div className="container mx-auto p-4">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://miro.medium.com/max/3200/1*8ifpC7J69gtWlx_-3uOoFA.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://www.codeglo.com/blog/wp-content/uploads/2021/06/image-14.jpg"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://agiletech.vn/wp-content/uploads/2020/02/1pNTivwRioxiS1VDPqnmynA.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/19cfa6118456891.6089761b94f99.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://cdn.dribbble.com/users/594915/screenshots/2742859/dribbble_peview_3.jpg?resize=400x300&vertical=center"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://cdn.dribbble.com/users/905066/screenshots/6800873/inspired_again__4x.png?compress=1&resize=400x300&vertical=center"
            alt=""
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://cdn.dribbble.com/users/6087158/screenshots/18563823/______________2022-06-23___16.09.48.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://s3-alpha.figma.com/hub/file/4178512570/8c0fd4ca-1588-4f76-96f6-017a05063c6f-cover.png"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://cdn.dribbble.com/users/1126935/screenshots/14889725/media/bd5c69d9fcc2da5716c344bf389b9cf2.png?compress=1&resize=1000x750&vertical=top"
            alt=""
          />
        </div>
      </div>
      <div className="grid gap-4">
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://cdn.dribbble.com/userupload/3146709/file/original-1c688e1e9cf259966d87ad9dd46f070e.png?resize=300x225"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://themeforest.img.customer.envatousercontent.com/files/340577357/cover.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=5424&max-w=400&s=88edfcfe81a341005133211c6f8adcb2"
            alt=""
          />
        </div>
        <div>
          <img
            className="h-auto max-w-full rounded-lg"
            src="https://cdn.dribbble.com/users/1627429/screenshots/10724776/carlos_preview.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</>

  <Footer/>
</>

    </>
  )
}

export default page
