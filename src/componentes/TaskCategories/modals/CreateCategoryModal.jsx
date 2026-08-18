export function CreateCategoryModal({ setShowCategoryModal }) {
  return (
    <>
      <div className="bg-red-700 min-h-2/6 w-full flex flex-col gap-4 p-4 rounded-2xl text-black relative">

        <div className="flex items-center justify-between p-2.5 text-lg font-bold">
          <div className="text-lg">
            <span className="underline underline-offset-8 decoration-amber-600">
              Create {" "}
            </span>
            Category
          </div>
          <div className="text-lg underline underline-offset-4 decoration-black" onClick={() => setShowCategoryModal(false)}>
            Go Back
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <label>Category Name</label>
          <input
            type="text"
            className="w-full p-2.5 text-lg text-black rounded-md border-2 border-gray-300"
          />
        </div>

        <div className="flex gap-4">
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-1.5 px-3 rounded w-32">
            Create
          </button>
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-1.5 px-3 rounded w-32">
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}
