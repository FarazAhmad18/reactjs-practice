import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router"; 
import { updateToPastes, addToPastes } from "../redux/pasteSlice";
import toast from "react-hot-toast"; 

const Home = () => {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState("");
  const [params, setParams] = useSearchParams();
  const pasteId = params.get("pasteId");
  const dispatch = useDispatch();

  function createPaste() {
    //Prevent empty pastes
    if (!title.trim() || !value.trim()) {
      toast.error("Title and content cannot be empty!");
      return;
    }

    const paste = {
      title: title.trim(),
      value: value.trim(),
      _id: pasteId || Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };

    if (pasteId) {
      // Update existing paste
      dispatch(updateToPastes(paste));
    } else {
      // Create new paste
      dispatch(addToPastes(paste));
    }

    // Clear input fields after submission
    setTitle("");
    setValue("");
    setParams({});
  }

  return (
    <div className="max-w-screen-md mx-auto px-4">
      <div className="flex flex-wrap justify-center mt-9 gap-2">
        <input
          className="p-2 border-2 rounded-lg border-gray-500 text-lg font-medium w-full sm:w-auto"
          type="text"
          placeholder="Enter title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button
          className="bg-orange-400 px-4 py-2 border rounded-lg text-lg text-white font-medium"
          onClick={createPaste}
        >
          {pasteId ? "Update Paste" : "Create Paste"}
        </button>
      </div>

      <div className="flex justify-center mt-8">
        <textarea
          className="p-2 border-2 rounded-lg border-gray-500 text-lg font-medium w-full max-w-lg placeholder:text-black"
          placeholder="Enter Content here"
          rows={10}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></textarea>
      </div>
    </div>
  );
};

export default Home;


