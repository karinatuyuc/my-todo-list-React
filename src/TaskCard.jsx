export default function TaskCard ({task}) { // Receive dataInputs, date, tasks, and setTasks as props


    return (
        <>    
        <div className="lg:p-1 border-gray-800
        md:mt-20 lg:m-0">     
                
                                  {/*DIV TO DO AND ADD TASK*/}
             <div className="grid grid-cols-1 gap-4 mt-10 p-2 md:grid md:grid-cols-2 md:p-5 lg:flex lg:mt-0.5">
           
                {/**Card #1 */}
                <div className="w-full max-w-sm mx-auto min-h-28 border-2 rounded-lg p-0.5 border-gray-300 md:grid md:grid-cols-1 md:p-4
                 lg:w-96 lg:p-2">
           
                    <div className="flex gap-2.5 p-1.5 
                     ">
                        <div className="flex justify-center items-start mt-1">
                            <span className="w-3 h-3 border-2 rounded-full text-red-500"></span> {/**This sould be interactive too */}
                        </div>
                                          
           
                             {/*CARD TASKS */}
                            <div className="flex flex-col gap-4">
                                <span className="font-bold text-black">Aqui va el titulo {task.title}</span>

                                <div className="text-sm">
                                    <p className="font-medium text-gray-500">Description: Aqwui va la descripcion</p>
                                </div>
                                
           
                                        {/** CARD FOOTER */}
                                        <div className="text-[7px] flex justify-between">
                                                  <span>Priority: <span className="text-blue-400">Moderate</span></span>
                                                  <span className="">Status: <span className='text-red-600'>Not started</span></span> {/**This should be interactive  */}
                                                  <span className="text-gray-500">Created on:</span>
                                        </div>
           
                            </div>
                    </div>
                </div>
                 
             </div>
    </div>            
        </>
    )
}