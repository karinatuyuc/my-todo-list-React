import { useState } from "react";
import { AddTaskModal } from "./addTaskModal";
import TaskRenderer from "./TaskRenderer";


function TodoApp() {

  const [ tasks, setTasks ] = useState([]); // Global state. State to hold the list of tasks
  const [ showModal, setShowModal] = useState(false); // State to control the visibility of the modal

  const buttonStyles = {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px 20px",
  }

  function handleButtonClick() {
    setShowModal(true); // Show the modal when the button is clicked
  }

  
    return (
        <>
          <div>
            {showModal && // Conditional rendering of the AddTaskModal component
              < AddTaskModal  // Render the AddTaskModal component
                setTasks={setTasks} // Pass the setTasks function as a prop
              />
            }
          </div>
         
           <button 
            onClick={handleButtonClick} // Show the modal on button click
            style={buttonStyles} // Apply button styles
           >
            Modal Add task
           </button>

           < TaskRenderer 
             tasks={tasks}
           />
        </>

    )
}

export default TodoApp;



