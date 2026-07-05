import { useState } from "react";
import { AddTaskModal } from "./addTaskModal";
import { EditModal } from "./editModal";
import  Dashboard  from "./Dashboard";
import { TaskGrid } from "./TaskGrid";

function TodoApp() {

  // states 
  const [ taskList, setTaskList] = useState([]); // State to hold the list of tasks
  const [ selectedTask, setSelectedTask ] = useState(null);

  function addTask(task) {
    setTaskList([...taskList, task])
  };

  function editTask(task) {
    setSelectedTask(task);
  }


  // States to control the Modal visibility
  const [ showAddTaskModal, setAddTaskShowModal] = useState(false); // State to control the visibility of the modal
  const [ editTaskModal, setEditTaskModal ] = useState(false); 

    function onCloseModalAdd() { 
     setAddTaskShowModal(false); 
  }

  const closeEditModal = () => {
   setEditTaskModal(false);
   setSelectedTask(null)
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
            editTask={editTask}
        />

        </>
    )
}

export default TodoApp;



