import { TrashIcon, PencilSquareIcon,  } from "@heroicons/react/24/solid";
import {
  ClipboardDocumentListIcon,
} from "@heroicons/react/24/outline";
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


  return (
    <>
      <div className=" h-full md:bg-gray-500 md:p-2 lg:grid lg:grid-cols-2 lg:h-full">
        {task.length === 0 ? (
          <div className="text-black flex flex-col justify-center items-center gap-4">
            <div className="p-4">
              <img
                src="public/mytask.webp"
                alt="My Task"
                className="w-36 h-36"
              />
            </div>

            <div className="text-center">
              <h1 className="text-2xl font-semibold m-4">All Done for now!!</h1>
              <p>
                Any task you've added from the Dashboard or created will be
                listed here automatically. Currently, there is nothing new to
                show.
              </p>
            </div>
          </div>
        ) : (
          <div
            className=" flex-1 h-full overflow-y-scroll mt-1.5 gap-60 p-2 rounded-2xl border-b-2 text-black text-lg max-w-full
             d:flex md:flex-col md:justify-center md:items-center md:p-4 lg:p-0 lg:bg-gray-50"
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
        md:max-w-5/6 md:m-2 
        ${
          isSelected
            ? "bg-amber-100 border-amber-700 shadow-xl scale-[1.03]"
            : "bg-white border-blue-200 shadow-sm"
        }`}
                >
                  {/* --- PARTE 1: Información básica (Siempre visible) --- */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {/* Indicador o icono */}
                      <div
                        className={`w-4 h-4 rounded-full ${isSelected 
                          ? "bg-red-500" 
                          : <ClipboardDocumentListIcon />}`}
                      />
                      <h3 className="font-semibold text-gray-900 text-sm">
                        {tasks.title}
                      </h3>
                    </div>

                    {/* Badges de Estado y Prioridad */}
                    <div className="flex gap-2">
                      <span className="px-2 py-0.5 text-xs font-medium bg-gray-100 rounded-full">
                        {tasks.estado}
                      </span>
                      <span className="px-2 py-0.5 text-xs font-medium bg-amber-200 rounded-full">
                        {tasks.priority}
                      </span>
                    </div>
                  </div>

                  {/* --- PARTE 2: Detalles completos (Solo se muestra si está seleccionada) --- */}
                  {isSelected && (
                    <div className="mt-3 pt-3 border-t border-red-300 space-y-2 text-sm text-gray-700 animate-fadeIn">
                      <div className="flex justify-between">
                        <span>
                          <strong>Created:</strong> {tasks.date}
                        </span>
                      </div>

                      <p>
                        <strong>Category:</strong> {tasks.category}
                      </p>

                      <p className="text-gray-600 italic">
                        "{tasks.description}"
                      </p>

                      {/* Botones de acción dentro de la tarjeta expandida */}
                      <div className="flex justify-end gap-2 pt-2">
                        <TrashIcon
              className="w-8 h-8 bg-red-400 p-1 rounded-lg md:w-10 md:h-10 text-gray-100 cursor-pointer"
              onClick={() => onDelete(detailsTaks, "task")}
            />
            <PencilSquareIcon
              className="w-8 h-8 bg-red-400 p-1 rounded-sm md:w-10 md:h-10 text-gray-100 cursor-pointer"
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
      </div>
    </>
  );
}

// DESHABILITAR BOTONES CUANDO NO HAY NADA EN TASKLIST

/* 

        <div className=" border-gray-300 border-2 p-3 m-1.5 mt-4 rounded-2xl text-black md:rounded-2xl md:mt-6">
          <div className="p-1 flex-1 overflow-y-scroll md:rounded-lg md:p-6">
            {detailsTaks === null ? (
              <p className="text-sm bg-gray-300 text-gray-600">Please select a task above to see the details</p>
            ) : (
              <div>
                <div className="grid col-end-1 border-b-red-400 border-b-2 mb-4">
                  <span>
                    <strong className="md:text-lg">{detailsTaks.title}</strong>
                  </span>
                  <span>
                    <strong className="md:text-lg">Priority: </strong>{" "}
                    {detailsTaks.priority}
                  </span>
                  <span>
                    <strong className="md:text-lg">Status: </strong>{" "}
                    {detailsTaks.estado}
                  </span>
                </div>

                <div className="mt-6 gridmd:gap-5">
                  <span>
                    <strong className="md:text-lg text-gray-600">Task title: </strong>{" "}
                    {detailsTaks.title}
                  </span>
                  <div>
                    <strong className="md:text-lg text-gray-600">Task Description: </strong>
                    <span className="md:text-base">
                      {detailsTaks.description}
                    </span>
                  </div>
                </div>

                <div>
                  <strong className="text-gray-600">Date:</strong> {detailsTaks.date}
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-end gap-1 p-1.5 md:p-4">
            <TrashIcon
              className="w-8 h-8 bg-red-400 p-1 rounded-lg md:w-10 md:h-10 text-gray-100 cursor-pointer"
              onClick={() => onDelete(detailsTaks, "task")}
            />
            <PencilSquareIcon
              className="w-8 h-8 bg-red-400 p-1 rounded-sm md:w-10 md:h-10 text-gray-100 cursor-pointer"
              onClick={() => setEditTaskModal(true)}
            />
          </div>
        </div>*/

/*
                <div className=" border-gray-300 border-2 p-3 m-1.5 mt-4 rounded-2xl text-black md:rounded-2xl md:mt-6">
          <div className="p-1 flex-1 overflow-y-scroll md:rounded-lg md:p-6"></div>

          <div className="flex justify-end gap-1 p-1.5 md:p-4">
            <TrashIcon
              className="w-8 h-8 bg-red-400 p-1 rounded-lg md:w-10 md:h-10 text-gray-100 cursor-pointer"
              onClick={() => onDelete(detailsTaks, "task")}
            />
            <PencilSquareIcon
              className="w-8 h-8 bg-red-400 p-1 rounded-sm md:w-10 md:h-10 text-gray-100 cursor-pointer"
              onClick={() => setEditTaskModal(true)}
            />
          </div>
        </div>*/

/**            {task.map((tasks) => {
              const isSelected = tasks.id === selectedTask?.id;

              <div
                key={tasks.id}
                onClick={() => {
                  (setDetailsTask(tasks), setSelectedTask(tasks));
                }}
                
                className={` border-4 flex gap-2 p-2 rounded-2xl mt-6 py-2 
                md:max-w-5/6 md:m-2 md:rounded-2xl ${isSelected 
                  ? "bg-amber-100 border-amber-700 border-2 scale-[1.03] ease-in-out" 
                  : "bg-white border-blue-200"}`}
              >


                
                <div className="">
                  <ClipboardDocumentIcon className="w-8 h-8 text-blue-500"/>
             
                </div>

                <div className=" w-full md:p-5">
                  <span className="font-bold text-xl">{tasks.title}</span>

                  <div className="flex justify-between text-base py-2 md:py-4">
                    <span className="md:text-lg">
                      Priority: <br /> 
                      <span className="bg-blue-100 px-2 rounded-xl">{tasks.priority}</span>
                    </span>

                    <span className="md:text-lg">Status: <br/>
                    <span className="bg-blue-100 px-2 rounded-xl">{tasks.estado}</span>
                    </span>
                  </div>
                </div>
              </div>
            })} */
