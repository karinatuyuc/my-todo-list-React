import { useState } from "react";
import { AddTaskModal } from "./addTaskModal";
import TaskRenderer from "./TaskRenderer";
import { EditModal } from "./editModal";


function TodoApp() {

  const [ tasks, setTasks ] = useState([]); // Global state. State to hold the list of tasks
  const [ editingTaskId, setEditingTaskId] = useState(null) // State to hold the ID of the task being edited

  // States to control the Modal visibility
  const [ showAddTaskModal, setAddTaskShowModal] = useState(false); // State to control the visibility of the modal
  const [ showEditTaskModal, setShowEditTaskModal] = useState(false) // State to control the Modal edit.

 
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

  function onClose() { // Function to close the addTaskModal
    setAddTaskShowModal(false); // Set showModal to false to hide the addTaskModal
  }


  // Functions to handle button click to show the edit task Modal 2/12/2025
  function handleEditButton () {
     setShowEditTaskModal(true)
  }

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
    // Logic to delete a task can be added here

    const taskFilterDeleted = tasks.filter(task => task.id !== id); // Filter out the task to be deleted
    setTasks(taskFilterDeleted); // Update the tasks state with the filtered tasks array
  }


  
    return (
        <>
          <div>
            {showAddTaskModal && // Conditional rendering of the AddTaskModal component
              < AddTaskModal  // Render the AddTaskModal component
                setTasks={setTasks} // Pass the setTasks function as a prop
                onClose={onClose} // Pass the onClose function as a prop
              />
            }
          </div>
         
           <button 
            onClick={handleButtonClick} // Show the modal on button click
            style={buttonStyles} // Apply button styles
           >
             Add task
           </button>

           < TaskRenderer 
             tasks={tasks} // Pass tasks state to TaskRenderer as a prop
             setEditingTaskId={setEditingTaskId} // Pass setEditingTaskId to TaskRenderer as a prop
             onSecond={handleEditButton} // Pass handleEditButton to TaskRenderer as a prop
             deleteTask={handleDeleteTask} // Pass handleDeleteTask to TaskRenderer as a prop
           />

           {editingTaskId && 
           < EditModal 
            taskToEdit={taskToEdit} 
            onUpdateTask={onUpdateTask} // Pass onUpdateTask to EditModal as a prop
            closeTheModal={onCloseModalEdit} // Pass onCloseModalEdit to EditModal as a prop
            /> } 
           {/* Render EditModal if a task is being edited, passing the taskToEdit as a prop */}
        </>

    )
}

export default TodoApp;



