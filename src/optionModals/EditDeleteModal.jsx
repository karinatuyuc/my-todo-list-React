//77 Permission to dance live
import { forwardRef } from "react";
export const EditDeleteModal = forwardRef(( {onEdit, onDelete}, ref) => {

  return (
    <>
      <div className="absolute bg-gray-800 rounded-md shadow-lg w-16 mr-6 text-sm" ref={ref}>
          <button className="block w-full text-left px-4 py-2 text-white hover:bg-gray-700 cursor-pointer"
          onClick={onEdit}
          >Edit</button>
          <button 
          className="block w-full text-left px-4 py-2 text-white hover:bg-gray-700 cursor-pointer"
          onClick={onDelete}>
            Delete
          </button>
      </div>
    </>
  );
})