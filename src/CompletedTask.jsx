import {
  DocumentCheckIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";
 

export default function CompletedTask({ dateIn, task, taskLimit}) {

  console.log(task.length, "desde el completedTask")
  console.log(taskLimit, "limite del task")

  return (
    <>
      <div className="">
        {/** <div className="">*/}
        <div className="flex gap-2">
          <DocumentCheckIcon className="w-7 h-7 text-gray-500 mb-2 md:w-8 md:h-8 md:mb-4 lg:w-7 lg:h-7 lg:mb-1" />
          <h1 className=" text-red-400 font-medium md:text-2xl lg:text-sm xl:text-lg">
            Completed Task
          </h1>
        </div>
        {/**CARDS*/}
        <div className=" flex justify-center items-center p-2 bg-blue-800">
          {/**CARD #1 */}
          <div className="border-2 border-black rounded-2xl p-1 w-60 grid grid-cols-[1fr_2fr_1fr] md:w-72">
            <div className="flex justify-center items-start pt-1">
              <div className="w-4 h-4 rounded-full border-2 border-green-900 md:w-5 md:h-5 lg:w-4 lg:h-4"></div>
            </div>

            <div className="max-w-auto p-2">
              <span className="font-bold text-sm md:text-base lg:text-sm line-clamp-1">
                Aqui va el titulo de el tafjsldjflajksdlkjjlsjflskdjfjksk
              </span>
              <p className="text-sm line-clamp-2 mt-2 text-gray-600 md:text-base lg:text-sm xl:text-medium">
                Esta es la descripcion que tendra
                dossdafsjdfjalkjsdlkjflksfljasldfjslk lineas de longitud no mas
              </p>
              <h4 className="text-[8px] mt-2">
                Status: <span className="text-green-600">Completed</span>
              </h4>
              <span className="text-[8px] text-gray-500">
                Completed {dateIn}{" "}
              </span>{" "}
              {/**This should be interactive */}
            </div>

            <div className="flex justify-end items-start">
              <EllipsisHorizontalIcon className="w-6 h-6" />
            </div>
          </div>



        </div>

        {/** </div>*/}
      </div>
    </>
  );
}
