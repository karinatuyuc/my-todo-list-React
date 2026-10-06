
export function EditTaskCategory({ closeEdit }) {


  return (
    <>
      <div className="bg-black/80 fixed inset-0 z-50 h-screen flex items-center justify-center rounded-xs text-sm">
        <div className="bg-white text-black h- p-3 rounded-sm">
          <div className="p-2">
            <div className="flex items-center justify-between text-lg font-bold mb-10">
              <div className="text-md">
                <span className="underline underline-offset-4 decoration-amber-600">
                  Edit {" "}
                </span>
                Task {" "} Category
              </div>
              <button className="text-lg underline underline-offset-4 decoration-black cursor-pointer"
              onClick={() => closeEdit(false)}>
                Go Back
              </button>
            </div>

            <div className="border-2 border-gray-200 p-4 h-full">
              <div className="flex flex-col gap-4">
                <label htmlFor="category" className="text-sm font-medium">
                  Task Category Title
                </label>
                <input
                  id="category"
                  type="text"
                  className={` border-gray-400 border-2 rounded-sm px-2 py-1 focus:border-red-300 focus:ring-1 focus:ring-red-400 focus:outline-none transition-all`}
                />
              </div>

              <span className="text-sm text-red-500"></span>
              <div className="flex gap-4 mt-6">
                <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-1.5 px-3 rounded w-32 cursor-pointer">
                  Update
                </button>
                <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-1.5 px-3 rounded w-32 cursor-pointer"
                onClick={() => closeEdit(false)}>
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
