import React, { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [users, setUsers] = useState([]);
  const [count, setCount] = useState(0);
  const [randomNum, setRandomNum] = useState(null);
  const [result, setResult] = useState("");

  async function getUsers() {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    setUsers(response.data);
  }

  useEffect(() => {
    getUsers();
  }, []);

  // count increase after 1 sec
  useEffect(() => {
    const id = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  // random number if 7 you win
  const generateNumber = () => {
    const num = Math.floor(Math.random() * 10);
    setRandomNum(num);

    if (num === 7) {
      setResult("You Won");
    } else {
      setResult("You Lost");
    }
  };

  return (
    <div>
      <h1>Axios</h1>

      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
      <h2>Count: {count}</h2>

      <hr />

      <h2>Random Number</h2>
      <button onClick={generateNumber}>Click</button>
      {randomNum !== null && ( 
        <>
          <h3>Number: {randomNum}</h3>
          <h2>{result}</h2>
          {result == "You Won" && (
            <img
              src="https://media.giphy.com/media/111ebonMs90YLu/giphy.gif"
              width="200"
              alt="win"
            />
          )}

          {result == "You Lost" && (
            <img
              src="https://media.giphy.com/media/3o6wrvdHFbwBrUFenu/giphy.gif"
              width="200"
              alt="loss"
            />
          )}
        </>
      )}
    </div>
  );
};

export default App;