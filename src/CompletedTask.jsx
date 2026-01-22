import { DocumentCheckIcon, EllipsisHorizontalIcon } from "@heroicons/react/24/outline"


export default function CompletedTask({dateIn}){

    
    return (
        
        <>
              <div>
                <div className="flex gap-2">
                    < DocumentCheckIcon
                        className="w-6 h-6 text-gray-800"
                    />
                    <h1> Completed Task</h1>
                </div>

                <div className="flex border-2 border-amber-500 h-full mt-4 mb-2  ml-3 mr-3 p-2 gap-4">
                    <div className="min-w-4 max-h-4 rounded-full border-2 border-green-900">

                    </div>
                    <div className="mb-1.5 mt-1.5">
                         <h1 className="font-bold mb-4">Aqui va el titulo de el task</h1>
                         <p className="mb-4">Esta es la descripcion que tendra dos lineas de longitud no mas</p>
                         <h4 className="mb-2">Status: <span className="text-green-500">Completed</span></h4>
                         <h5>Completed {dateIn} </h5>
                    </div>
                    
                    <div>
                         <EllipsisHorizontalIcon
                          className="min-w-4 max-h-12 text-gray-950 font-extrabold text-xs ml-auto"
                         />
                    </div>
                   
                    
                </div>
                
              </div>
        </>
    )
}