import React from "react";

const MobileMenu = () => {
  return (
    <div className="bg-green-600 h-60 w-full flex flex-col z-10 absolute top-[88px] left-0">
      <div className="border-t-2 border-gray-300 w-full"></div>
      <div className="w-full h-full bg-black flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center space-y-4 bg">
          <div>
            <button className="font-gt-america text-white">
              Submit a request
            </button>
          </div>
          <div className="border-t-2 border-gray-300 w-96"></div>
          <div>
            <button className="font-gt-america text-white">Sign in</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
