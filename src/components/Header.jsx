import React from "react";

const Header = ({ headerContent }) => {
  return (
    <>
      <div className="fixed md:top-0 top-14 left-0 md:left-60 right-0 bg-white z-10 ">
        <div className="max-w-7xl mx-auto">
          <div className="text-center truncate px-2  py-3 md:text-3xl text-2xl h-16 font-semibold text-gray-800 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
            {headerContent}
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
