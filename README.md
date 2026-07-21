
# 🧠 Descripción/ Description

Esta es una aplicación de lista de tareas construida con React. Su objetivo es ayudar a los
usuarios a organizar sus pendientes de forma sencilla, visual y accesible.
Incluye funcionalidades básicas como agregar, marcar y eliminar tareas, y fue desarrollada
como parte de mi práctica personal para aprender y aplicar conceptos fundamentales de React.
La documentación está escrita en español e inglés para reflejar mi enfoque bilingue en 
proyectos técnicos.

*************************

This a a task list app built with React. Its goal is to help users organize their to-do's in a simple,
visual and accessible way.
It includes basic features like adding, checking off, and deleting tasks, and was developed as 
part of my personal practice to learn and apply core React concepts.
Documentation is written in both Spanish and English to reflect my bilingual approach to 
technical projects.

*************************


*************************
Fecha 27/06/2026
Trabajando para mostrar la prioridad seleccionada por el usuario



lOGICA DE ANTES import { useState } from "react";

export function EditModal({ editTask }) { // Receive tasks and taskId as props

    const {title, date, description, priority} = editTask; // Destructure title, description, and priority from the taskToEdit object

    // This is a repeat code const [editedTask, setEditedTask] = useState(taskToEdit); // State to hold the edited task

    // Local state to hold the edited task details
    const [ editTitle, setEditTitle ] = useState(title);
    const [ editDate, setEditDate ] = useState(date);
    const [ editPriority, setEditPriority ] = useState(priority);
    const [ editDescription, setEditDescription ] = useState(description);

    const updatedTask = { //Objeto para representar la tarea actualizada
        title: editTitle,
        date: editDate,
        priority: editPriority,
        description: editDescription,
        id : editTask.id,
    }

    const priorityEditOptions = ['Low', 'Medium', 'Extreme']; // Options for task priority

    const validateEditData = (e) => { // Function to validate edited data
        e.preventDefault();
        // Validation logic for edited data can be added here

        if(!updatedTask.title.trim() || !updatedTask.date.trim() || !updatedTask.priority.trim() || !updatedTask.description.trim()) {
            alert("Please fill in all fields, before submitting the form.");
        } else {
            onUpdateTask(updatedTask); // Call onUpdateTask with the updated task details
        }
        closeTheModal(); // Close the modal after updating the task
    }

    return (
        <>
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-50">
                   <nav>
            <span>Edit Task</span>
            <button 
              onClick={closeTheModal} // Close the modal on button click
            >
                Go Back
            </button>
         </nav>

         
         <form onSubmit={validateEditData}>
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
            onChange={(e) => setEditDescription(e.target.value)}
           >

           </textarea>

           <input
           type="submit"
            value="Done" //Boton para enviar el formulario
           />
         </form>
        </div>  
        </>

    )
}

21/07
# Nuevos componentes creado
Se creo componentes independientes segun el menu de navegacion, al hacer click se cambia de pestana
Por ahora los componentes solo muestran una imagen temporal.
# Pasos a seguir
Crear el diseno para cada componente y mover los estados y props necesarios para anadir task, eliminar y editar