import { signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
  const [isCancelled, settIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const login = async (email, oassword) => {
    setError(null);
    setIsPending(true);
    //sign the user out
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);

      //dispatch logout action
      dispatch({ type: "LOGIN", payload: res.user });
      //update state
      if (!isCancelled) {
        setIsPending(false);
        setError(null);
      }
    } catch (err) {
      if (!isCancelled) {
        console.log(err.message);
        setError(err.message);
        setIsPending(false);
      }
    }
  };

  useEffect(() => {
    return () => settIsCancelled(true);
  }, []);

  return { login, error, isPending };
};
