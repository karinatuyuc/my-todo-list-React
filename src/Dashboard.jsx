import { MagnifyingGlassIcon, Bars4Icon} from "@heroicons/react/24/outline";  


export default function Dashboard() {
    const date = new Date(); //Creating the local date 
    
    const options = { // Formatt to show the date.
        weekday: 'long',
        year: "numeric",
        month: "long",
        day: "numeric"
    };

    const dayName= date.toLocaleDateString('en-US', { weekday: 'long'}); // To show the day of the week
    const dateInNumber = date.toLocaleDateString('en-US'); // To show the date in number 

    let waveHand = "\u{1F44B}" //

    return (
        <>
         <div className="p-0.5 bg-yellow-300 h-screen w-full">

            <header className="flex justify-between items-center p-1 bg-red-100">

                <div className= "font-bold text-xl">
                    <span className="text-black">Dash</span>
                    <span className="text-red-300">board</span>
                </div>

                <div className="flex w-44 bg-white rounded-lg">
                    <input 
                      type="text"
                      id="search"
                      name="search"
                      placeholder="Search your task..."
                      className=" w-full h-8 p-2 text-sm rounded-lg focus:outline-none"
                    />
                    <button className="flex items-center justify-center">
                        <MagnifyingGlassIcon 
                        className="w-7 h-7 p-2 bg-red-300 rounded-lg hover:bg-red-200"/>
                    </button>
                </div>

                
               { /* <div className="bg-red-300">
                    <span><BellIcon  className="w-4 h-4"/></span>
                </div> */}

                <div className="flex flex-col">
                    <span className="font-bold text-[10px]">{dayName}</span>
                    <span className="font-bold text-[10px] text-cyan-400 ">{dateInNumber}</span>
                </div>
            </header>

            <main className="bg-blue-300 h-screen w-full">

                <div className="flex items-center justify-center">
                    <button>
                        <Bars4Icon className="w-6 h-6 ml-1"/>
                    </button>
                    <div className="mx-auto text-lg font-bold">
                        <h1>Welcome back, {waveHand}</h1>
                    </div>
                </div>

            </main>


         </div>
        </> 
    )
}