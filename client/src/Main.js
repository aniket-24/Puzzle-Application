import React from "react";
import Header from "./Header";
import Task1 from "./Task1";
import Rules from "./Rules";
import './Main.css';
import { useLocation } from "react-router-dom";

function Main() {
  const location = useLocation();

  return (
    <div>
      <Header />
      <Rules />
      <Task1 email={location.state.email}/>
    </div>
  );
}

export default Main;