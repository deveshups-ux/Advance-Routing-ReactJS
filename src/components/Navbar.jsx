import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <div className="bg-cyan-800 text-white flex justify-between items-center uppercase h-20 ">
        <h3 className="font-bold p-10 ">Dev Kart</h3>
        <div className="gap-20 flex pr-10 ">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/courses">Courses</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/product">Product</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
