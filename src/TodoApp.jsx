//Document to write the main functionalities first and then
// integrate them into the App.jsx component and render it
//All logic related to the todo app will be written here
import { useState } from "react"; 
import { generateUniqueID } from "./UniqueID.jsx";

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


    return (
        <>
           <div>
            <label>Enter a new taks:</label>
            <input 
              type="text"
              value={inputValue}
              onChange={handleInputChange}
              />
            <button onClick={handleAddTask}>Add task: </button>
           </div>

           <div>
            <h2>Task List:</h2>
             {tasks.length === 0 ? <p>No task added yet</p> : tasks.map((task) => (
                <li key={task.id}>
                    <strong>ID: {task.id}</strong><br></br>
                    <strong>{task.text}</strong>
                </li> 
            )) }
           </div>
        </>
    )

}

export default TodoApp;
