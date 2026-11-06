import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/solid";
import { ClipboardDocumentListIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

/// DEBE APARECER COMO UN ESQUELETO EN CADA DIV SI NO HAY TAKS SELECCIONADOS PARA MOSTRAR LOS DETALLES, NO PUEDE
/// QUEDAR COMO QUEDO AHORA!!!

// Componente HIJO SKELETON CARD
function TaskSkeleton() {
  return (
    <>
      <div className="w-full rounded-sm my-4 gap-2 lg:w-80 border-gray-200 border-2">
        <div className="bg-white p-4 rounded-md shadow-sm animate-pulse flex flex-col gap-3 w-full">
          {/* Barra tipo título */}
          <div className="flex gap-1">
            <div className="h-5 bg-gray-200 rounded-full w-5"></div>
            <div className="h-5 bg-gray-200 rounded w-3/4"></div>
          </div>

          {/* Barra tipo detalle */}
          <div className="flex gap-6">
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          </div>
        </div>
      </div>
    </>
  );
}

//COMPONENTE HIJO
function TaskMyTask({
  taskList,
  setDetailsTask,
  selectedTask,
  setSelectedTask,
}) {
  return (
    <>
      {taskList.length === 0 ? (
        <TaskSkeleton />
      ) : (
        <div
          className=" mt-1.5 p-2 rounded-2xl border-b-2 text-black text-lg max-w-full
      md:flex md:flex-col md:justify-center md:items-center md:p-4 lg:p-0 lg:bg-gray-50"
        >
          {taskList.map((task) => (
            <div
              className={`border-gray-400 border-2 w-full flex gap-2 p-2 rounded-2xl mt-1.5
            md:max-w-5/6 md:m-2 md:rounded-2xl ${task.id === selectedTask?.id ? "bg-amber-100" : "bg-white"}`}
              onClick={() => {
                (setDetailsTask(task), setSelectedTask(task));
              }}
              key={task.id}
            >
              <div className="flex md:p-3">
                <span className="rounded-full w-5 h-5 text-red-700 border-4"></span>
              </div>

              <div className="md:p-5">
                <span className="font-bold text-lg">{task.title}</span>

                <div className="flex gap-14 text-base md:py-2">
                  <span className="md:text-lg">Priority: {task.priority}</span>
                  <span className="md:text-lg">Status: {task.estado}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {/*Div para renderizar los task */}
    </>
  );
}

// COMPONENTE PADRE
export function MyTask({
  task,
  onDelete,
  setEditTaskModal,
  setSelectedTask,
  selectedTask,
}) {
  const [detailsTaks, setDetailsTask] = useState(null);

  useEffect(() => {
    if (selectedTask) {
      const updatedTaks = task.find((t) => t.id === selectedTask.id);

      if (updatedTaks) {
        setDetailsTask(updatedTaks);
      } else {
        setDetailsTask(null);
      }
    }
  }, [task, selectedTask]);

  let windowWith = window.innerWidth >= 1366;
  console.log(windowWith);

  console.log(window.innerWidth);

  return (
    <>
      <div
        className={`h-full lg:bg-amber-500 
        lg:w-full lg:h-screen`}
      >
        {task.length === 0 ? (
          <div
            className="text-black flex flex-col justify-center items-center gap-4 
           md:flex md:justify-center md:items-center"
          >
            <div className="p-4">
              <img
                src="public/mytask.webp"
                alt="My Task"
                className="w-36 h-36 md:w-60 md:h-60"
              />
            </div>
            <div className="text-center">
              <h1 className="text-2xl font-semibold m-4 md:text-4xl">
                All Done for now!!
              </h1>
              <p className="text-2xl">
                Any task you've added from the Dashboard or created will be
                listed here automatically. Currently, there is nothing new to
                show.
              </p>
            </div>
          </div>
        ) : (
          <div className={`${windowWith ? "bg-gray-400" : "bg-green-400"}`}>
            {task.map((tasks) => {
              const isSelected = tasks.id === selectedTask?.id;

              return (
                <div
                  className={`${windowWith && isSelected ? "bg-red-700 grid grid-cols-2" : "bg-green-500"}`}
                  key={tasks.id}
                >
                  <div
                    onClick={() => {
                      setDetailsTask(tasks);
                      setSelectedTask(tasks);
                    }}
                  >
                    listas
                  </div>

                  {isSelected && (
                    <div>
                      detallesfasdf<br/>
                      safds
                      asdfsdf
                      asdfs
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

/**      <div className={`h-full lg:bg-mauve-600 
        ${widthCondition && task.length !== 0 
        ? "lg:grid lg:grid-cols-2 lg:h-screen lg:w-full" 
        : "lg:w-full lg:h-screen"} `}>
        {task.length === 0 ? (
          <div className="text-black flex flex-col justify-center items-center gap-4 
           md:flex md:justify-center md:items-center">
            <div className="p-4">
              <img
                src="public/mytask.webp"
                alt="My Task"
                className="w-36 h-36 md:w-60 md:h-60"
              />
            </div>
            <div className="text-center">
              <h1 className="text-2xl font-semibold m-4 md:text-4xl">All Done for now!!</h1>
              <p className="text-2xl">
                Any task you've added from the Dashboard or created will be
                listed here automatically. Currently, there is nothing new to
                show.
              </p>
            </div>
          </div>
        ) : (
          <div
            className=" flex-1 h-full overflow-y-scroll mt-1.5 gap-60 p-2 rounded-2xl text-black text-lg max-w-full
            md:w-full md:bg-gray-200 md:p-4 lg:p-0 lg:bg-gray-500 lg:w-full"
          >
            {task.map((tasks) => {
              const isSelected = tasks.id === selectedTask?.id;

              return (
                <div
                  key={tasks.id}
                  onClick={() => {
                    setDetailsTask(tasks);
                    setSelectedTask(tasks);
                  }}
                  className={`border flex flex-col gap-2 p-4 rounded-2xl mt-6 cursor-pointer
        transition-all duration-300 ease-in-out
        md:max-w-5/6 md:m-auto md:mt-8 md:p-7
        ${
          isSelected
            ? "bg-amber-100 border-amber-700 shadow-xl scale-[1.03]"
            : "bg-white border-blue-200 shadow-sm"
        }`}
                >
        

                  <div className="flex items-center justify-between lg:bg-purple-500">
                    <div className="flex items-center gap-2">
        
                      <div
                        className={`w-4 h-4 rounded-full ${
                          isSelected ? (
                            "bg-red-500"
                          ) : (
                            <ClipboardDocumentListIcon />
                          )
                        }`}
                      />
                      <h3 className="font-semibold text-gray-900 text-sm md:text-xl">
                        {tasks.title}
                      </h3>
                    </div>

                    <div className="flex gap-2">
                      <span className="px-2 py-0.5 text-xs font-medium bg-gray-100 rounded-full md:text-base">
                        {tasks.estado}
                      </span>
                      <span className="px-2 py-0.5 text-xs font-medium bg-amber-200 rounded-full md:text-base">
                        {tasks.priority}
                      </span>
                    </div>
                  </div>

                  {isSelected && (
                    <div className="mt-3 pt-3 border-t border-red-300 space-y-2 text-sm text-gray-700 animate-fadeIn">
                      <div className="flex justify-between">
                        <span className="md:text-lg">
                          <strong>Created:</strong> {tasks.date}
                        </span>
                      </div>

                      <p className="md:text-lg">
                        <strong>Category:</strong> {tasks.category}
                      </p>


                      <p className="text-gray-600 italic md:text-xl">
                        "{tasks.description}"
                      </p>

            
                      <div className="flex justify-end gap-2 pt-2">
                        <TrashIcon
                          className="w-8 h-8 bg-red-400 p-1 rounded-lg md:w-11 md:h-11 text-gray-100 cursor-pointer"
                          onClick={() => onDelete(detailsTaks, "task")}
                        />
                        <PencilSquareIcon
                          className="w-8 h-8 bg-red-400 p-1 rounded-sm md:w-11 md:h-11 text-gray-100 cursor-pointer"
                          onClick={() => setEditTaskModal(true)}
                        />
                      </div>
                    </div>
                  )}
                </div>


              );
            })}
          </div>
        )}
      </div> */
