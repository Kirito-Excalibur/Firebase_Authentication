import { useEffect, useState } from "react";

import {
  BrowserRouter,
  Route,
  Routes,
  redirect,
  Navigate,
} from "react-router-dom";
import Home from "./Home";
import { useAuthContext } from "./hooks/useAuthContext";
import Login from "./Login";
import Navbar from "./Navbar";
import Register from "./Register";

function App() {
  const { authIsReady, user } = useAuthContext();

  return (
    <div className="w-full">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            {user && <Route path="/" element={<Home />} />}
            {!user && <Route path="/" element={<Login />} />}
            {!user && <Route path="Register" element={<Register />} />}
            {user && <Route path="Register" element={<Home />} />}
            {!user && <Route path="Login" element={<Login />} />}
            {user && <Route path="Login" element={<Home />} />}
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
