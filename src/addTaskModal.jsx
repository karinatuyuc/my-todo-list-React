import { useState} from "react"
import { GenerateUniqueID} from "./UniqueId";


export function AddTaskModal({setTasks, onClose}) { // Receive setTasks and onClose as props

  const [ title, setTitle ] = useState(""); // State to hold the task title
  const [ date, setDate ] = useState(""); // State to hold the task date
  const [ priority, setPriority ] = useState(""); // State to hold the task priority
  const [ description, setDescription ] = useState(""); // State to hold the task description

/*
  const newTask = { // Object to represent the new task, the states of the form fields
    title: title,
    date: date,
    priority: priority,
    description: description,
    id : GenerateUniqueID().id,
  }
*/

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

        <div className="bg-black/50 fixed inset-0 z-50 h-screen flex items-center justify-center">
      <div className="bg-white p-4 m-4 rounded-xs shadow-lg w-full">

         <nav className="flex justify-between">
            <span>Add New Task</span>
            <button
              className="cursor-pointer"
              onClick={onClose} // Call onClose prop to close the modal
            > 
             Go Back
            </button>
         </nav>

        <form onSubmit={dataValidate}> 
          <div className="border-amber-500 border-2 mt-3 mb-3 p-2 flex flex-col gap-2">
            <label htmlFor="title">Title</label>
            <input 
            id="title" 
            type="text"
            name="taskTitle"
            value={title} // Bind the input value to the title state
            onChange={handleTaskChange}
            className="bg-gray-400 w-60"
            required
             />

            <label>Date</label>
            <input 
             type="date"
             id="start"
             name="taskDate"
             value={date}
             onChange={handleDateChange}
             className="bg-gray-400 w-60"
            />

            <fieldset className="bg-gray-400">
              <legend>Priority</legend>
              {priorityOptions.map((priorityOption) => {
               
                return (
                  <div key={priorityOption} className="bg-amber-500 flex">
                  <input
                    type="radio" // Radio button for priority selection
                    id={`priority-${priorityOption}`} // Unique id for each p riority option
                    name="priority" // Name attribute to group radio buttons
                    value={priorityOption}  // Value of the radio button
                    checked={priority === priorityOption} // Check if the current priority matches the option
                    onChange={handlePriorityChange} // Handle change event
                    className="cursor-pointer"
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
             className="bg-gray-400"
             required
             >
             </textarea>

          </div>

            <button 
             type="submit"
             className="cursor-pointer"
             onClick={onClose} // Call onClose prop to close the modal after submission
            >
              Done
            </button>
        </form>


      </div>

      </div>
        </>
    )
}