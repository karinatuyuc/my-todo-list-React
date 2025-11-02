//Document to write the main functionalities first and then
// integrate them into the App.jsx component and render it
//All logic related to the todo app will be written here
import { useState } from "react"; 

function TodoApp() {

    const [task, setTask] = useState(""); // State to hold the current input value
    const [tasks, setTasks] = useState([]); // State to hold the list of tasks
    const [inputValue, setInputValue] = useState(""); 
    const handleInputChange = (e) => {
        setTask(e.target.value); //Esto mostrara el valor del input
    }

    const handleAddTask = () => {
        if(task.trim() === "") {///trim to delte the spaces 
            alert("Plese enter a task!");
        } else {
            setTasks([...tasks, task])
            setTask("")
        }
    }


    return (
        <>
           <div>
            <label>Enter a new taks:</label>
            <input 
              type="text"
              value={task}
              onChange={handleInputChange}
              />
            <button onClick={handleAddTask}>Add task: </button>
           </div>

           <div>
            <h2>Task List:</h2>
             {tasks.length === 0 ? <p>No task added yet</p> : tasks.map((task) => <li key={task}>{task}</li> ) }
           </div>
        </>
    )

}

export default TodoApp;
