// 90 PLEASE 

import { useState } from "react";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import { EditModal } from "./editModal";

export default function TaskCard({ tasks }) {
  // Receive dataInputs, date, tasks, and setTasks as props


  const [isOpen, setIsOpen] = useState(false); // State to control the visibility of the modal for the option
 // const [editModalOpen, setEditModalOpen] = useState(false); // State to control the visibility of the edit modal
 const priorityColors = {
  "Low": 'text-green-500',
  "Medium": "text-orange-400",
  "Extreme": "text-red-700"
 }

  function handleEllipsis(){
    setIsOpen(!isOpen); // Toggle the visibility of the modal when the ellipsis button is clicked
  }

  return (
    <>
      <div
        className="border-gray-800 
        md:mt-2 lg:mt-2 lg:p-0.5"
      >

        <div className="grid grid-cols-1 gap-4 mt-10 p-1.5 md:grid md:grid-cols-2 md:p-2  lg:flex lg:mt-0.5 rounded-sm">
          {/**Card #1 */}
          <div
            className="w-full max-w-sm mx-auto bg-red-900 min-h-36 border-2 rounded-lg p-2 border-gray-300 md:grid md:grid-cols-1 md:p-2
                 lg:w-80 lg:p-1.2"
          >
            <div
              className="flex gap-0.5"
            >

                {/**This  is the cricle  */}
              <div className=" flex mt-1">
                <span className="w-3 h-3 border-2 rounded-full text-red-500"></span>{" "}
                {/**This sould be interactive too */}
              </div>
              {/*CARD TASKS */}
              <div className="flex flex-col gap-2 p-2 lg:p-2">
                <span className="font-bold line-clamp-1 text-black">
                  {tasks.title}
                </span>

                <div className="text-sm h-14 text-ellipsis">
                  <p className="text-xs font-medium text-gray-900 line-clamp-4 break-all">
                    {tasks.description}
                  </p>
                </div>

                {/** CARD FOOTER */}
                <div className="text-[8px] grid grid-cols-3 justify-between mt-2.5">
                  <span className="text-white">
                    Priority: {" "}
                    <span className={priorityColors[tasks.priority]} >
                    {tasks.priority}
                    </span>
                  </span>

                  <span className="">
                    Status: <span className="text-red-600">No status</span>
                  </span>{" "}

                  {/**This should be interactive  */}
                  <span className="text-gray-500">
                    Created on: <span>{tasks.date}</span>
                  </span>
                </div>
              </div>

              <div className="cursor-pointer flex" onClick={handleEllipsis}>
                <EllipsisHorizontalIcon className=" text-white w-4 h-4" />

                {isOpen && (
                    <div className="absolute bg-red-700 right-0 m-1 mt-3 rounded-sm">
                        <div className="text-[10px]">
                            <div>
                                <button className="block w-full text-left p-2 hover:bg-red-300">Editar</button>
                            </div>
                            <button className="block w-full text-left p-2 hover:bg-red-300">Eliminar</button>
                        </div>
                    </div>

                )}
              </div>
            </div>
          </div>
        </div>
        {/*DIV TO DO AND ADD TASK*/}
      </div>
    </>
  );
}
