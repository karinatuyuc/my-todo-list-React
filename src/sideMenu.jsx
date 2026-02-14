import { useState } from "react";
import { Bars3Icon, UserCircleIcon, Squares2X2Icon, ExclamationCircleIcon, DocumentCheckIcon, ListBulletIcon, Cog6ToothIcon, QuestionMarkCircleIcon, ArrowUturnLeftIcon, XMarkIcon } from "@heroicons/react/24/outline"

export default function SideMenu({isDesktop}){

    const[isOpen, setIsOpen] = useState (false);

    return (
        <>

        {!isDesktop && (
             <Bars3Icon
                className="w-7 h-7 hover:text-red-400 md:w-8 md:h-8"
                onClick={() => {setIsOpen(true);
                    document.body.classList.add("overflow-hidden");
                }}
            />
        )}
                   
                
                    <div className={`fixed inset-0 w-full z-50
                     lg:absolute lg:top-20 lg:bottom-0 lg:left-0 lg:w-64 

                        ${isDesktop ? 'block' : isOpen ? 'block' : 'hidden'}`}>


                        <div className="absolute p-2 top-0 right-0">
                            <XMarkIcon
                                 className="w-8 h-8 text-gray-400 
                                 md:w-12 md:h-12"
                                 onClick={()=> {setIsOpen(false)}}
                            />
                        </div>

                        <div className="bg-red-500 w-78 mt-10 flex justify-center rounded-tr-3xl
                        md:w-xl lg:w-full" >
                            <div className=" absolute top-0">
                                <UserCircleIcon
                                    className="w-20 h-20  text-black md:w-26 md:h-26"
                                />                  
                            </div>

                            <span className="mt-8 text-white text-xl md:mt-16 md:text-3xl">User name</span>
                        </div>


                        <div className="bg-red-500 w-78 h-full
                        md:w-xl lg:w-full lg:h-full">
                            <div className="p-10">
                                <ol className="space-y-10 text-white md:pl-14 md:text-2xl">
                                    <li>
                                        <Squares2X2Icon
                                            className="w-6 h-6 inline-block mr-2 md:w-7 md:h-7"
                                        />
                                        Dashboard
                                    </li>
                                    <li>
                                        <ExclamationCircleIcon
                                            className="w-6 h-6 inline-block mr-2 md:w-7 md:h-7"
                                        />
                                        Vital Task
                                    </li>
                                    <li>
                                        <DocumentCheckIcon
                                            className="w-6 h-6 inline-block mr-2 md:w-7 md:h-7"
                                        />
                                        My Task
                                    </li>
                                    <li>
                                        <ListBulletIcon
                                            className="w-6 h-6 inline-block mr-2 md:w-7 md:h-7"
                                        />
                                        Task Categories
                                    </li>
                                    <li>
                                        <Cog6ToothIcon
                                            className="w-6 h-6 inline-block mr-2 md:w-7 md:h-7"
                                        />
                                        Settings
                                    </li>
                                    <li>
                                        <QuestionMarkCircleIcon
                                            className="w-6 h-6 inline-block mr-2 md:w-7 md:h-7"
                                        />
                                        Help
                                    </li>
                                </ol>
                            </div>


                            <span 
                              onClick={() => { setIsOpen(false)}}
                            className="flex gap-4 ml-6 mt-10 text-white md:text-2xl md:ml-8">
                                <ArrowUturnLeftIcon
                                className="w-6 h-6 md:w-7 md:h-7" 
                                />
                                Back
                            </span>
                            
                        </div>


                    </div>

        </>
        
    )

}