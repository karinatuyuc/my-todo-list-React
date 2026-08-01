import { DocumentArrowUpIcon } from "@heroicons/react/16/solid";


export function TaskStatus(){
    return (
        <>
        <table className="bg-red-200 border-2 rounded-sm">
            <thead>
                <tr className="px-2">
                    <th className="px-6">SN</th>
                    <th className="px-6">Task Status</th>
                    <th className="px-6">Action</th>
                </tr>
            </thead>

            <tbody>
                <tr>
                    <td className="px-6">1</td>
                    <td className="px-6">In Progress</td>
                    <td className="px-6">
                        <button className="bg-green-500 text-white p-1 rounded">Edit</button>
                        <button className="bg-red-500 text-white p-1 rounded ml-2">Delete</button>
                    </td>
                </tr>
            </tbody>


        </table>
        </>
    )
}

export function TaskCategories() {
  return (
    <>
      <div className="bg-orange-100 h-full m-1 text-black">


        <div className=" font-semibold flex flex-col gap-3 mb-8">
          <div className="text-2xl">
            <span className="underline decoration-neutral-700 decoration-2">
              Task {" "}
            </span>
            Categories
          </div>
          <button className="bg-orange-600 rounded-xl w-40 p-2 text-white">Add Category</button>
        </div>

        <div className="bg-orange-400">
          <div className="flex justify-between py-2.5">
            <span>Task Status</span>
            <button>Add Task Status</button>
          </div>

          <div className="bg-orange-300 flex flex-col justify-center items-center gap-2">
            <TaskStatus/>
          </div>
        </div>
      </div>
    </>
  );
}
