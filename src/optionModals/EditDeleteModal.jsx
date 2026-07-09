//77 Permission to dance live

export function EditDeleteModal() {
  return (
    <>
      <div className="bg-red-500 rounded-sm fixed mt-3 text-[11px] w-10 P-0.5">
        <div className="flex flex-col text-center gap-0.5">
          <button className="hover:bg-red-400 rounded-sm cursor-pointer">Edit</button>
          <button className="hover:bg-red-400 rounded-sm cursor-pointer">Delete</button>
        </div>
      </div>
    </>
  );
}
