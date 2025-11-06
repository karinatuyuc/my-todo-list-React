import { useState } from "react";
import { Fragment } from "react";

export function AddTaskModal() {

  const [ title, setTitle ] = useState(""); // State to hold the task title
  const [ date, setDate ] = useState(""); // State to hold the task date
  const [ priority, setPriority ] = useState(""); // State to hold the task priority
  const [ description, setDescription ] = useState(""); // State to hold the task description

  const priorityOptions = ["Low", "Medium", "Extreme"] 

  const handleTaskChange = (e) => {
    setTitle(e.target.value); // Update the title state with the input value
  }

  // Handle date change event
  const handleDateChange = (e) => {
    setDate(e.target.value); // Update the date state with the input value
  }

  const handlePriorityChange = (e) => {
    setPriority(e.target.value); // Update the priority state with the selected value
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value); // Update the description state with the input value
  }

  // Handle form submission
  const handleInputSubmit = () => {
    // Logic to validate inputs and add the new task
  }

    return (
        <>
         <nav>
            <span>Add New Task</span>
            <button>Go Back</button>
         </nav>

        <form>
          <div>
            <label htmlFor="title">Title</label>
            <input 
            id="title" 
            type="text"
            name="taskTitle"
            value={title} // Bind the input value to the title state
            onChange={handleTaskChange}
             />

            <label>Date</label>
            <input 
             type="date"
             id="start"
             name="taskDate"
             value={date}
            />

            <fieldset>
              <legend>Priority</legend>
              {priorityOptions.map((priorityOption) => {
               
                return (
                   <React.Fragment key={priorityOption}>
                  <input
                    type="radio"
                    id={`priority-${priorityOption}`}
                    name="priority"
                    value={priorityOption}
                    checked={priority === priorityOption} 
                  />
                  <label htmlFor={`priority-${priorityOption}`}>{priorityOption}</label>
                  </React.Fragment>
                )
              })}
              
            </fieldset>

            <label>Task Description</label>
            <textarea 
             id="description"
             value={description}
             placeholder="Start writing here...."
             >
             </textarea>

            <button 
             type="submit"
            
            >
              Done
            </button>
          </div>
        </form>
        </>
    )
}