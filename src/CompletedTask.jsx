import { DocumentCheckIcon, EllipsisHorizontalIcon } from "@heroicons/react/24/outline"


export default function CompletedTask({dateIn}){

    
    return (
        
        <>
               {/** <div className="">*/}
                <div className="flex gap-2 mb-2">
                    < DocumentCheckIcon
                        className="w-7 h-7 text-gray-500 mb-2"
                    />
                    <h1 className=" text-red-400 font-medium">Completed Task</h1>
                </div>

                {/**CARDS*/}
                <div className="flex flex-col gap-4 p-2 md:flex-row "> 

                    {/**CARD #1 */}
                    <div className="grid border-2 border-violet-600 rounded-2xl grid-cols-[1fr_4fr_1fr] w-full max-w-md mx-auto p-1">

                        <div className="flex justify-center items-start pt-1">
                            <div className="w-4 h-4 rounded-full border-2 border-green-600"></div>
                        </div>
                       

                           <div className="max-w-auto">
                              <span className="font-bold text-sm ">Aqui va el titulo de el task</span>
                              <p className="text-sm line-clamp-2 mt-2 text-gray-600"
                            
                              >Esta es la descripcion que tendra dos lineas de longitud no mas</p>
                              <h4 className="text-[9px] mt-2">Status: <span className="text-green-600">Completed</span></h4>
                              <span className="text-[9px] text-gray-500">Completed {dateIn} </span> {/**This should be interactive */}
                           </div>
                    
                           <div className="flex justify-end items-start">
                                <EllipsisHorizontalIcon
                                className="w-6 h-6"
                                />
                            </div>
                    </div>

                   {/**CARD #2 */}
                   <div className="grid border-2 border-violet-600 rounded-2xl grid-cols-[1fr_4fr_1fr] w-full max-w-md mx-auto p-1">

                        <div className="flex justify-center items-start pt-1">
                            <div className="w-4 h-4 rounded-full border-2 border-green-600"></div>
                        </div>
                       

                           <div className="max-w-auto">
                              <span className="font-bold text-sm ">Aqui va el titulo de el task</span>
                              <p className="text-sm line-clamp-2 mt-2 text-gray-600"
                            
                              >Esta es la descripcion que tendra dos lineas de longitud no mas</p>
                              <h4 className="text-[9px] mt-2">Status: <span className="text-green-600">Completed</span></h4>
                              <span className="text-[9px] text-gray-500">Completed {dateIn} </span> {/**This should be interactive */}
                           </div>
                    
                           <div className="flex justify-end items-start">
                                <EllipsisHorizontalIcon
                                className="w-6 h-6"
                                />
                            </div>
                    </div>

 
                </div>
                
             { /** </div>*/} 
        </>
    )
}