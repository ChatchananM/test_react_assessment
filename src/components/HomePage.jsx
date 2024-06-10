// import { Outlet, Link } from "react-router-dom";
import React from 'react'
// import ReactDOM from 'react-dom/client'


const HomePage = () => {
  return (
    <div className="bg-fuchsia-200">
      <div className="flex justify-center font-extrabold text-4xl mb-4">
        <h1>Generation Thailand</h1>
      </div>
      <div className="flex justify-center font-bold text-2xl mb-10">
        <span>React - Assessment</span>
      </div>
      <div>
        <button
          type="submit"
          className="px-4 py-2 rounded-md bg-gray-400 hover:bg-gray-500 text-black"
        >
          User Home Sector
        </button>
      </div>

    </div>
  );
};

export default HomePage;
