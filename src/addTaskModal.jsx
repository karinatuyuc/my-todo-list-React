import { useState } from "react";
import { GenerateUniqueID } from "./UniqueId";
//import { data } from "autoprefixer";
import FormErrors from "./FormErrors/FormErrors";
import { validateTitle, validateDescription, validatePriority } from "./helper/validation";

export function AddTaskModal({ addTask, onClose }) {
  // Receive setTasks and onClose as props
  const [errors, setErrors] = useState({}); // State to hold form validation errors
  const [title, setTitle] = useState(""); // State to hold the task title
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("");
  const [date, setDate] = useState("");

  const priorityOptions = ["Extreme", "Moderate", "Low"];
   const priorityColors = {
  "Low": 'bg-green-500',
  "Moderate": "bg-blue-400",
  "Extreme": "bg-red-700"
 }

  const onSubmit = (e) => {
    e.preventDefault();
    let hasErrors = false;

    if(title.trim() === "") {
      setErrors((prev) => ({
        ...prev,
        title: "Title is required"
      }))
          hasErrors = true;
    } else {
      setErrors((prev) => ({
        ...prev,
        title: ""
      }))
    };

    if(priority.trim() === "") {
      setErrors((prev) => ({
        ...prev,
        priority: "Priority is required"
      }));
      hasErrors = true;
    } else {
      setErrors((prev) => ({
        ...prev,
        priority: ""
      }))
    }

    if(description.trim() === '') {
      setErrors((prev) => ({
        ...prev,
        description: "Description is required"
      }))
      hasErrors = true;
    } else {
      setErrors((prev) => ({
        ...prev,
        description: ""
      }))
    }

    let newTask = {
      id: GenerateUniqueID().id,
      title,
      date,
      priority,
      description,
    };


    if(!hasErrors) {
      addTask(newTask);
      onClose();
    }


  };

  return (
    <>
      <div className="bg-black/80 fixed inset-0 z-50 h-screen flex items-center justify-center rounded-xs text-sm">
        <div className="bg-white p-4 m-8 rounded-sm border-2 border-gray-900 shadow-lg w-full md:w-md">
          <nav className="flex justify-between lg:mt-1 lg:mb-6 lg:font-semibold">
            <span className="underline decoration-orange-500 dcoration-2 underline-offset-4">
              Add New Task
            </span>
            <button
              onClick={onClose}
              className="cursor-pointer hover:underline hover:decoration-orange-500 hover:decoration-2 hover:underline-offset-4"
            >
              Go Back
            </button>
          </nav>

          <form onSubmit={onSubmit}>
            <div className="border-orange-200 border-2 mb-2 p-2 flex flex-col gap-1.5 mt-3 lg:p-2">
              {/**This is the TITLE INPUT */}
              <label htmlFor="title" className="font-medium">
                Title <span className="text-[7px] text-red-600">*</span>
              </label>
              <input
                id="title"
                type="text"
                name="taskTitle"
                value={title} // Bind the input value to the title state
                onChange={(e) =>
                  validateTitle(e.target.value, setTitle, setErrors)
                } // Call validateField on input change
                className="w-60 border-gray-300 border-2 rounded-sm md:w-72 lg:p-0.5"
              />
              <span className="text-[8px] text-red-600">{errors.title}</span>

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
              <fieldset className="flex gap-6 mt-1 bg-gray-100 p-1 rounded-sm">
                <legend className="font-medium mb-2">Priority</legend>

                {priorityOptions.map((priorities) => (
                  <div key={priorities} className="flex items-center gap-2">
                    <span className={`${priorityColors[priorities]} w-2 h-2 rounded-full shrink-0`}></span>                 
                    <label htmlFor={`priority-${priorities}`}>
                      {" "}
                      {priorities}
                    </label>
                    <input
                      type="radio"
                      id={`priority-${priorities}`}
                      name="priority"
                      value={priorities}
                      checked={priority === priorities}
                      onChange={(e) => validatePriority(e.target.value, setPriority, setErrors)}
                    />
                  </div>
                ))}
              </fieldset>
              <span className="text-[8px] text-red-600">{errors.priority}</span>
            

              {/*Text area del la descripcion del task */}
              <label className="font-medium">Task Description</label>
              <textarea
                id="description"
                name="taskDescription"
                type="text"
                value={description} // Bind the textarea value to the description state
                onChange={(e) => validateDescription(e.target.value, setDescription, setErrors)}
                placeholder="Start writing here...." // Placeholder text
                className="h-28 w-80 border-2 border-gray-200 rounded-sm p-2"
              ></textarea>
              <span className="text-[8px] text-red-600">{errors.description}</span>
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
