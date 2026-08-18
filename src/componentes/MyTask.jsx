import { TrashIcon, PencilSquareIcon } from "@heroicons/react/24/solid";
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
function TaskMyTask({ taskList, setDetailsTask, setSelectedTask }) {
  return (
    <>

    { taskList.length === 0 ? (
      <TaskSkeleton/>
    ) : (<div
        className=" mt-1.5 p-2 rounded-2xl border-b-2 text-black text-lg max-w-full
      md:flex md:flex-col md:justify-center md:items-center md:p-4 lg:p-0 lg:bg-gray-50"
      >
        {taskList.map((task) => (

          <div
            className="border-gray-400 border-2 w-full flex gap-2 p-2 rounded-2xl
            md:max-w-5/6 md:m-2 md:rounded-2xl"
            onClick={() => {
              (setDetailsTask(task), setSelectedTask(task));
            }}
          >
            <div className="flex md:p-3">
              <span className="rounded-full w-5 h-5 text-red-700 border-4"></span>
            </div>

            <div className="md:p-5">
              <span className="font-bold text-lg">{task.title}</span>

              <div className="flex gap-14 text-base md:py-2">
                <span className="md:text-lg">Priority: {task.priority}</span>
                <sapn className="md:text-lg">
                  Status: {task.status} No status
                </sapn>
              </div>
            </div>
          </div>
        ))}
      </div>) }
      {/*Div para renderizar los task */}
      
    </>
  );
}

// COMPONENTE PADRE
export function MyTask({
  task,
  setDeleteTaskModal,
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

  return (
    <>
      <div className="md:bg-blue-200 md:p-2 lg:grid lg:grid-cols-2 lg:h-full">
        <div
          className="p-2 rounded-sm m-1.5 min-h-24 max-h-64 overflow-y-scroll md:p-4 md:min-h-80 md:rounded-2xl
         lg:overflow-hidden lg:mt-6 lg:max-h-full"
        >
          <div className="text-2xl flex text-black font-bold">
            
            <span className="underline underline-offset-4 decoration-2 decoration-amber-600 text-2xl md:pb-3">
              My
            </span>
              Tasks
          </div>

          <TaskMyTask
            taskList={task}
            setDetailsTask={setDetailsTask}
            setSelectedTask={setSelectedTask}
          />
        </div>

        <div className="border-gray-300 border-2 p-3 m-1.5 mt-2 rounded-sm text-black md:rounded-2xl md:mt-6">
          <div className="p-1 flex-1 overflow-y-scroll md:rounded-lg md:p-6">
            {detailsTaks === null ? (
              <p className="text-sm bg-gray-300 text-gray-600">Please select a task above to see the details</p>
            ) : (
              <div>
                <div className="grid col-end-1 border-b-green-600 border-b-2 mb-4">
                  <span>
                    <strong className="md:text-lg">{detailsTaks.title}</strong>
                  </span>
                  <span>
                    <strong className="md:text-lg">Priority: </strong>{" "}
                    {detailsTaks.priority}
                  </span>
                  <span>
                    <strong className="md:text-lg">Status: </strong>{" "}
                    {detailsTaks.status} no status
                  </span>
                </div>

                <div className="mt-3 grid gap-1.5 md:gap-5">
                  <span>
                    <strong className="md:text-lg">Task title: </strong>{" "}
                    {detailsTaks.title}
                  </span>
                  <div>
                    <strong className="md:text-lg">Task Description: </strong>
                    <span className="md:text-base">
                      {detailsTaks.description}
                    </span>
                  </div>
                </div>

                <div>
                  <strong>Date:</strong> {detailsTaks.date}
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-end gap-1 p-1.5 md:p-4">
            <TrashIcon
              className="w-8 h-8 bg-red-400 p-1 rounded-lg md:w-10 md:h-10 text-gray-100 cursor-pointer"
              onClick={() => setDeleteTaskModal(true)}
            />
            <PencilSquareIcon
              className="w-8 h-8 bg-red-400 p-1 rounded-sm md:w-10 md:h-10 text-gray-100 cursor-pointer"
              onClick={() => setEditTaskModal(true)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

// DESHABILITAR BOTONES CUANDO NO HAY NADA EN TASKLIST
