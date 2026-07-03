import { useState } from "react";
import { AddTaskModal } from "./addTaskModal";
import { EditModal } from "./editModal";
import  Dashboard  from "./Dashboard";
import { TaskGrid } from "./TaskGrid";

function TodoApp() {

  // states 
  const [ taskList, setTaskList] = useState([]); // State to hold the list of tasks

  function addTask(task) {
    setTaskList([...taskList, task])
  };


  console.log(taskList)

/*
  // Functions 
  //  Function to cahnge the card 
  const handleSubmit2 = (e, newTask) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if(taskList.length === 1 && taskList[0].title === defaultTask.title) {
      setTaskList([newTask])
    } else {
      setTaskList([...taskList, newTask])
    }

  }*/
  // States to control the Modal visibility
  const [ showAddTaskModal, setAddTaskShowModal] = useState(false); // State to control the visibility of the modal
  //const [ showEditTaskModal, setShowEditTaskModal] = useState(false); // State to control the visibility of the edit modal


  // Function to close the Add Modal, button in the addModal
    function onCloseModalAdd() { 
     setAddTaskShowModal(false); 
  }

  // LOGICA PARA EDITAR TAREAS PRUEBA #1
  function editTask(id, updatedTask) {
    const taskEdited = taskList.map(task => {

      if(task.id === id) {
        return { ...task, ...updatedTask }; // Update the task with the new data 
      } else {
        return task; // Return the task unchanged if the ID doesn't match
      }
    });

    setTaskList(taskEdited); // Update the state with the edited task list
  }


 
    return (
        <>
        <Dashboard
            addTask={addTask}
            modalAddTask={showAddTaskModal}
            setModalAddTask={setAddTaskShowModal}
            onClose={onCloseModalAdd}
            editTask={editTask}

        />

        </>
    )
}

export default TodoApp;



