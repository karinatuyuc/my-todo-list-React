export function CreateCategoryModal({ setOpenEdit, addCategory }) {



  return (
    <>
      <div className=" h-screen w-full flex flex-col gap-4 p-3 rounded-2xl text-black">
        <div className="flex items-center justify-between p-1 text-lg font-bold">
          <div className="text-2xl">
            <span className="underline underline-offset-8 decoration-amber-600">
              Create{" "}
            </span>
            Categories
          </div>
          <div
            className="text-lg underline underline-offset-4 decoration-black cursor-pointer"
            onClick={() => setOpenEdit(false)}
          >
            Go Back
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <label htmlFor="category" className="text-sm font-medium">
            Category Name
          </label>
          <input
            id="category"
            type="text"
            className="w-full p-1.5 text-lg text-black rounded-md border-2 border-gray-300"
          />
        </div>

        <div className="flex gap-4">
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-1.5 px-3 rounded w-32 cursor-pointer">
            Create
          </button>
          <button
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-1.5 px-3 rounded w-32 cursor-pointer"
            onClick={() => setOpenEdit(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}
