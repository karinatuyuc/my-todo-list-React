import { useState } from "react";
import { GenerateUniqueID } from "../../../UniqueId";

export function CreateCategoryModal({ setOpenCreate, addCategory }) {

  const [categoryName, setCategoryName] = useState("");
  const [error, setError] = useState({});
  const [inputColor, setInputColor] = useState(false);

  let colorInput = "border-green-5000";


  function cateogoryNa(){
    let hasErrors = false;

    if(categoryName.trim() === "") {
      setError(prev => ({
        ...prev,
        inputCategory: "Esta vacio"
      }))
      hasErrors = true;
      setInputColor(true)
    } else {
      setError(prev => ({
        ...prev,
        inputCategory: ""
      }))
    }

    let newCategory = {
      id: GenerateUniqueID().id,
      name: categoryName
    }

    if(!hasErrors) {
      addCategory(newCategory);
      setCategoryName("");
      setOpenCreate(false);
    }

  }


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
            onClick={() => setOpenCreate(false)}
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
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            className={` ${categoryName.trim() === "" ? "border-amber-500 border-2" : "border-amber-300"}`}
          />
        </div>
        <span className="text-sm text-red-500">{error.inputCategory}</span>

        <div className="flex gap-4">
          <button className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-1.5 px-3 rounded w-32 cursor-pointer"
          onClick={() => {
            cateogoryNa()
          }}>
            Create
          </button>
          <button
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-1.5 px-3 rounded w-32 cursor-pointer"
            onClick={() => setOpenCreate(false)}
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
}
