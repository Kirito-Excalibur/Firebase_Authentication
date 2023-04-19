import "./Home.modules.css";
import { useAuthContext } from "./hooks/useAuthContext";
import { useCollection } from "./hooks/useCollection";
import TransactionList from "./TransactionList";
import TransactionForm from "./TransactionForm";
function Home() {
  const { user } = useAuthContext();
  const { documents, error } = useCollection("transactions", [
    "uid",
    "==",
    user.uid,
  ]);
  console.log(user.displayName);
  return (
    <div className="container">
      <div className="content">
        <h1 className="text-xl font-bold">Transaction List</h1>
        {error && <p>{error}</p>}
        {documents && <TransactionList transactions={documents} />}
      </div>
      <div className="sidebar">
        <TransactionForm uid={user.uid} />
      </div>
    </div>
  );
}

export default Home;
