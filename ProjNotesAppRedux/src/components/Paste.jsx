import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateToPastes, removeFromPastes, resetAllPastes } from "../redux/pasteSlice";
import toast from "react-hot-toast";

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, setSearchTerm] = useState("");
  const [editingPaste, setEditingPaste] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedValue, setEditedValue] = useState("");
  const dispatch = useDispatch();

  // Filter function
  const filterData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Handle delete
  const handleDelete = (pasteId) => {
    dispatch(removeFromPastes(pasteId));
  };

  // Handle copy
  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to clipboard!");
  };

  // Handle share
  const handleShare = (paste) => {
    if (navigator.share) {
      navigator.share({
        title: paste.title,
        text: paste.value,
      });
    } else {
      toast.error("Sharing not supported on this browser.");
    }
  };

  // Handle edit mode
  const startEditing = (paste) => {
    setEditingPaste(paste._id);
    setEditedTitle(paste.title);
    setEditedValue(paste.value);
  };
//
const handleResetAll = () => {
    dispatch(resetAllPastes());
    toast.success("All pastes have been reset!");
  };
  // Handle save edit
  const saveEdit = () => {
    dispatch(
      updateToPastes({
        _id: editingPaste,
        title: editedTitle,
        value: editedValue,
      })
    );
    setEditingPaste(null);
    toast.success("Paste updated successfully!");
  };

  return (
    <div className="max-w-screen-md mx-auto">
      {/* Search Bar */}
      <div className="flex mt-7">
        <input
          type="search"
          className="pl-2 py-3 w-1/2 rounded-lg font-medium text-black border-2 border-gray-800"
          value={searchTerm}
          placeholder="Search here"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Pastes List */}
      <div className="flex flex-col gap-5 mt-8">
        {filterData.map((paste) => (
          <div
            key={paste._id}
            className="border border-purple-600 rounded-xl px-2 py-4 text-lg"
          >
            {/* If editing, show input fields */}
            {editingPaste === paste._id ? (
              <div>
                <input
                  type="text"
                  className="border p-2 rounded w-full mb-2"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                />
                <textarea
                  className="border p-2 rounded w-full"
                  rows="5"
                  value={editedValue}
                  onChange={(e) => setEditedValue(e.target.value)}
                ></textarea>
              </div>
            ) : (
              // Show paste details
              <div>
                <div className="font-bold">Title: {paste.title}</div>
                <div className="text-gray-700">Content: {paste.value}</div>
              </div>
            )}

            {/* Buttons */}
            <div className="flex gap-4 mt-3">
              {editingPaste === paste._id ? (
                <>
                  <button
                    className="bg-green-500 px-3 border rounded-md font-semibold text-white py-2"
                    onClick={saveEdit}
                  >
                    Save
                  </button>
                  <button
                    className="bg-gray-500 px-3 border rounded-md font-semibold text-white py-2"
                    onClick={() => setEditingPaste(null)}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="bg-blue-500 px-3 border rounded-md font-semibold text-white py-2"
                    onClick={() => startEditing(paste)}
                  >
                    Edit
                  </button>
                  <button
                    className="bg-red-500 px-3 border rounded-md font-semibold text-white py-2"
                    onClick={() => handleDelete(paste._id)}
                  >
                    Delete
                  </button>
                  <button
                    className="bg-purple-500 px-3 border rounded-md font-semibold text-white py-2"
                    onClick={() => handleCopy(paste.value)}
                  >
                    Copy
                  </button>
                  <button
                    className="bg-teal-500 px-3 border rounded-md font-semibold text-white py-2"
                    onClick={() => handleShare(paste)}
                  >
                    Share
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
      {pastes.length > 0 && (
  <button
    className="bg-red-500 px-3 border rounded-md font-semibold text-white py-2 mt-3"
    onClick={handleResetAll}
  >
    Reset All
  </button>
)}
    </div>
  );
};

export default Paste;
