import { useState} from "react"
import { GenerateUniqueID} from "./UniqueId";


export function AddTaskModal({setTasks, onClose}) { // Receive setTasks and onClose as props

  const [ title, setTitle ] = useState(""); // State to hold the task title
  const [ date, setDate ] = useState(""); // State to hold the task date
  const [ priority, setPriority ] = useState(""); // State to hold the task priority
  const [ description, setDescription ] = useState(""); // State to hold the task description


  const newTask = { // Object to represent the new task, the states of the form fields
    title: title,
    date: date,
    priority: priority,
    description: description,
    id : GenerateUniqueID().id,
  }


  const priorityOptions = ["Low", "Medium", "Extreme"]; // Options for task priority

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
  const dataValidate = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Perform validation checks here

    if(!title.trim() || !date.trim() || !priority.trim() || !description.trim()) { // Check if any field is empty
      alert("Please fill in all fields, before submitting the form.");
    } else {
      const newTask = {id: GenerateUniqueID().id, title, date, priority, description}; // Create a new task object
      setTasks(prevTasks => [...prevTasks, newTask]); // Add the new task to the tasks array
      // Reset form fields after submission
      setTitle("");
      setDate("");
      setPriority("");
      setDescription("");
    }
    onClose(); // Close the modal after submission
  }


    return (
        <>
         <nav>
            <span>Add New Task</span>
            <button
              onClick={onClose} // Call onClose prop to close the modal
            > 
             Go Back
            </button>
         </nav>

        <form onSubmit={dataValidate}> 
          <div>
            <label htmlFor="title">Title</label>
            <input 
            id="title" 
            type="text"
            name="taskTitle"
            value={title} // Bind the input value to the title state
            onChange={handleTaskChange}
            required
             />

            <label>Date</label>
            <input 
             type="date"
             id="start"
             name="taskDate"
             value={date}
             onChange={handleDateChange}
            />

            <fieldset>
              <legend>Priority</legend>
              {priorityOptions.map((priorityOption) => {
               
                return (
                   <div key={priorityOption}>
                  <input
                    type="radio" // Radio button for priority selection
                    id={`priority-${priorityOption}`} // Unique id for each p riority option
                    name="priority" // Name attribute to group radio buttons
                    value={priorityOption}  // Value of the radio button
                    checked={priority === priorityOption} // Check if the current priority matches the option
                    onChange={handlePriorityChange} // Handle change event
                    required
                  />
                  <label htmlFor={`priority-${priorityOption}`}>{priorityOption}</label>
                  </div>
                )
              })}
              
            </fieldset>

            <label>Task Description</label>
            <textarea 
             id="description"
             name="taskDescription"
             value={description} // Bind the textarea value to the description state
             placeholder="Start writing here...." // Placeholder text
             onChange={handleDescriptionChange} // Handle change event
             required
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