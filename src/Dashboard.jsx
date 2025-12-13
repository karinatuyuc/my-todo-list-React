import { MagnifyingGlassIcon, BellIcon, CalendarDaysIcon } from "@heroicons/react/24/outline"

export default function Dashboard() {
    const currentDate = new Date();
    console.log(currentDate);
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long', 
        day: 'long'
    }
    const formattedDate = new Intl.DateTimeFormat('en-US', {weekday: 'long'}).format(currentDate);

    return (
        <>
         <div className="m-3">

            <header className="bg-amber-800 flex justify-around h-16">
                <h1 className="text-3xl mt-2">
                    <span className="text-red-400 font-bold">Dash</span>
                    <span className="text-black-950 font-bold">board</span>
                </h1>

                <div className="decoration-red-400 flex mt-3">
                    <input
                     className="border-amber-300 border p-0.5 w-64 flex-1 h-8"
                        type="text"
                        placeholder="Search your task here..."
                    />
                    < MagnifyingGlassIcon 
                    className="w-6 h-6 text-red-400"
                    />
                </div>

                <div className="flex">
                    <BellIcon 
                     className="w-6 h-6 text-red-400"
                    />
                    < CalendarDaysIcon 
                     className="h-6 text-red-400"
                    />
                
                <div>
                </div>
                    <span>{formattedDate}</span>
                    <span></span>
                </div>
            </header>



         </div>
        </>
    )
}