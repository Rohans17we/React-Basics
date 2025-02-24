import React from "react";
import "./ProductList.css";

const products = [
  { name: "Printed Cotton Jacket", tags: ["Unisex", "Bag"], var: 3, price: "$45.00", stock: 999, low: 500 },
  { name: "Blue Faux Leather", tags: ["Unisex", "Bag"], var: 3, price: "$45.00", stock: 999, low: 500 },
  { name: "Tribal Waterfall Vest", tags: ["Unisex", "Bag"], var: 3, price: "$45.00", stock: 999, low: 500 },
  { name: "Braver Bomber Jacket", tags: ["Unisex", "Bag"], var: 3, price: "$45.00", stock: 999, low: 500 },
  { name: "Olive Drape Vest", tags: ["Unisex", "Bag"], var: 3, price: "$45.00", stock: 999, low: 500 },
  { name: "Black Denim Jacket", tags: ["Unisex", "Bag"], var: 3, price: "$45.00", stock: 999, low: 500 },
  { name: "Army Green Jacket", tags: ["Unisex", "Bag"], var: 3, price: "$45.00", stock: 999, low: 500 },
];

const ProductList = () => {
  return (
    <div className="product-list-container">
      <div className="header-container">
        <div className="header-left">
          <h2>Products</h2>
          <div className="breadcrumbs">Dashboard / Products</div>
        </div>
        <div className="status-buttons">
          <button className="active">Active</button>
          <button>Inactive</button>
          <button>All</button>
        </div>
      </div>

      <table className="product-list-table">
      <thead>
        <tr>
            <th rowSpan="2"></th>
            <th rowSpan="2">Product</th>
            <th rowSpan="2">Tags</th>
            <th colSpan="4">NYC Outlet</th>
        </tr>
        <tr>
            <th>View</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Low</th>
        </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.name}>
              <td>
                <input type="checkbox"  /> 
              </td>
              <td className="product-name">{product.name}</td>
              <td>
                {product.tags.map((tag, index) => (
                  <span key={index} className="tag">{tag}</span>
                ))}
              </td>
              <td>{product.var}</td>
              <td>{product.price}</td>
              <td>{product.stock}</td>
              <td>{product.low}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;