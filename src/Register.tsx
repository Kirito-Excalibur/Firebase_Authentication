import { useState } from "react";
import { useAuthContext } from "./hooks/useAuthContext";
import { useSignup } from "./hooks/useSignup";

function Register() {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signup, isPending, error } = useSignup();
  const { dispatch } = useAuthContext();

  const handleSubmission = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    signup(email, password, displayName);
    console.log(email, password, displayName);
  };

  return (
    <div className="App flex flex-col   items-center justify-center">
      <form
        onSubmit={handleSubmission}
        className="border p-5 w-[400px] flex flex-col justify-center items-center mt-10  gap-2 bg-gray-300 rounded-md"
      >
        <h1 className="text-2xl font-bold">Registration</h1>

        <span>Name</span>
        <input
          className="px-2"
          placeholder="Name"
          type="text"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
        <span>Email</span>
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

        <span>Mobile Number</span>
        <input className="px-2" placeholder="Phone no" type="number" />
        <span>Father's Name</span>
        <input className="px-2" placeholder="Father's Name" type="text" />
        <span>School</span>
        <input className="px-2" placeholder="School" type="text" />
        <span>How long have you been playing cricket?</span>
        <input className="px-2" placeholder="Time" type="text" />
        <span className="text-red-500 font-semibold">{error}</span>
        <span className="flex gap-4 mt-4">
          {!isPending && (
            <button className="hover:cursor-pointer border-green-500 bg-green-400 border px-5 py-1 rounded-lg transition-all  hover:bg-green-600">
              Register
            </button>
          )}
          {isPending && (
            <button
              className="btn   border-green-500 bg-green-400 border px-5 py-1 rounded-lg transition-all  hover:bg-green-600"
              disabled
            >
              loading
            </button>
          )}
        </span>
      </form>
    </div>
  );
}

export default Register;
