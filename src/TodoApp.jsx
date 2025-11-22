import { useState } from "react";
import { AddTaskModal } from "./addTaskModal";
import TaskRenderer from "./TaskRenderer";
import { EditModal } from "./editModal";


function TodoApp() {

  const [ tasks, setTasks ] = useState([]); // Global state. State to hold the list of tasks
  const [ editingTaskId, setEditingTaskId] = useState(null) // State to hold the ID of the task being edited
  const [ showModal, setShowModal] = useState(false); // State to control the visibility of the modal


  const buttonStyles = {
    backgroundColor: "#6d1783ff",
    color: "white",
    padding: "10px 20px",
    border: "2px solid #6d1783ff",
    borderRadius: "5px",
  }

  function handleButtonClick() {
    setShowModal(true); // Show the modal when the button is clicked
  }

  function onClose() { // Function to close the modal
    setShowModal(false); // Set showModal to false to hide the modal
  }

  const taskToEdit = tasks.find(task => task.id === editingTaskId); // Find the task being edited based on editingTaskId

  
    return (
        <>
          <div>
            {showModal && // Conditional rendering of the AddTaskModal component
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
             tasks={tasks}
             setEditingTaskId={setEditingTaskId} // Pass setEditingTaskId to TaskRenderer as a prop
           />

           {editingTaskId && < EditModal taskToEdit={taskToEdit}/> } 
           {/* Render EditModal if a task is being edited, passing the taskToEdit as a prop */}
        </>

    )
}

export default TodoApp;



