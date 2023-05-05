import React from "react";
import App1 from "./App1";
import Main from "./Main";
import Admin from "./Admin";
import Rules from "./Rules";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Signup";

function App() {
  return (
    <div>
      <audio autoPlay loop>
        <source source="./audio.mp3" type="audio/mpeg" />
      </audio>
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
