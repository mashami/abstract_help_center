import React from "react";

const Hero = () => {
  return (
    <div className="bg-HeroBackgroundColor h-[397px] flex justify-center items-center flex-col gap-2 px-[30px] pt-[80px] pb-[115px] space-y-12">
      <div className=" md:text-h1Size text-4xl font-gt-america">
        <h1> How can we help?</h1>
      </div>
      <div className="w-full">
        <form
          className="w-full max-w-[700px] mx-auto border-black border-[1px] flex justify-between items-center bg-white hover:border-blue-600 px-4"
          action=""
        >
          <input
            className="h-[66px] outline-none  py-4"
            type="search"
            placeholder="search"
          ></input>
          <svg
            width={28}
            height={36}
            className="arrow-svg"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 612 792"
            xmlSpace="preserve"
          >
            <g>
              <path
                d="M446.3,417.18c-3.38,0-5.35,0-7.31,0c-107.35,0-214.7-0.02-322.05,0.04c-5.82,0-11.25-0.71-15.99-4.44
		c-7.12-5.6-10.1-14.87-7.35-23.25c2.83-8.61,10.38-14.41,19.35-14.81c2-0.09,4-0.05,6-0.05c106.68,0,213.36,0,320.05,0
		c1.96,0,3.92,0,7.21,0c-2.05-2.19-3.29-3.59-4.61-4.92c-35.82-35.85-71.67-71.68-107.48-107.53c-8.92-8.93-10.77-18.21-5.61-27.49
		c6.34-11.4,21.01-14.53,31.38-6.64c1.85,1.41,3.53,3.05,5.17,4.7c48.34,48.32,96.66,96.66,144.99,145
		c12.49,12.5,12.49,23.74-0.01,36.25c-48.56,48.58-97.11,97.15-145.68,145.71c-8.95,8.94-18.17,10.82-27.48,5.69
		c-11.41-6.28-14.6-21-6.74-31.36c1.5-1.98,3.28-3.77,5.04-5.54c35.46-35.5,70.95-70.98,106.42-106.47
		C442.88,420.82,444.1,419.49,446.3,417.18z"
              />
            </g>
          </svg>
        </form>
      </div>
    </div>
  );
};

export default Hero;
