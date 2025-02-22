import React from "react";

const List_Shimmer = () => {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <>
      <div className=" ">
        <div role="status" className="  animate-pulse max-w-4xl">
          {/* <div className="flex-shrink-0 flex pl-4 gap-6">
        <span className="flex justify-center items-center bg-gray-300 rounded-full w-12 h-12 "></span>
        <p className="h-16 bg-gray-300 rounded-md w-3xs mb-2.5"></p>
      </div> */}
          <div className="ml-4 mt-2 w-full">
            <div className="flex justify-between mb-2">
              <p className="h-16 bg-gray-300 rounded-md w-3xs mb-2.5"></p>
              <p className="h-16 bg-gray-300 rounded-md w-3xs mb-2.5"></p>
            </div>
            {arr.map((item, i) => (
              <p
                key={i}
                className="h-16 bg-gray-300 rounded-md max-w-4xl mb-6"
              ></p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default List_Shimmer;
