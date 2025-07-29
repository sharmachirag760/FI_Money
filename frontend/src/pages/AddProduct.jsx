// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function AddProduct() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    productName: "",
    type: "",
    sku: "",
    productImageUrl : "",
    price: 0,
    quantity: 0,
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:5500/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        credentials: "include"
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Product created!");
        navigate("/products");
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
      toast.success("Failed to add product");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Add Product</h2>
        {["productName", "type", "sku","productImageUrl", "description"].map((name) => (
          <div className="mb-4" key={name}>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </label>
            <input
              type="text"
              name={name}
              value={formData[name]}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            />
          </div>
        ))}
        {["price", "quantity"].map((name) => (
          <div className="mb-4" key={name}>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </label>
            <input
              type="number"
              name={name}
              value={formData[name]}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
            />
          </div>
        ))}
        <button type="submit" className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded">
          Add Product
        </button>
      </form>
    </div>
  );
}