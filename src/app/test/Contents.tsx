
'use client';
import { db } from "@/lib/firebase";
import { doc, updateDoc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function Contents() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const docRef = getDoc(doc(db, "counts", "counter"));
    docRef.then((doc) => {
      doc.exists() ? setCount(doc.data().count) : console.error("Document not found");
    });

    return  () => {
      
    }
  }, []);

  // Function to increment count in Firestore
  const incrementCount = () => {
    const docRef = doc(db, "counts", "counter");
    updateDoc(docRef, { count: count + 1 })
      .then(() => {
        setCount(count + 1);
      })
      .catch((error) => {
        console.error("Error updating count: ", error);
      });
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}