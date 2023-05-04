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
      <h1>
        Welcome buddy, here is the list of usernames and corresponsing score
      </h1>
      <p>Calculation:</p>
      <p>Score = number of tasks completed * 50</p>
      {listOfUsers.map((val) => {
        if (val.email !== "admin@admin.com") {
          return (
            <div className="listOfUsers">
              <div className="user">
                <h3>Username: {val.email}</h3>
                <h3>Score: {Number(val.completed) * 50}</h3>
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
