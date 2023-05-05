import React, { useState, useEffect } from "react";
import Task1 from "./Task1";
import Axios from "axios";

function Task2(props) {
  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);
  const [hint, setHint] = useState(0);

  useEffect(() => {
    if (hint + props.h > 4) {
      alert("Deadend: more than four hints used.");
      window.location.reload();
    }
  }, [hint, props.h]);

  function handleClick() {
    console.log(hint);
    if (one && three) {
      Axios.put("https://backend1-api.onrender.com/update", {
        email: props.email,
        completed: "2",
      });
      var temp = "" + (props.h + hint);
      console.log(typeof temp);
      var temp1 = "<p>You won the game</p>";
      var temp2 = "<p>Perseverance: 100%</p>";
      var temp3 = "<p>Curiosity: 100%</p>";
      var temp4 = "";
      var temp5 = "";

      if (props.h + hint > 2) {
        temp4 = "<p>Eye for detail: 60%</p>";
      } else if (props.h + hint >= 1) {
        temp4 = "<p>Eye for detail: 80%</p>";
      } else {
        temp4 = "<p>Eye for detail: 100%</p>";
      }

      if (props.h + hint > 2) {
        temp5 = "<p>Problem Solving: 60%</p>";
      } else if (props.h + hint >= 1) {
        temp5 = "<p>Problem Solving: 80%</p>";
      } else {
        temp5 = "<p>Problem Solving: 100%</p>";
      }
      document.getElementById("result").innerHTML =
        temp1 + temp2 + temp3 + temp4 + temp5;
      alert(
        "You won the game....scroll down the web page for your soft skills report"
      );
    } else {
      alert("Wrong answer..try again..use hints if needed");
    }
  }

  function handleImage1() {
    if (!one) {
      setOne(true);
      document.getElementById("img1").style.border = "4px solid  #cc7713";
    } else {
      setOne(false);
      document.getElementById("img1").style.border = "";
    }
  }

  function handleImage2() {
    if (!two) {
      setTwo(true);
      document.getElementById("img2").style.border = "4px solid  #cc7713";
    } else {
      setTwo(false);
      document.getElementById("img2").style.border = "";
    }
  }

  function handleImage3() {
    if (!three) {
      setThree(true);
      document.getElementById("img3").style.border = "4px solid  #cc7713";
    } else {
      setThree(false);
      document.getElementById("img3").style.border = "";
    }
  }

  function handleImage4() {
    if (!four) {
      setFour(true);
      document.getElementById("img4").style.border = "4px solid  #cc7713";
    } else {
      setFour(false);
      document.getElementById("img4").style.border = "";
    }
  }

  function handleans4(e) {
    e.preventDefault();

    document.getElementById("ans4").innerHTML = "<p>image 1</p>";
    setHint((h) => h + 1);
  }

  function handleans5(e) {
    e.preventDefault();

    document.getElementById("ans5").innerHTML = "<p>image 1</p>";
    setHint((h) => h + 1);
  }

  return (
    <div id="task2">
      <center>
        <hr></hr>
        <br></br>
        <h1>🎲 Task 2</h1>
        <br></br>
        <h3>👉🏻 Click one image for each question</h3>
        <br></br>
        <br></br>
        <p>
          1. I make fresh air and I am strong. I am capable of being alive for
          so long!
        </p>
        <br></br>
        <img
          src={require("./images/tree.jpg")}
          height={150}
          width={150}
          alt=""
          onClick={handleImage1}
          id="img1"
        ></img>
        <br></br>
        <br></br>
        <img
          src={require("./images/fan.png")}
          height={150}
          width={150}
          alt=""
          onClick={handleImage2}
          id="img2"
        ></img>
        <br></br>
        <button onClick={handleans4} className="button-33">
          Show answer
        </button>
        <p id="ans4"></p>
        <br></br>
        <p>2. What repeats your words but is not an echo?</p>
        <br></br>
        <img
          src={require("./images/parrot.png")}
          height={150}
          width={150}
          alt=""
          onClick={handleImage3}
          id="img3"
        ></img>
        <br></br>
        <br></br>
        <img
          src={require("./images/speaker.jpg")}
          height={150}
          width={150}
          alt=""
          onClick={handleImage4}
          id="img4"
        ></img>
        <br></br>
        <button onClick={handleans5} className="button-33">
          Show answer
        </button>
        <p id="ans5"></p>
        <br></br>
        <button onClick={handleClick} className="button-33">
          Submit task 2
        </button>
        <br></br>
        <br></br>
        <br></br>
        <h4>
          === Scroll down after submiting to see your soft skills report ===
        </h4>

        <div id="result"></div>
      </center>
    </div>
  );
}

export default Task2;
