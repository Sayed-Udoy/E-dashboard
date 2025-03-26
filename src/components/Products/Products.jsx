import React from "react";
import ProductCard from "./product-card";

const demoProducts = Array.from({ length: 30 }, (_, index) => ({
  id: index + 1,
  name: `Product ${index + 1}`,
  price: (Math.random() * 1000).toFixed(2),
  status: ["In Stock", "Out of Stock", "Low Stock"][
    Math.floor(Math.random() * 3)
  ],
  permissions: ["All", "Admin", "Staff"][Math.floor(Math.random() * 3)],
  image: `https://picsum.photos/100/100?random=${index}`,
}));

const Products = () => {
  return (
    <div className="text-gray-200 w-full">
      <ProductCard products={demoProducts} />
    </div>
  );
};

export default Products;
