import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchBar = ({ data }) => {
  const navigate = useNavigate();
  const [input, setInput] = useState(data ?? '');

  const onSearchHandler = (e) => {
    e.preventDefault();
    if (input.trim()) { // Prevent empty search
      navigate(`/course-list/${input}`);
    }
  };

  return (
    <div className="w-full flex justify-center">
      <form onSubmit={onSearchHandler} className="w-full max-w-2xl">
        <div className="flex flex-col sm:flex-row items-center gap-2 mt-6 w-full">
          <input  
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="search" 
            placeholder="Search here..." 
            className="border-2 border-gray-500 rounded-md w-full px-4 py-3 text-black focus:outline-none focus:ring-2"
          />
          <button 
            type="submit"
            className="bg-red-500 px-6 py-3 text-white rounded-md hover:bg-red-600 transition duration-200  sm:w-auto mt-3 sm:mt-0"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
