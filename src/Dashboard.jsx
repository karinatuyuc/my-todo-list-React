import { MagnifyingGlassIcon, BellIcon, CalendarDaysIcon } from "@heroicons/react/24/outline"

export default function Dashboard() {
    const currentDate = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long', 
        day: 'long'
    }
    const formattedDate = new Intl.DateTimeFormat('en-US', {weekday: 'long'}).format(currentDate);

    return (
        <>
         <div className="m-3 2xl:m-8">

            <header className="bg-amber-800 flex justify-around h-25 sm:z-20 text-center items-center rounded-md p-4 shadow-lg">
                <h1 className="text-3xl">
                    <span className="text-red-400 font-bold">Dash</span>
                    <span className="text-black-950 font-bold">board</span>
                </h1>

                <div className="decoration-red-400 flex ">
                    <input
                     className="border-amber-300 border p-0.2 rounded-md w-90 flex-1 h-8"
                        type="text"
                        placeholder="Search your task here..."
                    />
                    <button className="bg-red-400 rounded-md">
                         < MagnifyingGlassIcon 
                           className="w-8 h-4 text-white"
                         />
                    </button>
                    
                </div>

                  <div className="flex flex-col pl-5 ">
                    <span className="font-bold">{formattedDate}</span>
                    <span className="text-blue-300 font-bold">{currentDate.toLocaleDateString('en-US')}</span>
                  </div>
            </header>



         </div>
        </>
    )
}