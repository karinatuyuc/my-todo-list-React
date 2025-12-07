import { useState } from 'react';
import { TrashIcon } from '@heroicons/react/24/outline';

function TaskRenderer({tasks, setEditingTaskId, onSecond, deleteTask}) { // Receive tasks and setEditingTaskId as props

    const [ statusTask, setStatusTask ] = useState("Not started"); // State to hold the status of the task
    // The initial value is set to "Not started"

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
                    <select id="status" value={statusTask}>
                        {statusValues.map((status => {
                        return (
                            <option
                            key={status}
                            value={status}
                            >{status}</option>
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