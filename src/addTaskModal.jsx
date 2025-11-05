

export function AddTaskModal(){
    return (
        <>
         <nav>
            <span>Add New Task</span>
            <button>Go Back</button>
         </nav>

        <form>
          <div>
            <label htmlFor="tile">Title</label>
            <input type="text" />

            <label>Date</label>
            <input type="date"/>

                <span>Priority</span>
                <input 
                type="radio" 
                id="option1"  
                name="priority"
                //checked
                //value
                //onChange
                />
                <label htmlFor="option1">Extreme</label>

                <input 
                type="radio" 
                id="option2"  
                name="priority" 
                //checked
                //value
                //onChange
                />
                <label htmlFor="option2">Moderate</label>

                <input 
                type="radio" 
                id="option3"  
                name="priority"
                //checked
                //value
                //onChange
                />
                <label htmlFor="option3">Low</label>
            
            <label>Task Description</label>
            <textarea placeholder="Start writing here...."></textarea>
            <button type="submit">Done</button>
          </div>
        </form>
        </>
    )
}