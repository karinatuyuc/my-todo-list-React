
export function validateTitle(value, setTitle, setErrors) {
  setTitle(value);
  if (value === "") {
    setErrors((prev) => ({
      ...prev,
      title: "Title is required",
    })); // Set an error message if the title is empty
    
  } else {
    setErrors((prev) => ({
      ...prev,
      title: "",
    })); // Clear the error message if the title is not empty
    
  }
}

export function validatePriority(value, setPriority, setErrors){
  setPriority(value);
  if(value.trim() === "") {
    setErrors((prev) => ({
      ...prev,
      priority: ""
    }))
  } else {
    setErrors((prev) => ({
      ...prev,
      priority: ''
    }))


  }
}

export function validateDescription(value, setDescription, setErrors) {
  setDescription(value);
  if(value.trim() === "") {
    setErrors(prev => ({
      ...prev,
      description: "Description is required"
    }))
  } else {
    setErrors(prev => ({
      ...prev,
      description: ""
    }))
  }
}




