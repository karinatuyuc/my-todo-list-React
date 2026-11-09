import { useEffect, useRef } from "react";
import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import { EditDeleteModal } from "./optionModals/EditDeleteModal";

export default function TaskCard({
  tasks,
  idOptions,
  openOptionsTaskId,
  setOpenOptionsTaskId,
  setEditTaskModal,
  setSelectedTask,
  onDelete,
}) {


  const modalRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setOpenOptionsTaskId(null);
      }
    };

    if (openOptionsTaskId !== null) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [openOptionsTaskId, setOpenOptionsTaskId]);

  const priorityColors = {
    Low: "text-green-500",
    Medium: "text-blue-400",
    Extreme: "text-red-700",
  };

  const statusColors = {
    "Not started": "text-red-500",
    "In progress": "text-blue-400",
    Completed: "text-green-700",
  };

  return (
    <>
      <div
        className="mt-0.5 mb-0.5 w-72
         md:w-full lg:p-0.5 lg:w-full"
      >
        <div className="grid grid-cols-1 gap-4 mt-1.5 p-1.5 lg:flex lg:mt-0.5 rounded-sm">
          {/**Card #1 */}
          <div
            className="w-full max-w-sm mx-auto min-h-36 border-2 rounded-lg p-2 border-blue-300 md:border-black
            md:grid md:grid-cols-1 md:p-2 md:w-full md:min-h-44 lg:w-96 lg:p-1.2"
          >
            <div className="flex gap-0.5 h-full">
              {/**This  is the cricle  */}
              <div className=" flex mt-1 lg:pr-1">
                <span
                  className={`w-2 h-2 border-4 rounded-full md:w-4 md:h-4 lg:w-4 lg:h-4 ${statusColors[tasks.estado]}`}
                ></span>{" "}
                {/**This sould be interactive too */}
              </div>

              {/*CARD TASKS */}
              <div className="w-full gap-8 h-28 md:h-36">

                <div className="grid grid-cols-12 w-full h-full">
                  <div className="col-span-11 p-0.5">
                    <span className="font-bold text-sm text-ellipsis break-all line-clamp-2 text-black md:text-xl lg:text-md">
                      {tasks.title}
                    </span>

                    <div className="text-sm h-14 text-ellipsis w-full m-0.5 md:h-40">
                      <p className="text-xs font-medium text-gray-900 line-clamp-5 break-all 
                      md:text-base md:line-clamp-4 md:py-0.5">
                        {tasks.description}
                      </p>
                    </div>
                    {/** CARD FOOTER */}
                  </div>

                  <div className="col-span-1">

                    <div onClick={() => {
                        idOptions(tasks.id);
                      }}
                      
                      className="rounded-full hover:bg-red-300/60 cursor-pointer transition-colors"
                      >

                        <EllipsisHorizontalIcon
                      className="w-5 h-5 text-black md:w-7 md:h-7"
                      
                    />
                      </div>
                    

                    {openOptionsTaskId === tasks.id && (
                      <EditDeleteModal
                        ref={modalRef}
                        onEdit={() => {
                          setSelectedTask(tasks);
                          setEditTaskModal(true);
                        }}
                        onDelete={() => {
                          onDelete(tasks, "task");
                          setSelectedTask(tasks);
                        }}
                      />
                    )}
                  </div>
                </div>

                <div
                  className="flex flex-row justify-between p-0.5 text-black"
                >
                  <span className="text-[7px] md:text-[10px]">
                    Priority:{" "}
                    <span className={priorityColors[tasks.priority]}>
                      {tasks.priority}
                    </span>
                  </span>
                  <span className="text-[7px] md:text-[10px]">
                    Status:{" "}
                    <span className={statusColors[tasks.estado]}>
                      {tasks.estado}
                    </span>
                  </span>{" "}
                  {/**This should be interactive  */}
                  <span className="text-gray-400 text-[7px] md:text-[10px]">
                    Created on: {" "}
                    <span>
                      <span className="text-gray-400 text-[7px] md:text-[10px]">
                        {tasks.date}
                      </span>
                    </span>
                  </span>
                </div>


              </div>
            </div>
          </div>
        </div>
        {/*DIV TO DO AND ADD TASK*/}
      </div>
    </>
  );
}
