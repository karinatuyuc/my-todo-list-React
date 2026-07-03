import { useState } from "react";
import { GenerateUniqueID } from "./UniqueId";
//import { data } from "autoprefixer";
import FormErrors from "./FormErrors/FormErrors";

export function AddTaskModal({ addTask, onClose }) {


  // Receive setTasks and onClose as props
 // const [errors, setErrors] = useState({}); // State to hold form validation errors
  const [title, setTitle] = useState(""); // State to hold the task title
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [date, setDate] = useState("");

  const priorityOptions = ["Low", "Medium", "Extreme"];


  /*

  function validateField(fieldName, inputValue) {

    if(fieldName === "title") { 
      setTitle(inputValue); // Always update the title state with the input value
      if(inputValue.trim() === "") { // Check if the input value is empty or only whitespace
        setErrors(prev => ({
          ...prev,
          title: "Title is required"
        })); // Set an error message if the title is empty
      } else {
        setErrors(prev => ({
          ...prev,
          title: ""
        })); // Clear the error message if the title is not empty
      }
    }

    if(fieldName === "description") {
      setDescription(inputValue);
      if(inputValue.trim() === "") {
        setErrors((prev) => ({
          ...prev,
          description: 'Description is required'
        }))
      } else {
        setErrors((prev) => ({
          ...prev,
          description: ""
        }))
      }
    }
    
    if(fieldName === "priority") {
      setPriority(inputValue);
    }

    if(fieldName === "date") {
      setDate(inputValue)
    }
    
  }

  const handleSubmit2 = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    let hasErrors = false;

    if (title.trim() === "") {
      setErrors((prev) => ({...prev, title: "Title is required" }));
      hasErrors = true;
    }
    if (description.trim() === "") {
      setErrors((prev) => ({...prev, description: "Description is required" }));
      hasErrors = true;
    }


    if(hasErrors) {
      setErrors(prev => ({...prev, title: prev.title || "Title is required", description: prev.description || "Description is required" }));
      return; // Stop form submission if there are validation errors
    }

    const newTask = {title, description, priority, date};

    console.log(newTask)
    onSubmit(e, newTask); // Pass the event and the new task to the onSubmit prop
    onClose();
  };
*/   
  const onSubmit = (e) => {
    e.preventDefault();

    let newTask = {
      id: GenerateUniqueID().id,
      title,
      date,
      description
    }

    addTask(newTask);
    onClose();
    console.log("Se guardo el task")
    
  }

  return (
    <>
      <div className="bg-black/80 fixed inset-0 z-50 h-screen flex items-center justify-center rounded-xs text-sm">
        <div className="bg-white p-4 m-8 rounded-sm border-2 border-gray-100 shadow-lg w-full md:w-md">
          <nav className="flex justify-between lg:mt-1 lg:mb-6 lg:font-semibold">
            <span className="underline decoration-orange-500 dcoration-2 underline-offset-4">
              Add New Task
            </span>
            <button
              className="cursor-pointer hover:underline hover:decoration-orange-500 hover:decoration-2 hover:underline-offset-4"
            >
              Go Back
            </button>
          </nav>

          <form onSubmit={onSubmit}>
            <div className="border-gray-200 border-2 mt-3 mb-2 p-2 flex flex-col gap-2.5 lg:mt-4 lg:p-2">
              {/**This is the TITLE INPUT */}
              <label htmlFor="title" className="font-medium">
                Title
              </label>
              <input
                id="title"
                type="text"
                name="taskTitle"
                value={title} // Bind the input value to the title state
                onChange={(e) => setTitle(e.target.value)} // Call validateField on input change
                className="w-60 border-gray-300 border-2 rounded-sm md:w-72 lg:p-0.5"
              
              />
              
              
              <label className="font-medium">Date</label>
              <input
                type="date"
                id="start"
                name="taskDate"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-60 border-gray-300 border-2 rounded-sm cursor-pointer md:w-72 lg:p-0.5"
              />

              

              {/* Priority options  */}
              <fieldset className="flex gap-4 lg:gap-8">
                <legend className="font-medium">Priority</legend>
                
              </fieldset>

              {/*Text area del la descripcion del task */}
              <label className="font-medium">Task Description</label>
              <textarea
                id="description"
                name="taskDescription"
                type="text"
                value={description} // Bind the textarea value to the description state
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Start writing here...." // Placeholder text
                className="h-28 w-80 border-2 border-gray-200 rounded-sm p-2"
              ></textarea>
             
            </div>

            <button
              type="submit"
              className="cursor-pointer bg-orange-600 p-1 text-amber-50 rounded-sm mt-1 ml-4 w-20 hover:bg-orange-500"
            >
              Done
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
