import React from "react";
import App1 from "./App1";
import Main from "./Main";
import Admin from "./Admin";
import Rules from "./Rules";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Signup";
import Sound from "react-sound";

function App() {
  return (
    <div>
      <Sound url="./audio.mp3"></Sound>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App1 />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/temp" element={<Main />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
