import { useState } from "react";
import {
  Bars3Icon,
  Squares2X2Icon,
  DocumentCheckIcon,
  ListBulletIcon,
  CheckIcon,
} from "@heroicons/react/16/solid";

export default function SideMenu({ setUserName, setActiveView }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(localStorage.getItem("username") || "");
localStorage.getItem("username") || ""
  const listStyles =
    "group flex items-center gap-2 text-xl text-white md:gap-4 md:text-4xl lg:text-xl lg:hover:bg-white lg:hover:rounded-lg lg:hover:text-red-500 lg:hover:font-medium lg:hover:cursor-pointer lg:hover:p-2 lg:hover:scale-110 transition-all duration-300";
  const iconStyles =
    "w-7 h-7 text-white md:w-10 md:h-10 lg:w-8 lg:h-8 lg:group-hover:text-red-500 lg:transition-colors lg:duration-200";

  const avatarRandom = [
    "/Avatar/avatar1.webp",
    "/Avatar/avatar2.webp",
    "/Avatar/avatar3.webp",
    "/Avatar/avatar4.webp",
    "/Avatar/avatar5.webp",
  ];

  const randomIndex = Math.floor(Math.random() * avatarRandom.length);

  const avatar = avatarRandom[randomIndex];

  {
    /**This is the fx to change the input username value */
  }

  console.log(inputValue)
  
  function onClickButton() {
    setUserName(inputValue);
    setIsEditing(!isEditing);

    localStorage.setItem("username", inputValue)
  }

  return (
    <>
      {/**Movil Menu hamburguer */}
      <div className="w-7 h-7 m-2 flex md:m-2 md:w-10 md:h-10 lg:hidden text-red-600">
        <Bars3Icon onClick={() => setIsOpen(true)} />
      </div>

      <div
        className={`z-20 w-full bg-red-400
            ${isOpen ? "translate-x-0" : "-translate-x-full"}
            fixed top-0 left-0 transition-transform duration-300 ease-in-out 
            lg:static lg:translate-x-0 lg:w-80 `}
      >
        <div
          className={` flex flex-col justify-center items-center w-full 
            lg:w-80
            `}
        >
          <div
            className="absolute right-4 top-4 text-xl text-white
          cursor-pointer md:text-2xl lg:hidden"
          >
            <button onClick={() => setIsOpen(false)} 
              className="cursor-pointer hover:bg-red-300 p-2 rounded-2xl md:text-4xl">
              Close
            </button>
          </div>

          {/**This is the icon */}
          <div className="rounded-full mt-4 border-white border-2 md:mt-8 lg:mt-2">
            <img
              src={avatar}
              alt="avatar"
              className="w-20 h-20 rounded-full md:w-32 md:h-32 lg:w-18 lg:h-18"
            />
          </div>

           <div className="flex items-center mt-5 md:mt-7 lg:mt-3">
              <label htmlFor="username"></label>
              <input
                type="text"
                id="username"
                name="username"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="write your username"
                className="bg-red-300 p-0.5 border-none text-lg rounded-l-lg focus:ring-2 focus:ring-red-500 focus:outline-none 
                      md:text-3xl md:w-full md:h-10 md:text-center md:p-6
                      lg:text-xs lg:p-0.5 lg:h-6"
              />
              <CheckIcon
                className="bg-red-300 w-8 h-8 cursor-pointer rounded-r-lg text-white bg-red-6
                hover:bg-red-200 text-xl p-0.5 rounded-es-sm md:w-18 md:h-12 lg:w-8 lg:h-6 lg:rounded-l-none"
                onClick={() => {
                  onClickButton();
                  setIsOpen(false);
                }}
              />
            </div>
        </div>

        <div className="p-8 h-screen md:p-10 lg:w-72 lg:h-8/12 lg:mt-8 lg:p-6">
          <ol className="space-y-12 md:space-y-18 lg:space-y-8 lg:mt-2">
            <li
              className={listStyles}
              onClick={() => {
                (setActiveView("dashboard"), setIsOpen(false));
              }}
            >
              <Squares2X2Icon className={iconStyles} />
              Dashboard
            </li>
            <li
              className={listStyles}
              onClick={() => {
                (setActiveView("MyTask"), setIsOpen(false));
              }}
            >
              <DocumentCheckIcon className={iconStyles} />
              My Task
            </li>
            <li
              className={listStyles}
              onClick={() => {
                (setActiveView("TaskCategories"), setIsOpen(false));
              }}
            >
              <ListBulletIcon className={iconStyles} />
              Task Categories
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}
