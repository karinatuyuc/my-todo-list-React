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
                <div className=" fixed bg-white left-0 h-screen w-full z-50">

                </div>
            )}
          </div>
        </>
        
    )

}