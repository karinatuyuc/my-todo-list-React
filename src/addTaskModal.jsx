import { useState } from "react";
import { GenerateUniqueID } from "./UniqueId";
//import { data } from "autoprefixer";
import FormErrors from "./FormErrors/FormErrors";

export function AddTaskModal({ onClose, onSubmit }) {
  // Receive setTasks and onClose as props

  const [errors, setErrors] = useState({}); // State to hold form validation errors
  const [title, setTitle] = useState(""); // State to hold the task title
 // const [description, setDescription] = useState("");

  const priorityOptions = ["Low", "Medium", "Extreme"]; // Options for task priority

  function validateFild(fieldName, inputValue) {

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
  }


/*
  // Function to change the state of title
  function handleTitleChange(e) {
    let titleValue = e.target.value;
    setTitle(titleValue); // Update the title state with the input value

    if(titleValue.trim() === ""){
      setErrors((prev) => ({...prev, title: "Title is required"}))
    } else {
      setErrors((prev) => {
        const { title: _,  ...rest} = prev;
        return rest;
      })
    }
  }

  // Function to update the state of description
  function handleDescriptionChange(e){
    let descriptionValue = e.target.value;

    setDescription(descriptionValue);

    if(descriptionValue.trim() === "") {
      setErrors((prev) => ({...prev, title: "Title is required", description: "Description is required"}))
    } else {
      setErrors((prev) => {
        const { description: _,  ...rest} = prev;
        return rest;
      })
    }
  }
*/

  const handleSubmit2 = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if (title.trim() === "") {
      setErrors((prev) => ({ ...prev, title: "Title is required"})); // Set an error message if the title or description is empty
      return; // Stop the form submission if there are validation errors
    }

    const newTask = {title};
    onSubmit(e, newTask); // Pass the event and the new task to the onSubmit prop
    onClose();
  };

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
              onClick={onClose} // Call onClose prop to close the modal
            >
              Go Back
            </button>
          </nav>

          <form onSubmit={handleSubmit2}>
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
                onChange={(e) => validateFild("title", e.target.value)} // Call validateField on input change
                className="w-60 border-gray-300 border-2 rounded-sm md:w-72 lg:w-96 lg:p-0.5"
              
              />
              {errors.title && <span className="text-[10px] text-red-500">{errors.title}</span>}

              {/*Text area del la descripcion del task */}
              <label className="font-medium">Task Description</label>
              <textarea
                id="description"
                name="taskDescription"
                type="text"
               // value={description} // Bind the textarea value to the description state
                placeholder="Start writing here...." // Placeholder text
                className="border-2 border-gray-200 rounded-sm w-64 p-2 md:w-72 lg:h-20 lg:w-96"
              ></textarea>
              {errors.description && <span className="text-[10px] text-red-500">{errors.description}</span>}

              <label className="font-medium">Date</label>
              <input
                type="date"
                id="start"
                name="taskDate"
                className="w-60 border-gray-300 border-2 rounded-sm cursor-pointer md:w-72 lg:w-96 lg:p-0.5"
              />


              {/* Priority options  */}
              <fieldset className="flex gap-4 lg:gap-8">
                <legend className="font-medium">Priority</legend>
                {priorityOptions.map((priorityOption) => {
                  return (
                    <div
                      key={priorityOption}
                      className="flex gap-4 mt-2 font-light"
                    >
                      <label htmlFor={`priority-${priorityOption}`}>
                        {priorityOption}
                      </label>
                      <input
                        type="radio" // Radio button for priority selection
                        id={`priority-${priorityOption}`} // Unique id for each p riority option
                        name="priority" // Name attribute to group radio buttons
                    //    value={priorityOption} // Value of the radio button
                        className="cursor-pointer flex flex-row w-3  bg-red-700 border-2 border-amber-50 rounded-sm lg:bg-amber-300"
                      />
                    </div>
                  );
                })}
              </fieldset>
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
