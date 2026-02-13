import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar2 = () => {
  let navigate = useNavigate();
  return (
    <div className="flex  items-center bg-cyan-700 gap-10 ">
      <button
        onClick={() => {
          navigate("/");
        }}
        className="bg-amber-600 m-5 p-4 text-white rounded active:scale-95"
      >
        Return to Home Page
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
        className="bg-amber-600 m-5 p-4 text-white rounded active:scale-95"
      >
        Previous Page
      </button>
    </div>
  );
};

export default Navbar2;
