import React from "react";
import { Link } from "react-router-dom";


const Category = () => {
  return (
    <section className="bg-white ">
      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        <div className="container mx-auto px-6 p-6 bg-white">
          <div className="mb-16 text-center">
            <h4 className="text-base text-[#1E2128] font-semibold tracking-wide uppercase">
              Category
            </h4>
            <p className="mt-2 text-5xl lg:text-5xl font-semibold tracking-tight text-[#1E2128]">
              Our Products Category
            </p>
          </div>

          <div className="flex flex-wrap my-12">
            <Link to={'/category/Dumbbells'} className="w-full border-b md:w-1/2 md:border-r lg:w-1/3 p-8">
              <div className="flex items-center mb-6">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 32 32"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="h-6 w-6 text-indigo-500"
                >
                  <path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z"></path>
                </svg> */}
                <img className="h-10 w-14" src="https://i.ibb.co/4gXNp9z/images-4.png" alt="" />
                <div className="ml-4 text-xl">Dumbbells</div>
              </div>
              <p className="leading-loose text-gray-500">
              Browse our selection of high-quality dumbbells, ideal for strength training and muscle toning exercises.
              </p>
            </Link>

            <Link to={'/category/ExerciseBikes'} className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8">
              <div className="flex items-center mb-6">
              <img className="h-10 w-14" src="https://i.ibb.co/SRHYCNL/images-5.png" alt="" />
                <div className="ml-4 text-xl">Exercise Bikes</div>
              </div>
              <p className="leading-loose text-gray-500">
              Find top-of-the-line exercise bikes designed to provide an effective and enjoyable cardio workout.
              </p>
            </Link>

            <Link to={'/category/WeightPlates'} className="w-full border-b md:w-1/2 lg:w-1/3 lg:border-r p-8">
              <div className="flex items-center mb-6">
              <img className="h-10 w-14" src="https://i.ibb.co/hKr576x/4907163.png" alt="" />
                <div className="ml-4 text-xl">Weight Plates

</div>
              </div>
              <p className="leading-loose text-gray-500">
              Explore our durable weight plates, perfect for strength training and muscle-building exercises.
              </p>
            </Link>

            
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
