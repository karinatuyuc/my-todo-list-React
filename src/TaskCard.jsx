// 90 PLEASE 

//import { useState } from "react";
import { EllipsisHorizontalIcon, } from "@heroicons/react/24/outline";
import { EditModal } from "./editModal";
import { EditDeleteModal } from "./optionModals/EditDeleteModal";
//import { useState } from "react";

export default function TaskCard({ tasks, idOptions, openOptionsTaskId }) {
  // Receive dataInputs, date, tasks, and setTasks as props


 // const [isOpen, setIsOpen] = useState(false); // State to control the visibility of the modal for the option
 //const [editModalOpen, setEditModalOpen] = useState(false); // State to control the visibility of the edit modal

 const priorityColors = {
  "Low": 'text-green-500',
  "Medium": "text-orange-400",
  "Extreme": "text-red-700"
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
              className="flex gap-2"
            >

                {/**This  is the cricle  */}
              <div className=" flex mt-1">
                <span className="w-3 h-3 border-2 rounded-full text-red-500"></span>{" "}
                {/**This sould be interactive too */}
              </div>


              {/*CARD TASKS */}
              <div className="grid w-full">

                <span className="font-bold text-sm text-ellipsis break-all line-clamp-2 text-black">
                  {tasks.title}
                </span>

                <div className="text-sm h-14 text-ellipsis w-full m-0.5">
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

              <div className="cursor-pointer flex">
                <EllipsisHorizontalIcon
                 className="w-5 h-5"
                 onClick={() => {
                  idOptions(tasks.id)}}
                />

                {
                  openOptionsTaskId === tasks.id &&  (
                    <EditDeleteModal/>
                  )
                }
              </div>
            </div>
          </div>
        </div>
        {/*DIV TO DO AND ADD TASK*/}
      </div>
    </>
  );
}
