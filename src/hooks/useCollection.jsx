import { useEffect, useRef, useState } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../firebase";

export const useCollection = (collections, _query) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);
  //If we dont use a ref --> infinite loop in useEffect
  //_query is an array and is "different" on every function call
  // const query = useRef(_query).current;

  useEffect(() => {
    let Colref = collection(db, collections);

    if (_query) {
      Colref = query(Colref, where(..._query));
    }

    const unsubscribe = onSnapshot(
      Colref,
      (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });

        //update state
        setDocuments(results);
        setError(null);
      },
      (error) => {
        console.log(error);
        setError("Couldn't fetch the data");
      }
    );

    //unsubscribe on unmount
    return () => unsubscribe();
  }, [collections, query]);

  return { documents, error };
};
