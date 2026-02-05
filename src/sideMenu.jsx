import { useState } from "react";
import { Bars3Icon, UserCircleIcon, Squares2X2Icon, ExclamationCircleIcon, DocumentCheckIcon, ListBulletIcon, Cog6ToothIcon, QuestionMarkCircleIcon, ArrowUturnLeftIcon } from "@heroicons/react/24/outline"

export default function SideMenu(){

    const[isOpen, setIsOpen] = useState (false);

    return (
        <>
          <div className={isOpen ? "overflow-hidden" : ""}>
            <Bars3Icon
                className="w-7 h-7 hover:text-red-400 md:w-8 md:h-8"
                onClick={() => {setIsOpen(true);
                    document.body.classList.add("overflow-hidden");
                }}
            />

            {isOpen &&  (
                <>
                  <div className="fixed inset-0 bg-black/50 z-40"></div>
                    <div className="fixed left-0 top-26 bottom-0 w-76 z-50 bg-gray-300 rounded-r-2xl shadow-lg">

                        <div className="bg-red-500 w-64 mt-10 flex justify-center rounded-tr-lg" >
                            <div className=" absolute top-0">
                                <UserCircleIcon
                                    className="w-18 h-18 text-black"
                                />

                                                        
                            </div>

                            <span className="mt-8 text-white text-xl">User name</span>
                        </div>

                        <div className="bg-red-500 w-64 h-full">
                            <div className="p-6">
                                <ol className="space-y-8 text-white">
                                    <li>
                                        <Squares2X2Icon
                                            className="w-6 h-6 inline-block mr-2"
                                        />
                                        Dashboard
                                    </li>
                                    <li>
                                        <ExclamationCircleIcon
                                            className="w-6 h-6 inline-block mr-2"
                                        />
                                        Vital Task
                                    </li>
                                    <li>
                                        <DocumentCheckIcon
                                            className="w-6 h-6 inline-block mr-2"
                                        />
                                        My Task
                                    </li>
                                    <li>
                                        <ListBulletIcon
                                            className="w-6 h-6 inline-block mr-2"
                                        />
                                        Task Categories
                                    </li>
                                    <li>
                                        <Cog6ToothIcon
                                            className="w-6 h-6 inline-block mr-2"
                                        />
                                        Settings
                                    </li>
                                    <li>
                                        <QuestionMarkCircleIcon
                                            className="w-6 h-6 inline-block mr-2"
                                        />
                                        Help
                                    </li>
                                </ol>
                            </div>


                            <span 
                              onClick={() => { setIsOpen(false)}}
                            className="flex gap-4 ml-6 mt-10 text-white">
                                <ArrowUturnLeftIcon
                                className="w-6 h-6"
                                />
                                Back
                            </span>
                            
                        </div>


                    </div>
                </>
                
            )}
          </div>
        </>
        
    )

}