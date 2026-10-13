import { useState, useEffect } from "react";
import { AddTaskModal } from "./addTaskModal";
import Dashboard from "./Dashboard";
import { DeleteTaskModal } from "./optionModals/DeleteModal";
import SideMenu from "./sideMenu";

function TodoApp() {
  const [activeView, setActiveView] = useState("dashboard");

  // states
  const [taskList, setTaskList] = useState(() => {
    const datosGuardados = localStorage.getItem("todo_app_v1");
    return datosGuardados ? JSON.parse(datosGuardados) : [];
  }); // State to hold the list of tasks

  const [selectedTask, setSelectedTask] = useState(null);

  useEffect(() => {
    localStorage.setItem("todo_app_v1", JSON.stringify(taskList));
  }, [taskList]);

  function addTask(task) {
    setTaskList([...taskList, task]);
  }

  function editTask(task) {
    setSelectedTask(task);

    const editTasked = taskList.map((tasks) => {
      if (tasks.id === task.id) {
        return task;
      } else {
        return tasks;
      }
    });

    setTaskList(editTasked);
  }

  // States to control the Modal visibility
  const [showAddTaskModal, setAddTaskShowModal] = useState(false); // State to control the visibility of the modal
  const [editTaskModal, setEditTaskModal] = useState(false);
  const [openOptionsTaskId, setOpenOptionsTaskId] = useState(null);

  // Para el modal de Delete
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const [deleteAction, setDeleteAction] = useState(null);

  function onCloseModalAdd() {
    setAddTaskShowModal(false);
  }

  const closeEditModal = () => {
    setEditTaskModal(false);
  };

  const idOpenOptions = (idOpen) => {
    setOpenOptionsTaskId(idOpen);
  };

  function onDelete(item, selected, action) {
    console.log(item);
    if (item) {
      setOpenDeleteModal(true);
      setSelectedItem(selected);
      const actionToConfirm =
        action ??
        (selected === "task"
          ? () =>
              setTaskList((currentTasks) =>
                currentTasks.filter((task) => task.id !== item.id)
              )
          : null);
      setDeleteAction(() => actionToConfirm);
    }
  }

  function confirmDelete() {
    deleteAction?.();
    setOpenDeleteModal(false);
    setDeleteAction(null);
  }

  function closeDeleteModal() {
    setOpenDeleteModal(false);
    setDeleteAction(null);
  }

  return (
    <>
      {openDeleteModal && (
        <DeleteTaskModal
          selectedItem={selectedItem}
          onClose={closeDeleteModal}
          onConfirmDelete={confirmDelete}
        />
      )}

      <Dashboard
        task={taskList}
        addTask={addTask}
        modalAddTask={showAddTaskModal}
        setModalAddTask={setAddTaskShowModal}
        onClose={onCloseModalAdd}
        editTaskModal={editTaskModal}
        setEditTaskModal={setEditTaskModal}
        onCloseEditModal={closeEditModal}
        selectedTask={selectedTask}
        setSelectedTask={setSelectedTask}
        editTask={editTask}
        openOptionsTaskId={openOptionsTaskId}
        setOpenOptionsTaskId={setOpenOptionsTaskId}
        idOptions={idOpenOptions}
        activeView={activeView}
        setActiveView={setActiveView}
        onDelete={onDelete}
        openDeleteModal={openDeleteModal}
        setOpenDeleteModal={setOpenDeleteModal}
      />
    </>
  );
}

export default TodoApp;
