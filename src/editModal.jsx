import { useState } from "react";

export function EditModal({taskToEdit}) { // Receive tasks and taskId as props

    const {title, date, description, priority} = taskToEdit; // Destructure title, description, and priority from the taskToEdit object

    const [editedTask, setEditedTask] = useState(taskToEdit); // State to hold the edited task

    // Local state to hold the edited task details
    const [ editTitle, setEditTitle ] = useState(title);
    const [ editDate, setEditDate ] = useState(date);
    const [ editPriority, setEditPriority ] = useState(priority);
    const [ editDescription, setEditDescription ] = useState(description);

    const updatedTask = {
        title: editTitle,
        date: editDate,
        priority: editPriority,
        description: editDescription
    }

    const priorityEditOptions = ['Low', 'Medium', 'Extreme']; // Options for task priority

    return (
        <>
         <nav>
            <span>Edit Task</span>
            <button>
                Go Back
            </button>
         </nav>
         <form>
          <label htmlFor="titleEdit">Title</label>
          <input
            id="titleEdit"
            name="editTaskTitle"
            type="text"
            value={editTitle} // State value for the title input
            onChange={(e) => setEditTitle(e.target.value)} // Update state on input change
          />

          <label htmlFor="dateEdit">Date</label>
          <input
            id="dateEdit"
            name="editTaskDate"
            type='date'
            value={editDate}
            onChange={(e) => setEditDate(e.target.value)}
           />

           <fieldset>
            <legend>Priority</legend>
             {priorityEditOptions.map(priorityEdit => {
                return (
                    <div key={priorityEdit}>
                        <input
                            id={`priority-${priorityEdit}`}
                            name="priorityEdit"
                            type="radio"
                            value={priorityEdit}
                            checked={editPriority === priorityEdit}
                            onChange={(e) => setEditPriority(e.target.value)}
                        />
                        <label htmlFor={`priority-${priorityEdit}`}>{priorityEdit}</label>
                    </div>
                )
             })}
           </fieldset>

           <label htmlFor="descriptionEdit">Task Description</label>
           <textarea
            id="descriptionEdit"
            name="editTaskDescription"
            value={editDescription}
            onChange={(e) => setEditDescription(e.target.value)}
           >

           </textarea>

           <input
           type="submit"
            value="Done" //Boton para enviar el formulario
           />
         </form>
        </>

    )
}