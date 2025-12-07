
import { TrashIcon } from '@heroicons/react/24/outline';

function TaskRenderer({tasks, setEditingTaskId, onSecond, deleteTask, statusChange}) { // Receive tasks and setEditingTaskId as props

    const statusValues = ['Not started', "In Progress", "Completed"];

    const buttonStylesEdit= {
        backgroundColor: "#67058dff",
        color: "white",
        padding: "8px 8px",
        border: "2px solid #67058dff",
        borderRadius: "5px",
        width: "60px",
        cursor: "pointer",
    }

    const trashStyle = {
        width: "35px",
        height: "35px",
        color: "white",
        cursor: "pointer",
        borderRadius: "5px"
    }

    return (
        <>
         <div>
            <h1>Tasks added: </h1>
            {tasks.length === 0 ? <p>No tasks added yet</p> :
             tasks.map(task => (
                <div key={task.id}> 
                    <h4>{task.title}</h4>
                    <span>Priority : {task.priority}</span> <br/>

                    <label htmlFor="status">status:</label>
                    <select 
                       id="status"  // Select dropdown for task status
                       value={task.status} // Bind the select value to the task's status
                       onChange={(e) => { 
                        statusChange(task.id, e.target.value);
                       }} // Update statusTask state on change
                       
                    >
                        {statusValues.map((status => { // Map through statusValues array to create options
                        return (
                            <option
                            key={status} // Unique key for each option
                            >{status}</option> // Display status value
                        )
                     }))}
                    </select><br/>

                    
                    <span>Created on: {task.date}</span>
                    <p>Task Description: {task.description}</p>
                    <button
                        style={trashStyle}
                        onClick={() => {deleteTask(task.id)}} // Call deleteTask function on button click
                    >
                        < TrashIcon // Trash icon for delete button

                        />
                    </button>
                    <button 
                    style={buttonStylesEdit}
                    onClick={() => {
                        setEditingTaskId(task.id); // Set the editing task ID
                        onSecond(); // Call the onSecond function to open the modal
                        
                    }}>Edit</button> {/* Set editing task ID on button click */}
                </div> 
             ))}
         </div>
        </>
    )
}

export default TaskRenderer;    