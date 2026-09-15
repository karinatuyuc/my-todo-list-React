//import { useState } from "react";
//import { CreateCategoryModal } from "./modals/CreateCategoryModal";
import { TaskPriority } from "./modals/PriorityModals";
import { TaskStatus } from "./modals/StatusModals";
import { EditModal } from "../../editModal";
import { TrashIcon, PencilSquareIcon } from "@heroicons/react/16/solid";

import { CreateCategoryModal } from "./modals/CreateCategoryModal";


export function TaskCategory({ setEditStatus, createCategories }) {

  return (
    <>
      <div className=" bg-white flex rounded-xl border-2 border-gray-300 mt-2 w-full">
        <table className="w-full text-center text-black">
          <thead>
            <tr>
              <th className="p-2 border-r-2 border-gray-300">SN</th>
              <th className="p-2 border-l-2 border-gray-300">Task Status</th>
              <th className="p-2 border-l-2 border-gray-300">Action</th>
            </tr>
          </thead>

          {createCategories.map((categoria, index) => (
            <tbody className="border-t-2 border-gray-300" key={index}>
              <tr>
                <td className="border-r-2 border-gray-300">{index + 1}</td>
                <td className="border-r-2 border-gray-300">{categoria}</td>

                <td className="text-black w-1/12 p-1.5 lg:w-96">
                  <div className="gap-2 p-1 flex justify-items-center justify-center text-white text-center">
                    <button
                      className="bg-orange-600 flex p-1 rounded-sm lg:p-2 cursor-pointer"
                      onClick={() => console.log("Se abre modal para editar")}
                    >
                      <PencilSquareIcon className="w-4 h-5" />
                      Edit
                    </button>
                    <button
                      className={`bg-orange-600 text-white flex p-1 rounded-sm lg:p-2 cursor-pointer`}
                      onClick={() => console.log("Se abre modal para eliminar")}
                    >
                      <TrashIcon className="w-4 h-5 " />
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </>
  );
}

{
  /**Padre */
}
export function TaskCategories({
  setEditStatus,
  priorities,
  createCategories,
  setCreateCategories,
}) {
  //const [editStatus, setEditStatus] = useState(false);

  return (
    <>
      <div className="h-screen m-1 p-0.5 lg:p-4 text-black relative">
        <div className="flex flex-col gap-5 mb-6 ">
          <div className="text-3xl lg:text-2xl font-bold">
            <span className="underline decoration-orange-700 underline-offset-4">
              Task{" "}
            </span>
            Categories
          </div>
        </div>

        <div className="flex flex-col gap-8 p-1 max-h-11/12 overflow-y-scroll">


          <div className="">

            <div>
              
              <span className="font-medium">
              <span className="underline decoration-orange-700 underline-offset-4">
                Task
              </span>{" "}
              Categories
            </span>

            <div>
              
            </div>
            </div>
            


            <TaskCategory
              setEditStatus={setEditStatus}
              createCategories={createCategories}
            />
          </div>

          <div className="">
            <div className="font-medium">

              <div>
              <span className="underline decoration-orange-700 underline-offset-4">
                Task
              </span>{" "}
              Priority
              </div> 

            </div>
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
