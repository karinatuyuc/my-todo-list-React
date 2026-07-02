import { useState } from 'react';

export function EditModal({ task, editTask }) {

    const [ editTitle, setEditTitle] = useState(task.title); // State to hold the edited title
    const [ editPriority, setEditPriority] = useState(task.priority);
    const [ editDate, setEditDate] = useState(task.date);
    const [ editDescription, setEditDescription] = useState(task.description);

    function validateEditInputs(fieldName, inputValue){

        if(fieldName === "title") {
            setEditTitle(inputValue); // Always update the title state with the input value
            if(inputValue.trim() === "") { // Check if the input value is empty or only whitespace
                console.log("Title is required");
                return false;
            } else {
                return true;
            }   
        }

        if(fieldName === "description") {
            setEditDescription(inputValue);
            if(inputValue.trim() === "") {
                console.log("Description is required");
                return false;
            } else {
                return true;
            }
        }

        if(fieldName === "priority") {
            setEditPriority(inputValue);            
        }

        if(fieldName === "date") {
            setEditDate(inputValue);
        }

    }

  const priorityOptions = ["Low", "Medium", "Extreme"]; // Options for task priority


  return (
    <>
      <div className="bg-black/80 fixed inset-0 z-50 h-screen flex items-center justify-center rounded-xs text-sm">
        <div className="bg-white p-4 m-8 rounded-sm border-2 border-gray-100 shadow-lg w-full md:w-md">
          <nav className="flex justify-between lg:mt-1 lg:mb-6 lg:font-semibold">
            <span className="underline decoration-orange-500 dcoration-2 underline-offset-4">
              Edit Task
            </span>
            <button className="cursor-pointer hover:underline hover:decoration-orange-500 hover:decoration-2 hover:underline-offset-4">
              Go Back
            </button>
          </nav>

          <form>
            <div className="border-gray-200 border-2 mt-3 mb-2 p-2 flex flex-col gap-2.5 lg:mt-4 lg:p-2">
              {/**This is the TITLE INPUT */}
              <label htmlFor="title" className="font-medium">
                Title
              </label>
              <input
                id="title"
                type="text"
                name="taskTitle"
                value={editTitle}
                onChange={(e) => validateEditInputs("title", e.target.value)} // Update the title state on input change
                className="w-52 border-gray-300 border-2 rounded-sm lg:p-0.5"
              />

              <label className="font-medium">Date</label>
              <input
                type="date"
                id="start"
                name="taskDate"
                value={editDate}
                onChange={(e) => validateEditInputs('date', e.target.value)}
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
                        value={editPriority} // Value of the radio button
                        onChange={(e) => validateEditInputs('priority', e.target.value)}
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
                value={editDescription}
                onChange={ (e) => validateEditInputs('description', e.target.value)}
                placeholder="Start writing here...." // Placeholder text
                className="border-2 border-gray-200 rounded-sm w-64 p-2 md:w-72 lg:h-20 lg:w-96"
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
