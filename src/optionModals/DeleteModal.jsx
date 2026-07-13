export function DeleteTaskModal({ onDelete }) {

    /**
     * iv className="fixed inset-50 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white rounded-lg shadow-xl w-96 p-6">
          <h2 className="text-red-600 font-bold text-lg">Delete Task?</h2>
          <p className="text-gray-700 mt-2">
            This action cannot be undone. Are you sure you want to delete this
            task?
          </p>
          <div className="flex justify-end gap-3 mt-4">
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-4 py-2 rounded-md transition">
              Cancel
            </button>
            <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md transition"
            onClick={onDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
     */
  return (
    <>
     <div className="bg-white fixed">
        <button className="w-60 h-60">Click to delete</button>
     </div>
    </>
  );
}
