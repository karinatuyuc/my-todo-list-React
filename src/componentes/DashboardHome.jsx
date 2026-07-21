export function DashboardHome() {
  return <>


  <div>
         <section
                className="border-2 border-gray-200 m-4 mb-5 mt-12 p-6 md:min-h-screen md:p-10 shadow-2xl
                "
              >
                <div className="lg:grid  lg:grid-cols-2 lg:gap-6 lg:h-screen">
                  {/*ADD TASK SECTION AND CARDS TASKS (different component in REVIEW)*/}

                  <div
                    ref={tasksRef}
                    onScroll={handleScroll}
                    className={`w-full border-2 border-gray-200 shadow-2xl drop-shadow-lg mb-3 rounded p-4
                    lg:p-0 lg:min-h-full lg:overflow-auto`}
                  >
                    <div
                      className={`lg:top-0 lg:sticky text-red-400 ${hasScrolled ? "bg-red-400 text-white" : "bg-gray-00"}`}
                    >
                      <div className="flex justify-between p-2.5 lg:h-17">
                        <span className="absolute text-justify left-16 text-xm ml-2 font-medium md:text-2xl lg:text-lg"
                        onClick={setEditTaskModal}>
                          To-Do
                        </span>
                        <div className="relative">
                          <ClipboardDocumentCheckIcon
                            className="w-7 h-7 absolute
                                      md:w-8 md:h-8"
                          />
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

                    <div className="">
                      {task.length === 0 ? (
                        <div className=" p-1.5 rounded-sm gap-2 mt-12 m-6">
                          <div className="bg-white p-4 rounded-md shadow-sm animate-pulse flex flex-col gap-3">
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
                        
                          task.map((tasks) => (
                            
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
                  </div>

                  <div className="lg:flex lg:flex-col lg:h-screen md:p-0.5 lg:p-0.5 ">
                    {/* TASK STATUS*/}
                    <div
                      className="border-2 border-gray-300 drop-shadow-lg rounded-2xl mb-2 h-full p-2
                    md:mb-12
                    lg:h-80 lg:pt-3 lg:mb-4"
                    >
                      <div className="flex gap-4  md:pb-6 lg:pb-4">
                        <div className="flex relative mb-4 md:mt-2">
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
                      <div className="grid grid-cols-3 gap-1.5 h-full">
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

                    <div
                      className=" border-2 drop-shadow-lg border-gray-300 p-4 h-full mt-4 rounded-2xl 
                      md:p-5
                     lg:mt-0 lg:p-2"
                    >
                      <CompletedTask dateIn={dateInNumber} />
                    </div>

                    <div className="h-60">
                      <TaskGrid />
                    </div>
                  </div>
                </div>
              </section>

  </div>
  
  
  </>;
}
