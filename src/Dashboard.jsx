import { useState, useRef } from "react";
import {
  MagnifyingGlassIcon,
  ClockIcon,
  ClipboardDocumentCheckIcon,
  PlusIcon,
  ClipboardIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import ProgressCircle from "./ProgressCircle.jsx";
import CompletedTask from "./CompletedTask.jsx";
import TaskCard from "./TaskCard.jsx";
import SideMenu from "./sideMenu.jsx";
import { TaskGrid } from "./TaskGrid.jsx";
import { AddTaskModal } from "./addTaskModal.jsx";
import { EditModal } from "./editModal.jsx";
import TaskRenderer from "./TaskRenderer.jsx";
import { EditDeleteModal } from "./optionModals/EditDeleteModal.jsx";

export default function Dashboard({
  task,
  addTask,
  modalAddTask,
  setModalAddTask,
  onClose,
  onSubmit,
  editTaskModal,
  setEditTaskModal,
  onCloseEditModal,

  selectedTask,
  editTask,

  idOptions,
  openOptionsTaskId,
  setOpenOptionsTaskId

}) {
  const [userName, setUserName] = useState("");
  const [hasScrolled, setHasScrolled] = useState(false); // This state is to change the color of the header inside the box of the tasks cards

  const handleScroll = () => {
    if (tasksRef.current) {
      const scrolled = tasksRef.current.scrollTop > 0;
      setHasScrolled(scrolled);
    }
  };

  const date = new Date(); //Creating the local date


  const dayName = date.toLocaleDateString("en-US", { weekday: "long" }); // To show the day of the week
  const dayMonth = date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
  });
  const dateInNumber = date.toLocaleDateString("en-US"); // To show the date in number

  let waveHand = "\u{1F44B}"; //Emoji hand waving

  const circles = [
    { title: "Completed", progress: "25%", color: "green" },
    { title: "In progress", progress: "50%", color: "blue" },
    { title: "Not started", progress: "75%", color: "red" },
  ];

  const tasksRef = useRef(null); // Reference to the tasks container for scroll detection

  return (
    <>
      {modalAddTask && (
        <AddTaskModal
          addTask={addTask}
          onClose={onClose} // Pass the onClose function as a prop to close the modal
          onSubmit={onSubmit} // Passing onAddTask function to update the task list in the Dashboard component when a new task is added
        />
      )}

      {
        editTaskModal && (
          <EditModal
            onCloseEditModal={onCloseEditModal}
            selectedTask={selectedTask}
            editTask={editTask}
          /> 
        )
      }

      <div className="min-h-screen w-full bg-black text-white">
        {/*Header*/}
        <header
          className="flex justify-between items-center p-1.5 bg-red-100 sticky top-0 z-20
            lg:flex lg:justify-around lg:p-4 lg:pl-12 lg:pr-12 lg:sticky lg:top-0 lg:z-20 lg:gap-44"
        >
          {/** Dashboard title*/}
          <div className="font-bold text-[15px] md:text-3xl">
            <span className="text-red-300">Dash</span>
            <span className="text-black">board</span>
          </div>

          {/** Search bar */}
          <div className="flex bg-yellow-50 hover:bg-red-200 rounded-lg md:w-94 lg:w-lvw ">
            <input
              type="text"
              id="search"
              name="search"
              placeholder="Search your task here...."
              className=" w-full h-9 p-2 text-sm rounded-lg focus:outline-none md:h-9 md:text-base hover:bg-red-200"
            />
            <button className="flex items-center justify-center md:h-9 hover:bg-red-300">
              <MagnifyingGlassIcon className="w-7 h-9 p-1.5 bg-red-400  text-white rounded-lg md:w-8 md:h-8 lg:w-9 lg:h-9" />
            </button>
          </div>

          {/** Date section */}
          <div className="flex items-center justify-center gap-6">
            {/**Notification and calendar icon */}
            <div className="hidden lg:flex lg:gap-2 text-gray-50">
              <ClockIcon className="w-8 h-8 bg-red-400 p-1.5 rounded-md" />
              <ClipboardDocumentCheckIcon className="w-8 h-8 bg-red-400 p-1.5 rounded-md" />
            </div>

            <div className="flex flex-col gap-0.5">
              <span className="font-bold text-[9px] md:text-sm lg:text-xs">
                {dayName}
              </span>
              <span className="font-bold text-[9px] text-blue-300 md:text-sm md:flex md:justify-center lg:text-sm">
                {dateInNumber}
              </span>
            </div>
          </div>
        </header>

        <div className="flex min-h-screen flex-col lg:flex-row">
          {/**SIDE MENU */}
          <aside className="lg:bg-red-400 lg:w-80 lg:min-h-screen lg:sticky">
            <SideMenu userName={userName} setUserName={setUserName} />
          </aside>
          {/**End SIDE MENU */}

          <main className="flex-1 p-0.5 overflows-auto">
            <div className="border-y-green-900">
              <div className="flex items-center justify-center gap-2 lg:mt-6 lg:ml-6 text-center">
                <div className="mx-auto text-xl font-medium mb-4 md:text-2xl lg:ml-0 lg:text-3xl lg:mb-0 flex">
                  <h1 className="sm:truncate sm:overflow-hidden sm:text-ellipsis text-black font-bold md:text-2xl">
                    Welcome, {userName}{" "}
                    <span className="text-3xl md:text-4xl lg:text-4xl">
                      {waveHand}
                    </span>
                  </h1>
                </div>
              </div>

              {/** Main section */}

              <section
                className="border-2 border-gray-200 m-4 mb-5 mt-12 p-6 md:min-h-screen md:p-10 shadow-2xl
                "
              >
                <div className="lg:grid  lg:grid-cols-2 lg:gap-6 lg:h-screen">
                  {/*ADD TASK SECTION AND CARDS TASKS (different component in REVIEW)*/}

                  <div
                    ref={tasksRef}
                    onScroll={handleScroll}
                    className={`w-full border-2 border-gray-200 shadow-2xl drop-shadow-lg mb-3 rounded p-4
                    lg:p-0 lg:min-h-full lg:overflow-auto`}
                  >
                    <div
                      className={`lg:top-0 lg:sticky text-red-400 ${hasScrolled ? "bg-red-400 text-white" : "bg-gray-00"}`}
                    >
                      <div className="flex justify-between p-2.5 lg:h-17">
                        <span className="absolute text-justify left-16 text-xm ml-2 font-medium md:text-2xl lg:text-lg">
                          To-Do
                        </span>
                        <div className="relative">
                          <ClipboardDocumentCheckIcon
                            className="w-7 h-7 absolute
                                      md:w-8 md:h-8"
                          />
                          <ClockIcon
                            className="w-6 h-6 relative left-3 top-4 p-1 bg-gray-200 text-gray-500 rounded-full
                                       md:left-4 md:top-5 lg:top-4 lg:w-5 lg:h-5 lg:p-0.5"
                          />
                        </div>

                        <span
                          className="absolute text-justify mt-10 text-[10ox]
                                 md:text-sm md:mt-14 lg:text-[10px] lg:mt-10"
                        >
                          {dayMonth}
                          <span
                            className="text-gray-400 m-4
                                     md:text-sm"
                          >
                            Today
                          </span>
                        </span>

                        <button
                          className="flex items-center text-sm cursor-pointer gap-1
                              md:text-base"
                        >
                          <PlusIcon
                            className="w-5 h-5 text-red-500 font-medium
                                   md:w-6 md:h-6"
                            onClick={() => setModalAddTask(true)}
                          />
                          <span className="text-gray-400 md:text-2xl lg:text-sm">
                            Add task
                          </span>
                        </button>
                      </div>
                    </div>

                    <div className="">
                      {task.length === 0 ? (
                        <div className=" p-1.5 rounded-sm gap-2 mt-12 m-6">
                          <div className="bg-white p-4 rounded-md shadow-sm animate-pulse flex flex-col gap-3">
                            {/* Barra tipo título */}
                            <div className="h-5 bg-gray-200 rounded w-3/4"></div>

                            {/* Barra tipo descripción */}
                            <div className="h-4 bg-gray-200 rounded w-full"></div>
                            <div className="h-4 bg-gray-200 rounded w-5/6"></div>

                            {/* Barra tipo detalle */}
                            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                          </div>
                        </div>
                      ) : (
                        
                          task.map((tasks) => (
                            
                            <TaskCard 
                            key={tasks.id} 
                            tasks={tasks} 
                            setEditTaskModal={setEditTaskModal}
                            editTask={editTask}
                            idOptions={idOptions}
                            setOpenOptionsTaskId={setOpenOptionsTaskId}
                            openOptionsTaskId={openOptionsTaskId}
                            />
                          ))
                        
                      )}
                    </div>
                  </div>

                  <div className="lg:flex lg:flex-col lg:h-screen md:p-0.5 lg:p-0.5 ">
                    {/* TASK STATUS*/}
                    <div
                      className="border-2 border-gray-300 drop-shadow-lg rounded-2xl mb-2 h-full p-2
                    md:mb-12
                    lg:h-80 lg:pt-3 lg:mb-4"
                    >
                      <div className="flex gap-4  md:pb-6 lg:pb-4">
                        <div className="flex relative mb-4 md:mt-2">
                          <ClipboardIcon className="w-7 h-7 absolute text-gray-400 md:w-10 md:h-10 lg:w-7 lg:h-7" />
                          <CheckCircleIcon
                            className="w-4 h-4 relative mt-3 left-3 rounded-full text-gray-400 bg-gray-200
                              md:w-6 md:h-6 lg:w-4 lg:h-4"
                          />
                        </div>
                        <span className="text-red-400 font-medium md:text-2xl lg:text-lg">
                          Task Status
                        </span>
                      </div>

                      {/*Progress circles*/}
                      <div className="grid grid-cols-3 gap-1.5 h-full">
                        {circles.map((item, index) => (
                          <ProgressCircle
                            // Aqui van los props que le pasamos al componente
                            key={index}
                            title={item.title}
                            progress={item.progress}
                            color={item.color}
                          />
                        ))}
                      </div>
                    </div>

                    {/*COMPLETED TASK*/}

                    <div
                      className=" border-2 drop-shadow-lg border-gray-300 p-4 h-full mt-4 rounded-2xl 
                      md:p-5
                     lg:mt-0 lg:p-2"
                    >
                      <CompletedTask dateIn={dateInNumber} />
                    </div>

                    <div className="h-60">
                      <TaskGrid />
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </main>
        </div>

        <span className="text-[10px] bg-red-200 lg:mb-0">
          &copy; 2026 <a>RacooDev</a>. All rights reserved.
        </span>
      </div>
    </>
  );
}

/*
TODO: show task on Todo LIST, MAKE DESCRIPTION AND DATE DYNAMIC, MAKE THE PROGRESS CIRCLES DYNAMIC, MAKE THE COMPLETED TASK DYNAMIC, MAKE THE USER NAME DYNAMIC, MAKE THE DATE DYNAMIC, MAKE THE SEARCH BAR WORK, MAKE THE ADD TASK MODAL WORK, MAKE THE SIDE MENU WORK, MAKE THE DASHBOARD RESPONSIVE
*/
