import ProgressCircle from "../ProgressCircle";
import CompletedTask from "../CompletedTask";
import TaskCard from "../TaskCard";
import {
  ClipboardDocumentCheckIcon,
  ClockIcon,
  PlusIcon,
  ClipboardIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  DocumentCheckIcon,
} from "@heroicons/react/16/solid";
export function DashboardHome({
  task,
  userName,
  setModalAddTask,
  setEditTaskModal,
  setSelectedTask,
  openOptionsTaskId,
  setOpenOptionsTaskId,
  editTask,
  idOptions,
  onCloseEditModal,
  setDeleteTaskModal,
}) {
  //**/
  // CREANDO EL COMPLETED TASK PARA QUE SOLO REDNERIZE DOS SI HAY MAS DE TRES TASK EN EL DASHBOAR DE TASK
  //
  //  */

  let waveHand = "\u{1F44B}"; //Emoji hand waving
  const date = new Date(); //Creating the local date
  console.log("este debe ser el nombre", userName);

  const dayMonth = date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
  });

  const dateInNumber = date.toLocaleDateString("en-US"); // To show the date in number

  const circles = [
    { title: "Completed", progress: "25%", color: "green" },
    { title: "In progress", progress: "50%", color: "blue" },
    { title: "Not started", progress: "75%", color: "red" },
  ];

  let taskLimit = task.slice(0, 2);
  const totalCompleted = taskLimit.length;

  const limiteDiv2 = totalCompleted === 2 ? 2 : 1;
  const elementosCompletedTask = task.slice(0, limiteDiv2);

  return (
    <>
      <div className="">
        <div className="flex items-center justify-center gap-2 lg:mt-6 lg:ml-6 text-center">
          <div className="mx-auto text-xl font-medium mb-4 md:text-2xl lg:ml-0 lg:text-3xl lg:mb-0 flex">
            <h1 className="sm:truncate sm:overflow-hidden sm:text-ellipsis text-white font-bold md:text-2xl">
              Welcome,
              <span className="text-2xl p-6 md:text-4xl lg:text-4xl text-white">
                {userName}
              </span>
            </h1>
            {waveHand}
          </div>
        </div>
        {/** Main section */}
      </div>
      <section className="lg:grid lg:grid-cols-2 lg:gap-8 lg:mt-4 md:gap-16">
        {/*ADD TASK SECTION AND CARDS TASKS (different component in REVIEW)*/}
        <div
          className={`border-2 border-gray-200 shadow-2xl drop-shadow-lg rounded p-3 lg:p-0`}
        >
          <div className={`lg:top-0 lg:sticky text-red-400`}>
            <div className="flex justify-between p-2.5 lg:h-20 lg:p-4">
              <span
                className="absolute text-justify left-16 text-xm ml-2 font-medium md:text-2xl lg:text-lg"
                onClick={setEditTaskModal}
              >
                To-Do
              </span>
              <div className="relative">
                <ClipboardDocumentCheckIcon className="w-7 h-7 absolute md:w-8 md:h-8" />
                <ClockIcon
                  className="w-6 h-6 relative left-3 top-4 p-1 bg-gray-200 text-gray-500 rounded-full
                                       md:left-4 md:top-5 lg:top-4 lg:w-5 lg:h-5 lg:p-0.5"
                />
              </div>

              <span
                className="absolute text-justify mt-10 text-[10ox]
                                 md:text-sm md:mt-14 lg:text-[10px] lg:mt-10"
              >
                {dayMonth}
                <span
                  className="text-gray-400 m-4
                                     md:text-sm"
                >
                  Today
                </span>
              </span>

              <button
                className="flex items-center text-sm cursor-pointer gap-1
                              md:text-base"
              >
                <PlusIcon
                  className="w-5 h-5 text-red-500 font-medium
                                   md:w-6 md:h-6"
                  onClick={() => setModalAddTask(true)}
                />
                <span className="text-gray-400 md:text-2xl lg:text-sm">
                  Add task
                </span>
              </button>
            </div>
          </div>

          <div className=" flex flex-col justify-start items-center p-3 bg-amber-200 
          md:flex md:flex-row md:justify-center md:items-center md:gap-6 md:p-5">
            {taskLimit.length === 0 ? (
              <div className="w-72 p-1.5 rounded-sm gap-2 m-6 lg:w-80">
                <div className="bg-white p-4 rounded-md shadow-sm animate-pulse flex flex-col gap-3">
                  {/* Barra tipo título */}
                  <div className="h-5 bg-gray-200 rounded w-3/4"></div>

                  {/* Barra tipo descripción */}
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>

                  {/* Barra tipo detalle */}
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
                <div className="bg-white p-4 rounded-md shadow-sm animate-pulse flex flex-col gap-3 mt-6">
                  {/* Barra tipo título */}
                  <div className="h-5 bg-gray-200 rounded w-3/4"></div>

                  {/* Barra tipo descripción */}
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-5/6"></div>

                  {/* Barra tipo detalle */}
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
            ) : (
              taskLimit.map((tasks) => (
                <TaskCard
                  key={tasks.id}
                  tasks={tasks}
                  setSelectedTask={setSelectedTask}
                  setEditTaskModal={setEditTaskModal}
                  editTask={editTask}
                  idOptions={idOptions}
                  setOpenOptionsTaskId={setOpenOptionsTaskId}
                  openOptionsTaskId={openOptionsTaskId}
                  onCloseEditModal={onCloseEditModal}
                  setDeleteTaskModal={setDeleteTaskModal}
                />
              ))
            )}
          </div>
          <div className="bg-red-700">
            {task.length >= 3 && (
              <div className="flex text-[8px] text-red-500 bg-red-400">
                <ExclamationTriangleIcon className="w-4 h-3 text-black" />
                <p>Visit My Task to see all task</p>
              </div>
            )}
          </div>
        </div>

        <div className="border-amber-300 border-2 p-6 mt-4 md:mt-8">
          {/* TASK STATUS*/}
          <div className="bg-gray-400">
            <div className="bg-blue-400 relative flex gap-4">
              <div className="">
                <ClipboardIcon className="w-7 h-7 absolute text-gray-400 md:w-10 md:h-10 lg:w-7 lg:h-7" />
                <CheckCircleIcon
                  className="w-4 h-4 relative mt-3 left-3 rounded-full text-gray-400 bg-gray-200
                   md:w-6 md:h-6 lg:w-4 lg:h-4"
                />
              </div>
              <span className="text-red-400 font-medium md:text-2xl lg:text-lg">
                Task Status
              </span>
            </div>

            {/*Progress circles*/}
            <div className="grid grid-cols-3 gap-1.5 m-5 p-2">
              {circles.map((item, index) => (
                <ProgressCircle
                  // Aqui van los props que le pasamos al componente
                  key={index}
                  title={item.title}
                  progress={item.progress}
                  color={item.color}
                />
              ))}
            </div>
          </div>

          {/*COMPLETED TASK*/}

          <div className="bg-red-900 flex flex-col justify-center items-center p-2 gap-3">
            {/** <div className="">*/}
            <div className="flex -translate-x-20 md:-translate-x-60">
              <DocumentCheckIcon className="w-7 h-7 text-gray-500 mb-2 md:w-8 md:h-8 md:mb-4 lg:w-7 lg:h-7 lg:mb-1" />
              <h1 className=" text-red-400 font-medium md:text-2xl lg:text-sm xl:text-lg">
                Completed Task
              </h1>
            </div>
            <div className="md:flex md:flex-row md:gap-10">
              {task.length === 0 ? (
                <div className="w-72 rounded-sm gap-2 lg:w-80 bg-red-500">
                  <div className="bg-white p-4 rounded-md shadow-sm animate-pulse flex flex-col gap-3 w-full">
                    {/* Barra tipo título */}
                    <div className="h-5 bg-gray-200 rounded w-3/4"></div>

                    {/* Barra tipo descripción */}
                    <div className="h-4 bg-gray-200 rounded w-full"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>

                    {/* Barra tipo detalle */}
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
              ) : (
                elementosCompletedTask.map((compl) => (
                  <CompletedTask
                    key={compl}
                    dateIn={dateInNumber}
                    task={task}
                    openOptionsTaskId={openOptionsTaskId}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
