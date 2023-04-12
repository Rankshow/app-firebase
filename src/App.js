import {useState, useEffect} from "react";
import { db } from "./firebase-config";
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";
import './App.css';

function App() {
  const [newName, setNewName] = useState("");
  const [newAge, setAge] = useState(0);

  const [ users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  // create a new user
  const createUser = async () => {
    await addDoc(usersCollectionRef, { name: newName, age: Number(newAge)})
  }

  // update a new user
  const updateUser = async(id, age) => {

    const userDoc = doc(db, "users", id)
    const newFields = {age: age + 1}
    await updateDoc(userDoc, newFields)
  }

  // Deleted user
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
      <input placeholder="Name..." onChange={(e) => {setNewName(e.target.value)}}/>
      <input type="number" placeholder="Age..." onChange={(e) => {setAge(e.target.value)}} />

      <button onClick={createUser}> Create Users</button>
      {
        users.map((user) =>{
          return (
            <div> 
            {" "}
            <h1>Name: {user.name}</h1>
            <h2>Name: {user.age}</h2>
            {/* update user */}
            <button onClick={() => {updateUser(user.id, user.age)}}> Increase Age</button>
            {/* delete user */}
            <button onClick={() => {deteUsers(user.id)}}>Delete</button>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
