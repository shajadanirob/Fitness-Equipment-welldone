import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="bg-white pb-6 sm:pb-8 lg:pb-12 my-10">
  <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
   
    <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
   
      <div className="flex flex-col items-center justify-center sm:text-center lg:items-start lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
        <h1 className="mb-8 text-4xl font-bold text-[#1E2128] sm:text-5xl md:mb-12 md:text-7xl">SPORTY STYLE
        IN ACTIVE LIVING</h1>

        <p className="mb-8 leading-relaxed text-[#1E2128] md:mb-12 lg:w-4/5 xl:text-lg">Discover premium fitness equipment and accessories for your home gym. Achieve your fitness goals with our high-quality products designed for performance and durability.</p>

        <form className="flex w-full gap-2 md:max-w-md">
          <input placeholder="Email" className="w-full flex-1 rounded border bg-gray-50 px-3 py-2 text-gray-800 placeholder-gray-500 outline-none ring-indigo-300 transition duration-100 focus:ring" />

          <button className="inline-block rounded bg-[#3C43D1] px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Sign up</button>
        </form>
      </div>
      
      <div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-[500px] my-10 xl:w-5/12">
        <img src="https://i.ibb.co/23Ynk4x/img-2-copyright.jpg" loading="lazy" alt="Photo by Fakurian Design" className="h-full w-full object-cover object-center" />
      </div>
      
    </section>
  </div>
</div>
        </div>
    );
};

export default Banner;