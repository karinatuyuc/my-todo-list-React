import { useState } from "react";
import { Bars3Icon, UserCircleIcon  } from "@heroicons/react/24/outline"

export default function SideMenu(){

    
const [isOpen, setIsOpen] = useState(true);


    return (
        <>
          <div>
            <Bars3Icon
                className="w-7 h-7 hover:text-red-400"
                onClick={() => setIsOpen(false)}
            />

            {isOpen &&  (
                <div className="absolute bg-white left-0 h-screen w-screen z-50">

                        <div className="bg-red-600 w-64 h-16 mt-10 flex justify-center rounded-tr-lg" >

                            <div className=" absolute top-0">
                                <UserCircleIcon
                                    className="w-18 h-18"
                                />
                            </div>

                            <span className="mt-8">User name</span>
                            
                        </div>

                        <div className="bg-red-600 w-64 h-full">
                            <ol>
                                <li>FIRST</li>
                                <li>FIRST</li>
                                <li>FIRST</li>
                                <li>FIRST</li>
                                <li>FIRST</li>
                                <li>FIRST</li>
                            </ol>
                        </div>


                </div>
            )}
          </div>
        </>
        
    )

}