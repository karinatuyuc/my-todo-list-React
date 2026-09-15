import { PencilSquareIcon, TrashIcon } from "@heroicons/react/16/solid";

export function TaskPriority({ priorities }) {
      const disabledStyles = "disabled:bg-orange-300 disabled:text-white disabled:cursor-not-allowed";
  return (
    <>
      <div className=" bg-white w-full flex rounded-xl border-2 mt-2 border-gray-300 text-[12px]">
        <table className="w-full text-center text-black">
          <thead>
            <tr>
              <th className="p-2 border-r-2 border-gray-300">SN</th>
              <th className="p-2 border-l-2 border-gray-300">Task Priority</th>
              <th className="p-2 border-l-2 border-gray-300">Action</th>
            </tr>
          </thead>
          {priorities.map((priorities, index) => (
            <tbody className="border-t-2 border-gray-300" key={index}>
              <tr>
                <td className="border-r-2 border-gray-300">{index + 1}</td>
                <td className="border-r-2 border-gray-300">{priorities}</td>

                <td className="text-black w-1/12 p-1.5 lg:w-96">
                  <div className="gap-2 p-1 flex justify-items-center justify-center text-white text-center">
                    <button className={`bg-orange-600 flex p-1 rounded-sm lg:p-2 cursor-pointer ${disabledStyles}`} disabled={true}>
                      <PencilSquareIcon className="w-4 h-5" />
                      Edit
                    </button>
                    <button className={`bg-orange-600 flex p-1 rounded-sm lg:p-2 ${disabledStyles}`} disabled={true}>
                      <TrashIcon className="w-4 h-5" />
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