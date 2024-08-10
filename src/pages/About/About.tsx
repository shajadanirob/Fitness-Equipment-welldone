import React from "react";

const about = () => {
  return (
    <div className="bg-white p-4 max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      <header className=" text-gray-500 text-center py-12">
        <h1 className="text-4xl font-bold mt-16">About Us</h1>
      </header>

      <section className="text-center py-12 px-4">
        <h2 className="text-2xl font-bold">Mission And Values</h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
          Mighty Fitness emerged out of necessity in 2020. With gyms being
          inaccessible to all, we recognized the importance of staying fit in
          the comfort of our home. We like to stay active and wanted to provide
          our community with the same opportunity. Fast forward to 2022, we now
          have access to both public and homegyms - a hybrid approach. Having a
          homegym leaves little room for excuses and will motivate you to move
          and work! A constant reminder is what we need. A constant reminder to
          remember what's important: our health. It is our greatest wealth. Let
          us help transform your garage, office, basement, bedroom or even your
          backyard into a Migthy Den. We have created our products with great
          detail and aesthetic - unbeatable prices as well top-notch quality. We
          carry all the essentials you will need to create your dream gym. Stay
          Mighty Fit in your home.
        </p>
        <div className="flex justify-center space-x-8 mt-8 animate-fadeIn">
          <div className="transition transform hover:scale-110">
            <h3 className="text-xl font-bold">85+</h3>
            <p className="text-gray-700">Specialists</p>
          </div>
          <div className="transition transform hover:scale-110">
            <h3 className="text-xl font-bold">25+</h3>
            <p className="text-gray-700">Years of Experience</p>
          </div>
        </div>
      </section>

      <section className="text-center py-12 px-4">
      <h1 className="text-4xl font-bold  my-16">Team Introduction</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">


          <div className="text-center bg-white shadow-lg rounded-lg">
            <img
              className="w-full h-72 object-cover rounded-t-lg"
              src="https://images.pexels.com/photos/1587014/pexels-photo-1587014.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Mehdi Mohammadi"
            />
            <div className="p-4">
              <div className="text-md">
                <a
                  href="#"
                  className="hover:text-indigo-500 text-gray-900 font-semibold transition duration-500 ease-in-out"
                >
                  Mehdi Mohammadi
                </a>
                <p className="text-gray-500 uppercase text-sm">Web developer</p>
              </div>
              <div className="my-4 flex justify-center items-center space-x-3">
                <a href="#">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17 3.5a.5.5 0 0 0-.5-.5H14a4.77 4.77 0 0 0-5 4.5v2.7H6.5a.5.5 0 0 0-.5.5v2.6a.5.5 0 0 0 .5.5H9v6.7a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-6.7h2.62a.5.5 0 0 0 .49-.37l.72-2.6a.5.5 0 0 0-.48-.63H13V7.5a1 1 0 0 1 1-.9h2.5a.5.5 0 0 0 .5-.5z" />
                  </svg>
                </a>
                <a href="#">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 310 310"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M302.973,57.388c-4.87,2.16-9.877,3.983-14.993,5.463c6.057-6.85,10.675-14.91,13.494-23.73c0.632-1.977-0.023-4.141-1.648-5.434c-1.623-1.294-3.878-1.449-5.665-0.39c-10.865,6.444-22.587,11.075-34.878,13.783c-12.381-12.098-29.197-18.983-46.581-18.983c-36.695,0-66.549,29.853-66.549,66.547c0,2.89,0.183,5.764,0.545,8.598C101.163,99.244,58.83,76.863,29.76,41.204c-1.036-1.271-2.632-1.956-4.266-1.825c-1.635,0.128-3.104,1.05-3.93,2.467c-5.896,10.117-9.013,21.688-9.013,33.461c0,16.035,5.725,31.249,15.838,43.137c-3.075-1.065-6.059-2.396-8.907-3.977c-1.529-0.851-3.395-0.838-4.914,0.033c-1.52,0.871-2.473,2.473-2.513,4.224c-0.007,0.295-0.007,0.59-0.007,0.889c0,23.935,12.882,45.484,32.577,57.229c-1.692-0.169-3.383-0.414-5.063-0.735c-1.732-0.331-3.513,0.276-4.681,1.597c-1.17,1.32-1.557,3.16-1.018,4.84c7.29,22.76,26.059,39.501,48.749,44.605c-18.819,11.787-40.34,17.961-62.932,17.961c-4.714,0-9.455-0.277-14.095-0.826c-2.305-0.274-4.509,1.087-5.294,3.279c-0.785,2.193,0.047,4.638,2.008,5.895c29.023,18.609,62.582,28.445,97.047,28.445c67.754,0,110.139-31.95,133.764-58.753c29.46-33.421,46.356-77.658,46.356-121.367c0-1.826-0.028-3.67-0.084-5.508c11.623-8.757,21.63-19.355,29.773-31.536c1.237-1.85,1.103-4.295-0.33-5.998C307.394,57.037,305.009,56.486,302.973,57.388z" />
                  </svg>
                </a>
                <a href="#">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 239.04 239.04"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M167.809,36.555c-22.276-0.183-44.597-1.054-66.919-0.504c-25.851,0.642-46.018,2.2-61.281,22.872c-3.988,9.854-6.004,21.359-6.967,33.368c-0.183,3.163-0.367,6.417-0.596,9.763c-0.825,20.396,0.55,41.435,0.092,58.118c2.154,10.955,6.371,20.809,14.255,28.326c26.126,24.888,79.294,17.142,114.128,15.767c16.73-6.096,30.663-11.138,38.134-30.251c5.913-15.034,4.95-34.193,5.363-50.326C204.797,90.502,206.264,44.714,167.809,36.555z" />
                    <path d="M157.588,48.38c44.505,5.729,31.443,70.219,30.205,101.478c-0.688,17.188-3.758,30.48-21.496,36.438c-23.33,7.838-57.706,5.225-81.494,1.742c-15.905-2.292-28.372-7.059-32.772-23.559c-6.967-26.08-4.996-61.373-1.971-87.957c0.092-0.504,0.229-0.871,0.458-1.192C50.93,35.547,134.441,45.401,157.588,48.38z" />
                    <path d="M176.059,72.627c0.092-10.955-13.567-14.438-20.901-7.7c-1.971,1.833-2.888,4.629-3.025,7.654c0.733,3.896,3.071,7.746,6.096,9.946C165.334,87.523,175.967,80.877,176.059,72.627z" />
                    <path d="M157.861,71.465c-0.367-11.32-16.537-15.491-24.204-6.596c-6.558,7.7-1.688,20.309,8.015,21.59C150.93,87.849,158.317,80.502,157.861,71.465z" />
                    <path d="M116.646,60.427c-10.601,0.688-14.684,13.476-7.875,21.018c6.012,7.113,20.725,3.379,20.039-6.825C128.195,67.268,122.474,59.974,116.646,60.427z" />
                    <path d="M141.706,105.718c-10.036,0.688-14.318,14.291-6.275,20.588c7.654,6.612,22.576-2.838,17.695-12.454C151.829,109.236,146.584,105.352,141.706,105.718z" />
                    <path d="M106.636,116.049c-11.413,1.375-13.888,19.537-2.8,25.689c8.336,4.959,21.51-4.775,17.421-14.946C120.078,121.304,113.979,115.493,106.636,116.049z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="text-center bg-white shadow-lg rounded-lg">
            <img
              className="w-full h-72 object-cover rounded-t-lg"
              src="https://images.pexels.com/photos/1587014/pexels-photo-1587014.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Mehdi Mohammadi"
            />
            <div className="p-4">
              <div className="text-md">
                <a
                  href="#"
                  className="hover:text-indigo-500 text-gray-900 font-semibold transition duration-500 ease-in-out"
                >
                  Mehdi Mohammadi
                </a>
                <p className="text-gray-500 uppercase text-sm">Web developer</p>
              </div>
              <div className="my-4 flex justify-center items-center space-x-3">
                <a href="#">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17 3.5a.5.5 0 0 0-.5-.5H14a4.77 4.77 0 0 0-5 4.5v2.7H6.5a.5.5 0 0 0-.5.5v2.6a.5.5 0 0 0 .5.5H9v6.7a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-6.7h2.62a.5.5 0 0 0 .49-.37l.72-2.6a.5.5 0 0 0-.48-.63H13V7.5a1 1 0 0 1 1-.9h2.5a.5.5 0 0 0 .5-.5z" />
                  </svg>
                </a>
                <a href="#">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 310 310"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M302.973,57.388c-4.87,2.16-9.877,3.983-14.993,5.463c6.057-6.85,10.675-14.91,13.494-23.73c0.632-1.977-0.023-4.141-1.648-5.434c-1.623-1.294-3.878-1.449-5.665-0.39c-10.865,6.444-22.587,11.075-34.878,13.783c-12.381-12.098-29.197-18.983-46.581-18.983c-36.695,0-66.549,29.853-66.549,66.547c0,2.89,0.183,5.764,0.545,8.598C101.163,99.244,58.83,76.863,29.76,41.204c-1.036-1.271-2.632-1.956-4.266-1.825c-1.635,0.128-3.104,1.05-3.93,2.467c-5.896,10.117-9.013,21.688-9.013,33.461c0,16.035,5.725,31.249,15.838,43.137c-3.075-1.065-6.059-2.396-8.907-3.977c-1.529-0.851-3.395-0.838-4.914,0.033c-1.52,0.871-2.473,2.473-2.513,4.224c-0.007,0.295-0.007,0.59-0.007,0.889c0,23.935,12.882,45.484,32.577,57.229c-1.692-0.169-3.383-0.414-5.063-0.735c-1.732-0.331-3.513,0.276-4.681,1.597c-1.17,1.32-1.557,3.16-1.018,4.84c7.29,22.76,26.059,39.501,48.749,44.605c-18.819,11.787-40.34,17.961-62.932,17.961c-4.714,0-9.455-0.277-14.095-0.826c-2.305-0.274-4.509,1.087-5.294,3.279c-0.785,2.193,0.047,4.638,2.008,5.895c29.023,18.609,62.582,28.445,97.047,28.445c67.754,0,110.139-31.95,133.764-58.753c29.46-33.421,46.356-77.658,46.356-121.367c0-1.826-0.028-3.67-0.084-5.508c11.623-8.757,21.63-19.355,29.773-31.536c1.237-1.85,1.103-4.295-0.33-5.998C307.394,57.037,305.009,56.486,302.973,57.388z" />
                  </svg>
                </a>
                <a href="#">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 239.04 239.04"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M167.809,36.555c-22.276-0.183-44.597-1.054-66.919-0.504c-25.851,0.642-46.018,2.2-61.281,22.872c-3.988,9.854-6.004,21.359-6.967,33.368c-0.183,3.163-0.367,6.417-0.596,9.763c-0.825,20.396,0.55,41.435,0.092,58.118c2.154,10.955,6.371,20.809,14.255,28.326c26.126,24.888,79.294,17.142,114.128,15.767c16.73-6.096,30.663-11.138,38.134-30.251c5.913-15.034,4.95-34.193,5.363-50.326C204.797,90.502,206.264,44.714,167.809,36.555z" />
                    <path d="M157.588,48.38c44.505,5.729,31.443,70.219,30.205,101.478c-0.688,17.188-3.758,30.48-21.496,36.438c-23.33,7.838-57.706,5.225-81.494,1.742c-15.905-2.292-28.372-7.059-32.772-23.559c-6.967-26.08-4.996-61.373-1.971-87.957c0.092-0.504,0.229-0.871,0.458-1.192C50.93,35.547,134.441,45.401,157.588,48.38z" />
                    <path d="M176.059,72.627c0.092-10.955-13.567-14.438-20.901-7.7c-1.971,1.833-2.888,4.629-3.025,7.654c0.733,3.896,3.071,7.746,6.096,9.946C165.334,87.523,175.967,80.877,176.059,72.627z" />
                    <path d="M157.861,71.465c-0.367-11.32-16.537-15.491-24.204-6.596c-6.558,7.7-1.688,20.309,8.015,21.59C150.93,87.849,158.317,80.502,157.861,71.465z" />
                    <path d="M116.646,60.427c-10.601,0.688-14.684,13.476-7.875,21.018c6.012,7.113,20.725,3.379,20.039-6.825C128.195,67.268,122.474,59.974,116.646,60.427z" />
                    <path d="M141.706,105.718c-10.036,0.688-14.318,14.291-6.275,20.588c7.654,6.612,22.576-2.838,17.695-12.454C151.829,109.236,146.584,105.352,141.706,105.718z" />
                    <path d="M106.636,116.049c-11.413,1.375-13.888,19.537-2.8,25.689c8.336,4.959,21.51-4.775,17.421-14.946C120.078,121.304,113.979,115.493,106.636,116.049z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="text-center bg-white shadow-lg rounded-lg">
            <img
              className="w-full h-72 object-cover rounded-t-lg"
              src="https://images.pexels.com/photos/1587014/pexels-photo-1587014.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              alt="Mehdi Mohammadi"
            />
            <div className="p-4">
              <div className="text-md">
                <a
                  href="#"
                  className="hover:text-indigo-500 text-gray-900 font-semibold transition duration-500 ease-in-out"
                >
                  Mehdi Mohammadi
                </a>
                <p className="text-gray-500 uppercase text-sm">Web developer</p>
              </div>
              <div className="my-4 flex justify-center items-center space-x-3">
                <a href="#">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M17 3.5a.5.5 0 0 0-.5-.5H14a4.77 4.77 0 0 0-5 4.5v2.7H6.5a.5.5 0 0 0-.5.5v2.6a.5.5 0 0 0 .5.5H9v6.7a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-6.7h2.62a.5.5 0 0 0 .49-.37l.72-2.6a.5.5 0 0 0-.48-.63H13V7.5a1 1 0 0 1 1-.9h2.5a.5.5 0 0 0 .5-.5z" />
                  </svg>
                </a>
                <a href="#">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 310 310"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M302.973,57.388c-4.87,2.16-9.877,3.983-14.993,5.463c6.057-6.85,10.675-14.91,13.494-23.73c0.632-1.977-0.023-4.141-1.648-5.434c-1.623-1.294-3.878-1.449-5.665-0.39c-10.865,6.444-22.587,11.075-34.878,13.783c-12.381-12.098-29.197-18.983-46.581-18.983c-36.695,0-66.549,29.853-66.549,66.547c0,2.89,0.183,5.764,0.545,8.598C101.163,99.244,58.83,76.863,29.76,41.204c-1.036-1.271-2.632-1.956-4.266-1.825c-1.635,0.128-3.104,1.05-3.93,2.467c-5.896,10.117-9.013,21.688-9.013,33.461c0,16.035,5.725,31.249,15.838,43.137c-3.075-1.065-6.059-2.396-8.907-3.977c-1.529-0.851-3.395-0.838-4.914,0.033c-1.52,0.871-2.473,2.473-2.513,4.224c-0.007,0.295-0.007,0.59-0.007,0.889c0,23.935,12.882,45.484,32.577,57.229c-1.692-0.169-3.383-0.414-5.063-0.735c-1.732-0.331-3.513,0.276-4.681,1.597c-1.17,1.32-1.557,3.16-1.018,4.84c7.29,22.76,26.059,39.501,48.749,44.605c-18.819,11.787-40.34,17.961-62.932,17.961c-4.714,0-9.455-0.277-14.095-0.826c-2.305-0.274-4.509,1.087-5.294,3.279c-0.785,2.193,0.047,4.638,2.008,5.895c29.023,18.609,62.582,28.445,97.047,28.445c67.754,0,110.139-31.95,133.764-58.753c29.46-33.421,46.356-77.658,46.356-121.367c0-1.826-0.028-3.67-0.084-5.508c11.623-8.757,21.63-19.355,29.773-31.536c1.237-1.85,1.103-4.295-0.33-5.998C307.394,57.037,305.009,56.486,302.973,57.388z" />
                  </svg>
                </a>
                <a href="#">
                  <svg
                    className="w-6 h-6"
                    viewBox="0 0 239.04 239.04"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M167.809,36.555c-22.276-0.183-44.597-1.054-66.919-0.504c-25.851,0.642-46.018,2.2-61.281,22.872c-3.988,9.854-6.004,21.359-6.967,33.368c-0.183,3.163-0.367,6.417-0.596,9.763c-0.825,20.396,0.55,41.435,0.092,58.118c2.154,10.955,6.371,20.809,14.255,28.326c26.126,24.888,79.294,17.142,114.128,15.767c16.73-6.096,30.663-11.138,38.134-30.251c5.913-15.034,4.95-34.193,5.363-50.326C204.797,90.502,206.264,44.714,167.809,36.555z" />
                    <path d="M157.588,48.38c44.505,5.729,31.443,70.219,30.205,101.478c-0.688,17.188-3.758,30.48-21.496,36.438c-23.33,7.838-57.706,5.225-81.494,1.742c-15.905-2.292-28.372-7.059-32.772-23.559c-6.967-26.08-4.996-61.373-1.971-87.957c0.092-0.504,0.229-0.871,0.458-1.192C50.93,35.547,134.441,45.401,157.588,48.38z" />
                    <path d="M176.059,72.627c0.092-10.955-13.567-14.438-20.901-7.7c-1.971,1.833-2.888,4.629-3.025,7.654c0.733,3.896,3.071,7.746,6.096,9.946C165.334,87.523,175.967,80.877,176.059,72.627z" />
                    <path d="M157.861,71.465c-0.367-11.32-16.537-15.491-24.204-6.596c-6.558,7.7-1.688,20.309,8.015,21.59C150.93,87.849,158.317,80.502,157.861,71.465z" />
                    <path d="M116.646,60.427c-10.601,0.688-14.684,13.476-7.875,21.018c6.012,7.113,20.725,3.379,20.039-6.825C128.195,67.268,122.474,59.974,116.646,60.427z" />
                    <path d="M141.706,105.718c-10.036,0.688-14.318,14.291-6.275,20.588c7.654,6.612,22.576-2.838,17.695-12.454C151.829,109.236,146.584,105.352,141.706,105.718z" />
                    <path d="M106.636,116.049c-11.413,1.375-13.888,19.537-2.8,25.689c8.336,4.959,21.51-4.775,17.421-14.946C120.078,121.304,113.979,115.493,106.636,116.049z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>


        </div>
      </section>

      <section className=" text-gray-500 py-12 px-4">
        <h2 className="text-2xl font-bold text-center">Our Vision</h2>
        <p className="mt-4 text-center max-w-2xl mx-auto">
          One thing is for certain, the world will not go back to the way it was
          and there's no reason it should. We can strive to make our world now a
          Mightier place. A hybrid of public and homegym is the new normalcy. We
          believe homegyms are now a integral part of our lives. Having easy
          access to a homegym will leave little room for excuses and will
          motivate you to move and work! Let's get after our goals.
        </p>
      </section>


      <section className="text-center py-12 px-4">
      <h1 className="text-4xl font-bold  my-16">What customers are saying</h1>
            <div className="container mx-auto">
               
              
                <div className="flex flex-col md:flex-row md:-mx-3">
                    <div className="flex-1 px-3">
                        <div className="p-12 rounded-lg border border-solid border-gray-200 mb-8"
                             style={{boxShadow: '0 10px 28px rgba(0,0,0,.08)'}}>
                            <p className="text-xl font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                            <p className="mt-6">Eu lobortis elementum nibh tellus molestie nunc non blandit massa.
                                Sit amet consectetur adipiscing elit duis.</p>
                            <div className="flex items-center mt-8">
                                <img className="w-12 h-12 mr-4 rounded-full"
                                     src="https://placeimg.com/150/150/people" alt="Jane Doe" />
                                <div>
                                    <p>Jane Doe</p>
                                    <p className="text-sm text-gray-600">Director of Research and Data</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 px-3">
                        <div className="p-12 rounded-lg border border-solid border-gray-200 mb-8"
                             style={{boxShadow: '0 10px 28px rgba(0,0,0,.08)'}}>
                            <p className="text-xl font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                            <p className="mt-6">Eu lobortis elementum nibh tellus molestie nunc non blandit massa.
                                Sit amet consectetur adipiscing elit duis.</p>
                            <div className="flex items-center mt-8">
                                <img className="w-12 h-12 mr-4 rounded-full"
                                     src="https://placeimg.com/150/150/people" alt="John Doe" />
                                <div>
                                    <p>John Doe</p>
                                    <p className="text-sm text-gray-600">Director of Research and Data</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 px-3">
                        <div className="p-12 rounded-lg border border-solid border-gray-200 mb-8"
                             style={{boxShadow: '0 10px 28px rgba(0,0,0,.08)'}}>
                            <p className="text-xl font-semibold">Lorem ipsum dolor sit amet, consectetur adipiscing</p>
                            <p className="mt-6">Eu lobortis elementum nibh tellus molestie nunc non blandit massa.
                                Sit amet consectetur adipiscing elit duis.</p>
                            <div className="flex items-center mt-8">
                                <img className="w-12 h-12 mr-4 rounded-full"
                                     src="https://placeimg.com/150/150/people" alt="Jane Smith" />
                                <div>
                                    <p>Jane Smith</p>
                                    <p className="text-sm text-gray-600">Director of Research and Data</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>










      <section className="text-center py-12 px-4 w-full">
        <h2 className="text-2xl font-bold">
          Get Answer To Your Most Asked Questions
        </h2>
        <div className="mt-8">
          <div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90">
            <h3 className="text-xl font-bold">
              How do I make an appointment online?
            </h3>
            <p className="mt-2 text-gray-700">
              You can book an appointment online through our website or mobile
              app.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90 mt-4">
            <h3 className="text-xl font-bold">
              What types of medical tests do you offer?
            </h3>
            <p className="mt-2 text-gray-700">
              We offer a wide range of medical tests including blood tests,
              imaging, and more.
            </p>
          </div>
          <div className="p-4 border rounded-lg shadow-md transition transform hover:scale-100 scale-90 mt-4">
            <h3 className="text-xl font-bold">
              Do you accept insurance plans?
            </h3>
            <p className="mt-2 text-gray-700">
              Yes, we accept most major insurance plans.
            </p>
          </div>
        </div>
      </section>







<section className="text-center py-12 px-4 w-full">

<h2 className="text-3xl font-extrabold tracking-tight text-gray-900 dark:text-slate-200 sm:text-4xl">Contact Us</h2> 
<p className="mt-4 text-lg leading-6 text-gray-500 dark:text-slate-400">
                        Please use the form below to contact us. Thank you!
                    </p> 
<div id="contact-us" className="overflow-hidden bg-white py-16 px-4 dark:bg-slate-900 sm:px-6 lg:px-8 lg:py-24">
            <div className="relative mx-auto max-w-xl">
                
                <div className="mt-12">
                    <form className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                        <div className="sm:col-span-2">
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-slate-400">Name</label>
                            <div className="mt-1">
                                <input name="name" type="text" id="name" autoComplete="organization" required className="border border-gray-300 block w-full rounded-md py-3 px-4 shadow-sm focus:border-sky-500 focus:ring-sky-500 dark:border-white/5 dark:bg-slate-700/50 dark:text-white" />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-slate-400">Email</label>
                            <div className="mt-1">
                                <input name="email" id="email" required type="email" autoComplete="email" className="border border-gray-300 block w-full rounded-md py-3 px-4 shadow-sm focus:border-sky-500 focus:ring-sky-500 dark:border-white/5 dark:bg-slate-700/50 dark:text-white" />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-slate-400">Message</label>
                            <div className="mt-1">
                                <textarea required name="message" id="message"  className="border border-gray-300 block w-full rounded-md py-3 px-4 shadow-sm focus:border-sky-500 focus:ring-sky-500 dark:border-white/5 dark:bg-slate-700/50 dark:text-white"></textarea>
                            </div>
                        </div>
                        <div className="flex justify-end sm:col-span-2">
                            <button type="submit" className="inline-flex items-center rounded-md px-4 py-2 font-medium focus:outline-none focus-visible:ring focus-visible:ring-sky-500 shadow-sm sm:text-sm transition-colors duration-75 text-sky-500 border border-sky-500 hover:bg-sky-50 active:bg-sky-100 disabled:bg-sky-100 dark:hover:bg-gray-900 dark:active:bg-gray-800 dark:disabled:bg-gray-800 disabled:cursor-not-allowed">
                                <span>Send Message</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>


</section>


       
    </div>
  );
};

export default about;
