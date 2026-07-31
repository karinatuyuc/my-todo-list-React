import {
  DocumentCheckIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";

export default function CompletedTask({ dateIn }) {

  function deleteCompletedTask () {
    return alert("Seguro que desea eliminar el task seleccioando?")
  }


  return (
    <>
      {/**CARDS*/}
      {/*CARD TASKS */}
      <div className="grid grid-cols-1 gap-4  rounded-sm md:p-2 md:flex md:flex-row">
        {/**Card #1 */}
        <div className="w-64 max-w-sm mx-auto bg-red-900 border-2 p-1 mb-3 rounded-lg border-gray-300 md:grid md:grid-cols-1 
        md:w-72 lg:w-64">
          <div className="flex gap-2">
            {/**This  is the cricle  */}
            <div className=" flex ">
              <span className="w-3 h-3 border-2 rounded-full text-red-500"></span>{" "}
              {/**This sould be interactive too */}
            </div>

            {/*CARD TASKS */}
            <div className="grid w-full p-2">
              <span className="font-bold text-sm text-ellipsis break-all line-clamp-2 text-black">
                TITULO DEL TASK
              </span>

              <div className="text-sm h-14 text-ellipsis w-full m-0.5">
                <p className="text-xs font-medium text-gray-900 line-clamp-4 break-all">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae autem beatae est eius iure rem quasi et! Temp ora
                  laboriosam nisi nulla deleniti non inventore ab temp ore
                  perspiciatis voluptas? Quam eum, quos repudiandae na m laborum
                  iure non dolor magni magnam dolores sapiente d eserunt illum
                  delectus vel ratione doloremque illo cumque labore totam eos
                  ipsum. Debitis quas rerum inventore su nt tempora eligendi
                  quod perferendis, deserunt atque, m olestiae veniam ea error,
                  at ut a similique? Quaerat acc usamus est amet molestiae
                  asperiores non nesciunt, et ip sum corrupti, pariatur facere
                  vel, libero tempore soluta odio ipsam esse. Quam veniam error
                  quas a minima laboru m. Amet, possimus temporibus. Sequi
                  commodi natus non d oloremque repellendus cupiditate suscipit
                  aliquam, offi ciis, accusamus asperiores neque. Optio quas rem
                  sed ex , debitis distinctio recusandae vel adipisci commodi qu
                  am architecto laborum autem sint voluptatibus? Laudanti um
                  illo eos enim! Ex dolore placeat numquam reiciendis ipsum
                  dolores laboriosam! Quos ad enim quod quia odit?
                </p>
              </div>
              {/** CARD FOOTER */}
              <div className="text-[8px] grid grid-cols-3 justify-between mt-2.5">
                <span className="text-white">
                  Priority: <span></span>
                </span>
                <span className="">
                  Status: <span className="text-red-600">No status</span>
                </span>{" "}
                {/**This should be interactive  */}
                <span className="text-gray-500">
                  Created on: <span>{dateIn}</span>
                </span>
              </div>
            </div>

              <div className="cursor-pointer">
                <EllipsisHorizontalIcon
                 className="w-5 h-5"
                 onClick={deleteCompletedTask}
                />
                  
                
              </div>
          </div>
        </div>
      </div>

      {/** </div>*/}
    </>
  );
}
