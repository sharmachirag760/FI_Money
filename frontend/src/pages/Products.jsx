// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [userRole, setUserRole] = useState(null);

  const fetchProducts = async () => {
    try {
      const res = await fetch("http://localhost:5500/products", {
        method: "GET",
        credentials: "include"
      });
      const data = await res.json();
      if (data.success) {
        toast.success("Successfully Fetched");
        setProducts(data.data);
        setUserRole(data.role || "USER");
      } else {
        toast.error(data.message);
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch products");
    }
  };

  const handleQuantityChange = async (id, quantity) => {
    try {
      const res = await fetch(`http://localhost:5500/${id}/quantity`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantity }),
        credentials: "include"
      });
      const data = await res.json();
      if (data.success) {
        fetchProducts();
      } else {
        alert(data.message);
      }
    } catch (err) {
      console.error(err);
      alert("Failed to update quantity");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold mb-6">📦 Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product._id} className="bg-white shadow-md rounded p-4">
            <div className="flex flex-col items-center">
            <h1 className="text-3xl font-semibold mb-2">{product.productName}</h1>
            <img src={product.productImageUrl} alt="" width='200px' height='200px'/>
            </div>
           
            <p className="text-sm text-gray-600 mb-2">Type: {product.type}</p>
            <p className="text-sm text-gray-600 mb-2">SKU: {product.sku}</p>
            <p className="text-sm text-gray-600 mb-2">productImageUrl: <a href={product.productImageUrl} target="blank">Link</a> </p>
            <p className="text-sm text-gray-600 mb-2">Price: ₹{product.price}</p>
            <p className="text-sm text-gray-600 mb-2">Quantity: {product.quantity}</p>
            <p className="text-sm text-gray-500 mb-2">{product.description}</p>
            {userRole === "ADMIN" && (
              <div className="mt-2">
                <input
                  type="number"
                  min="0"
                  placeholder="New Quantity"
                  className="border rounded px-2 py-1 mr-2"
                  onBlur={(e) => handleQuantityChange(product._id, parseInt(e.target.value))}
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
