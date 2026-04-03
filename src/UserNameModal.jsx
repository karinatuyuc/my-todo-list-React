import { useState } from 'react';

function UserName() {

    const [inputValue, setInputValue] = useState("");



    return (
        <>

        {isOpen && (  
         <div className="bg-black bg-opacity-30 z-50 fixed w-full h-full inset-0 flex justify-center items-center flex-col">
            {/*Caja modal */}
            <div className="bg-white rounded-lg p-6 shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Please enter a Username:</h2>
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="username"
                  className="border p-2 rounded w-full mb-4"
                />
                <button className="bg-red-700 text-white px-4 py-2 rounded hover:bg-blue-600"
                 onClick={nameValid}>Continue</button>
            </div>
          </div>

          ) }

        </>
    )
}

export default UserName;