import React from "react";

const Footer = () => {
  return (
    <div className="bg-black lg:h-[400px] w-full py-8 px-20 relative">
      <div className="flex justify-between h-full flex-col xs:flex-row xs:gap-0 gap-y-6">
        <div className="flex flex-wrap gap-16 md:grid-cols-2">
          <div className="text-white space-y-2">
            <h1 className="text-[24px] font-bold font-gt-america">Abstract</h1>
            <div>
              <p>
                <a className="hover:underline" href="">
                  {" "}
                  Start Trial
                </a>{" "}
              </p>
              <p>
                <a className="hover:underline" href="">
                  {" "}
                  Start Trial
                </a>{" "}
              </p>
              <p>
                <a className="hover:underline" href="">
                  {" "}
                  Start Trial
                </a>{" "}
              </p>
            </div>
          </div>
          <div className="text-white space-y-2">
            <h1 className="text-[24px] font-bold font-gt-america">Resources</h1>
            <div>
              <p>
                <a className="hover:underline" href="">
                  {" "}
                  Blog
                </a>{" "}
              </p>
              <p>
                <a className="hover:underline" href="">
                  {" "}
                  Help Center
                </a>{" "}
              </p>
              <p>
                <a className="hover:underline" href="">
                  {" "}
                  Release Notes
                </a>{" "}
              </p>
              <p>
                <a className="hover:underline" href="">
                  {" "}
                  Status
                </a>{" "}
              </p>
            </div>
          </div>
          <div className="text-white space-y-2">
            <h1 className="text-[24px] font-bold font-gt-america">Community</h1>
            <div>
              <p>
                <a className="hover:underline" href="">
                  {" "}
                  Twitter
                </a>{" "}
              </p>
              <p>
                <a className="hover:underline" href="">
                  {" "}
                  LinkedIn
                </a>{" "}
              </p>
              <p>
                <a className="hover:underline" href="">
                  {" "}
                  Dribbble
                </a>{" "}
              </p>
              <p>
                <a className="hover:underline" href="">
                  {" "}
                  Facebook
                </a>{" "}
              </p>
              <p>
                <a className="hover:underline" href="">
                  {" "}
                  Podcast
                </a>{" "}
              </p>
            </div>
          </div>
          <div className="text-white space-y-2">
            <h1 className="text-[24px] font-bold font-gt-america">Company</h1>
            <div className="space-y-10">
              <div>
                <p>
                  <a className="hover:underline" href="">
                    {" "}
                    About Us
                  </a>{" "}
                </p>
                <p>
                  <a className="hover:underline" href="">
                    {" "}
                    Careers
                  </a>{" "}
                </p>
                <p>
                  <a className="hover:underline" href="">
                    {" "}
                    Legal
                  </a>{" "}
                </p>
              </div>
              <div>
                <div>
                  <h1 className="font-bold font-gt-america">Contact Us</h1>
                  <p className="font-gt-america">mashamipaccy04@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-white space-y-4 xs:self-end relative sm:bottom-8">
          <svg
            width={126}
            height={32}
            className="abstract-logo-footer"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 51"
            preserveAspectRatio="xMinYMid slice"
          >
            <g className="abstract-logo-mark-footer" fill="#fff">
              <path d="M25.41 0C5.08 0 0 5.08 0 25.41s5.08 25.41 25.41 25.41 25.41-5.08 25.41-25.41S45.74 0 25.41 0zm-4.17 39.31A9.73 9.73 0 1 1 31 29.58a9.75 9.75 0 0 1-9.76 9.73zm17.67-.4h-4.77V16.67H11.91v-4.76h27z" />
              <circle cx="21.24" cy="29.58" r="4.96" />
            </g>
          </svg>

          <div className="font-gt-america text-lg">
            <p>© Copyright 2023</p>
            <p>Abstract Studio Design, Inc.</p>
            <p>All rights reserved</p>
          </div>
        </div>
      </div>
      <div className="fixed bottom-4 text-[15px] right-6">
        <button className="bg-bottonColor gap-2 rounded-full px-6 py-3 flex items-center  text-white font-bold ">
          <svg
            fill="white"
            widths={23}
            xHeight={15}
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="20px"
            height="20px"
            viewBox="0 0 20 20"
            xmlSpace="preserve"
            aria-hidden="true"
          >
            <g />
            <g />
            <g />
            <g>
              <g>
                <g>
                  <path d="M11,12.3V13c0,0-1.8,0-2,0v-0.6c0-0.6,0.1-1.4,0.8-2.1c0.7-0.7,1.6-1.2,1.6-2.1c0-0.9-0.7-1.4-1.4-1.4 c-1.3,0-1.4,1.4-1.5,1.7H6.6C6.6,7.1,7.2,5,10,5c2.4,0,3.4,1.6,3.4,3C13.4,10.4,11,10.8,11,12.3z" />
                  <circle cx={10} cy={15} r={1} />
                </g>
                <path d="M10,2c4.4,0,8,3.6,8,8s-3.6,8-8,8s-8-3.6-8-8S5.6,2,10,2 M10,0C4.5,0,0,4.5,0,10s4.5,10,10,10s10-4.5,10-10S15.5,0,10,0 L10,0z" />
              </g>
            </g>
          </svg>
          <p>Help</p>
        </button>
      </div>
    </div>
  );
};

export default Footer;
