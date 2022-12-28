import { useEffect, useState } from "react";
import { auth } from "../firebase";
import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const [isCancelled, settIsCancelled] = useState(false);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const logout = async () => {
    setError(null);
    setIsPending(true);
    //sign the user out
    try {
      await auth.signOut();

      //dispatch logout action
      dispatch({ type: "LOGOUT" });
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

  return { logout, error, isPending };
};
