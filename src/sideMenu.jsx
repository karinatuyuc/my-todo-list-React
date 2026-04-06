import { useState } from "react";
import { ExclamationCircleIcon, Bars3Icon, UserCircleIcon, Squares2X2Icon, 
    DocumentCheckIcon, ListBulletIcon, Cog6ToothIcon, QuestionMarkCircleIcon, ArrowUturnLeftIcon, XMarkIcon, 
    PencilIcon, CheckIcon } from "@heroicons/react/16/solid"
import UserName from "./UserNameModal";

export default function SideMenu({ userName, setUserName}) {

    const [isOpen, setIsOpen] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [inputValue, setInputValue] = useState("");

    console.log(!isEditing);


    const listStyles = 
    "group flex items-center gap-2 text-xl text-white md:gap-4 lg:text-md lg:hover:bg-white lg:hover:rounded-lg lg:hover:text-red-500 lg:hover:font-medium lg:hover:cursor-pointer lg:hover:p-3 lg:hover:scale-110 transition-all duration-300";
    const iconStyles =  "w-7 h-7 text-white lg:group-hover:text-red-500 lg:transition-colors lg:duration-200"
    
     const avatarRandom = [
         "/Avatar/avatar1.webp",
         "/Avatar/avatar2.webp",
         "/Avatar/avatar3.webp",
         "/Avatar/avatar4.webp",
         "/Avatar/avatar5.webp"
    ];


    const randomIndex = Math.floor(Math.random() * avatarRandom.length);

    const avatar = avatarRandom[randomIndex];

    {/**This is the fx to change the input username value */}

    function onClickButton() {
       setUserName(inputValue);
       setIsEditing(!isEditing);
    };


    return (
        <>

        {/**Movil Menu hamburguer */}
        <div className="w-7 h-7 m-1 block md:hidden lg:hidden">
           <Bars3Icon
            onClick={() => setIsOpen(true)}
           />
        </div>


       

        <div className={`z-20 fixed w-full h-screen top-0 menu-side
           lg:w-80 ${isOpen ? "w-full" : "hidden"} md:flex md:flex-col md:static md:w-80`}>


            <div className={`bg-red-700 flex flex-col justify-center items-center lg:w-80 lg:bg-red-400
              
              
            `}>


                   <div className="absolute right-4 top-4 text-xl text-white lg:hidden">
                      <button onClick={() => setIsOpen(false)}>Close</button>
                   </div>




                {/**This is the icon */}   
                <div className="rounded-full mt-4 border-white border-2 lg:mt-20">
                    <img src={avatar} alt="avatar" className="w-20 h-20 rounded-full"/> 
                </div>



                {!isEditing ?  

                  <div className="text-2xl text-white font-semibold mt-5 flex
                        lg:text-2xl lg:flex lg:justify-center lg:items-center lg:text-center lg:mt-2">
                          <span className="truncate overflow-hidden text-ellipsis w-75 text-center
                          lg:w-65 lg:truncate lg:overflow-hidden lg:text-ellipsis ">
                            {userName === "" ? "user name" : userName}
                          </span>
                    
                        <button onClick={onClickButton}>
                          <PencilIcon
                          className="w-5 h-5 text-white ml-2 cursor-pointer hover:text-red-700"
                          />
                        </button>
                    
                  </div>
                  : 
                  <div className="flex items-center mt-5">

                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="write your username"
                      className="bg-red-300 p-0.5 border-none text-lg rounded-sm focus:ring-2 focus:ring-red-500 focus:outline-none lg:p-1
                      text-center"
                    />
                    <CheckIcon
                      className="w-8 h-8 cursor-pointer text-white hover:text-red-700 text-xl p-0.5 rounded-es-sm"
                      onClick={onClickButton}
                    />
                 </div>
                }

                {/**DIV for the username */}

                {/**End DIV FOR THE USERNAME */}











            </div>

            <div className="bg-red-700 p-8 h-screen lg:bg-red-400 lg:w-80">
                <ol className="space-y-12 lg:space-y-12 lg:mt-4 ">
                    <li className={listStyles}>
                        <Squares2X2Icon className={iconStyles}/>
                        Dashboard
                    </li>
                    <li className={listStyles}>
                        <DocumentCheckIcon className={iconStyles}/>
                        My Task
                    </li>
                    <li className={listStyles}>
                        <ListBulletIcon className={iconStyles}/>
                        Task Categories
                    </li>
                    <li className={listStyles}>
                        <Cog6ToothIcon className={iconStyles}/>
                        Settings
                    </li>
                    <li className={listStyles}>
                        <ExclamationCircleIcon className={iconStyles}/>
                        About
                    </li>
                    <li className={listStyles}>
                        <QuestionMarkCircleIcon className={iconStyles}/>
                        Help
                    </li>
                </ol>
            </div>
           </div> 
        </>
    )
}
