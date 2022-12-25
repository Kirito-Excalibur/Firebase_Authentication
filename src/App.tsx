import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import "./App.css";
import { auth } from "./firebase";
import Register from "./Register";

function App() {
  return (
    <div className="App flex flex-col items-center justify-center">
      <form
        action=""
        className="border min-h-[400px] w-[400px] flex flex-col justify-center items-center mt-10  gap-2 bg-gray-300 rounded-md"
      >
        <h1 className="text-2xl font-bold">CRICKET ACADEMY</h1>

        <h1>Name</h1>
        <input className="px-2" placeholder="Name" type="text" />
        <span>Password</span>

        <input className="px-2" placeholder="Password" type="password" />
        <span className="flex gap-4 mt-4">
          <button className="border-red-500 bg-red-400 border px-5 py-1 rounded-lg transition-all  hover:bg-red-600">
            Sign In
          </button>
          <Link to="/register">
            <button className="border-green-500 bg-green-400 border px-5 py-1 rounded-lg transition-all  hover:bg-green-600">
              Register
            </button>
          </Link>
        </span>
      </form>
    </div>
  );
}

export default App;
