import React from "react";
import "./Home.modules.css";
import { useAuthContext } from "./hooks/useAuthContext";
import TransactionForm from "./TransactionForm";
function Home() {
  const { user } = useAuthContext();
  return (
    <div className="container">
      <div className="content">transaction list</div>
      <div className="sidebar">
        <TransactionForm uid={user.uid} />
      </div>
    </div>
  );
}

export default Home;
