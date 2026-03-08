//import { useState } from "react";
import { Bars3Icon, UserCircleIcon, Squares2X2Icon, ExclamationCircleIcon, DocumentCheckIcon, ListBulletIcon, Cog6ToothIcon, QuestionMarkCircleIcon, ArrowUturnLeftIcon, XMarkIcon } from "@heroicons/react/24/outline"

export default function SideMenu(){

   // const[isOpen, setIsOpen] = useState (false);

  //  const iconsStyles = `w-6 h-6 inline-block mr-2 md:w-7 md:h-7`;

    return (
        <>

        {/* {!isDesktop && (
             <Bars3Icon
                className="w-7 h-7 hover:text-red-400 md:w-8 md:h-8"
                onClick={() => {setIsOpen(true);
                    document.body.classList.add("overflow-hidden");
                }}
            />
        )}
*/}
        
                    <div className="menu-mobile">

                        {/**Header and userName */}
                        <div>
                            <UserCircleIcon className="w-6 h-6"/>
                            <span className="text-white text-sm">User name</span>
                        </div>

                    </div>
                        

                    

        </>
        
    )

}

{/*



 ${isDesktop ? 'block' : isOpen ? 'block' : 'hidden'}

                        isDesktop ? 'block' : isOpen ? 'block' : 'hidden'


                        <div className="absolute p-2 top-0 right-0 show-x X-landscape">
                            <XMarkIcon
                                 className="w-8 h-8 text-gray-400 
                                 md:w-12 md:h-12"
                                 onClick={()=> {setIsOpen(false)}}
                            />
                        </div>


                        <div className="bg-red-700">
                            
                        </div>

                     <div className="bg-red-500/90 w-full flex justify-center z-50 
                        md:w-full lg:w-full lg:bg-emerald-500 lg:mt-10" >

                            <div className="absolute top-0 lg:bg-amber-600 lg:top-0 lg:h-2">
                                <UserCircleIcon
                                    className="w-20 h-20  text-black md:w-34 md:h-34 lg:w-20 lg:h-20"
                                />                  
                            </div>

                            <span className="mt-20 text-white text-xl md:mt-34 md:text-4xl lg:text-2xl lg:mt-12">User name</span>
                        </div>


                        <div className="bg-red-500/90 w-full h-full
                        md:w-full lg:w-full lg:pt-8 lg:pb-64">
                            <div className="p-10">
                                <ol className="space-y-10 text-white text-xl md:pl-14 md:text-2xl lg:mt-12 lg:space-y-8 lg:pl-0">
                                    <li> 
                                        <Squares2X2Icon
                                            className={iconsStyles}
                                        />
                                        Dashboard
                                    </li>
                                    <li>
                                        <ExclamationCircleIcon
                                            className={iconsStyles}
                                        />
                                        Vital Task
                                    </li>
                                    <li>
                                        <DocumentCheckIcon
                                            className={iconsStyles}
                                        />
                                        My Task
                                    </li>
                                    <li>
                                        <ListBulletIcon
                                            className={iconsStyles}
                                        />
                                        Task Categories
                                    </li>
                                    <li>
                                        <Cog6ToothIcon
                                            className={iconsStyles}
                                        />
                                        Settings
                                    </li>
                                    <li>
                                        <QuestionMarkCircleIcon
                                            className={iconsStyles}
                                        />
                                        Help
                                    </li>
                                </ol>
                            </div>


                            <span 
                              onClick={() => { setIsOpen(false)}}
                            className="flex gap-4 ml-6 mt-10 text-white md:text-2xl md:ml-8 lg:pt-20">
                                <ArrowUturnLeftIcon
                                className="w-6 h-6 md:w-7 md:h-7" 
                                />
                                Back
                            </span>
                            
                        </div>
                    </div>
*/}