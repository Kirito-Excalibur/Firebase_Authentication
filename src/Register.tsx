import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";

function Register() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmission = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/");
        console.log(res);
      })
      .catch((err) => {
        console.log("Error-", err);
        setErrorMsg(err.message);
      });

    console.log(values);
  };

  return (
    <div className="App flex flex-col items-center justify-center">
      <form
        action=""
        className="border p-5 w-[400px] flex flex-col justify-center items-center mt-10  gap-2 bg-gray-300 rounded-md"
      >
        <h1 className="text-2xl font-bold">Registration</h1>

        <span>Name</span>
        <input
          className="px-2"
          placeholder="Name"
          type="text"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, name: event.target.value }))
          }
        />
        <span>Email</span>
        <input
          className="px-2"
          placeholder="Email"
          type="email"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          }
        />
        <span>Password</span>
        <input
          className="px-2"
          placeholder="Password"
          type="password"
          onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          }
        />

        <span>Mobile Number</span>
        <input className="px-2" placeholder="Phone no" type="number" />
        <span>Father's Name</span>
        <input className="px-2" placeholder="Father's Name" type="text" />
        <span>School</span>
        <input className="px-2" placeholder="School" type="text" />
        <span>How long have you been playing cricket?</span>
        <input className="px-2" placeholder="Time" type="text" />
        <span className="text-red-500 font-semibold">{errorMsg}</span>
        <span className="flex gap-4 mt-4">
          <div
            onClick={handleSubmission}
            className="hover:cursor-pointer border-green-500 bg-green-400 border px-5 py-1 rounded-lg transition-all  hover:bg-green-600"
          >
            Register
          </div>
        </span>
      </form>
    </div>
  );
}

export default Register;
