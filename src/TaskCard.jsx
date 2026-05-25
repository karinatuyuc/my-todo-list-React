export default function TaskCard () { // Receive dataInputs, date, tasks, and setTasks as props


    return (
        <>    
        <div className="border-gray-800 
        md:mt-16 lg:mt-8 lg:p-0.5 ">     
                
                                  {/*DIV TO DO AND ADD TASK*/}
             <div className="grid grid-cols-1 gap-4 mt-10 p-2 md:grid md:grid-cols-2 md:p-5 lg:flex lg:mt-0.5">
           
                {/**Card #1 */}
                <div className="w-full max-w-sm mx-auto min-h-28 border-2 rounded-lg p-0.5 border-gray-300 md:grid md:grid-cols-1 md:p-4
                 lg:w-96 lg:p-1">
           
                    <div className="flex gap-2.5 p-1.5 
                     ">
                        <div className="flex justify-center items-start mt-1">
                            <span className="w-3 h-3 border-2 rounded-full text-red-500"></span> {/**This sould be interactive too */}
                        </div>
                                          
           
                             {/*CARD TASKS */}
                            <div className="flex flex-col gap-4 bg-red-300 lg:w-100 lg:p-2">
                                <span className="font-bold line-clamp-1 text-black">No title yet</span>

                                <div className="text-sm lg:overflow-hidden lg:h-20">
                                    <p className="font-medium text-gray-500 line-clamp-4">
                                        No description yet
                                    </p>
                                </div>
                                
           
                                        {/** CARD FOOTER */}
                                        <div className="text-[9px] flex justify-between">
                                                  <span>Priority: <span className="text-blue-400">Not defined yet</span></span>
                                                  <span className="">Status: <span className='text-red-600'>No status</span></span> {/**This should be interactive  */}
                                                  <span className="text-gray-500">Created on: No date yet</span>
                                        </div>
           
                            </div>
                    </div>
                </div>
                 
             </div>
    </div>            
        </>
    )
}