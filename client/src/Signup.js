import "./App.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Axios from "axios";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password1, setPassword1] = useState("");

  const [done, setDone] = useState(false);
  const navigate = useNavigate();

  function handleClick() {
    navigate("/temp");
  }

  const addUser = () => {
    if (password === password1) {
      Axios.post("https://backend1-api.onrender.com/signup", {
        email: email,
        password: password,
      }).then((response) => {
        if (response.data === "Login successful") {
          alert("You are loged in");
          if (email === "admin@admin.com") {
            navigate("/Admin");
          } else {
            navigate("/temp", { state: { email: email } });
          }
        } else {
          alert(response.data);
        }
      });
    } else {
      alert("Passwords doesn't match");
    }
  };

  return (
    <div className="App">
      <header>
        <h1>
          <center> PUZZLE APPLICATION 🕹️</center>
        </h1>
      </header>
      <br></br>
      <h2>Join US!! ✨</h2>
      <br></br>
      <h2>Explore this PUZZLE and have fun 😁</h2>
      <div className="inputs">
        <input
          type="text"
          placeholder="Enter email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="Enter password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></input>
        <input
          type="text"
          placeholder="Confirm password"
          onChange={(e) => {
            setPassword1(e.target.value);
          }}
        ></input>
        <button onClick={addUser}>Signup</button>
        <br></br>
        <p>
          ⚠️ Please wait for around 1 minute after clicking signup button ⚠️
        </p>
      </div>
    </div>
  );
}

export default Signup;
