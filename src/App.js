import {useState, useEffect} from "react";
import { db } from "./firebase-config";
import { collection, getDocs, addDoc, doc, deleteDoc } from "firebase/firestore";
import CountdownTimer from './CountdownTimer';
import './App.css';

function App() {
  const [newName, setNewName] = useState("");
  const [newAge, setAge] = useState("");

  const [ users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();

  const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;

  // create a new user
  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, age:(newAge)})
  }

  // This function delete the user question
    const deteUsers = async(id) => {
       const userDoc = doc(db, "users",id)
       await deleteDoc(userDoc)
    }
  useEffect(() =>{
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
    }
        
    getUsers();
  }, [])

  return (
    <div className="App">
      <h2>Create a question of your choice</h2>
      <input placeholder="Enter your question" onChange={(e) => {setNewName(e.target.value)}}/>

      <input type="text" placeholder="Answer..." onChange={(e) => {setAge(e.target.value)}} />

      <button className="btn-users" onClick={createUser}> Create Question</button>
      {
        users.map((user) =>{
          return (
            <div> 
            {" "}
            <h3>{user.name}</h3>
            <li>{user.age}</li>
            <CountdownTimer targetDate={dateTimeAfterThreeDays} />

        
            {/* Delete Question */}
            <button className="btn-users" onClick={() => {deteUsers(user.id)}}>Delete</button>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
