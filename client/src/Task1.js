import React, { useState, useEffect } from "react";
import Task2 from "./Task2";
import Axios from "axios";

function Task1(props) {
  const [one, setOne] = useState("");
  const [two, setTwo] = useState("");
  const [three, setThree] = useState("");
  const [password, setPassword] = useState("");
  const [taskOneDone, setTaskOneDone] = useState(false);
  const [hints, setHints] = useState(0);
  const [over, setOver] = useState(0);

  useEffect(() => {
    Axios.get("https://backend1-api.onrender.com/getData").then((response) => {
      const users = response.data;
      var i = 0;

      while (i < users.length) {
        if (users[i].email === props.email) {
          if (users[i].completed === "1") {
            alert(
              "You have already completed task 1....Password for task 2 is eLitmus...enter the password in the input below task 1"
            );
          } else if (users[i].completed === "2") {
            alert(
              "You have already finsihed the game....you can retry if you want"
            );
          }
        }
        i++;
      }
    });
  }, []);

  useEffect(() => {
    if (over > 1) {
      alert("Deadend: task 1 done more than 5 times");
      window.location.reload();
    }
  }, [over]);

  function handleChange(event) {
    const { name, value } = event.target;

    if (name === "q1") {
      setOne(value);
    } else if (name === "q2") {
      setTwo(value);
    } else if (name === "q3") {
      setThree(value);
    } else {
      setPassword(value);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    var temp1 = one;
    var temp2 = two;
    var temp3 = three;
    var flag = 0;

    temp1 = temp1.toLowerCase();
    temp2 = temp2.toLowerCase();
    if (typeof temp3 === "string") {
      temp3 = temp3.toLowerCase();
    } else {
      temp3 = Number(temp3);
    }

    if (temp1 === "chair") {
      if (temp2 === "door") {
        if (typeof temp3 === "string") {
          if (temp3 === "towel") {
            document.getElementById("password1").innerHTML =
              "<p>The password for next task is eLitmus</p>";
            flag = 1;
            Axios.put("https://backend1-api.onrender.com/update", {
              email: props.email,
              completed: "1",
            });
          }
        } else {
          if (temp3 === 3) {
            document.getElementById("password1").innerHTML =
              "<h1>The password for next task is eLitmus</h1>";
            flag = 1;
            Axios.put("https://backend1-api.onrender.com/update", {
              email: props.email,
              completed: "1",
            });
          }
        }
      }
    }

    if (flag === 0) {
      setOver((v) => v + 1);
      alert(
        "You have not entered all the answers or answers for some question is wrong (use hints given if needed)...try again"
      );
    }
  }

  function handlePassword() {
    if (password === "eLitmus") {
      setTaskOneDone(true);
    } else {
      alert("Wrong password...Try again");
    }
  }

  function handleans1(e) {
    e.preventDefault();

    document.getElementById("ans1").innerHTML = "<p>chair</p>";

    setHints((h) => h + 1);
  }

  function handleans2(e) {
    e.preventDefault();

    document.getElementById("ans2").innerHTML = "<p>door</p>";
    setHints((h) => h + 1);
  }

  function handleans3(e) {
    e.preventDefault();

    document.getElementById("ans3").innerHTML = "<p>towel</p>";
    setHints((h) => h + 1);
  }

  return (
    <div>
      <div class="task1">
        <center>
          <h4>=== Show answer reduces your score ===</h4>
          <br></br>
          <br></br>
          <br></br>
          <h1>Task1</h1>
          <br></br>
          <h3>
            Answer all the three questions and click the door below to get
            password for Task 2
          </h3>
          <br></br>
          <br></br>
          <form>
            <p>
              1. I have four legs and no feet. When you are tired, I can give
              you a seat!
            </p>
            <input
              type="text"
              id="t1q1"
              name="q1"
              onChange={handleChange}
            ></input>
            <br></br>
            <button onClick={handleans1} className="button-33">
              Show answer
            </button>
            <p id="ans1"></p>
            <br></br>
            <p>
              2. Tall and thick, all homes have me. To get me open, you might
              need a key
            </p>
            <input
              type="text"
              id="t1q2"
              name="q2"
              onChange={handleChange}
            ></input>
            <br></br>
            <button onClick={handleans2} className="button-33">
              Show answer
            </button>
            <p id="ans2"></p>
            <br></br>
            <p>
              3. I can get wetter as I dry. When you need to shower, hang me up
              to dry.
            </p>
            <input
              type="text"
              id="t1q3"
              name="q3"
              onChange={handleChange}
            ></input>
            <br></br>
            <button onClick={handleans3} className="button-33">
              Show answer
            </button>
            <p id="ans3"></p>
            <br></br>
          </form>

          <br></br>
          <br></br>
          <div id="password1">
            <h3>Click this key after entering all answers in Task 1</h3>
            <br></br>
            <img
              src={require("./images/key.png")}
              height={200}
              width={200}
              alt=""
              onClick={handleSubmit}
            />
            <br></br>
            <br></br>
          </div>

          <div>
            <h3>Enter password to unlock task 2:</h3>
            <input
              type="text"
              id="pass1"
              name="password"
              onChange={handleChange}
            ></input>
            <button onClick={handlePassword} className="button-33">
              Submit
            </button>
          </div>
        </center>
      </div>

      <br></br>
      <br></br>
      <br></br>

      <div class="task2">
        <center>
          {taskOneDone ? (
            <Task2 h={hints} email={props.email} />
          ) : (
            <h1 id="rules">Complete Task 1 to unlock Task 2</h1>
          )}
        </center>
      </div>
    </div>
  );
}

export default Task1;
