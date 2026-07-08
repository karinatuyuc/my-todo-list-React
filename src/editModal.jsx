
import { useState, useEffect } from "react";
import { validateTitle, validatePriority, validateDescription} from "./helper/validation"

export function EditModal({ onCloseEditModal, selectedTask, editTask}) {

  //Local state with the actual value of the inputs
  const [ title, setTitle ] = useState(selectedTask.title);
  const [ date, setDate ] = useState(selectedTask.date);
  const [ priority, setPriority ] = useState(selectedTask.priority);
  const [ description, setDescription ] = useState(selectedTask.description); 

  // State to control de erros
  const [ errors, setErrors ] = useState({});

  // state for the disabled/availabe button
  const [ isDisabled, setIsDisabled ] = useState(false) // True para indicar que los campos estan llenos


  useEffect(() => {
    if(title.trim() !== "" && description.trim() !== "") {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }

  }, [title, description]);


  useEffect(() => {
    setTitle(selectedTask.title)
    setDate(selectedTask.date)
    setPriority(selectedTask.priority)
    setDescription(selectedTask.description)
  }, [selectedTask])

  const priorityOptions = ["Low", "Medium", "Extreme"]; // Options for task priority

  const onSubmitEditedTask = (e) => {
    e.preventDefault();
    let hasEmptyInputs = false;
    if(title.trim() === "") {
      setErrors((prev) => ({
        ...prev,
        title: "Title is required"
      })) 
      hasEmptyInputs = true;
    } else {
      setErrors((prev) => ({
        ...prev,
        title: ""
      }))
    }

    if(description.trim() === "") {
      setErrors(prev => ({
        ...prev,
        description: 'Description is required'
      }))
    } else {
      setErrors(prev => ({
        ...prev,
        description: ''
      }))
    }

    const newTask = {
      id: selectedTask.id,
      title,
      date,
      priority,
      description
    }

    if(!hasEmptyInputs) {
      editTask(newTask);
      onCloseEditModal();
    }

  }


  return (
    <>
      <div className="bg-black/80 fixed inset-0 z-50 h-screen flex items-center justify-center rounded-xs text-sm">
        <div className="bg-white p-4 m-8 rounded-sm border-2 border-gray-100 shadow-lg w-full md:w-md">
          <nav className="flex justify-between lg:mt-1 lg:mb-6 lg:font-semibold">
            <span className="underline decoration-orange-500 dcoration-2 underline-offset-4">
              Edit Task
            </span>
            <button onClick={onCloseEditModal} className="cursor-pointer hover:underline hover:decoration-orange-500 hover:decoration-2 hover:underline-offset-4">
              Go Back
            </button>
          </nav>

          <form onSubmit={onSubmitEditedTask}>
            <div className="border-gray-200 border-2 mt-3 mb-2 p-2 flex flex-col gap-2.5 lg:mt-4 lg:p-2">
              {/**This is the TITLE INPUT */}
              <label htmlFor="title" className="font-medium">
                Title
              </label>
              <input
                id="title"
                type="text"
                name="taskTitle" // Update the title state on input change
                value={title}
                onChange={(e) => validateTitle(e.target.value, setTitle, setErrors)}
                className="w-52 border-gray-300 border-2 rounded-sm lg:p-0.5"
              />
              {errors.title}

              <label className="font-medium">Date</label>
              <input
                type="date"
                id="start"
                name="taskDate"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-52 border-gray-300 border-2 rounded-sm cursor-pointer md:w-52 lg:p-0.5"
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
                        value={priorityOption}
                        checked={priority === priorityOption}
                        onChange={(e) => validatePriority(e.target.value, setPriority, setErrors, setIsDisabled)}
                        className="cursor-pointer flex flex-row w-3  bg-red-700 border-2 border-amber-50 rounded-sm lg:bg-amber-300"
                      />
                    </div>
                  );
                })}
              </fieldset>

              {/*Text area del la descripcion del task */}
              <label className="font-medium">Task Description</label>
              <textarea
                id="description"
                name="taskDescription"
                type="text"
                placeholder="Start writing here...." // Placeholder text
                value={description}
                onChange={(e) => validateDescription(e.target.value, setDescription, setErrors)}
                className="border-2 border-gray-200 rounded-sm w-64 p-2 md:w-72 lg:h-20 lg:w-96"
              ></textarea>
             {errors.description}

            </div>


            <button
              type="submit"
              className={`cursor-pointer p-1 text-amber-50 rounded-sm mt-1 ml-4 w-18 ${!isDisabled ? 'bg-orange-500' : 'bg-orange-300'}`}
              disabled={isDisabled}
            >
              Done
            </button>
          </form>
        </div>
      </div>
    </>
  );
}


// className="cursor-pointer bg-orange-600 p-1 text-amber-50 rounded-sm mt-1 ml-4 w-20 hover:bg-orange-500"