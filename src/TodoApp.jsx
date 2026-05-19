import { useState } from "react";
import { AddTaskModal } from "./addTaskModal";
import TaskRenderer from "./TaskRenderer";
import { EditModal } from "./editModal";
import  Dashboard  from "./Dashboard";
import { TaskGrid } from "./TaskGrid";


function TodoApp() {

  const [ tasks, setTasks ] = useState([]); // Global state. State to hold the list of tasks
  //const [ editingTaskId, setEditingTaskId] = useState(null) // State to hold the ID of the task being edited

  // States to control the Modal visibility
  const [ showAddTaskModal, setAddTaskShowModal] = useState(false); // State to control the visibility of the modal
  //const [ showEditTaskModal, setShowEditTaskModal] = useState(false) // State to control the Modal edit.


  // Function to close the Add Modal, button in the addModal
    function onCloseModalAdd() { 
     setAddTaskShowModal(false); 
  }
/*
 
  const buttonStyles = {
    backgroundColor: "#6d1783ff",
    color: "white",
    padding: "10px 20px",
    border: "2px solid #6d1783ff",
    borderRadius: "5px",
  }

    // Function to handle button click to show the add task modal
  function handleButtonClick() {
    setAddTaskShowModal(true); // Show the modal when the button is clicked
  }



  // Functions to handle button click to show the edit task Modal 2/12/2025
  function handleEditButton () {
     setShowEditTaskModal(true)
  }
*/
  /*
  // Function to close the Edit Modal, button in the editModal
  function onCloseModalEdit() {
    setShowEditTaskModal(false); // Close the Edit Modal
    setEditingTaskId(null); // Reset the editingTaskId state to null
  }


  // Function to recibe the updated task object from EditModal
  const onUpdateTask = (obj) => {
    const taskUpdated = tasks.map(task => { // Map through the tasks array
      if (task.id === obj.id) {
        return obj; // Return the updated task object if the IDs match
      } else {
        return task; // Return the original task if the IDs do not match
      }})

      setTasks(taskUpdated); // Update the tasks state with the updated tasks array
  }

  const taskToEdit = tasks.find(task => task.id === editingTaskId); // Find the task being edited based on editingTaskId

  // Function to handle deleting a task (not implemented yet)
  const handleDeleteTask = (id) => {
    console.log(id); // id-1765000679515-175
    // Logic to delete a task can be added here
    const taskFilterDeleted = tasks.filter(task => task.id !== id); // Filter out the task to be deleted
    setTasks(taskFilterDeleted); // Update the tasks state with the filtered tasks array
  }

  const handleStatus = (id, status) => { // Function to handle status change
    const taskMapStatus = tasks.map(task => { // Map through the tasks array

      if(task.id === id) {
        return {...task, status: status}; // Update the status of the matching task
      }
      return task; // Return the original task if IDs do not match 
    });

    setTasks(taskMapStatus); // Update the tasks state with the modified tasks array
  }
*/
  
    return (
        <>
        <Dashboard 
            tasks={tasks}
            setTasks={setTasks}
            modalAddTask={showAddTaskModal}
            setModalAddTask={setAddTaskShowModal}
            onClose={onCloseModalAdd}
        />
        </>

    )
}

export default TodoApp;



