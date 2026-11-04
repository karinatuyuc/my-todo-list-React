import { useEffect, useState } from "react";
import {
  MagnifyingGlassIcon,
  ClockIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";

import SideMenu from "./sideMenu.jsx";
import { AddTaskModal } from "./addTaskModal.jsx";
import { EditModal } from "./EditModal.jsx";
import { MyTask } from "./componentes/MyTask.jsx";
import { DashboardHome } from "./componentes/DashboardHome.jsx";
import { TaskCategories } from "./componentes/TaskCategories/TaskCategories.jsx";

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
  activeView,
  setActiveView,
  onDelete,
  openDeleteModal,
  setOpenDeleteModal,
  status,
  setStatus,
}) {
  const [userName, setUserName] = useState("");
  const [priorities] = useState(["Extreme", "Medium", "Low"]);
  const defaultCategories = [
    { id: 1, name: "Personal" },
    { id: 2, name: "Work" },
  ];

  const [createCategories, setCreateCategories] = useState(() => {
    const savedCategories = localStorage.getItem("todo_categories_v1");

    if (!savedCategories) {
      return defaultCategories;
    }

    try {
      const parsedCategories = JSON.parse(savedCategories);
      return parsedCategories.length > 0 ? parsedCategories : defaultCategories;
    } catch (error) {
      console.error("Error parsing saved categories:", error);
      return defaultCategories;
    }
  });

  useEffect(() => {
    localStorage.setItem(
      "todo_categories_v1",
      JSON.stringify(createCategories),
    );
  }, [createCategories]);

  const [selectedCategory, setSelectedCategory] = useState(null);

  function addCategory(categoryId) {
    setCreateCategories((currentCategories) => [
      ...currentCategories,
      categoryId,
    ]);
  }

  function editCategory(categoryId) {
    setSelectedCategory(categoryId);

    const editedCategories = createCategories.map((category) => {
      if (category.id === categoryId.id) {
        return {
          ...category,
          name: categoryId.name,
        };
      } else {
        return category;
      }
    });
    setCreateCategories(editedCategories);
  }

  function deleteCategory(id) {
    setCreateCategories((currentCategories) =>
      currentCategories.filter((category) => category.id !== id),
    );
  }

  const date = new Date(); //Creating the local date
  const dayName = date.toLocaleDateString("en-US", { weekday: "long" }); // To show the day of the week
  const dateInNumber = date.toLocaleDateString("en-US"); // To show the date in number
  let waveHand = "\u{1F44B}";

  let view =
    activeView === "dashboard"
      ? "Dash"
      : activeView === "MyTask"
        ? "My"
        : activeView === "TaskCategories"
          ? "Task"
          : null;

  let view2 =
    activeView === "dashboard"
      ? "board"
      : activeView === "MyTask"
        ? "Task"
        : activeView === "TaskCategories"
          ? "Categories"
          : null;

  return (
    <>
      {modalAddTask && (
        <AddTaskModal
          addTask={addTask}
          createCategories={createCategories}
          onClose={onClose} // Pass the onClose function as a prop to close the modal
          onSubmit={onSubmit} // Passing onAddTask function to update the task list in the Dashboard component when a new task is added
          priorities={priorities} // Pass the priorities array as a prop to the AddTaskModal component
        />
      )}

      {editTaskModal && (
        <EditModal
          onCloseEditModal={onCloseEditModal}
          selectedTask={selectedTask}
          editTask={editTask}
          status={status}
          setStatus={setStatus}
          createCategories={createCategories}
        />
      )}

      <div className="flex min-h-screen w-full flex-col text-white lg:bg-green-700">
        {/*Header*/}
        <header
          className="flex justify-between items-center p-1.5 bg-red-100 sticky top-0 z-20 md:p-6 
            lg:flex lg:justify-between lg:p-2 lg:sticky lg:top-0 lg:z-20"
        >
          {/** Dashboard title*/}
          <div className="font-bold text-2xl md:text-4xl lg:text-3xl">
            <span className="text-red-300">{view}</span>
            <span className="text-black">{view2}</span>
          </div>

          {/** Date section */}
          <div className="flex items-center justify-center gap-6">
            <div className="flex flex-col gap-0.5 text-sm">
              <span className="font-bold text-black md:text-2xl lg:text-lg">
                {dayName}
              </span>
              <span className="font-bold text-blue-300 text-sm md:text-2xl md:flex md:justify-center lg:text-sm">
                {dateInNumber}
              </span>
            </div>
          </div>
        </header>

        <div className="flex flex-1 flex-col lg:flex-row lg:bg-amber-300">
          {/**SIDE MENU */}
          <aside className="lg:bg-red-400 lg:w-80 lg:sticky">
            <SideMenu
              userName={userName}
              setUserName={setUserName}
              myTask={MyTask}
              activeView={activeView}
              setActiveView={setActiveView}
            />
          </aside>
          {/**End SIDE MENU */}

          <div className="lg:bg-black lg:w-full">
            {activeView === "dashboard" && (
              <div className="mx-3.5 lg:p-0.5 lg:bg-purple-500">
                <div className="flex gap-2 lg:mt-3 lg:ml-6">
                  <div className="flex text-black text-2xl font-medium mb-4 md:text-4xl lg:ml-0 lg:mb-0">
                    <h1 className="sm:truncate sm:overflow-hidden sm:text-ellipsis md:text-4xl lg:text-2xl lg:font-medium">
                      Welcome,{" "}
                      <span className="text-lg md:text-4xl md:h-20 lg:text-2xl">
                        {userName}
                      </span>
                    </h1>
                    <span className="text-2xl md:text-4xl lg:text-2xl">
                      {waveHand}
                    </span>
                  </div>
                </div>
                {/** Main section */}
              </div>
            )}

            <main
              className="flex-1 p-2 md:px-6 border-4 border-gray-200 m-2 rounded-2xl shadow-2xl drop-shadow-2xl 
          lg:bg-red-800 lg:max-w-full lg:rounded-md lg:border-2"
            >
              {activeView === "dashboard" ? (
                <div className="p-2">
                  <DashboardHome
                    task={task}
                    setModalAddTask={setModalAddTask}
                    setEditTaskModal={setEditTaskModal}
                    editTask={editTask}
                    idOptions={idOptions}
                    onCloseEditModal={onCloseEditModal}
                    setSelectedTask={setSelectedTask}
                    openOptionsTaskId={openOptionsTaskId}
                    setOpenOptionsTaskId={setOpenOptionsTaskId}
                    onDelete={onDelete}
                  />
                </div>
              ) : activeView === "MyTask" ? (
                <MyTask
                  task={task}
                  setSelectedTask={setSelectedTask}
                  selectedTask={selectedTask}
                  setEditTaskModal={setEditTaskModal}
                  onDelete={onDelete}
                />
              ) : activeView === "TaskCategories" ? (
                <TaskCategories
                  addCategory={addCategory}
                  createCategories={createCategories}
                  priorities={priorities}
                  setSelectedTask={setSelectedTask}
                  editTask={editTask}
                  setEditTaskModal={setEditTaskModal}
                  onDelete={onDelete}
                  editCategory={editCategory}
                  selectedCategory={selectedCategory}
                  setSelectedCategory={setSelectedCategory}
                  deleteCategory={deleteCategory}
                  setOpenDeleteModal={setOpenDeleteModal}
                  openDeleteModal={openDeleteModal}
                />
              ) : null}
            </main>
          </div>
        </div>
        <span className="mt-auto text-[10px] bg-red-900 p-1">
          &copy; 2026 <a>RacooDev</a>. All rights reserved.
        </span>
      </div>
    </>
  );
}

/*
TODO: show task on Todo LIST, MAKE DESCRIPTION AND DATE DYNAMIC, MAKE THE PROGRESS CIRCLES DYNAMIC, MAKE THE COMPLETED TASK DYNAMIC, MAKE THE USER NAME DYNAMIC, MAKE THE DATE DYNAMIC, MAKE THE SEARCH BAR WORK, MAKE THE ADD TASK MODAL WORK, MAKE THE SIDE MENU WORK, MAKE THE DASHBOARD RESPONSIVE
*/
/// DESHABILITAR EL WELCOME Y  EL NOMBRE SI CAMBIAMOS DE PESTANA TAMBIEN DEBE CAMBIAR DONDE DICE DASHBARD
