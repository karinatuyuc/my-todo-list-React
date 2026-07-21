import { useState } from "react";
import {
  ExclamationCircleIcon,
  Bars3Icon,
  UserCircleIcon,
  Squares2X2Icon,
  DocumentCheckIcon,
  ListBulletIcon,
  Cog6ToothIcon,
  QuestionMarkCircleIcon,
  ArrowUturnLeftIcon,
  XMarkIcon,
  PencilIcon,
  CheckIcon,
} from "@heroicons/react/16/solid";

export default function SideMenu({
  userName,
  setUserName,
  activeView,
  setActiveView,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const listStyles =
    "group flex items-center gap-2 text-xl text-white md:gap-4 lg:text-medium lg:hover:bg-white lg:hover:rounded-lg lg:hover:text-red-500 lg:hover:font-medium lg:hover:cursor-pointer lg:hover:p-2 lg:hover:scale-110 transition-all duration-300";
  const iconStyles =
    "w-7 h-7 text-white lg:group-hover:text-red-500 lg:transition-colors lg:duration-200";

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

  function onClickButton() {
    setUserName(inputValue);
    setIsEditing(!isEditing);
  }

  return (
    <>
      {/**Movil Menu hamburguer */}
      <div className="w-7 h-7 m-1 block md:m-2 md:w-10 md:h-10 lg:hidden">
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
          <div className="absolute right-4 top-4 text-xl text-white md:text-2xl lg:hidden">
            <button onClick={() => setIsOpen(false)}>Close</button>
          </div>

          {/**This is the icon */}
          <div className="rounded-full mt-4 border-white border-2 md:mt-8 lg:mt-4">
            <img
              src={avatar}
              alt="avatar"
              className="w-20 h-20 md:w-20 md:h-20 rounded-full"
            />
          </div>

          {!isEditing ? (
            <div
              className="text-2xl text-white font-semibold mt-5 flex 
                        lg:text-2xl lg:flex lg:justify-center lg:items-center lg:text-center lg:mt-2"
            >
              <span
                className="truncate overflow-hidden text-ellipsis w-75 text-center
                          md:text-2xl md:w-56
                          lg:w-65 lg:truncate lg:overflow-hidden lg:text-ellipsis "
              >
                {userName === "" ? "user name" : userName}
              </span>

              <button onClick={onClickButton}>
                <PencilIcon
                  className="w-5 h-5 text-white ml-2 cursor-pointer hover:text-red-700 
                          md:w-7 md:h-7 md:ml-0.5 md:bg-green-400/10
                          lg:ml-0.5 lg:w-5 lg:h-5"
                />
              </button>
            </div>
          ) : (
            <div className="flex items-center mt-5 md:mt-7 lg:mt-3">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="write your username"
                className="bg-red-300 p-0.5 border-none text-lg rounded-sm focus:ring-2 focus:ring-red-500 focus:outline-none 
                      md:text-medium
                      text-center"
              />
              <CheckIcon
                className="w-8 h-8 cursor-pointer text-white hover:text-red-700 text-xl p-0.5 rounded-es-sm md:bg-green-700"
                onClick={onClickButton}
              />
            </div>
          )}

          {/**DIV for the username */}

          {/**End DIV FOR THE USERNAME */}
        </div>

        <div className=" p-8 h-screen lg:w-80 lg:max-h-96">
          <ol className="space-y-12 md:space-y-10 lg:space-y-8 lg:mt-2">
            <li
              className={listStyles}
              onClick={() => setActiveView("dashboard")}
            >
              <Squares2X2Icon className={iconStyles} />
              Dashboard
            </li>
            <li className={listStyles} onClick={() => setActiveView("MyTask")}>
              <DocumentCheckIcon className={iconStyles} />
              My Task
            </li>
            <li
              className={listStyles}
              onClick={() => setActiveView("TaskCategories")}
            >
              <ListBulletIcon className={iconStyles} />
              Task Categories
            </li>
            <li
              className={listStyles}
              onClick={() => setActiveView("settings")}
            >
              <Cog6ToothIcon className={iconStyles} />
              Settings
            </li>
            <li className={listStyles} onClick={() => setActiveView("about")}>
              <ExclamationCircleIcon className={iconStyles} />
              About
            </li>
            <li className={listStyles} onClick={() => setActiveView("help")}>
              <QuestionMarkCircleIcon className={iconStyles} />
              Help
            </li>
          </ol>
        </div>
      </div>
    </>
  );
}
