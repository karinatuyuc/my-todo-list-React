import React from "react";

export function AddTaskModal() {

  const [ title, setTitle ] = useState(""); // State to hold the task title
  const [ date, setDate ] = useState(""); // State to hold the task date
  const [ priority, setPriority ] = useState(""); // State to hold the task priority
  const [ description, setDescription ] = useState(""); // State to hold the task description


  const newTask = { // Object to represent the new task, the states of the form fields
    title: title,
    date: date,
    priority: priority,
    description: description 
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
  const dataValidate = () => {
    // Perform validation checks here

    if(!title.trim() || !date || !priority.trim() || !description.trim()) { // Check if any field is empty
      alert("Please fill in all fields, before submitting the form.");
    } else {
      setTasks([...tasks, newTask]); // Add the new task to the tasks array
    }
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
                   <React.Fragment key={priorityOption}>
                  <input
                    type="radio" // Radio button for priority selection
                    id={`priority-${priorityOption}`} // Unique id for each priority option
                    name="priority" // Name attribute to group radio buttons
                    value={priorityOption}  // Value of the radio button
                    checked={priority === priorityOption} // Check if the current priority matches the option
                    onChange={handlePriorityChange} // Handle change event
                    required
                  />
                  <label htmlFor={`priority-${priorityOption}`}>{priorityOption}</label>
                  </React.Fragment>
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