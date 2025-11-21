
function TaskRenderer({tasks, setEditingTaskId}) {


    return (
        <>
         <div>
            <h1>Tasks added: </h1>
            {tasks.length === 0 ? <p>No tasks added yet</p> :
             tasks.map(task => (
                <div key={task.id}> 
                    <p>ID: {task.id}</p>
                    <h4>{task.title}</h4>
                    <span>Priority : {task.priority}</span> <br/>
                    <span>Created on: {task.date}</span>
                    <p>Task Description: {task.description}</p>
                    <button onClick={() => setEditingTaskId(task.id)}>Edit</button> 
                </div> 
             ))}
         </div>
        </>
    )
}

export default TaskRenderer;    