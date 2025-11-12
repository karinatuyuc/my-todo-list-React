import { useState } from "react";
import { AddTaskModal } from "./addTaskModal";
import TaskRenderer from "./TaskRenderer";


function TodoApp() {

  const [ tasks, setTasks ] = useState([]); // State to hold the list of tasks
 

    return (
        <>
           < AddTaskModal 
           />

           < TaskRenderer 
             tasks={tasks}
           />
        </>

    )
}

export default TodoApp;



