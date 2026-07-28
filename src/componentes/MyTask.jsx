import { TrashIcon, ArrowDownIcon } from "@heroicons/react/24/outline";

//COMPONENTE HIJO
function TaskMyTask() {
  return (
    <>
      {/*Div para renderizar los task */}
      <div className="bg-amber-400 flex mt-1.5 p-2 rounded-2xl border-b-red-700 border-b-2 text-black text-lg">
        <div className="flex">
            <span className="rounded-full w-6 h-6 text-red-700 border-4"></span>
        </div>

    <div className="bg-purple-300 w-full ml-3">
        <span className="font-bold text-2xl">Submit Docuements</span>

        <div className="flex gap-14 text-base">
            <span>Priority: ROME</span>
            <sapn>Status: IN PROGRESS</sapn>
        </div>
    </div>
      </div>
    </>
  );
}

// COMPONENTE PADRE
export function MyTask() {
  return (
    <>
      <div className="bg-orange-500 m-0.5 lg:m-3 lg:min-h-11/12 lg:grid lg:grid-cols-2">
        <span className="flex justify-end text-3xl">My task</span>
      </div>
      <div className="bg-amber-400 p-2 rounded-sm m-0.5">
        <TaskMyTask />
      </div>

      <div className="bg-red-600 p-4 m-0.5 rounded-sm text-black">
          <div className="p-1 bg-amber-400">
            <div className="grid col-end-1 border-b-green-600 border-b-2">
                <span><strong>Submit Documents</strong></span>
            <span><strong>Priority: </strong> Romero</span>
            <span><strong>Status: </strong>Not started</span>
            </div>


            <div className="mt-3 grid">
                <span><strong>Task title: </strong>Lorem ipsum dolor sit amet consectetur.</span>
                <div><strong>Task Description: </strong>Lorem ipsum dolor sit amet consectetur 
                adipisicing elit. Expedita culpa officia eaque distinctio alias amet illo 
                reiciendis accusantium deserunt animi error molestias nesciunt temporibus 
                ad minima corrupti ullam, quod repellendus eius exercitationem a ab. Ipsu
                m ab vel cum totam, dolores asperiores optio officia dolorem labore earum
                 eligendi quis ut porro aperiam aspernatur sunt corporis corrupti illo of
                 ficiis maiores nesciunt. Mollitia soluta neque quas atque reiciendis arch
                 itecto corporis, corrupti voluptatem, itaque ut, unde animi omnis quod n
                 emo placeat suscipit officiis ea.</div>
            </div>

            <div className="flex justify-end gap-1 p-1.5">
                <TrashIcon className="w-8 h-8 bg-red-500 p-1 rounded-sm"/>
                <ArrowDownIcon className="w-8 h-8 bg-red-500 p-1 rounded-sm"/>
            </div>
            
          </div>
        </div>



    </>
  );
}

/**
 *       
        <div className="bg-red-600 p-6">
          <div className="bg-amber-200 h-full">
            <div className="grid grid-cols-2 bg-amber-600">
              <div className="bg-red-200">Imagen</div>
              <div className="flex flex-col mt-4 gap-1">
                <p className="mb-3">Submit Documents</p>
                <span>Priority: Extreme</span>
                <span>Status: Not started</span>
                <span className="text-[9px] text-gray-300">
                  Created on: 20/06/2026
                </span>
              </div>
            </div>

            <div className="bg-amber-300 mt-6 grid gap-6">
              <span>
                <strong>Task Title: </strong>Dcoument submission
              </span>
              <span>
                <strong>Objective: </strong>
              </span>
              <span>Task description</span>
              <span>
                <strong>Deadline for Submission</strong>
              </span>
            </div>

            <div className="bg-amber-500 flex justify-end mt-32">
              <TrashIcon className="w-6" />
              <ArrowDownIcon className="w-6" />
            </div>
          </div>
        </div>
 */
