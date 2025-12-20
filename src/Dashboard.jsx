import { MagnifyingGlassIcon, Bars4Icon, ClockIcon, ClipboardDocumentCheckIcon, PlusIcon} from "@heroicons/react/24/outline";  


export default function Dashboard({showModal}) {
    const date = new Date(); //Creating the local date 
    
    const options = { // Formatt to show the date.
        weekday: 'long',
        year: "numeric",
        month: "short",
        day: "numeric"
    };

    const dayName= date.toLocaleDateString('en-US', { weekday: 'long'}); // To show the day of the week
    const dayMonth = date.toLocaleDateString('en-US', {day: 'numeric', month: 'short'});
    const dateInNumber = date.toLocaleDateString('en-US'); // To show the date in number 

    let waveHand = "\u{1F44B}" //Emoji hand waving

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

                <div className="flex items-center justify-center pt-6">
                    <button>
                        <Bars4Icon className="w-6 h-6 ml-1"/>
                    </button>
                    <div className="mx-auto text-lg font-bold">
                        <h1>Welcome back, {waveHand}</h1>
                    </div>
                </div>

                <section className="border-2 border-gray-400 m-1.5 mt-16 p-3">

                    {/*ADD TASK SECTION*/}
                    <div className="border-2 border-amber-400 mb-2 bg-blue-400 h-64 rounded-lg shadow-mb p-2">

                        <div className="flex justify-between m-1">
                            <h1 className="absolute text-justify left-16 text-sm">To-do</h1>
                            <div className="relative">
                                 <ClipboardDocumentCheckIcon className="w-6 h-6 absolute text-gray-600"/>
                                 <ClockIcon className="w-4 h-4 relative left-3 top-4 p-0.5 bg-gray-300 text-gray-600 rounded-full"/>
                            </div>
                             <span className="absolute text-justify mt-8 text-xs">{dayMonth}</span>


                            <button 
                              className="flex items-center text-sm"
                              onClick={showModal}>
                                <PlusIcon className="w-5 h-5"/>
                                Add Task
                            </button>
                        </div>












                        <div className="bg-yellow-500 h-32 w-full mt-12 border-2 border-red-400 rounded-lg">

                           <div className="flex gap-1.5 p-1 w-full h-full">
                             
                               <span className="inline-block w-3 h-3 rounded-full border-2 border-red-700 p-1 ml-1 mt-1"></span>

                               <div className="flex-1 text-gray-50 overflow-hidden bg-amber-900">
                                <h4 className="font-bold text-black">Task's title</h4>
                                <p>Tasks description</p>
                               </div>


                               
                                <button className="bg-red-300">...</button>
                           </div>

                        </div>





                    </div>


                    {/**NOT STARTED - TASK STATUS*/}
                    <div className="border-2 border-violet-600 mb-2">Task status</div>

                    {/**NOT STARTED - COMPLETED TASK*/}
                    <div className="border-2 border-fuchsia-600 mb-2">Completed task</div>
                </section>

            </main>


         </div>
        </> 
    )
}