export function AddNewStatus({ setNewStatus }) {
  return (
    <>
      <div className="bg-black/95 fixed inset-0 z-50 h-screen flex items-center justify-center rounded-xs text-sm text-black">
        <div className="bg-white w-80 p-6 rounded-lg">
          <div className="flex justify-between mb-8">
            <div>
              <span className="underline underline-offset-4 decoration-amber-700 cursor-pointer">
                Add{" "}
              </span>
              Task Status
            </div>

            <div className="underline cursor-pointer" onClick={() => setNewStatus(false)}>
              Go Back
            </div>
          </div>

          <div className="border-2 border-gray-300 h-full p-3">
            <div className="">
              <label className="font-bold">Task Status Title</label>
              <input className="border border-gray-400 w-full rounded-lg p-1 mt-2" />
            </div>

            <div className="flex gap-2.5 my-4 text-white text-xs">
              <button className="bg-orange-600 px-6 py-1 rounded-sm hover:bg-orange-400 cursor-pointer">
                Create
              </button>
              <button
                onClick={() => setNewStatus(false)}
                className="bg-orange-600 px-6 py-1 rounded-sm cursor-pointer hover:bg-orange-400"
                
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function EditStatus({ setEditStatus }) {
  return (
    <>
      <div className="bg-black/95 fixed inset-0 z-50 h-screen flex items-center justify-center rounded-xs text-sm text-black">
        <div className="bg-white w-80 p-6 rounded-lg">
          <div className="flex justify-between mb-8">
            <div className="font-bold">
              <span className="underline underline-offset-4 decoration-amber-700">
                Edit {" "}
              </span>
              Task Status
            </div>

            <div className="underline font-semibold cursor-pointer" onClick={() => setEditStatus(false)}>
              Go Back
            </div>
          </div>

          <div className="border-2 border-gray-300 h-full p-3">
            <div className="">
              <label className="font-bold">Task Status Name</label>
              <input className="border border-gray-400 w-full rounded-lg p-1 mt-2" />
            </div>

            <div className="flex gap-2.5 my-4 text-white text-xs">
              <button className="bg-orange-600 px-6 py-1 rounded-sm cursor-pointer hover:bg-orange-500">
                Create
              </button>
              <button
                className="bg-orange-600 px-6 py-1 rounded-sm cursor-pointer hover:bg-orange-500"
                onClick={() => setEditStatus(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EditStatus;
