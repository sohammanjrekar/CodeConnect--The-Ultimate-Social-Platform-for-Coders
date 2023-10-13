import React from 'react'

const VideoCourse = () => {
  return (
    <div>
    <>
  {/* component */}
 
    <div className="grid grid-cols-12 gap-2 gap-y-4 max-w-6xl my-3 py-2 mx-auto">
      {/* Video 1 */}
      <div className="col-span-12 sm:col-span-6 md:col-span-3">
        <card className="w-full flex flex-col">
          <div className="relative">
            {/* Image Video */}
            <a href="#">
              <img
                src="https://picsum.photos/seed/59/300/200"
                className="w-96 h-auto"
              />
            </a>
            <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
              1:15
            </p>
          </div>
          <div className="flex flex-row mt-2 gap-2">
            {/* Profile Picture */}
            <a href="#">
              <img
                src="https://picsum.photos/seed/1/40/40"
                className="rounded-full max-h-10 max-w-10"
              />
            </a>
            {/* Description */}
            <div clas="flex flex-col">
              <a href="#">
                <p className="text-gray-100 text-sm font-semibold">
                  Learn CSS Box Model in 8 Minutes
                </p>
              </a>
              <a
                className="text-gray-400 text-xs mt-2 hover:text-gray-100"
                href="#"
              >
                {" "}
                Web Dev Simplified{" "}
              </a>
              <p className="text-gray-400 text-xs mt-1">
                241K views . 3 years ago
              </p>
            </div>
          </div>
        </card>
      </div>
      {/* Video 2 */}
      <div className="col-span-12 sm:col-span-6 md:col-span-3">
        <card className="w-full flex flex-col">
          <div className="relative">
            {/* Image Video */}
            <a href="#">
              <img
                src="https://picsum.photos/seed/60/300/200"
                className="w-96 h-auto"
              />
            </a>
            <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
              1:15
            </p>
          </div>
          <div className="flex flex-row mt-2 gap-2">
            {/* Profile Picture */}
            <a href="#">
              <img
                src="https://picsum.photos/seed/4/40/40"
                className="rounded-full max-h-10 max-w-10"
              />
            </a>
            {/* Description */}
            <div clas="flex flex-col">
              <a href="#">
                <p className="text-gray-100 text-sm font-semibold">
                  Learn CSS Box Model in 8 Minutes
                </p>
              </a>
              <a
                className="text-gray-400 text-xs mt-2 hover:text-gray-100"
                href="#"
              >
                {" "}
                Web Dev Simplified{" "}
              </a>
              <p className="text-gray-400 text-xs mt-1">
                241K views . 3 years ago
              </p>
            </div>
          </div>
        </card>
      </div>
      {/* Video 3 */}
      <div className="col-span-12 sm:col-span-6 md:col-span-3">
        <card className="w-full flex flex-col">
          <div className="relative">
            {/* Image Video */}
            <a href="#">
              <img
                src="https://picsum.photos/seed/22/300/200"
                className="w-96 h-auto"
              />
            </a>
            <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
              1:15
            </p>
          </div>
          <div className="flex flex-row mt-2 gap-2">
            {/* Profile Picture */}
            <a href="#">
              <img
                src="https://picsum.photos/seed/88/40/40"
                className="rounded-full max-h-10 max-w-10"
              />
            </a>
            {/* Description */}
            <div clas="flex flex-col">
              <a href="#">
                <p className="text-gray-100 text-sm font-semibold">
                  Learn CSS Box Model in 8 Minutes
                </p>
              </a>
              <a
                className="text-gray-400 text-xs mt-2 hover:text-gray-100"
                href="#"
              >
                {" "}
                Web Dev Simplified{" "}
              </a>
              <p className="text-gray-400 text-xs mt-1">
                241K views . 3 years ago
              </p>
            </div>
          </div>
        </card>
      </div>
      {/* Video 4 */}
      <div className="col-span-12 sm:col-span-6 md:col-span-3">
        <card className="w-full flex flex-col">
          <div className="relative">
            {/* Image Video */}
            <a href="#">
              <img
                src="https://picsum.photos/seed/90/300/200"
                className="w-96 h-auto"
              />
            </a>
            <p className="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
              1:15
            </p>
          </div>
          <div className="flex flex-row mt-2 gap-2">
            {/* Profile Picture */}
            <a href="#">
              <img
                src="https://picsum.photos/seed/57/40/40"
                className="rounded-full max-h-10 max-w-10"
              />
            </a>
            {/* Description */}
            <div clas="flex flex-col">
              <a href="#">
                <p className="text-gray-100 text-sm font-semibold">
                  Learn CSS Box Model in 8 Minutes
                </p>
              </a>
              <a
                className="text-gray-400 text-xs mt-2 hover:text-gray-100"
                href="#"
              >
                {" "}
                Web Dev Simplified{" "}
              </a>
              <p className="text-gray-400 text-xs mt-1">
                241K views . 3 years ago
              </p>
            </div>
          </div>
        </card>
      </div>
    </div>

</>

    </div>
  )
}

export default VideoCourse
