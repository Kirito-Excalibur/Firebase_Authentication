import { useEffect, useState } from "react";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import Login from "./Login";
import Navbar from "./Navbar";
import Register from "./Register";

function App() {
  const { authIsReady } = useAuthContext();

  return (
    <div className="w-full">
      {authIsReady && (
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Register />} />
            <Route path="Login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
