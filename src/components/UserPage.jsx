// import { Outlet, Link } from "react-router-dom";
// import ReactDOM from 'react-dom/client'
import axios from "axios";
import React, { useEffect, useState } from "react";
import UserList from "./userSecter/UserList";

function UserPage () {
  const [products, setProducts] = useState([
    {
      id: "pid-1",
      name: "Product 1",
      price: 10.0,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIXzoYdO9tqmkjlVHmpgXnOsQb9DWkz_Mfi1Jc7zNzaw&s",
      isSelected: false,
    },
    {
      id: "pid-2",
      name: "Product 2",
      price: 10.0,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIXzoYdO9tqmkjlVHmpgXnOsQb9DWkz_Mfi1Jc7zNzaw&s",
      isSelected: false,
    },
  ]);

  const addProduct = (newProduct) => {
    setProducts([
      ...products,
      { ...newProduct, id: `pid-${products.length + 1}` },
    ]);
  };

  return (
    <div className="p-4">
      <ProductForm addProduct={addProduct} />
      <ProductList products={products} />
    </div>
  );
  // return (
  //   <div className="bg-teal-200">
  //     <div className="flex justify-center font-extrabold text-4xl mb-4">
  //       <h1>Generation Thailand</h1>
  //     </div>
  //     <div className="flex justify-center font-bold text-2xl mb-10">
  //       <span>Home - User Sector</span>
  //     </div>
  //     <div>
  //       <button>

  //       </button>
  //     </div>

  //   </div>
  // );
};

export default UserPage;