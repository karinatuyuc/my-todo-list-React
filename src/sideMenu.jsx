//import { useState } from "react";
import { ExclamationCircleIcon, Bars3Icon, UserCircleIcon, Squares2X2Icon, DocumentCheckIcon, ListBulletIcon, Cog6ToothIcon, QuestionMarkCircleIcon, ArrowUturnLeftIcon, XMarkIcon } from "@heroicons/react/16/solid"

export default function SideMenu({userName}) {

    const listStyles = 
    "group flex items-center gap-2 text-xl text-white md:gap-4 lg:text-md lg:hover:bg-white lg:hover:rounded-lg lg:hover:text-red-500 lg:hover:font-medium lg:hover:cursor-pointer lg:hover:p-3 lg:hover:scale-110 transition-all duration-300";
    const iconStyles =  "w-10 h-10 text-white lg:group-hover:text-red-500 lg:transition-colors lg:duration-200"
    
    const avatarRandom = [
        "/Avatar/avatar1.webp",
        "/Avatar/avatar2.webp",
        "/Avatar/avatar3.webp",
        "/Avatar/avatar4.webp",
        "/Avatar/avatar5.webp"
    ];

    console.log(avatarRandom.length)

    const randomIndex = Math.floor(Math.random() * avatarRandom.length);
    console.log(randomIndex)

    const avatar = avatarRandom[randomIndex];
    console.log(avatar)


    return (
        <>
           <div className="z-20 fixed w-full h-screen top-0 menu-side
           lg:w-10
           ">


            <div className="absolute right-4 top-4 text-xl text-white ">
                Close
            </div>


            <div className="bg-red-700 flex flex-col justify-center items-center lg:absolute lg:mt-22 lg:w-80 lg:flex lg:justify-center lg:items-center lg:bg-red-400">

                {/*Aqui van las imagenes */}
                <div className="rounded-full mt-4">
                    <img src={avatar} alt="avatar" className="w-26 h-26 rounded-full animate-pulse"/> 

                {/*                 <UserCircleIcon className={`w-22 h-22
                   md:w-24 md:h-24
                 lg:relative lg:text-teal-200`}
                />*/}

                </div>

                <span className="text-2xl text-white lg:text-black
                lg:text-2xl lg:flex lg:justify-center lg:items-center lg:text-center lg:m-4">
                    {userName}
                </span>
            </div>

            <div className="bg-red-700 p-8 h-screen lg:bg-red-400 lg:w-80 ">
                <ol className="space-y-12 lg:space-y-12 lg:mt-60 lg:hover:text-blue-900">
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