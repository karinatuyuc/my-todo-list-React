import { TrashIcon, ArrowDownIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

//COMPONENTE HIJO
function TaskMyTask({ taskList, setDetailsTask, setSelectedTask }) {
  return (
    <>
      {/*Div para renderizar los task */}
      <div
        className="bg-amber-200 mt-1.5 p-2 rounded-2xl border-b-red-700 border-b-2 text-black text-lg max-w-full
      md:flex md:flex-col md:justify-center md:items-center md:p-4"
      >
        {taskList.map((task) => (
          <div
            className="bg-purple-300 w-full border-b-cyan-700 border-b-2 flex gap-2 p-2 
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
      </div>
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
      <div className="md:bg-amber-950 md:p-2 lg:grid lg:grid-cols-2">
        <div className="bg-amber-400 p-2 rounded-sm m-1.5 min-h-24 max-h-64 overflow-y-scroll md:p-4 md:min-h-80 md:rounded-2xl">
          <sdiv className="bg-orange-500">
            <span className="flex text-2xl font-bold md:pb-3 underline decoration-orange-500 decoration-2 underline-offset-4 text-black">
              My Tasks
            </span>
          </sdiv>

          <TaskMyTask
            taskList={task}
            setDetailsTask={setDetailsTask}
            setSelectedTask={setSelectedTask}
          />
        </div>

        <div className="bg-red-600 p-3 m-1.5 mt-2 rounded-sm text-black md:rounded-2xl md:mt-6">
          <div className="p-1 bg-amber-400 flex-1 overflow-y-scroll md:rounded-lg md:p-6">
            {detailsTaks === null ? (
              <p>Aqui no hay task seleccionados</p>
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
              className="w-8 h-8 bg-red-500 p-1 rounded-lg md:w-10 md:h-10"
              onClick={() => setDeleteTaskModal(true)}
            />
            <ArrowDownIcon
              className="w-8 h-8 bg-red-500 p-1 rounded-sm md:w-10 md:h-10"
              onClick={() => setEditTaskModal(true)}
            />
          </div>
        </div>
      </div>
    </>
  );
}
