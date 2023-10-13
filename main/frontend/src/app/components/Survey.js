import React from 'react'

const Survey = () => {
  return (
    <div>
      <>
  {/* component */}
  <section className="flex flex-col lg:flex-row m-5 p-2 md:p-5">
    <div className="w-full p-2 md:p-6 bg-white rounded-lg shadow-md">
      <h4 className="text-xl">Survey Distribution</h4>
      <div className="flex flex-wrap gap-5 md:gap-10 m-3 mt-10">
        <div className="text-sm">
          <span className="bg-green-500 align-middle w-4 h-4 inline-block mr-1 -mt-1" />
          Very Satisfied
        </div>
        <div className="text-sm">
          <span className="bg-green-300 align-middle w-4 h-4 inline-block mr-1 -mt-1" />
          Satisfied
        </div>
        <div className="text-sm">
          <span className="bg-gray-300 align-middle w-4 h-4 inline-block mr-1 -mt-1" />
          Neutral
        </div>
        <div className="text-sm">
          <span className="bg-gray-400 align-middle w-4 h-4 inline-block mr-1 -mt-1" />
          Dissatisfied
        </div>
        <div className="text-sm">
          <span className="bg-gray-500 align-middle w-4 h-4 inline-block mr-1 -mt-1" />
          Very Dissatisfied
        </div>
      </div>
      <div className="space-y-10 mt-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/3 p-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            quis rerum eum ea, commodi modi.
          </div>
          <div className="flex w-full md:w-2/3 min-h-[60px]">
            <span className="rounded-l p-3 text-center leading-10 mr-1 bg-green-500 w-[50%] text-white">
              50%
            </span>
            <span className="text-center p-3 leading-10 mr-1 bg-green-300 w-[30%] text-black">
              30%
            </span>
            <span className="text-center p-3 leading-10 mr-1 bg-gray-300 w-[10%] text-black">
              10%
            </span>
            <span className="text-center p-3 leading-10 mr-1 bg-gray-400 w-[6%] text-white">
              6%
            </span>
            <span className="rounded-r p-3 text-center leading-10 mr-1 bg-gray-500 w-[4%] text-white">
              4%
            </span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/3 p-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
            tempore voluptates reprehenderit molestias pariatur autem a nihil
            fugiat? Error, hic.
          </div>
          <div className="flex w-full md:w-2/3 min-h-[60px]">
            <span className="rounded-l p-3 text-center leading-10 mr-1 bg-green-500 w-[60%] text-white">
              60%
            </span>
            <span className="text-center p-3 leading-10 mr-1 bg-green-300 w-[25%] text-black">
              25%
            </span>
            <span className="text-center p-3 leading-10 mr-1 bg-gray-300 w-[10%] text-black">
              10%
            </span>
            <span className="text-center p-3 leading-10 mr-1 bg-gray-400 w-[8%] text-white">
              8%
            </span>
            <span className="rounded-r p-3 text-center leading-10 mr-1 bg-gray-500 w-[2%] text-white" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/3 p-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            nulla!
          </div>
          <div className="flex w-full md:w-2/3 min-h-[60px]">
            <span className="rounded-l p-3 text-center leading-10 mr-1 bg-green-500 w-[40%] text-white">
              40%
            </span>
            <span className="text-center p-3 leading-10 mr-1 bg-green-300 w-[35%] text-black">
              35%
            </span>
            <span className="rounded-r p-3 text-center leading-10 mr-1 bg-gray-500 w-[25%] text-white">
              25%
            </span>
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-400 my-10 px-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere tempore
        eaque ratione voluptates cupiditate, quisquam, odio error nobis, est
        voluptas dolorem doloremque. Amet perferendis atque odio doloremque
        aperiam totam perspiciatis nemo alias incidunt molestiae tempore
        asperiores temporibus architecto vitae eius vero magnam ex veniam
        numquam, rerum soluta quia. At, consequatur!
      </p>
    </div>
  </section>
</>

    </div>
  )
}

export default Survey
