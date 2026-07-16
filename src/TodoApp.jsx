import { useState } from "react";
import { AddTaskModal } from "./addTaskModal";
import { EditModal } from "./editModal";
import  Dashboard  from "./Dashboard";
import { TaskGrid } from "./TaskGrid";
import { DeleteTaskModal } from "./optionModals/DeleteModal";

function TodoApp() {

  // states 
  const [ taskList, setTaskList] = useState([]); // State to hold the list of tasks
  const [ selectedTask, setSelectedTask ] = useState(null);

  console.log(taskList)

  function addTask(task) {
    setTaskList([...taskList, task])
  };

  function editTask(task) {
    setSelectedTask(task);

    const editTasked = taskList.map((tasks) => {
      if (tasks.id === task.id) {
        return task
      } else {
        return tasks
      }
    })

    setTaskList(editTasked);
  }


  // States to control the Modal visibility
  const [ showAddTaskModal, setAddTaskShowModal] = useState(false); // State to control the visibility of the modal
  const [ editTaskModal, setEditTaskModal ] = useState(false); 
  const [ deleteTaskModal, setDeleteTaskModal ]= useState(false);
  const [ openOptionsTaskId, setOpenOptionsTaskId ] = useState(null);

  console.log(deleteTaskModal);

    function onCloseModalAdd() { 
     setAddTaskShowModal(false); 
  }

  const closeEditModal = () => {
   setEditTaskModal(false);
  }

  const idOpenOptions = (idOpen) => {
    setOpenOptionsTaskId(idOpen);
  }

 // console.log("Este es el id que guarda idOpenOptions", openOptionsTaskId)


  function deleteTask(task) {
    const filteredTask = taskList.filter((tasks) => tasks.id !== task.id);
    setTaskList(filteredTask);
  }

    return (
        <>
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

            deleteTaskModal={deleteTaskModal}
            setDeleteTaskModal={setDeleteTaskModal}
            deleteTask={deleteTask}
        />

        </>
    )
}

export default TodoApp;



