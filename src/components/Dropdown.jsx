import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const Dropdown = ({ options, label, value, setValue }) => {
  return (
    <>
      <div className="mb-3">
        <label htmlFor="leadSource">{label}: </label>
        <div class="mt-2 w-2/4 grid grid-cols-1">
          <select
            name="leadSource"
            id="leadSource"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
          >
            {options.map(({ name, id }) => (
              <option key={id} value={name}>
                {name}
              </option>
            ))}
          </select>
          <IoIosArrowDown className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4" />
        </div>
      </div>
    </>
  );
};

export default Dropdown;
