import { useState } from "react";
import { CreateCategoryModal } from './modals/CreateCategoryModal'
import {
  DocumentArrowUpIcon,
  PlusIcon,
  TrashIcon,
  PencilSquareIcon,
} from "@heroicons/react/16/solid";

export function TaskStatus() {
  {
    /**Hijo */
  }
  return (
    <>
      <div className=" bg-white flex justify-center items-center mx-1 rounded-xl border-2 border-gray-300">
        <table className="w-full text-center text-black">
          <tbody className="">
            <th className="p-2 border-r-2 border-gray-300">SN</th>
            <th className="p-2 border-l-2 border-gray-300">Task Status</th>
            <th className="p-2 border-l-2 border-gray-300">Action</th>
          </tbody>
          <tbody className="border-t-2 border-gray-300">
            <td className="border-r-2 border-gray-300">1</td>
            <td className="border-r-2 border-gray-300">Completed</td>

            <td className="text-black w-1/12 p-1.5 lg:w-96">
              <div className="gap-2 flex justify-items-center justify-center text-white text-center">
                <button className="bg-orange-600 flex p-1 rounded-sm lg:p-2">
                  <PencilSquareIcon className="w-5 h-5" />
                  Edit
                </button>
                <button className="bg-orange-600 flex p-1 rounded-sm lg:p-2">
                  <TrashIcon className="w-5 h-5" />
                  Delete
                </button>
              </div>
            </td>
          </tbody>
        </table>
      </div>
    </>
  );
}

{
  /**Hijo */
}
export function TaskPriority() {
  return (
    <>
      <div className=" bg-white flex justify-center items-center mx-1 rounded-xl border-2 border-gray-300">
        <table className="w-full text-center text-black">
          <tbody className="">
            <th className="p-2 border-r-2 border-gray-300">SN</th>
            <th className="p-2 border-l-2 border-gray-300">Task Priority</th>
            <th className="p-2 border-l-2 border-gray-300">Action</th>
          </tbody>
          <tbody className="border-t-2 border-gray-300">
            <td className="border-r-2 border-gray-300">1</td>
            <td className="border-r-2 border-gray-300">Completed</td>

            <td className="text-black w-1/12 p-1.5 lg:w-96">
              <div className="gap-2 flex justify-items-center justify-center text-white text-center">
                <button className="bg-orange-600 flex p-1 rounded-sm lg:p-2">
                  <PencilSquareIcon className="w-5 h-5" />
                  Edit
                </button>
                <button className="bg-orange-600 flex p-1 rounded-sm lg:p-2">
                  <TrashIcon className="w-5 h-5" />
                  Delete
                </button>
              </div>
            </td>
          </tbody>
        </table>
      </div>
    </>
  );
}

{
  /**Padre */
}
export function TaskCategories() {
  const [showCategoryModal, setShowCategoryModal] = useState(false);

  return (
    <>
      <div className=" border-2 border-gray-400 rounded-xl h-screen mt-10 m-2 p-2.5 text-white lg:p-4">
          
          {showCategoryModal ? (
            <CreateCategoryModal
            setShowCategoryModal={setShowCategoryModal}
            />
          ) : 
          <div>
        <div className="font-medium flex flex-col gap-3 lg:mb-0 ">
          <div className="text-3xl lg:text-2xl">
            <span className="underline decoration-orange-700 underline-offset-4">
              Task{" "}
            </span>
            Categories
          </div>
          <button
            className="bg-orange-600 rounded-md w-32 p-2 text-white lg:p-1 lg:w-28"
            onClick={() => setShowCategoryModal(true)}
          >
            Add Category
          </button>
        </div>

        <div className="max-h-full rounded-md lg:min-h-[70vh] overflow-auto">
          <div className="py-2.5 mb-16">
            <div className="flex justify-between py-2.5 text-2xl">
              <div className="font-medium">
                <span className="underline decoration-orange-700 decoration-2 underline-offset-4">
                  Task{" "}
                </span>
                Status
              </div>
              <button className="flex">
                <PlusIcon className="h-5 w-5 text-orange-700" />
                <span className="text-gray-400 text-sm">Add Task Status</span>
              </button>
            </div>

            <TaskStatus />
          </div>

          <div>
            <div className="flex justify-between py-2.5 text-2xl">
              <div className="font-medium">
                <span className="underline decoration-orange-600 decoration-2 underline-offset-4">
                  Task{" "}
                </span>
                Priority
              </div>
              <button className="flex">
                <PlusIcon className="h-5 w-5 text-orange-600" />
                <span className="text-gray-400 text-sm">Add new Priority</span>
              </button>
            </div>

            <TaskPriority />
          </div>
        </div>
    </div>}


      </div>
    </>
  );
}
