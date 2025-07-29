// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
import { LogIn, UserPlus } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-indigo-200 to-blue-200 flex items-center justify-center px-4">
      <div className="backdrop-blur-md bg-white/40 border border-white/30 shadow-xl rounded-3xl p-10 max-w-3xl w-full text-center">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-800 mb-4 animate-fade-in">
          Product Dashboard
        </h1>

        <p className="text-md sm:text-lg text-gray-700 mb-8 max-w-xl mx-auto">
          Easily manage products, track quantities, and perform admin operations in a secure MERN-based web app.
        </p>

        <div className="flex justify-center gap-6 flex-wrap mb-10">
          <Link to="/login">
            <button className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full shadow-md transition duration-300">
              <LogIn className="w-5 h-5" /> Login
            </button>
          </Link>

          <Link to="/register">
            <button className="flex items-center gap-2 bg-white hover:bg-gray-100 border border-indigo-500 text-indigo-700 px-6 py-3 rounded-full shadow-md transition duration-300">
              <UserPlus className="w-5 h-5" /> Sign Up
            </button>
          </Link>
        </div>

       

      </div>
    </div>
  );
};

export default Home;
