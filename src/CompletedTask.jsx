import { DocumentCheckIcon, EllipsisHorizontalIcon } from "@heroicons/react/24/outline"


export default function CompletedTask({dateIn}){

    
    return (
        
        <>
               {/** <div className="">*/}
                <div className="flex gap-2 mb-16">
                    < DocumentCheckIcon
                        className="w-7 h-7 text-gray-500 mb-2 md:w-8 md:h-8 md:mb-4 lg:w-7 lg:h-7 lg:mb-1"
                    />
                    <h1 className=" text-red-400 font-medium md:text-2xl lg:text-sm xl:text-lg">Completed Task</h1>
                </div>



                {/**CARDS*/}
                <div className=""> 

                    {/**CARD #1 */}
                    <div className="    
                    ">

                        <div className="flex justify-center items-start pt-1">
                            <div className="w-4 h-4 rounded-full border-2 border-green-600 md:w-5 md:h-5 lg:w-4 lg:h-4"></div>
                        </div>
                       

                           <div className="max-w-auto">
                              <span className="font-bold text-sm md:text-base lg:text-sm">Aqui va el titulo de el tafjsldjflajksdlkjjlsjflskdjfjksk</span>
                              <p className="text-sm line-clamp-2 mt-2 text-gray-600 md:text-base lg:text-sm xl:text-medium"
                            
                              >Esta es la descripcion que tendra dossdafsjdfjalkjsdlkjflksfljasldfjslk lineas de longitud no mas</p>
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