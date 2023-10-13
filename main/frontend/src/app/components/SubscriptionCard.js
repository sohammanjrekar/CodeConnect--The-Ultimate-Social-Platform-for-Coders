import React from 'react'

const SubscriptionCard = () => {
  return (
    <div>
      <>
  {/* component */}
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link href="./dist/main.min.css" rel="stylesheet" />
  <div className="flex items-center justify-center flex-col bg-[#E5E5E5] min-h-screen">
    {/* main card */}
    <div className="bg-[#F4F5FA] p-10 rounded-xl">
      {/* headers content*/}
      <div className="flex flex-col justify-center items-center text-center">
        <div className="max-w-sm font-bold font-sans">
          Get the most out of your mobile with the right subscription
        </div>
        <div className="font-light max-w-lg mt-5 text-sm">
          All devices come with free delivery or pickup as standard. See
          information on available shopping options for your location.
        </div>
      </div>
      {/* subscriptions */}
      <div className="flex flex-col md:flex-row space-x-0 md:space-x-8 space-y-12  md:space-y-0 justify-center items-center mt-10">
        <div className="bg-[#FFFBEC] rounded-xl">
          <div className="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Ice_logo.svg/138px-Ice_logo.svg.png?20191213230535"
              className="w-8"
            />
            <div className="mt-3 font-semibold text-lg">Ice Mobile 10GB</div>
            <div className="text-sm font-light">Up to 100Mbit/s</div>
            <div className="my-4">
              <span className="font-bold text-base">299,-</span>
              <span className="font-light text-sm">/month</span>
            </div>
            <button className="bg-[#F4F5FA] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4">
              Add subscription
            </button>
          </div>
        </div>
        <div className="bg-[#F9ECFF] rounded-xl">
          <div className="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">
            <img
              src="https://www.dstny.se/app/uploads/telia_pp_rgb.png.webp"
              className="w-12"
            />
            <div className="mt-3 font-semibold text-lg">Telia Mobil 15GB</div>
            <div className="text-sm font-light w-60 md:w-auto">
              Unlimited calls
            </div>
            <div className="my-4">
              <span className="font-bold text-base">953,-</span>
              <span className="font-light text-sm">/month</span>
            </div>
            <button className="bg-[#F4F5FA] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4">
              Add subscription
            </button>
          </div>
        </div>
        <div className="bg-[#ECEEFF] rounded-xl">
          <div className="flex flex-col p-8 rounded-xl bg-white shadow-xl translate-x-4 translate-y-4 w-96 md:w-auto">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Telenor_Logo.svg/1600px-Telenor_Logo.svg.png"
              className="w-12"
            />
            <div className="mt-3 font-semibold text-lg">Telenor Next Fast</div>
            <div className="text-sm font-light w-60 md:w-auto">
              Up to 100Mbit/s
            </div>
            <div className="my-4">
              <span className="font-bold text-base">1028,-</span>
              <span className="font-light text-sm">/month</span>
            </div>
            <button className="bg-[#F4F5FA] px-4 py-3 rounded-full  border border-[#F0F0F6] shadow-xl mt-4">
              Add subscription
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="mt-12 bg-slate-900 text-white px-4 rounded-full py-3">
          See all subscriptions
        </button>
      </div>
    </div>
  </div>
</>

    </div>
  )
}

export default SubscriptionCard
