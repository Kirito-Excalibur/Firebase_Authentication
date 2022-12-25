import React from "react";
import { Link, Outlet } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="flex justify-between p-5 bg-gradient-to-r from-green-500 to-blue-500">
        <h1 className="text-2xl font-semibold">Authenticator</h1>
        <div className="flex gap-[1rem] text-2xl">
          <Link to="/register">
            <h1>SignUp</h1>
          </Link>
          <Link to="/login">
            <h1>Login</h1>
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Navbar;
