
import { AddTaskModal } from "./addTaskModal";
import TaskRenderer from "./TaskRenderer";
function TodoApp() {


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



