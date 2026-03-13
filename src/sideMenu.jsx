//import { useState } from "react";
import { ExclamationCircleIcon, Bars3Icon, UserCircleIcon, Squares2X2Icon, DocumentCheckIcon, ListBulletIcon, Cog6ToothIcon, QuestionMarkCircleIcon, ArrowUturnLeftIcon, XMarkIcon } from "@heroicons/react/16/solid"

export default function SideMenu() {

    return (
        <>
           <div className="bg-red-400 z-20 fixed w-full h-screen top-0 menu-side

           md:w-100 md:-top-20 md:h-screen
           ">


            <div className="flex justify-end p-2 text-xl text-white">
                Close
            </div>


            <div className="flex flex-col justify-center items-center">
                <UserCircleIcon className="w-22 h-22 text-white
                md:w-24 md:h-24
                 lg:relative lg:text-black"
                />
                <span className="text-2xl text-white 
                 lg:bg-gray-600">User name</span>
            </div>

            <div className="p-8 h-screen lg:h-screen">
                <ol className="space-y-12 ">
                    <li className="flex items-center gap-2 text-xl text-white md:gap-4">
                        <Squares2X2Icon className="w-10 h-10"/>
                        Dashboard
                    </li>
                    <li className="flex items-center gap-2 text-xl text-white md:gap-4">
                        <DocumentCheckIcon className="w-10 h-10"/>
                        My Task
                    </li>
                    <li className="flex items-center gap-2 text-xl text-white md:gap-4">
                        <ListBulletIcon className="w-10 h-10"/>
                        Task Categories
                    </li>
                    <li className="flex items-center gap-2 text-xl text-white md:gap-4">
                        <Cog6ToothIcon className="w-10 h-10"/>
                        Settings
                    </li>
                    <li className="flex items-center gap-2 text-xl text-white md:gap-4">
                        <ExclamationCircleIcon className="w-10 h-10 text-white"/>
                        Help
                    </li>
                </ol>
            </div>

            
           </div>
        </>
    )
}