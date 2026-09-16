import { useState, useEffect } from "react";
import { AddTaskModal } from "./addTaskModal";
import { EditModal } from "./editModal";
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

  function onCloseModalAdd() {
    setAddTaskShowModal(false);
  }

  const closeEditModal = () => {
    setEditTaskModal(false);
  };

  const idOpenOptions = (idOpen) => {
    setOpenOptionsTaskId(idOpen);
  };

  function onDelete(item, selected) {
    if (item) {
      setOpenDeleteModal(true);
      setSelectedItem(selected);
    }
  }

  // console.log("Este es e id que guarda idOpenOptions", openOptionsTaskId)

  /*
  function filterTaskDelete(taskId) {
    let filterTask = taskList.filter(
      (taskFiltered) => taskFiltered.id !== taskId.id,
    );
    setTaskList(filterTask);
  }*/

  return (
    <>
      {openDeleteModal && <DeleteTaskModal selectedItem={selectedItem} onClose={() => setOpenDeleteModal(false)}/>}

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
      />
    </>
  );
}

export default TodoApp;
