import { useState} from "react"
import { GenerateUniqueID} from "./UniqueId";
//import { data } from "autoprefixer";
import FormErrors from "./FormErrors/FormErrors";


export function AddTaskModal({setTasks, onClose, setTaskUpdated}) { // Receive setTasks and onClose as props

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
  }*/

  const priorityOptions = ["Low", "Medium", "Extreme"]; // Options for task priority

  const handleTitleChange = (e) => {
    setTitle(e.target.value); // Update the title state with the input value
  }

  // Handle date change event
  const handleDateChange = (e) => {
    setDate(e.target.value); // Update the date state with the input value
    console.log(setDate(e.target.value)); // Log the selected date value to the console
  }

  const handlePriorityChange = (e) => {
    setPriority(e.target.value); // Update the priority state with the selected value
  }

  
    function handelDescritpionChange(){
      setDescription(description)
    }


  /*
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value); // Update the description state with the input value
    setTaskDescription(e.target.value); // Update the task description state with the input value
  }*/
  // Handle form submission
  const dataValidate = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    // Perform validation checks here

    //let formErrors = {}; // Object to hold form error messages

    if(!title.trim() || !date.trim() || !priority.trim() || !description.trim()) { // Check if any field is empty
      alert("Please fill in all the fields"); // Alert the user to fill in all fields
    } else {
      const newTask = {id: GenerateUniqueID().id, title, date, priority, description}; // Create a new task object
      setTasks(prevTasks => [...prevTasks, newTask]); // Add the new task to the tasks array
      // Reset form fields after submission
      setTitle("");
      setDate("");
      setPriority("");
      setDescription("");
      onClose(); // Close the modal after submission
    }
    
  }

  function handleDate() {
    console.log("Aquie debe aparecer la fecha actual en el input de date, al hacer click en el input");
  }


    return (
        <>

     <div className="bg-black/80 fixed inset-0 z-50 h-screen flex items-center justify-center rounded-xs text-sm">
      <div className="bg-white p-4 m-8 rounded-sm border-2 border-gray-100 shadow-lg w-full md:w-md">

         <nav className="flex justify-between lg:mt-1 lg:mb-6 lg:font-semibold">
            <span className="underline decoration-orange-500 dcoration-2 underline-offset-4">Add New Task</span>
            <button
              className="cursor-pointer hover:underline hover:decoration-orange-500 hover:decoration-2 hover:underline-offset-4"
              onClick={onClose} // Call onClose prop to close the modal
            > 
             Go Back
            </button>
         </nav>

        <form onSubmit={dataValidate}> 
          <div className="border-gray-200 border-2 mt-3 mb-2 p-2 flex flex-col gap-2.5 lg:mt-4 lg:p-2">
            <label htmlFor="title" className="font-medium">Title</label>
            <input 
            id="title" 
            type="text"
            name="taskTitle"
            value={title} // Bind the input value to the title state
            onChange={handleTitleChange}
            className="w-60 border-gray-300 border-2 rounded-sm md:w-72 lg:w-96 lg:p-0.5"
            required
             />

            <label className="font-medium">Date</label>
            <input 
             type="date"
             id="start"
             name="taskDate"
             value={date}
             onChange={handleDateChange}
             onClick={() => handleDate()}
             className="w-60 border-gray-300 border-2 rounded-sm cursor-pointer md:w-72 lg:w-96 lg:p-0.5"
            />

            <fieldset className="flex gap-4 lg:gap-8">
              <legend className="font-medium">Priority</legend>
              {priorityOptions.map((priorityOption) => {
               
                return (
                  <div key={priorityOption} className="flex gap-4 mt-2 font-light">
                  <label htmlFor={`priority-${priorityOption}`}>
                    {priorityOption}
                  </label>
                  <input
                    type="radio" // Radio button for priority selection
                    id={`priority-${priorityOption}`} // Unique id for each p riority option
                    name="priority" // Name attribute to group radio buttons
                    value={priorityOption}  // Value of the radio button
                    checked={priority === priorityOption} // Check if the current priority matches the option
                    onChange={handlePriorityChange} // Handle change event
                    className="cursor-pointer flex flex-row w-3  bg-red-700 border-2 border-amber-50 rounded-sm lg:bg-amber-300"
                    required
                  />
                  </div>
                )
              })}
            </fieldset>


            {/*Text area del la descripcion del task */}
            <label className="font-medium">Task Description</label>
            <textarea 
             id="description"
             name="taskDescription"
             type="text"
             value={description} // Bind the textarea value to the description state
             placeholder="Start writing here...." // Placeholder text
             onChange={(e) => setDescription(e.target.value)} // Handle change event to update the description state
             className="border-2 border-gray-200 rounded-sm w-64 p-2 md:w-72 lg:h-20 lg:w-96"
             required
             >
             </textarea>

          </div>

            <button 
             type="submit"
             className="cursor-pointer bg-orange-600 p-1 text-amber-50 rounded-sm mt-1 ml-4 w-20 hover:bg-orange-500"
             onClick={handelDescritpionChange}
            >
              Done
            </button>
        </form>

      </div>

      </div>
        </>
    )
}