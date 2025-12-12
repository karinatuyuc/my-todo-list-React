import { MagnifyingGlassIcon, BellIcon, CalendarDaysIcon } from "@heroicons/react/24/outline"

export default function Dashboard() {
    const currentDate = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long', 
        day: 'long'
    }
    const formattedDate = new Intl.DateTimeFormat('en-En', {weekday: 'long'}).format(currentDate);

    return (
        <>
         <div>
            <header>
                <h1 className="text-3xl">
                    <span className="text-red-400 font-bold">Dash</span>
                    <span className="text-black-950 font-bold">board</span>
                </h1>
                <div className="decoration-red-400">
                    <input
                     className="border-amber-300 border"
                        type="text"
                        placeholder="Search your task here..."
                    />
                    < MagnifyingGlassIcon 
                    className="w-6 h-6 text-red-400"
                    />
                </div>

                <div className="w-32">
                    <BellIcon 
                     className="w-6 h-6 text-red-400"
                    />
                    < CalendarDaysIcon 
                     className="w-6 h-6 text-red-400"
                    />

                    <span>{formattedDate}</span>
                    <span
                      className="text-blue-300"
                    >{currentDate.toLocaleDateString()}</span>
                </div>

            </header>
         </div>
        </>
    )
}