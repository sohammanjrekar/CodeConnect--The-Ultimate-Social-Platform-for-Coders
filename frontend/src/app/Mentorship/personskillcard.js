import React from 'react'

const personskillcard = () => {
  return (
    <div>
      <>
  {/* component */}
  <div className="bg-[url(https://neluttu.github.io/pro-profile/wallpaper.jpg)] bg-[#292240] flex items-center justify-center min-h-screen text-[#9e9cb6]">
    <section className="w-full max-w-[430px] relative bg-[#231f39]/60 rounded-[6px] shadow-[0px_15px_39px_16px_rgba(52,45,91,0.65)] backdrop-blur-sm mx-2 overflow-hidden">
      <a
        href="https://www.icodethis.com/neluttu/"
        target="_blank"
        className="absolute text-[#231f39] bg-yellow-400 rounded-[4px] top-6 left-6 px-2 py-1 text-sm font-bold roll-in-blurred-right"
      >
        PRO
      </a>
      <a href="https://ionel.olariu.dev" target="_blank" className="">
        <img
          src="https://avatars.githubusercontent.com/u/25511379?v=4"
          className="rounded-full w-[120px] mx-auto my-10 p-0 border-[6px] box-content border-[#231f39] shadow-[0px_27px_16px_-11px_rgba(31,27,56,0.25)] transition-all duration-150 ease-in hover:scale-105 cursor-pointer slide-in-elliptic-top-fwd"
        />
      </a>
      <h1 className="text-xl font-bold text-center">Ionel Olariu</h1>
      <small className="block my-1 text-center">NEW YORK</small>
      <p className="mt-5 text-center">
        User Interface design and front
        <br /> end developer.
      </p>
      <div className="flex items-center justify-center gap-2 w-[80%] mx-auto mt-5 mb-10">
        <button className="flex-1 border border-[#231f39] rounded-[4px] py-3 text-white bg-[#231f39] transition-all duration-150 ease-in hover:bg-[#472e99]">
          Message
        </button>
        <button className="flex-1 border border-[#231f39] text-[#ffffff] rounded-[4px] py-3 transition-all duration-150 ease-in hover:bg-[#472e99]  hover:text-white">
          Following
        </button>
      </div>
      <div className="bg-[#1e1a36]/70 p-4 text-sm font-semibold backdrop-blur-sm">
        <p>SKILLS</p>
        <ul className="flex mt-4 flex-wrap items-center justify-start gap-2 gap-y-3 [&>li]:border-2 [&>li]:border-[#2f2a47] [&>li]:px-3 [&>li]:py-1 [&>li]:rounded-[4px] [&>li]:transition-all [&>li]:duration-150 [&>li]:ease-in [&>li:hover]:scale-105 [&>li:hover]:cursor-pointer">
          <li>UI/UX</li>
          <li>Front End Development</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Back End Development</li>
          <li>TailwindCSS</li>
          <li>JavaScript</li>
          <li>jQuery</li>
          <li>PHP</li>
          <li>MySQL</li>
          <li>SEO</li>
        </ul>
      </div>
    </section>
  </div>
</>

    </div>
  )
}

export default personskillcard
