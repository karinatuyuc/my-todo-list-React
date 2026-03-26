import { useState } from 'react';
import { MagnifyingGlassIcon, ClockIcon, ClipboardDocumentCheckIcon, PlusIcon, ClipboardIcon, CheckCircleIcon} from "@heroicons/react/24/outline";  
import ProgressCircle from "./ProgressCircle.jsx";
import CompletedTask from "./CompletedTask.jsx";
import TaskCard from "./TaskCard.jsx";
import SideMenu from "./sideMenu.jsx";
import useMediaQuery from "./useMediaQuery.js";
import { TaskGrid } from "./TaskGrid.jsx";
import  UserName  from "./UserNameModal.jsx"

export default function Dashboard({showModal, tasks}) {

    {/** Catching userName Name */}
    const [modalName, setModalName] = useState(true);
    const [userName, setUserName] = useState("");


    const date = new Date(); //Creating the local date 
    
   // const options = { // Formatt to show the date.
     //   weekday: 'long',
       // year: "numeric",
        //month: "short",s
        //day: "numeric"
    //};

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


    {/**This are for MediaQuery logic */}
    const isMobile = useMediaQuery("(max-width: 768px)");
    const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1024px)");
    const isDesktop = useMediaQuery("(min-width: 1024px)");

    return (
        <>
        <UserName
         isOpen={modalName}
         setModalName={setModalName}
         setUserName={setUserName}
        />
         <div className="min-h-screen w-full flex flex-col md:min-h-screen">


            {/*Header*/}
            <header className="flex justify-between items-center p-1.5 bg-red-100  lg:flex lg:justify-around lg:p-5 lg:sticky lg:top-0 lg:z-20">

                {/** Dashboard title*/}
                <div className= "font-bold text-[15px] md:text-3xl">
                    <span className="text-red-300">Dash</span>
                    <span className="text-black">board</span>
                </div>


                {/** Search bar */}
                <div className="flex bg-white rounded-lg md:w-94 lg:w-lvh">

                    <input 
                      type="text"
                      id="search"
                      name="search"
                      placeholder={isDesktop ? "Search your task here...." : "Search you task..." }
                      className=" w-full h-9 p-2 text-sm rounded-lg focus:outline-none md:h-9 md:text-base "
                />
                    <button className="flex items-center justify-center md:h-9">
                        <MagnifyingGlassIcon 
                        className="w-7 h-9 p-1.5 bg-red-400  text-white rounded-lg md:w-8 md:h-8 lg:w-9 lg:h-9"/>
                    </button>
                </div>


                {/** Date section */}
                <div className="flex items-center justify-center gap-6">
                    {/**Notification and calendar icon */}
                    <div className="hidden lg:flex lg:gap-2 text-gray-50">
                         <ClockIcon className="w-8 h-8 bg-red-400 p-1.5 rounded-md"/>
                         <ClipboardDocumentCheckIcon className="w-8 h-8 bg-red-400 p-1.5 rounded-md"/>
                    </div>

                    <div className="flex flex-col gap-0.5">
                         <span className="font-bold text-[9px] md:text-sm lg:text-xs">{dayName}</span>
                         <span className="font-bold text-[9px] text-blue-300 md:text-sm md:flex md:justify-center lg:text-sm">{dateInNumber}</span>
                    </div>
                   
                </div>

            </header>


         


        <main className="min-h-screen w-full grow md:grid md:grid-cols-[1fr_3fr] md:gap-16 lg:h-full">

               <div className="bg-red-700 lg:bg-red-400 lg:w-80">
                  <SideMenu
                    userName={userName}
                  />
            </div>
            <div className="border-y-green-900 bg-sky-400">

                


                     <div className="flex items-center justify-center gap-4 m-4">
                        <div className="mx-auto text-xl font-bold mb-4 md:text-2xl lg:ml-0 lg:text-4xl lg:mb-0">
                           <h1>Welcome back, {userName}<span className="text-3xl md:text-4xl lg:text-4xl">{waveHand}</span></h1>
                        </div>
                    </div>


                {/** Main section */}

                <section className="border-2 border-gray-300 m-4 mb-5 mt-12 p-6 md:bg-orange-700 md:min-h-screen md:p-8 md:rounded-2xl 
                lg:bg-green-400 lg:p-4">

                    <div className="lg:grid  lg:grid-cols-2 lg:gap-6 lg:bg-fuchsia-500 lg:h-screen">

                    {/*ADD TASK SECTION AND CARDS TASKS (different component in REVIEW)*/}

                    <div className="w-full border-2 border-gray-300 drop-shadow-lg p-2 mb-3 rounded-2xl lg:bg-amber-400 
                    lg:h-full ">

                        <div className="flex justify-between m-4 lg:mt-1">
                            <span className="absolute text-justify left-16 text-xm ml-2 text-red-400 font-medium md:text-base">To-Do</span>
                            <div className="relative">
                                 <ClipboardDocumentCheckIcon 
                                      className="w-7 h-7 absolute text-gray-400 
                                      md:w-8 md:h-8"
                                 />
                                 <ClockIcon 
                                      className="w-6 h-6 relative left-3 top-4 p-1 bg-gray-200 text-gray-500 rounded-full
                                       md:left-4 md:top-5 lg:top-4 lg:w-5 lg:h-5 lg:p-0.5"
                                 />
                            </div>

                             <span 
                                 className="absolute text-justify mt-10 text-xs
                                 md:text-sm md:mt-12 lg:text-[11px] lg:mt-10">
                                    {dayMonth} 
                                     <span 
                                     className="text-gray-400 m-4
                                     md:text-sm">
                                        Today
                                     </span>
                            </span>


                            <button 
                              className="flex items-center text-sm cursor-pointer gap-1
                              md:text-base"
                              onClick={showModal}>
                                <PlusIcon 
                                   className="w-5 h-5 text-red-500 font-medium
                                   md:w-6 md:h-6"
                                />
                                <span className="text-gray-400">Add task</span>
                            </button>
                        </div>

                        <TaskCard
                          descriptionTask={descripcionTaks}
                          date={dateInNumber}
                        />

                    </div>






                <div className="lg:flex lg:flex-col lg:bg-cyan-500 lg:h-screen">

                    
                    {/* TASK STATUS*/}
                    <div className="border-2 border-gray-300 drop-shadow-lg rounded-2xl mb-2 h-full p-4 md:mb-6 lg:h-80 lg:pt-3">
                         
                        <div className="flex gap-4 lg:pb-6">
                            
                            <div className="flex relative mb-4">
                              <ClipboardIcon className="w-7 h-7 absolute text-gray-400 md:w-8 md:h-8"/>
                              <CheckCircleIcon className="w-4 h-4 relative mt-3 left-3 rounded-full text-gray-400 bg-gray-200
                              md:w-5 md:h-5" />
                            </div>
                            <span className="text-red-400 font-medium md:text-base">Task Status</span>
                        </div>


                        {/*Progress circles*/}
                        <div className="grid grid-cols-3 gap-1.5 h-full">
                            
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

                    <div className=" border-2 drop-shadow-lg border-gray-300 p-4 h-full mt-4 rounded-2xl 
                    lg:bg-green-950 lg:mt-0 lg:p-4">
                        <CompletedTask 
                            dateIn={dateInNumber}
                        />

                    </div>


                    <div>
                        <TaskGrid
                        isMobile={isMobile}
                        isTablet={isTablet}
                        isDesktop={isDesktop}
                        task={tasks}
                    />
                    </div>
                    
                    </div> 


                    </div>
                    
                </section>
            </div>
             
        </main>

            
                   <span className="text-[10px] bg-red-200 lg:mb-0">&copy; 2026 <a>RacooDev</a>. All rights reserved.</span>

         
         </div>
        </> 
    )
}