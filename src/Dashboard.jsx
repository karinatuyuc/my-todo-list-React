import { useState } from "react";
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
import { AddTaskModal } from "./addTaskModal.jsx";
import { EditModal } from "./editModal.jsx";
import TaskRenderer from "./TaskRenderer.jsx";
import { EditDeleteModal } from "./optionModals/EditDeleteModal.jsx";
import { DeleteTaskModal } from "./optionModals/DeleteModal.jsx";
import { MyTask } from "./componentes/MyTask.jsx";
import { DashboardHome } from "./componentes/DashboardHome.jsx";
import { TaskCategories } from "./componentes/TaskCategories/TaskCategories.jsx";
import { Settings } from "./componentes/Settings.jsx";
import { About } from "./componentes/About.jsx";
import { Help } from "./componentes/Help.jsx";

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
  setSelectedTask,
  editTask,

  idOptions,
  openOptionsTaskId,
  setOpenOptionsTaskId,

  deleteTaskModal,
  setDeleteTaskModal,
  deleteTask,

  activeView,
  setActiveView,
}) {
  const [userName, setUserName] = useState("");

  const date = new Date(); //Creating the local date

  const dayName = date.toLocaleDateString("en-US", { weekday: "long" }); // To show the day of the week
  const dateInNumber = date.toLocaleDateString("en-US"); // To show the date in number
  let waveHand = "\u{1F44B}";

  return (
    <>
      {modalAddTask && (
        <AddTaskModal
          addTask={addTask}
          onClose={onClose} // Pass the onClose function as a prop to close the modal
          onSubmit={onSubmit} // Passing onAddTask function to update the task list in the Dashboard component when a new task is added
        />
      )}

      {editTaskModal && (
        <EditModal
          onCloseEditModal={onCloseEditModal}
          selectedTask={selectedTask}
          editTask={editTask}
        />
      )}

      {deleteTaskModal && (
        <DeleteTaskModal
          setDeleteTaskModal={setDeleteTaskModal}
          selectedTask={selectedTask}
          deleteTask={deleteTask}
          idOptions={idOptions}
        />
      )}

      <div className="w-full text-white">
        {/*Header*/}
        <header
          className="flex justify-between items-center p-1.5 bg-red-100 sticky top-0 z-20
            lg:flex lg:justify-around lg:p-2 lg:pl-12 lg:pr-12 lg:sticky lg:top-0 lg:z-20 lg:gap-44"
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

        <div className="flex min-h-screen flex-col lg:flex-row lg:bg-amber-300">
          {/**SIDE MENU */}
          <aside className="lg:bg-red-400 lg:w-80 lg:max-h-screen lg:sticky">
            <SideMenu
              userName={userName}
              setUserName={setUserName}
              myTask={MyTask}
              activeView={activeView}
              setActiveView={setActiveView}
            />
          </aside>
          {/**End SIDE MENU */}

          <div className="mx-3.5">
            <div className="flex gap-2 lg:mt-6 lg:ml-6">
              <div className="flex text-black text-2xl font-medium mb-4 md:text-2xl lg:ml-0 lg:text-3xl lg:mb-0">
                <h1 className="sm:truncate sm:overflow-hidden sm:text-ellipsis md:text-2xl">
                  Welcome,{" "}
                  <span className=" text-2xl md:text-4xl lg:text-4xl">
                    {userName}
                  </span>
                </h1>
                {waveHand}
              </div>
            </div>
            {/** Main section */}
          </div>

          <main className="flex-1 p-2 bg-white md:px-6 border-2 border-gray-300 m-2">
            {activeView === "dashboard" ? (
              <div className="p-2">
                <DashboardHome
                  task={task}
                  setModalAddTask={setModalAddTask}
                  setEditTaskModal={setEditTaskModal}
                  editTask={editTask}
                  idOptions={idOptions}
                  onCloseEditModal={onCloseEditModal}
                  setDeleteTaskModal={setDeleteTaskModal}
                  setSelectedTask={setSelectedTask}
                  openOptionsTaskId={openOptionsTaskId}
                  setOpenOptionsTaskId={setOpenOptionsTaskId}
                />
              </div>
            ) : activeView === "MyTask" ? (
              <MyTask
                task={task}
                setSelectedTask={setSelectedTask}
                selectedTask={selectedTask}
                setEditTaskModal={setEditTaskModal}
                setDeleteTaskModal={setDeleteTaskModal}
              />
            ) : activeView === "TaskCategories" ? (
              <TaskCategories />
            ) : activeView === "Settings" ? (
              <Settings />
            ) : activeView === "About" ? (
              <About />
            ) : (
              <Help />
            )}
          </main>
        </div>
        <span className="text-[10px] bg-red-900 p-1">
          &copy; 2026 <a>RacooDev</a>. All rights reserved.
        </span>
      </div>
    </>
  );
}

/*
TODO: show task on Todo LIST, MAKE DESCRIPTION AND DATE DYNAMIC, MAKE THE PROGRESS CIRCLES DYNAMIC, MAKE THE COMPLETED TASK DYNAMIC, MAKE THE USER NAME DYNAMIC, MAKE THE DATE DYNAMIC, MAKE THE SEARCH BAR WORK, MAKE THE ADD TASK MODAL WORK, MAKE THE SIDE MENU WORK, MAKE THE DASHBOARD RESPONSIVE
*/
