import { useState } from "react";
//import { CreateCategoryModal } from "./modals/CreateCategoryModal";
import { TaskPriority } from "./modals/PriorityModals";
import { TaskStatus } from "./modals/StatusModals";
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/16/solid";

//const disabledStyles = "disabled:bg-orange-300 disabled:text-white disabled:cursor-not-allowed";

export function TaskCategory({ setEditStatus }) {
  {
    /**Hijo */
  }
  return (
    <>
      <div className=" bg-white flex rounded-xl border-2 border-gray-300">
        <table className="w-full text-center text-black">
          <thead>
            <tr>
              <th className="p-2 border-r-2 border-gray-300">SN</th>
              <th className="p-2 border-l-2 border-gray-300">Task Status</th>
              <th className="p-2 border-l-2 border-gray-300">Action</th>
            </tr>
          </thead>
          <tbody className="border-t-2 border-gray-300">
            <tr>
              <td className="border-r-2 border-gray-300">1</td>
              <td className="border-r-2 border-gray-300">Completed</td>

              <td className="text-black w-1/12 p-1.5 lg:w-96">
                <div className="gap-2 p-1 flex justify-items-center justify-center text-white text-center">
                  <button
                    className="bg-orange-600 flex p-1 rounded-sm lg:p-2 cursor-pointer"
                    onClick={() => setEditStatus(true)}
                  >
                    <PencilSquareIcon className="w-4 h-5" />
                    Edit
                  </button>
                  <button className={`bg-orange-600 flex p-1 rounded-sm lg:p-2`}>
                    <TrashIcon className="w-4 h-5" />
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

{
  /**Padre */
}
export function TaskCategories({ priorities }) {
  const [editStatus, setEditStatus] = useState(false);

  return (
    <>
      {editStatus && <EditStatus setEditStatus={setEditStatus} />}

      <div className="rounded-xl h-screen m-1 p-1 lg:p-4 text-black relative">
        <div className="flex flex-col gap-5 mb-6 ">
          <div className="text-3xl lg:text-2xl font-bold">
            <span className="underline decoration-orange-700 underline-offset-4">
              Task{" "}
            </span>
            Categories
          </div>
        </div>

        <div className="flex flex-col gap-8 p-1">
          <TaskCategory setEditStatus={setEditStatus} />

          <div className="">
            <span className="font-medium">
              {" "}
              <span className="underline decoration-orange-700 underline-offset-4">
                Task
              </span>{" "}
              Priority
            </span>
            <TaskPriority priorities={priorities} />
          </div>

          <div className="">
            <span className="font-medium">
              {" "}
              <span className="underline decoration-orange-700 underline-offset-4">
                Task
              </span>{" "}
              Status
            </span>
            <TaskStatus />
          </div>
        </div>
      </div>
    </>
  );
}
