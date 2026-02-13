import React from "react";
import { Link, Outlet } from "react-router-dom";

const Product = () => {
  return (
    <div>
      <div className="flex items-center justify-center text-white gap-20 p-5">
        <Link to="/product/men">Mens</Link>
        <Link to="/product/women">Women</Link>

        <Link to="/product/baby">Baby Boy</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Product;
