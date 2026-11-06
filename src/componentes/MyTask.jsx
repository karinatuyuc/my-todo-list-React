import {
  TrashIcon,
  PencilSquareIcon,
  ClipboardDocumentCheckIcon,
  ClipboardDocumentIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";

/// DEBE APARECER COMO UN ESQUELETO EN CADA DIV SI NO HAY TAKS SELECCIONADOS PARA MOSTRAR LOS DETALLES, NO PUEDE
/// QUEDAR COMO QUEDO AHORA!!!

// COMPONENTE PADRE
export function MyTask({ task, onDelete, setEditTaskModal, setSelectedTask }) {
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const detailsTask = task.find((item) => item.id === selectedTaskId);

  return (
    <>
      <div className="h-full w-full lg:min-h-screen">
        {task.length === 0 ? (
          <div className="flex flex-col items-center justify-center gap-4 p-4 text-black md:p-6">
            <div>
              <img
                src="/mytask.webp"
                alt="My Task"
                className="w-36 h-36 md:w-60 md:h-60"
              />
            </div>
            <div className="text-center">
              <h1 className="m-4 text-2xl font-semibold md:text-4xl">
                All Done for now!!
              </h1>
              <p className="text-base md:text-xl">
                Any task you've added from the Dashboard or created will be
                listed here automatically. Currently, there is nothing new to
                show.
              </p>
            </div>
          </div>
        ) : (
          <div
            className={`grid grid-cols-1 gap-4 ${
              detailsTask
                ? "md:grid-cols-[minmax(32rem,1fr)_minmax(0,2fr)]"
                : ""
            }`}
          >
            <ul
              className="mt-1.5 flex max-w-full flex-col gap-2 rounded-2xl p-2 text-lg text-black md:p-4
            lg:bg-amber-500"
            >
              {task.map((item) => (
                <li key={item.id}>
                  <div
                    className={`border p-4 cursor-pointer transition-all  duration-300 ease-in-out 
                      w-full rounded-lg text-left font-bold text-black ${
                        item.id === selectedTaskId
                          ? "bg-amber-100 border-amber-700 shadow-xl scale-[1.03]"
                          : "bg-white border-blue-200 shadow-sm"
                      }`}
                    onClick={() => {
                      setSelectedTaskId(item.id);
                      setSelectedTask(item);
                    }}
                    aria-pressed={item.id === selectedTaskId}
                  >
                    <div
                      className={`flex h-4 w-4 items-center justify-center rounded-full ${
                        item.id === selectedTaskId
                          ? "bg-white text-red-500"
                          : "bg-gray-200"
                      }`}
                    >
                      {item.id === selectedTaskId && (
                        <ClipboardDocumentIcon className="h-4 w-4" />
                      )}
                    </div>

                    <div className="flex gap-2">
                      <span className="font-semibold text-gray-900 text-sm md:text-xl">
                        {item.title}
                      </span>
                      <span className="px-2 py-0.5 text-xs font-medium bg-gray-300 rounded-full md:text-base">
                        {item.estado}
                      </span>
                      <span className="px-2 py-0.5 text-xs font-medium bg-amber-200 rounded-full md:text-base">
                        {item.estado}
                      </span>
                    </div>


                  </div>
                </li>
              ))}
            </ul>

            {detailsTask && (
              <section className="rounded-lg border border-red-300 p-6 animate-fadein bg-gray-100 text-black">
                <h2 className="mb-3 wrap-break-words text-xl font-bold">
                  {detailsTask.title}
                </h2>
                <div className="space-y-2 text-sm text-gray-700 md:text-base">
                  <p>
                    <strong>Created:</strong> {detailsTask.date}
                  </p>
                  <p>
                    <strong>Category:</strong> {detailsTask.category || "None"}
                  </p>
                  <p className="whitespace-pre-wrap wrap-break-word text-gray-600">
                    {detailsTask.description || "No description"}
                  </p>
                </div>

                <div className="mt-4 flex justify-end gap-2">
                  <button
                    type="button"
                    aria-label="Delete task"
                    onClick={() => onDelete(detailsTask, "task")}
                    className=""
                  >
                    <TrashIcon className="w-8 h-8 bg-red-400 p-1 rounded-lg md:w-11 md:h-11 text-gray-100 cursor-pointer" />
                  </button>
                  <button
                    type="button"
                    aria-label="Edit task"
                    onClick={() => {
                      setSelectedTask(detailsTask);
                      setEditTaskModal(true);
                    }}
                    className="rounded-lg"
                  >
                    <PencilSquareIcon className="w-8 h-8 bg-red-400 p-1 rounded-lg md:w-11 md:h-11 text-gray-100 cursor-pointer" />
                  </button>
                </div>
              </section>
            )}
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
