import { CircularProgressbar } from "react-circular-progressbar";
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

  //Emoji hand waving
  const date = new Date(); //Creating the local date

  const dayMonth = date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
  });

  const dateInNumber = date.toLocaleDateString("en-US"); // To show the date in number

  let taskLimit = task.slice(0, 2);
  const totalCompleted = taskLimit.length;

  const limiteDiv2 = totalCompleted === 2 ? 2 : 1;
  const elementosCompletedTask = task.slice(0, limiteDiv2);
  const percentageCompleted = 84;
  const percentageInProgress = 46;
  const percentageNotStarted = 13;

  return (
    <>

      <section className="lg:grid lg:grid-cols-2 lg:gap-8 lg:mt-4 md:gap-16">
        {/*ADD TASK SECTION AND CARDS TASKS (different component in REVIEW)*/}
        <div
          className={` shadow-2xl drop-shadow-lg rounded p-2 lg:p-0 mb-6`}
        >
          <div className={`lg:top-0 lg:sticky`}>
            <div className="flex justify-between p-2.5 lg:h-20 lg:p-4">
              <span
                className="absolute text-justify left-16 text-xm ml-2 font-medium md:text-2xl lg:text-lg text-red-400"
                onClick={setEditTaskModal}
              >
                To-Do
              </span>
              <div className="relative">
                <ClipboardDocumentCheckIcon className="w-7 h-7 absolute md:w-8 md:h-8" />
                <ClockIcon
                  className="w-5 h-5 relative left-3 top-4 p-0.5 bg-gray-200 text-gray-400 rounded-full
                                       md:left-4 md:top-5 lg:top-4 lg:w-5 lg:h-5 lg:p-0.5"
                />
              </div>

              <span className="absolute text-black text-justify mt-10 text-[12px] md:text-sm md:mt-14 lg:text-[10px] lg:mt-10">
                {dayMonth}
                <span
                  className="text-gray-400 m-4 md:text-sm"
                >
                  Today
                </span>
              </span>

              <button
                className="flex items-center text-sm cursor-pointer gap-1
                              md:text-base"
              >
                <PlusIcon
                  className="w-5 h-5 text-red-400 font-medium
                                   md:w-6 md:h-6"
                  onClick={() => setModalAddTask(true)}
                />
                <span className="text-gray-400 md:text-2xl lg:text-sm">
                  Add task
                </span>
              </button>
            </div>
          </div>

          <div
            className=" flex flex-col justify-start items-center p-3 mt-4
          md:flex md:flex-row md:justify-center md:items-center md:gap-6 md:p-1 lg:flex lg:bg-amber-400 lg:flex-col"
          >
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

        <div className="p-1 lg:p-0 mb-6 rounded">
          {/* TASK STATUS*/}
          <div className=" shadow-2xl mb-4 p-2 rounded-lg drop-shadow-lg">
            <div className=" relative flex gap-4">
              <div className="">
                <ClipboardIcon className="w-7 h-7 absolute text-gray-400 md:w-10 md:h-10 lg:w-7 lg:h-7" />
                <CheckCircleIcon
                  className="w-4 h-4 relative mt-3 left-3 rounded-full bg-gray-400
                   md:w-6 md:h-6 lg:w-4 lg:h-4"
                />
              </div>
              <span className="text-red-400 font-medium md:text-2xl lg:text-lg">
                Task Status
              </span>
            </div>

            {/*Progress circles*/}
            <div className="grid grid-cols-3 gap-4 p-3">
              <div className="">
                <CircularProgressbar
                  value={percentageCompleted}
                  text={`${percentageCompleted} %`}
                  strokeWidth={14}
                  styles={{
                    path: { stroke: "#008000" },
                    trail: { stroke: "#C0C0C0" },
                    text: {
                      fontSize: "17px",
                      fontWeight: "bold",
                      textAnchor: "middle",
                      dominantBaseline: "middle",
                    },
                  }}
                />
                <div className="flex justify-center items-center mt-2 md:gap-1 md:mt-1">
                  <span className="text-[10px] text-center md:text-2xl lg:text-base text-black">
                    Completed
                  </span>
                </div>
              </div>
              <div className="">
                <CircularProgressbar
                  value={percentageInProgress}
                  text={`${percentageInProgress} %`}
                  strokeWidth={14}
                  styles={{
                    path: { stroke: "#000080" },
                    trail: { stroke: "#C0C0C0" },
                    text: {
                      fontSize: "17px",
                      fontWeight: "bold",
                      textAnchor: "middle",
                      dominantBaseline: "middle",
                    },
                  }}
                />
                <div className="flex justify-center items-center mt-2 md:gap-1 md:mt-1">
                  <span className="text-[10px] text-center md:text-2xl lg:text-base text-black">
                    In Progress
                  </span>
                </div>
              </div>
              <div className="">
                <CircularProgressbar
                  value={percentageNotStarted}
                  text={`${percentageNotStarted} %`}
                  strokeWidth={14}
                  styles={{
                    path: { stroke: "#FF0000" },
                    trail: { stroke: "#C0C0C0" },
                    text: {
                      fontSize: "17px",
                      fontWeight: "bold",
                      textAnchor: "middle",
                      dominantBaseline: "middle",
                    },
                  }}
                />
                <div className="flex justify-center items-center mt-2 md:gap-1 md:mt-1">
                  <span className="text-[10px] text-center md:text-2xl lg:text-base text-black">
                    Not Started
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/*COMPLETED TASK*/}

          <div className="border-2 shadow-2xl not-only-of-type:flex flex-col justify-center items-center p-2 gap-3 rounded-lg lg:bg-neutral-700">
            {/** <div className="">*/}
            <div className="flex -translate-x-16 md:-translate-x-56 lg:bg-amber-300 lg:-translate-x-20">
              <DocumentCheckIcon className="w-7 h-7 text-gray-500 mb-2 md:w-8 md:h-8 md:mb-4 lg:w-7 lg:h-7 lg:mb-1" />
              <h1 className=" text-red-400 font-medium md:text-2xl lg:text-sm xl:text-lg">
                Completed Task
              </h1>
            </div>
            <div className="md:flex md:flex-row md:gap-10 lg:flex lg:flex-col">
              {task.length === 0 ? (
                <div className="w-60 rounded-sm gap-2 lg:w-80 border-gray-200 border-2">
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
