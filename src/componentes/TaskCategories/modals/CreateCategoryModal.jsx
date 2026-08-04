export function CreateCategoryModal() {
    return (
        <>
         <div className="bg-orange-700 fixed">
            <span>Create Categories</span>

            <div>

                <div className="flex flex-col gap-2 w-full">
                    <label>Category Name:</label>
                    <input type="text" className="bg-gray-200 text-black p-2" />
                </div>
                

                <div>
                    <button>Create</button>
                    <button>Cancel</button>
                </div>
            </div>
         </div>
        </>
    )
}