import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const About = () => {
  return (
    <>
    <Navbar/>
  <link
    rel="stylesheet"
    href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
  />
  <link
    rel="stylesheet"
    href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
  />
  <section className="relative pt-16 bg-blueGray-50">
    <div className="container mx-auto">
      <div className="flex flex-wrap items-center">
        <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-500">
            <img
              alt="..."
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
              className="w-full align-middle rounded-t-lg"
            />
            <blockquote className="relative p-8 mb-4">
              <svg
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 583 95"
                className="absolute left-0 w-full block h-95-px -top-94-px"
              >
                <polygon
                  points="-30,95 583,95 583,65"
                  className="text-pink-500 fill-current"
                />
              </svg>
              <h4 className="text-xl font-bold text-white">
                Great for your awesome project
              </h4>
              <p className="text-md font-light mt-2 text-white">
                Putting together a page has never been easier than matching
                together pre-made components. From landing pages presentation to
                login areas, you can easily customise and built your pages.
              </p>
            </blockquote>
          </div>
        </div>
        <div className="w-full md:w-6/12 px-4">
          <div className="flex flex-wrap">
            <div className="w-full md:w-6/12 px-4">
              <div className="relative flex flex-col mt-4">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                    <i className="fas fa-sitemap" />
                  </div>
                  <h6 className="text-xl mb-1 font-semibold">CSS Components</h6>
                  <p className="mb-4 text-blueGray-500">
                    Notus JS comes with a huge number of Fully Coded CSS
                    components.
                  </p>
                </div>
              </div>
              <div className="relative flex flex-col min-w-0">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                    <i className="fas fa-drafting-compass" />
                  </div>
                  <h6 className="text-xl mb-1 font-semibold">
                    JavaScript Components
                  </h6>
                  <p className="mb-4 text-blueGray-500">
                    We also feature many dynamic components for React, NextJS,
                    Vue and Angular.
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 px-4">
              <div className="relative flex flex-col min-w-0 mt-4">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                    <i className="fas fa-newspaper" />
                  </div>
                  <h6 className="text-xl mb-1 font-semibold">Pages</h6>
                  <p className="mb-4 text-blueGray-500">
                    This extension also comes with 3 sample pages. They are
                    fully coded so you can start working instantly.
                  </p>
                </div>
              </div>
              <div className="relative flex flex-col min-w-0">
                <div className="px-4 py-5 flex-auto">
                  <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                    <i className="fas fa-file-alt" />
                  </div>
                  <h6 className="text-xl mb-1 font-semibold">Documentation</h6>
                  <p className="mb-4 text-blueGray-500">
                    Built by developers for developers. You will love how easy
                    is to to work with Notus JS.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  </section>
  <div className="bg-white relative flex items-center justify-center overflow-hidden z-50">
      <div className="relative mx-auto h-full px-4 pb-20 md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
        <div className="flex flex-col items-center justify-between lg:flex-row py-16">
          <div className="relative">
            <div className="absolute top-0 -left-48 z-0 opacity-50">
              <img
                src="https://placehold.co/200x100"
                className="w-36 z-0 h-full object-fill fill-y text-y"
                alt="placeholder"
              />
            </div>
            <div className="lg:max-w-xl lg:pr-5 relative z-40">
              <p className="flex text-sm uppercase text-g1">About Us</p>
              <h2 className="mb-6 max-w-lg text-5xl font-light leading-snug tracking-tight text-g1 sm:text-7xl sm:leading-snug">
                We make you look{' '}
                <span className="my-1 inline-block border-b-8 border-g4 bg-white px-4 font-bold text-g4 animate__animated animate__flash">
                  different
                </span>
              </h2>
              <p className="text-base text-gray-700">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque it.
              </p>
              <div className="mt-10 flex flex-col items-center md:flex-row">
                <a
                  href="/"
                  className="mb-3 inline-flex h-12 w-full items-center justify-center rounded bg-green-600 px-6 font-medium tracking-wide text-white shadow-md transition hover:bg-blue-800 focus:outline-none md:mr-4 md:mb-0 md:w-auto"
                >
                  View More
                </a>
                <a
                  href="/"
                  aria-label=""
                  className="group inline-flex items-center font-semibold text-g1"
                >
                  Watch how it works
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-4 h-6 w-6 transition-transform group-hover:translate-x-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="relative hidden lg:ml-32 lg:block lg:w-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="my-6 mx-auto h-10 w-10 animate-bounce rounded-full bg-white p-2 lg:hidden"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 17l-4 4m0 0l-4-4m4 4V3"
              />
            </svg>
            <div className="bg-orange-400 mx-auto w-fit overflow-hidden rounded-[6rem] rounded-br-none rounded-tl-none">
              <img src="https://placehold.co/400x400" alt="placeholder" />
            </div>
          </div>
        </div>
      </div>
    </div>
  <Footer/>
</>

  )
}

export default About
