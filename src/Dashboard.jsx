import { MagnifyingGlassIcon, BellIcon, CalendarDaysIcon } from "@heroicons/react/24/outline"

export default function Dashboard() {

    return (
        <>
            <header>
                <h1>
                    <span className="text-red-400 font-bold">Dash</span>
                    <span className="text-black-950 font-bold">board</span>
                </h1>
                <div className="underline decoration-wavy decoration-red-400">
                    <input
                     className="border-amber-300 border"
                        type="text"
                        placeholder="Search your task here..."
                    />
                    < MagnifyingGlassIcon 
                    className="w-6 h-6 text-red-400"
                    />
                </div>

            </header>
        </>
    )
}