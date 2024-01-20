import React from 'react'

const Herocard = () => {
  return (
    <div>
      <>
  {/* component */}
  <div className="py-16">
    <div className="container m-auto px-6">
      <div className="lg:flex justify-between items-center">
        <div className="lg:w-6/12 lg:p-0 p-7">
          <h1 className="text-4xl font-bold leading-tight mb-5 capitalize">
            {" "}
            Professional Tailwind theme designed for developers.{" "}
          </h1>
          <p className="text-xl">
            {" "}
            With Tailwind you can optimized the customization process to save
            your team time when building websites.{" "}
          </p>
          <div className="py-5">
            <a
              href="#"
              className="text-white rounded-full py-2 px-5 text-lg font-semibold bg-purple-600 inline-block border border-purple-600 mr-3"
            >
              Try for free
            </a>
            <a
              href="#"
              className="text-black rounded-full py-2 px-5 text-lg font-semibold bg-gray-400 inline-block border hover:bg-white hover:text-black"
            >
              Requist a demo
            </a>
          </div>
        </div>
        <div className="lg:w-5/12 order-2">
          <img
            src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80"
            style={{
              transform:
                "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)"
            }}
            alt=""
            className="rounded"
          />
        </div>
      </div>
    </div>
  </div>
</>

    </div>
  )
}

export default Herocard
