import { MagnifyingGlassIcon, ClockIcon, ClipboardDocumentCheckIcon, PlusIcon, ClipboardIcon, CheckCircleIcon} from "@heroicons/react/24/outline";  
import ProgressCircle from "./ProgressCircle.jsx";
import CompletedTask from "./CompletedTask.jsx";
import SideMenu from "./sideMenu.jsx";

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
    const dateInNumber = date.toLocaleDateString("en-US"); // To show the date in number 

    let waveHand = "\u{1F44B}" //Emoji hand waving

    let descripcionTaks  = "Esta es la descripcion del task donde veremos si cabe el espacio que le asignamos o no, pero no se veremos@ hola este sotro parrafo para averificar que cmabia !!"

    
    const circles = [
        { title: "Completed", progress: "25%", color: "green" },
        { title: "In progress", progress: "50%", color: "blue" },
        { title: "Not started", progress: "75%", color: "red" },
    ];

    return (
        <>
         <div className="p-0.5 h-full w-full bg-gray-200">

            <header className="flex justify-between items-center p-1 bg-red-100">

                {/** Dashboard title*/}
                <div className= "font-bold text-xl">
                    <span className="text-red-300">Dash</span>
                    <span className="text-black">board</span>
                </div>

                {/** Search bar */}
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

                {/** Date section */}
                <div className="flex flex-col">
                    <span className="font-bold text-[8px]">{dayName}</span>
                    <span className="font-bold text-[7px] text-blue-300">{dateInNumber}</span>
                </div>

            </header>


            <main className="h-full w-full">

                {/** Greeting and menu */}
                <div className="flex items-center justify-center p-4">
                    <SideMenu />
                    <div className="mx-auto text-xl font-bold mb-4">
                        <h1>Welcome back,<span className="text-3xl">{waveHand}</span></h1>
                    </div>
                </div>


                {/** Main section */}
                <section className="border-2 border-gray-300 m-4 mt-12 p-3.5">

                    {/*ADD TASK SECTION AND CARDS TASKS (different component in REVIEW)*/}
                    <div className="w-full border-2 border-gray-300 drop-shadow-lg p-2 mb-3 rounded-2xl">

                        <div className="flex justify-between m-2">
                            <span className="absolute text-justify left-16 text-xm ml-2 text-red-400 font-medium">To-Do</span>
                            <div className="relative">
                                 <ClipboardDocumentCheckIcon className="w-7 h-7 absolute text-gray-400"/>
                                 <ClockIcon className="w-6 h-6 relative left-3 top-4 p-1 bg-gray-200 text-gray-500 rounded-full"/>
                            </div>
                             <span className="absolute text-justify mt-10 text-xs">{dayMonth} <span className="text-gray-400 m-4">Today</span></span>


                            <button 
                              className="flex items-center text-sm cursor-pointer gap-1"
                              onClick={showModal}>
                                <PlusIcon className="w-5 h-5 text-red-500 font-medium"/>
                                <span className="text-gray-400">Add task</span>
                            </button>
                        </div>


                        {/*DIV TO DO AND ADD TASK*/}
                        <div className=" min-h-28 mt-12 border-2 border-gray-400 rounded-2xl w-68 max-w-md mx-auto p-0.5">

                           <div className="flex gap-2.5 p-1.5">
                            <div className="flex justify-center items-start mt-1">
                                <span className="w-3 h-3 border-2 rounded-full text-red-500"></span> {/**This sould be interactive too */}
                            </div>
                               

                               {/*CARD TASKS */}
                               <div className="flex flex-col gap-4">
                                <span className="font-bold text-black">Task's title</span>
                                <p className="line-clamp-3 text-xs text-gray-600">{descripcionTaks}</p>

                                {/** CARD FOOTER */}
                                 <div className="text-[8px] flex justify-between">
                                     <span>Priority: <span className="text-blue-400">Moderate</span></span>
                                    <span className="">Status: <span className='text-red-600'>Not started</span></span> {/**This should be interactive  */}
                                    <span className="text-gray-500">Created on: {dateInNumber}</span>
                                 </div>

                               </div>
                           </div>
                        </div>
                    </div>


                    {/**NOT STARTED - TASK STATUS*/}
                    <div className="border-2 border-gray-300 drop-shadow-lg rounded-2xl mb-2 h-full p-4">
                         
                        <div className="flex gap-4">
                            
                            <div className="flex relative mb-4">
                              <ClipboardIcon className="w-7 h-7 absolute text-gray-400"/>
                              <CheckCircleIcon className="w-4 h-4 relative mt-3 left-3 rounded-full text-gray-400 bg-gray-200" />
                            </div>
                            <span className="text-red-400 font-medium">Task Status</span>
                        </div>


                        {/*Progress circles*/}
                        <div className="grid grid-cols-3 gap-2 h-full">
                            
                            {circles.map((item, index) => (
                                <ProgressCircle
                                   // Aqui van los props que le pasamos al componente
                                   key={index}
                                   title={item.title}
                                   progress={item.progress}
                                   color={item.color}

                                />
                            ))}
                        </div>
   
                    </div>




                    {/*COMPLETED TASK*/}

                    <div className=" border-2 drop-shadow-lg border-gray-300 p-4 h-full mt-4 rounded-2xl">
                        <CompletedTask 
                            dateIn={dateInNumber}
                        />

                    </div>

                    
                    
                </section>

            </main>


         </div>
        </> 
    )
}