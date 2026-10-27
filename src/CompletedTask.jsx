// FILTRNDO LOS TASK COMPLETED, PARA MOSTRARLO EN ESTE FILE
export default function CompletedTask({ dateIn, filteredTask }) {


    let taskCompletedLimit = filteredTask.slice(0, 2);

    console.log(taskCompletedLimit)

  return (
    <>
      <div className="grid grid-cols-1 gap-4  rounded-sm md:p-2 md:flex md:flex-row">


        {taskCompletedLimit.map((filter) => (
          <div
            className="w-60 max-w-sm mx-auto border-2 p-1.5 mb-3 rounded-lg border-gray-900 md:grid md:grid-cols-1 
        md:w-72 lg:w-64"
        key={filter.id}
          >
            <div className="flex gap-2">
              {/**This  is the cricle  */}
              <div className=" flex ">
                <span className="w-3 h-3 border-8 rounded-full text-green-500"></span>{" "}
                {/**This sould be interactive too */}
              </div>
              <div className="grid w-full p-0.5">
                <span className="font-bold text-sm text-ellipsis break-all line-clamp-2 text-black">{filter.title}</span>

                <div className="text-sm h-8 text-ellipsis w-full m-0.5">
                  <p className="text-xs font-medium text-gray-900 line-clamp-2 break-all">{filter.description}</p>
                </div>
                {/** CARD FOOTER */}
                <div className=" flex flex-col text-[8px] mt-2 gap-1 text-black">
                  <span className="">
                    Status: <span className="text-green-500"></span>
                  </span>{" "}
                  {/**This should be interactive  */}
                  <span className="text-gray-500">
                    Created on: <span>{dateIn}</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
       

      </div>

      {/** </div>*/}
    </>
  );
}
