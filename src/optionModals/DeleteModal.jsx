export function DeleteTaskModal( {setDeleteTaskModal, selectedTask, deleteTask}) {

  return (
    <>
     <div className="bg-amber-500/50 fixed inset-0 z-50 flex justify-center items-center">
     <div className="bg-white rounded-lg shadow-xl w-96 p-6">
        <h2 className="text-red-700 font-bold text-lg">Delete Task?</h2>
        <p className="text-gray-700 mt-2">This action cannot be undone. Are you sure you want to delete this task?
        </p>
        <div className="flex justify-end gap-3 mt-4">

            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md transition"
            onClick={() => setDeleteTaskModal(false)}>
                Cancel
            </button>
            <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition"
            onClick={() => {
                deleteTask(selectedTask),
                setDeleteTaskModal(false)
            }}>
                Delete
            </button>
        </div>
     </div>
        
     </div>
    </>
  );
}
