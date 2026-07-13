//77 Permission to dance live
import { forwardRef } from "react";
export const EditDeleteModal = forwardRef( ( props, ref) => {
  return (
    <>
      <div className="bg-red-500 rounded-sm fixed mt-3 text-[11px] w-10 P-0.5" ref={ref}>
        <div className="flex flex-col gap-0.5">
          <button className="hover:bg-red-400 rounded-sm cursor-pointer">Edit</button>
          <button className="hover:bg-red-400 rounded-sm cursor-pointer">Delete</button>
        </div>
      </div>
    </>
  );
})
