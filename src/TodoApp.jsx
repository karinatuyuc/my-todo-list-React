//Document to write the main functionalities first and then
// integrate them into the App.jsx component and render it
//All logic related to the todo app will be written here
import { useState } from "react"; 
import { generateUniqueID } from "./UniqueId.js"; // Importing the unique ID generator function
import { AddTaskModal } from "./addTaskModal.jsx";

function TodoApp() {

    const [inputValue, setInputValue] = useState(""); // State to hold the input field value
    const [tasks, setTasks] = useState([]); // State to hold the list of tasks



    const handleInputChange = (e) => {
        setInputValue(e.target.value); //Esto mostrara el valor del input
    }

    const handleAddTask = () => {
        if(inputValue.trim() === "") { 
          alert("Plese enter a task!"); // Alert if the input is empty
          return;
        } 
        
            const newTask = generateUniqueID(inputValue);
            setTasks([...tasks, newTask]); // Add the new task to the tasks array
            setInputValue(""); // Clear the input field
    }

    const handleEditTask = () => {
        console.log("Edit task clicked");
    }


    return (
        <>
        <AddTaskModal />

           <div>
            <label>Title: </label>
            <input 
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              />
            <button onClick={handleAddTask}>Add task: </button>
           </div>

           <div>
            <h2>Task List:</h2>
             {tasks.length === 0 ? 
             <p>No task added yet</p> : 

             tasks.map((task) => (
                
                <li key={task.id}>
                    <strong>{task.text}</strong>
                    <button onClick={handleEditTask}>Edit</button>
                </li> 
            ))
             }
           </div>
        </>
    )

}

export default TodoApp;
