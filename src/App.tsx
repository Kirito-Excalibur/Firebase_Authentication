import { useEffect, useState } from "react";
import { useLogin } from "./hooks/useLogin";
import { Link } from "react-router-dom";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isPending } = useLogin();
  const handleSubmission = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    login(email, password);
  };
  return (
    <div className="App flex flex-col items-center justify-center">
      <form
        onSubmit={handleSubmission}
        className="border min-h-[400px] w-[400px] flex flex-col justify-center items-center mt-10  gap-2 bg-gray-300 rounded-md"
      >
        <h1 className="text-2xl font-bold">CRICKET ACADEMY</h1>

        <h1>Email</h1>
        <input
          className="px-2"
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <span>Password</span>

        <input
          className="px-2"
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <span className="flex gap-4 mt-4">
          {!isPending && (
            <button className="border-red-500 bg-red-400 border px-5 py-1 rounded-lg transition-all  hover:bg-red-600">
              Log In
            </button>
          )}
          {isPending && (
            <button
              className="border-red-500 bg-red-400 border px-5 py-1 rounded-lg transition-all "
              disabled
            >
              Loading
            </button>
          )}
          <Link to="/register">
            <button className="border-green-500 bg-green-400 border px-5 py-1 rounded-lg transition-all  hover:bg-green-600">
              Register
            </button>
          </Link>
        </span>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}

export default App;
