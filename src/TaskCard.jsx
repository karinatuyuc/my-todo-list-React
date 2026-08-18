import { useEffect, useRef } from 'react'
import { EllipsisHorizontalIcon, } from "@heroicons/react/24/outline";
import { EditModal } from "./editModal";
import { EditDeleteModal } from "./optionModals/EditDeleteModal";

export default function TaskCard({ 
  tasks, 
  idOptions, 
  openOptionsTaskId, 
  setOpenOptionsTaskId, 
  setEditTaskModal, 
  setSelectedTask,
  setDeleteTaskModal}) {
  // Receive dataInputs, date, tasks, and setTasks as props
  //  editTaskModal,setEditTaskModal,onCloseEditModal,


  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setOpenOptionsTaskId(null)
      }
    };

    if(openOptionsTaskId !== null) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [openOptionsTaskId, setOpenOptionsTaskId]);


 const priorityColors = {
  "Low": 'text-green-500',
  "Moderate": "text-blue-400",
  "Extreme": "text-red-700"
 }


  return (
    <>
      <div
        className="mt-0.5 mb-0.5
        md:mt-3 lg:p-0.5 md:flex md:justify-center md:items-center md:w-96"
      >
        <div className="grid grid-cols-1 gap-4 mt-1.5 p-1.5 lg:flex lg:mt-0.5 rounded-sm">
          {/**Card #1 */}
          <div
            className="w-72 max-w-sm mx-auto min-h-36 border-2 rounded-lg p-2 border-gray-300 
            md:grid md:grid-cols-1 md:p-2 md:w-full lg:w-80 lg:p-1.2"
          >
            <div
              className="flex gap-2"
            >

                {/**This  is the cricle  */}
              <div className=" flex mt-1">
                <span className="w-3 h-3 border-2 rounded-full text-red-500 md:w-4 md:h-4"></span>{" "}
                {/**This sould be interactive too */}
              </div>


              {/*CARD TASKS */}
              <div className="grid w-full">

                <span className="font-bold text-sm text-ellipsis break-all line-clamp-2 text-black md:text-lg">
                  {tasks.title}
                </span>

                <div className="text-sm h-14 text-ellipsis w-full m-0.5 md:h-24">
                  <p className="text-xs font-medium text-gray-900 line-clamp-4 break-all md:text-base">
                    {tasks.description}
                  </p>
                </div>
                {/** CARD FOOTER */}
                <div className="text-[8px] text-black grid grid-cols-3 justify-between mt-6 md:text-[10px] md:gap-1">
                  <span className="">
                    Priority: {" "}
                    <span className={priorityColors[tasks.priority]} >
                    {tasks.priority}
                    </span>
                  </span>

                  <span className="">
                    Status: <span className="text-red-600">No status</span>
                  </span>{" "}

                  {/**This should be interactive  */}
                  <span className="text-gray-400">
                    Created on: <span>{tasks.date}</span>
                  </span>
                </div>
              </div>   

              <div className="cursor-pointer">
                <EllipsisHorizontalIcon
                 className="w-5 h-5 text-gray-600"
                 onClick={() => {
                  idOptions(tasks.id)}}
                />

                {
                  openOptionsTaskId === tasks.id &&  (

                    <EditDeleteModal 
                    ref={modalRef}
                    
                    onEdit={() => {
                      setSelectedTask(tasks);
                      setEditTaskModal(true);
                    }}
                    onDelete={ () => {
                      setDeleteTaskModal(true)
                      setSelectedTask(tasks)
                    }
                    }
                     />
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
