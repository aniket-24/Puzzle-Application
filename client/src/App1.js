import "./App.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Axios from "axios";

function App1() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [done, setDone] = useState(false);
  const navigate = useNavigate();

  function handleClick() {
    navigate("/temp");
  }

  function handleSignup() {
    navigate("/signup");
  }

  const addUser = () => {
    Axios.post("https://backend1-api.onrender.com/addUser", {
      email: email,
      password: password,
    }).then((response) => {
      if (response.data === "Login successful") {
        alert("You are loged in");
        if (email === "admin@admin.com") {
          navigate("/Admin", { state: { name: "hi" } });
        } else {
          navigate("/temp", { state: { email: email } });
        }
      } else {
        alert(response.data);
      }
    });
  };

  return (
    <div className="App">
      <header>
        <h1>
          <center> PUZZLE APPLICATION 🕹️</center>
        </h1>
      </header>
      <br></br>
      <h2>Checkout Your Soft Skills! 🧩</h2>
      <br></br>
      <h2>Enjoy🎉🎉</h2>
      <div className="inputs">
        <input
          type="text"
          placeholder="Enter your email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="Enter your password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <button onClick={addUser}>Login</button>
        <button onClick={handleSignup}>Signup</button>
        <br></br>
        <p>⚠️ Please wait for around 1 minute after clicking login button ⚠️</p>
        <br></br>
      </div>
    </div>
  );
}

export default App1;
