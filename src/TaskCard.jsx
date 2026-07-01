export default function TaskCard({ task}) {
  // Receive dataInputs, date, tasks, and setTasks as props

  const priorityColors = {
    Low: "text-green-600 font-semibold",
    Medium: "text-orange-500",
    Extreme: "text-red-700 font-bold",
  };

  const priorityClass = priorityColors[task.priority] || "text-gray-800";

  return (
    <>
      <div
        className="border-gray-800 
        md:mt-2 lg:mt-2 lg:p-0.5 lg:bg-black"
      >
            
    <div className="grid grid-cols-1 gap-4 mt-10 p-1.5 md:grid md:grid-cols-2 md:p-2 lg:flex lg:mt-0.5 lg:bg-amber-400 rounded-sm">
          {/**Card #1 */}
          <div
            className="w-full max-w-sm mx-auto bg-red-900 min-h-36 border-2 rounded-lg p-0.5 gap-12 border-gray-300 md:grid md:grid-cols-1 md:p-2
                 lg:w-96 lg:p-0.5"
          >
            <div
              className="flex gap-2 p-0.5
                     "
            >
              <div className="flex justify-center items-start mt-1">
                <span className="w-3 h-3 border-2 rounded-full text-red-500"></span>{" "}
                {/**This sould be interactive too */}
              </div>

              {/*CARD TASKS */}
              <div className="flex flex-col gap-2 lg:w-100 lg:p-2">
                <span className="font-bold line-clamp-1 text-black">
                  {task.title}
                </span>

                <div className="text-sm text-ellipsis min-h-12">
                  <p className="text-xs font-medium text-gray-500 line-clamp-3">
                    {task.description}
                  </p>
                </div>

                {/** CARD FOOTER */}
                <div className="text-[8px] grid grid-cols-3 justify-between mt-2.5">
                  <span>
                    Priority:{" "}
                    <span className={`${priorityClass}`}>{task.priority}</span>
                  </span>
                  <span className="">
                    Status: <span className="text-red-600">No status</span>
                  </span>{" "}
                  {/**This should be interactive  */}
                  <span className="text-gray-500">
                    Created on: <span>{task.date}</span>
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
