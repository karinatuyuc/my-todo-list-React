//import { useState } from "react";
import { Bars3Icon, UserCircleIcon, Squares2X2Icon, ExclamationCircleIcon, DocumentCheckIcon, ListBulletIcon, Cog6ToothIcon, QuestionMarkCircleIcon, ArrowUturnLeftIcon, XMarkIcon } from "@heroicons/react/24/outline"

export default function SideMenu() {

    return (
        <>
           <div className="menu-side">


            <div className="flex justify-end p-2 text-xl">
                Close
            </div>

            <div className="flex flex-col justify-center items-center
            md:relative md:mt-1 md:flex md:flex-col md:justify-center md:items-center md:gap-2">
                <UserCircleIcon className="w-22 h-22 

                md:w-20 md:h-20 md:absolute md:-top-8 md:left-1/2 md:transform md:-translate-x-1/2"/>
                <span className="text-xl
                md:mt-20">User name</span>
            </div>

            <div className="md:bg-red-500 md:absolute md:w-90 md:top-26">
                <h1>Aqui va el menu y icons</h1>
            </div>

            
           </div>
        </>
    )
}