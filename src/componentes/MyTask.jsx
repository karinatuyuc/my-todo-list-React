import { TrashIcon, ArrowDownIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

//COMPONENTE HIJO
function TaskMyTask({ taskList, setDetailsTask, setSelectedTask }) {
  return (
    <>
      {/*Div para renderizar los task */}
      <div className="bg-amber-200 mt-1.5 p-2 rounded-2xl border-b-red-700 border-b-2 text-black text-lg max-w-full">
        {taskList.map((task) => (
          <div
            className="bg-purple-300 w-full border-b-cyan-700 border-b-2 flex gap-2 p-2"
            onClick={() => { setDetailsTask(task), setSelectedTask(task)}}
          >
            <div className="flex">
              <span className="rounded-full w-5 h-5 text-red-700 border-4"></span>
            </div>

            <div className="bg-red-300">
              <span className="font-bold text-lg">{task.title}</span>

              <div className="flex gap-14 text-base">
                <span>Priority: {task.priority}</span>
                <sapn>Status: {task.status} No status</sapn>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

// COMPONENTE PADRE
export function MyTask({ task, setDeleteTaskModal, setEditTaskModal, setSelectedTask, selectedTask }) {
  const [detailsTaks, setDetailsTask] = useState(null);

  useEffect(() => {
    if (selectedTask) {
      const updatedTaks = task.find(t => t.id === selectedTask.id);

      if(updatedTaks) {
        setDetailsTask(updatedTaks);
      } else {
        setDetailsTask(null);
      }
    }
  }, [task, selectedTask])

  return (
    <>
      <div className="bg-orange-500 m-1.5 lg:m-3 lg:min-h-11/12">
        <span className="flex justify-end text-3xl">My task</span>
      </div>
      <div className="bg-amber-400 p-2 rounded-sm m-1.5 min-h-24 max-h-64 overflow-y-scroll">
        <TaskMyTask 
        taskList={task} 
        setDetailsTask={setDetailsTask}
        setSelectedTask={setSelectedTask} />
      </div>

      <div className="bg-red-600 p-3 m-1.5 mt-2 rounded-sm text-black">
        <div className="p-1 bg-amber-400 flex-1 overflow-y-scroll ">
          {detailsTaks === null ? (
            <p>Aqui no hay task seleccionados</p>
          ) : (
            <div>
              <div className="grid col-end-1 border-b-green-600 border-b-2 mb-4">
                <span>
                  <strong>{detailsTaks.title}</strong>
                </span>
                <span>
                  <strong>Priority: </strong> {detailsTaks.priority}
                </span>
                <span>
                  <strong>Status: </strong> {detailsTaks.status} no status
                </span>
              </div>

              <div className="mt-3 grid gap-1.5">
                <span>
                  <strong>Task title: </strong> {detailsTaks.title}
                </span>
                <div>
                  <strong>Task Description: </strong>
                  {detailsTaks.description}
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="flex justify-end gap-1 p-1.5">
          <TrashIcon
            className="w-8 h-8 bg-red-500 p-1 rounded-sm"
            onClick={() => setDeleteTaskModal(true)}
          />
          <ArrowDownIcon  
           className="w-8 h-8 bg-red-500 p-1 rounded-sm" 
           onClick={() => setEditTaskModal(true)} />
        </div>
      </div>
    </>
  );
}
