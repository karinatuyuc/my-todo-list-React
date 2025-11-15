import { useState } from "react";
import { AddTaskModal } from "./addTaskModal";
import TaskRenderer from "./TaskRenderer";


function TodoApp() {

  const [ tasks, setTasks ] = useState([]); // Global state. State to hold the list of tasks
 
    return (
        <>
           < AddTaskModal 
              setTasks={setTasks}
           />

           < TaskRenderer 
             tasks={tasks}
           />
        </>

    )
}

export default TodoApp;



