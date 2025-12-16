import { MagnifyingGlassIcon, BellIcon, } from "@heroicons/react/24/outline";  


export default function Dashboard() {
    return (
        <>
         <div className="p-0.5 bg-yellow-300 h-screen w-full">

            <header className="flex justify-between items-center p-1 bg-blue-200">
                <div className= "font-bold">
                    <span className="text-black">Dash</span>
                    <span className="text-red-300">board</span>
                </div>

                <div className="bg-violet-300 relative w-64">
                    <input 
                      type="text"
                      placeholder="Search your task here..."
                      className="w-full rounded border pr-10 p-2 border-amber-950 "
                    />
                    <button className="absolute right-2 top-1">
                        <MagnifyingGlassIcon 
                        className="w-5 h-5 absolute right-2 top-1 bg-red-300"/>
                    </button>
                </div>

                <div className="bg-red-300">
                    <span><BellIcon  className="w-5 h-5"/></span>
                </div>

                <div className="bg-green-400 flex flex-col text-center">
                    <span>Day</span>
                    <span>Number</span>
                </div>
            </header>
         </div>
        </>
    )
}