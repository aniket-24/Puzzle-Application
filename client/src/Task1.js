import React, { useState, useEffect } from "react";
import Task2 from "./Task2";
import Axios from 'axios';

function Task1(props){
    const [one, setOne] = useState("");
    const [two, setTwo] = useState("");
    const [three, setThree] = useState("");
    const [password, setPassword] = useState("");
    const [taskOneDone, setTaskOneDone] = useState(false);
    const [hints, setHints] = useState(0);
    const [over, setOver] = useState(0);
    
    useEffect(() => {
        Axios.get('https://backend1-api.onrender.com/getData').then((response) => {
            const users = response.data;
            var i = 0;

            while(i < users.length){
                if(users[i].email === props.email){
                    if(users[i].completed === "1"){
                        alert("You have already completed task 1....Password for task 2 is 14255...enter the password in the input below task 1");
                    }
                    else if(users[i].completed === "2"){
                        alert("You have already finsihed the game....you can retry if you want");
                    }
                }
                i ++;
            }
        })
    }, []);

    useEffect(() => {
        if(over > 1){
            alert("Deadend: task 1 done more than 5 times");
            window.location.reload();
        }
    }, [over, ]);

    function handleChange(event){
        const {name, value} = event.target;

        if(name === "q1"){
            setOne(value);
        }
        else if(name === "q2"){
            setTwo(value);
        }
        else if(name === "q3"){
            setThree(value);
        }
        else{
            setPassword(value);
        }
    }

    function handleSubmit(e){
        e.preventDefault();

        var temp1 = one;
        var temp2 = two;
        var temp3 = three;
        var flag = 0;

        temp1 = temp1.toLowerCase();
        temp2 = temp2.toLowerCase();
        if(typeof temp3 === "string"){
            temp3 = temp3.toLowerCase();
        }
        else{
            temp3 = Number(temp3);
        }

        if(temp1 === "yellow"){
            if(temp2 === "red"){
                if(typeof temp3 === "string"){
                    if(temp3 === "three"){
                        document.getElementById("password1").innerHTML="<p>The password for next task is 14255</p>";
                        flag = 1;
                        Axios.put('https://backend1-api.onrender.com/update', {email: props.email, completed: "1"});
                    }
                }
                else{
                    if(temp3 === 3){
                        document.getElementById("password1").innerHTML="<h1>The password for next task is 14255</h1>";
                        flag = 1;
                        Axios.put('https://backend1-api.onrender.com/update', {email: props.email, completed: "1"});
                    }
                }
            }
        }

        if(flag === 0){
            setOver((v) => (v + 1));
            alert("You have not entered all the answers or answers for some question is wrong (use hints given if needed)...try again");
        }
    }

    function handlePassword(){
        if(password === "14255"){
            setTaskOneDone(true);
        }
        else{
            alert("Wrong password...Try again");
        }
    }

    function handleans1(e){
        e.preventDefault();

        document.getElementById("ans1").innerHTML = "<p>yellow</p>";

        setHints((h) => (h + 1));

    }

    function handleans2(e){
        e.preventDefault();

        document.getElementById("ans2").innerHTML = "<p>red</p>";
        setHints((h) => (h + 1));
    }

    function handleans3(e){
        e.preventDefault();

        document.getElementById("ans3").innerHTML = "<p>three</p>";
        setHints((h) => (h + 1));
    }



    return (
        <div>
            <div class="task1">
            <h1>Task1: 3 Q's Round</h1>
            <br></br>
            <p>Answer all the three questions</p>
            <br></br>
            <p>After answering, click the door below the task to get the password for next task</p>
            <br></br>
            <form>
                <p>1. Enter the color which is used the most in this website</p>
                <input type="text" id="t1q1" name="q1" onChange={handleChange}></input>
                <br></br>
                <button onClick={handleans1} className="button-33">Give answer</button>
                <p id="ans1"></p>
                <br></br>
                <p>2. Enter the color which has the longest wavelength i.e., easily visible from long distance</p>
                <input type="text" id="t1q2" name="q2" onChange={handleChange}></input>
                <br></br>
                <button onClick={handleans2} className="button-33">Give answer</button>
                <p id="ans2"></p>
                <br></br>
                <p>3. How many colors does indian flag have? (in words)</p>
                <input type="text" id="t1q3" name="q3" onChange={handleChange}></input>
                <br></br>
                <button onClick={handleans3} className="button-33">Give answer</button>
                <p id="ans3"></p>
                <br></br>
            </form>

            <br></br>
            <br></br>
            <div id="password1">
                <h3>Click this door after entering all answers in Task 1</h3>
                <br></br>
                <img src={require('./images/door.jpg')} height={200} width={300} alt="" onClick={handleSubmit}/>
                <br></br>
                <br></br>
            </div>

            <div>
                <h3>Enter password hidden inside door to unlock task 2:</h3>
                <input type="text" id="pass1" name="password" onChange={handleChange}></input>
                <button onClick={handlePassword} className="button-33">Submit</button>
            </div>
            </div>

            <div class="task2">
                {taskOneDone ? <Task2 h={hints} email={props.email}/> : <h1 id="rules">Complete Task1 to unlock Task2</h1>}
            </div>
        </div>



    );
}

export default Task1;