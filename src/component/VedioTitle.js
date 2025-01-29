/** @format */

import React from "react";

const VedioTitle = ({ title, overview }) => {
  return (
    <div className=' w-screen aspect-video text-white pt-36 px-12 absolute bg-gradient-to-r  from-black '>
      <p className='font-bold text-5xl'>{title}</p>
      <p className='py-6 text-lg w-1/4'>{overview}</p>
      <div className='text-white'>
        <button className='w-32 h-14 bg-white text-black rounded-lg hover:opacity-80'>
          Play
        </button>
        <button className='w-32 h-14 m-3 bg-white text-black rounded-lg hover:opacity-80'>
          More Info
        </button>
      </div>
    </div>
  );
};

export default VedioTitle;
