import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Axios from "axios";
import "./Admin.css";

function Admin() {
  const [listOfUsers, setListOfUsers] = useState([]);
  const location = useLocation();

  useEffect(() => {
    Axios.get("https://backend1-api.onrender.com/getData")
      .then((documents) => {
        setListOfUsers(documents.data);
      })
      .catch(() => {
        alert("Error!");
      });
  }, []);

  return (
    <div className="listOfUsers">
      <h1>LEADER BOARD</h1>
      <h3>Calculation:</h3>
      <br></br>
      <h4>Score = number of tasks completed * 50</h4>
      <br></br>
      <br></br>
      {listOfUsers.map((val) => {
        if (val.email !== "admin@admin.com") {
          return (
            <div className="listOfUsers">
              <div className="user">
                <li>
                  <strong>Username: </strong> {val.email} and{" "}
                  <strong>Score: </strong> {Number(val.completed) * 50}
                </li>
              </div>
            </div>
          );
        } else {
          return <div></div>;
        }
      })}
    </div>
  );
}

export default Admin;
