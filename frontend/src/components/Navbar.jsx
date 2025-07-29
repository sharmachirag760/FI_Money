// src/components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar({ auth, setAuth }) {
  const handleLogout = () => {
    localStorage.removeItem("user");
    setAuth(null);
  };

  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold"> 🛒 Inventory Management Tool</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-yellow-400">Home</Link>
        <Link to="/products" className="hover:text-yellow-400">Products</Link>

        {auth?.role === "ADMIN" && (
          <>
            <Link to="/add-product" className="hover:text-yellow-400">Create</Link>
            <Link to="/product/:id/quantity" className="hover:text-yellow-400">Update</Link>
          </>
        )}
        {/* {auth?.role === "ADMIN" && (
          <>
            <Link to="/add-product" className="hover:text-yellow-400">Create</Link>
          </>
        )} */}

        {!auth ? (
          <>
            <Link to="/login" className="hover:text-yellow-400">Login</Link>
            <Link to="/register" className="hover:text-yellow-400">Register</Link>
          </>
        ) : (
          <button onClick={handleLogout} className="hover:text-red-400">Logout</button>
        )}
      </div>
    </nav>
  );
}
