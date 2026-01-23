import { DocumentCheckIcon, EllipsisHorizontalIcon } from "@heroicons/react/24/outline"


export default function CompletedTask({dateIn}){

    
    return (
        
        <>
               {/** <div className="">*/}
                <div className="flex gap-2 mb-2">
                    < DocumentCheckIcon
                        className="w-9 h-9 text-gray-700 mb-2"
                    />
                    <h1 className="text-lg text-red-600 font-bold">Completed Task</h1>
                </div>

                {/**CARDS*/}
                <div className="">

                    {/**CARD #1 */}
                    <div className="grid border-2 border-green-700 mb-4 p-2 rounded-lg grid-cols-[1fr_4fr_1fr] ">

                        <div className="flex justify-center items-start">
                            <div className="w-5 h-5 rounded-full border-2 border-amber-300 mt-2"></div>
                        </div>
                       

                           <div className="mb-1.5 mt-2 max-w-auto">
                              <span className="font-bold mb-2 text-base">Aqui va el titulo de el task</span>
                              <p className="mb-1.5 text-sm line-clamp-2"
                            
                              >Esta es la descripcion que tendra dos lineas de longitud no mas</p>
                              <h4 className="mb-1.5">Status: <span className="text-green-500">Completed</span></h4>
                              <span className="text-xs">Completed {dateIn} </span>
                           </div>
                    
                           <div>
                                <EllipsisHorizontalIcon
                                className="w-6 h-6 text-gray-950 font-extrabold text-xs ml-auto"
                                />
                            </div>
                    </div>

                   {/**CARDS 2*/}

                                          <div className="grid border-2 border-green-700 mb-4 p-2 rounded-lg grid-cols-[1fr_4fr_1fr] ">

                        <div className="flex justify-center items-start">
                            <div className="w-5 h-5 rounded-full border-2 border-amber-300 mt-2"></div>
                        </div>
                       

                           <div className="mb-1.5 mt-2 max-w-auto">
                              <span className="font-bold mb-2 text-base">Aqui va el titulo de el task</span>
                              <p className="mb-1.5 text-sm line-clamp-2"
                            
                              >Esta es la descripcion que tendra dos lineas de longitud no mas</p>
                              <h4 className="mb-1.5">Status: <span className="text-green-500">Completed</span></h4>
                              <span className="text-xs">Completed {dateIn} </span>
                           </div>
                    
                           <div>
                                <EllipsisHorizontalIcon
                                className="w-6 h-6 text-gray-950 font-extrabold text-xs ml-auto"
                                />
                            </div>
                    </div>
                      
                </div>
                
             { /** </div>*/} 
        </>
    )
}