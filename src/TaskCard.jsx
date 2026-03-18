

export default function TaskCard ({descriptionTask, date}){

    return (
        <>
            
            
        <div className="lg:p-3">     
                
                                  {/*DIV TO DO AND ADD TASK*/}
             <div className="grid grid-cols-1 gap-4 mt-10 p-2 md:grid md:grid-cols-2 lg:flex  lg:mt-2">
           
                {/**Card #1 */}
                <div className="w-full max-w-sm mx-auto min-h-28 border-2 border-indigo-400 rounded-2xl  p-0.5 md:grid md:grid-cols-1 
                 lg:w-96 lg:bg-white lg:p-2">
           
                    <div className="flex gap-2.5 p-1.5 
                     ">
                        <div className="flex justify-center items-start mt-1">
                            <span className="w-3 h-3 border-2 rounded-full text-red-500"></span> {/**This sould be interactive too */}
                        </div>
                                          
           
                             {/*CARD TASKS */}
                            <div className="flex flex-col gap-4">
                                <span className="font-bold text-black">Task's title</span>
                                    <p className="line-clamp-3 text-xs text-gray-600">{descriptionTask}</p>
           
                                        {/** CARD FOOTER */}
                                        <div className="text-[7px] flex justify-between">
                                                  <span>Priority: <span className="text-blue-400">Moderate</span></span>
                                                  <span className="">Status: <span className='text-red-600'>Not started</span></span> {/**This should be interactive  */}
                                                  <span className="text-gray-500">Created on: {date}</span>
                                        </div>
           
                            </div>
                    </div>
                </div>
                 
             </div>
    </div>            
        </>
    )
}