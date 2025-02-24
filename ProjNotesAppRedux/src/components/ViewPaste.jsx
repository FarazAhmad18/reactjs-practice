// import React from 'react'

// const ViewPaste = () => {
//   return (
//     <div>
//       View Paste
//     </div>
//   )
// }

// export default ViewPaste
import React from 'react';

const ViewPaste = ({ paste, onClose }) => {
  if (!paste) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded-lg max-w-lg">
        <h2 className="text-xl font-bold">{paste.title}</h2>
        <p className="mt-2">{paste.value}</p>
        <button className="bg-red-500 text-white px-3 py-1 rounded mt-4" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default ViewPaste;
