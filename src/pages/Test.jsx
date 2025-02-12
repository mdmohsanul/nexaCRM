import { useState } from "react";

import { FaChevronDown } from "react-icons/fa6";
import { ImCross } from "react-icons/im";
const options = ["Apple", "Banana", "Grapes", "Mango", "Orange"];

export default function Test() {
  const [selected, setSelected] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const toggleSelection = (option) => {
    setSelected((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  return (
    <div className="relative w-72">
      {/* Dropdown Button */}
      <div
        className="flex items-center justify-between w-full p-2 border border-gray-300 rounded cursor-pointer bg-white"
        onClick={toggleDropdown}
      >
        <div className="flex flex-wrap gap-1">
          {selected.length > 0 ? (
            selected.map((item) => (
              <span
                key={item}
                className="flex items-center gap-1 px-2 py-1 text-sm bg-blue-500 text-white rounded"
              >
                {item}
                <ImCross
                  size={14}
                  className="cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleSelection(item);
                  }}
                />
              </span>
            ))
          ) : (
            <span className="text-gray-400">Select options...</span>
          )}
        </div>
        <FaChevronDown size={20} />
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded shadow-md">
          {options.map((option) => (
            <div
              key={option}
              className={`flex items-center justify-between p-2 cursor-pointer hover:bg-blue-100 ${
                selected.includes(option) ? "bg-blue-200" : ""
              }`}
              onClick={() => toggleSelection(option)}
            >
              <span>{option}</span>
              {selected.includes(option) && <ImCross size={14} />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
