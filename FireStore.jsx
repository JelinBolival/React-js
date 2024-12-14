import React, { useEffect, useState } from "react";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { app } from "../Firebase";

const db = getFirestore(app);

const FireStore = () => {
  const [data, setData] = useState([]); 

  async function adddata() {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        first: "Jungkook",
        last: "Jeon",
        born: 1997,
      });
      console.log("Document written with ID:", docRef.id);
    } catch (e) {
      console.error("Error adding document:", e);
    }
  }

  async function getdata() {
    try {
      const querySnapshot = await getDocs(collection(db, "users"));
      const users = [];
      querySnapshot.forEach((doc) => {
        users.push({ id: doc.id, ...doc.data() }); 
      });
      setData(users);
      console.log("Fetched data:", users);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <div>
      <button onClick={adddata}>Write</button>
      <button onClick={getdata}>Get Data</button>
      <ul>
        {data.map((user) => (
          <li key={user.id}>
             First Name: {user.first}, Last Name: {user.last}, Born: {user.born}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FireStore;