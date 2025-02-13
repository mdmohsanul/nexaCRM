import React from "react";

const Input_Box = ({
  label,
  inputType,
  placeholder,
  name,
  value,
  setvalue,
}) => {
  return (
    <>
      <div className="mb-3">
        <label htmlFor={name}>{label}: </label>
        <div className="flex items-center rounded-md mt-2 bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
          <input
            type={inputType}
            name={name}
            id={name}
            value={value}
            onChange={(e) => setvalue(e.target.value)}
            className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            placeholder={placeholder}
          />
        </div>
      </div>
    </>
  );
};

export default Input_Box;
