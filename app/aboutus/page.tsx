import React from 'react';

const AboutUs = () => {
  return (
    <section className="py-24 relative xl:mr-0 lg:mr-5 mr-0 bg-gradient-to-r from-indigo-50 via-indigo-100 to-blue-200">
      <div className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div className="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
          <div className="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
            <div className="w-full flex-col justify-center items-start gap-8 flex animate__animated animate__fadeIn animate__delay-1s">
              <div className="flex-col justify-start lg:items-start items-center gap-4 flex">
                <h6 className="text-indigo-600 text-3xl font-normal leading-relaxed opacity-75">About Us</h6>
                <div className="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                  <h2 className="text-indigo-700 text-4xl font-bold font-manrope leading-normal lg:text-start text-center transition-all transform duration-700 hover:scale-105">
                    Building an Online Banking Solution for a Better Financial Future
                  </h2>
                  <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center transition-all transform duration-700 hover:scale-105">
                    Our mission is to make financial management easier and more accessible for everyone.
                    We are building an online banking application that provides all the services you would
                    expect from a traditional bank, but with the convenience of managing everything from your device,
                    anytime, anywhere.
                  </p>
                </div>
              </div>
              <div className="w-full flex-col justify-center items-start gap-6 flex">
                <div className="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                  <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-indigo-500 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex transform hover:scale-105">
                    <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">Fully Digital</h4>
                    <p className="text-gray-500 text-base font-normal leading-relaxed">Experience all banking services online</p>
                  </div>
                  <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-indigo-500 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex transform hover:scale-105">
                    <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">24/7 Access</h4>
                    <p className="text-gray-500 text-base font-normal leading-relaxed">Banking services whenever you need them</p>
                  </div>
                </div>
                <div className="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                  <div className="w-full p-3.5 rounded-xl border border-gray-200 hover:border-indigo-500 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex transform hover:scale-105">
                    <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">Secure & Reliable</h4>
                    <p className="text-gray-500 text-base font-normal leading-relaxed">We prioritize the security of your financial data</p>
                  </div>
                  <div className="w-full h-full p-3.5 rounded-xl border border-gray-200 hover:border-indigo-500 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex transform hover:scale-105">
                    <h4 className="text-gray-900 text-2xl font-bold font-manrope leading-9">Wide Range of Services</h4>
                    <p className="text-gray-500 text-base font-normal leading-relaxed">Offering all the banking services you need, online</p>
                  </div>
                </div>
              </div>
            </div>
            <button className="sm:w-fit w-full group px-3.5 py-2 bg-indigo-50 hover:bg-indigo-100 rounded-lg shadow-[0px_1px_2px_0px_rgba(16,_24,_40,_0.05)] transition-all duration-700 ease-in-out justify-center items-center flex animate__animated animate__fadeIn animate__delay-2s">
              <span className="px-1.5 text-indigo-600 text-sm font-medium leading-6 group-hover:-translate-x-0.5 transition-all duration-700 ease-in-out">Learn More</span>
              <svg className="group-hover:translate-x-0.5 transition-all duration-700 ease-in-out" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M6.75265 4.49658L11.2528 8.99677L6.75 13.4996" stroke="#4F46E5" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>
          <div className="w-full lg:justify-start justify-center items-start flex">
            <div className="sm:w-[564px] w-full sm:h-[646px] h-full sm:bg-gray-100 rounded-3xl sm:border border-gray-200 relative">
              <img className="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover transition-transform duration-700 transform hover:scale-110 hover:rotate-3" src="https://pagedone.io/asset/uploads/1717742431.png" alt="about Us image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
