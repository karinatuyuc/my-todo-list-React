import { useState} from "react"
import { GenerateUniqueID} from "./UniqueId";
//import { data } from "autoprefixer";
import FormErrors from "./FormErrors/FormErrors";


export function AddTaskModal({onClose, onAddTask}) { // Receive setTasks and onClose as props

  const [ title, setTitle ] = useState(""); // State to hold the task title
 /* const [ date, setDate ] = useState(""); // State to hold the task date
  const [ priority, setPriority ] = useState(""); // State to hold the task priority
  const [ description, setDescription ] = useState(""); // State to hold the task description



  
  const newTask = { // Object to represent the new task, the states of the form fields
    title: title,
    date: date,
    priority: priority,
    description: description,
    id : GenerateUniqueID().id,
  }  */

  const priorityOptions = ["Low", "Medium", "Extreme"]; // Options for task priority

  function onTitleChange(e){
    let titleValue = e.target.value;
    setTitle(titleValue); // Update the title state with the input value

    if(titleValue.trim() === "") {
      console.log("Title esta vacio");
    }
  }

  /*
  // Handle date change event
  const handleDateChange = (e) => {
    console.log(e.target.value); // Log the selected date value to the console
  }

  const handlePriorityChange = (e) => {
    console.log(e.target.value); // Update the priority state with the selected value
  }

  
    function handelDescritpionChange(e){
      console.log(e.target.value); // Log the description value to the console
    }
  const handleDescriptionChange = (e) => {
    setDescription(e.target.value); // Update the description state with the input value
    setTaskDescription(e.target.value); // Update the task description state with the input value
  }*/


  // Funcion para enviar el objeto al TodoApp
  function handleSubmit(e) {
    e.preventDefault(); // Prevent the default form submission behavior
    const newTask = {
      title
    }
    onAddTask(newTask); // Call the onAddTask prop to add the new task
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

        <form onSubmit={handleSubmit}> 
          <div className="border-gray-200 border-2 mt-3 mb-2 p-2 flex flex-col gap-2.5 lg:mt-4 lg:p-2">
            <label htmlFor="title" className="font-medium">Title</label>
            <input 
            id="title" 
            type="text"
            name="taskTitle"
            value={title} // Bind the input value to the title state
            onChange={onTitleChange}
            className="w-60 border-gray-300 border-2 rounded-sm md:w-72 lg:w-96 lg:p-0.5"
             />

            <label className="font-medium">Date</label>
            <input 
             type="date"
             id="start"
             name="taskDate"
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
                    className="cursor-pointer flex flex-row w-3  bg-red-700 border-2 border-amber-50 rounded-sm lg:bg-amber-300"
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
             placeholder="Start writing here...." // Placeholder text
             className="border-2 border-gray-200 rounded-sm w-64 p-2 md:w-72 lg:h-20 lg:w-96"
          
             >
             </textarea>

          </div>

            <button 
             type="submit"
             onClick={onClose}
             className="cursor-pointer bg-orange-600 p-1 text-amber-50 rounded-sm mt-1 ml-4 w-20 hover:bg-orange-500"
            >
              Done
            </button>
        </form>

      </div>

      </div>
        </>
    )
}