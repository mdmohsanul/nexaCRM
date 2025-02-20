import React, { useState } from "react";
import { HiDotsHorizontal } from "react-icons/hi";
import { format, parseISO } from "date-fns";

const Comment_List = ({ comment }) => {
  const isoDate = comment?.createdAt;
  const date = parseISO(isoDate);

  const formattedDate = format(date, "MMMM do, yyyy");
  const [openDropdown, setOpenDropdown] = useState(false);
  return (
    <>
      <article className="p-6 text-base bg-white  dark:bg-gray-900 border-b border-gray-300">
        <div className="flex justify-between items-center mb-2">
          <div className="flex items-center">
            <p className="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white font-semibold">
              {comment?.author?.name}
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              <time dateTime="2022-02-08" title="February 8th, 2022">
                {formattedDate}
              </time>
            </p>
          </div>
          <div className="relative">
            <button
              id="dropdownComment1Button"
              data-dropdown-toggle="dropdownComment1"
              className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 dark:text-gray-400 bg-white rounded-lg hover:bg-gray-100 "
              type="button"
              onClick={(e) => setOpenDropdown(!openDropdown)}
            >
              <HiDotsHorizontal size={22} />
              <span className="sr-only">Comment settings</span>
            </button>
            {/* <!-- Dropdown menu --> */}
            {openDropdown && (
              <div
                id="dropdownComment1"
                className="absolute top-7 -left-12 z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul
                  className="py-1 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownMenuIconHorizontalButton"
                >
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Edit
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                    >
                      Remove
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <p className="text-gray-500 dark:text-gray-400">
          {comment?.commentText}
        </p>
      </article>
    </>
  );
};

export default Comment_List;
