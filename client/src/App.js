import React from "react";
import App1 from './App1';
import Main from './Main';
import Admin from './Admin';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./Signup";


function App(){
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App1 />}/>
                    <Route path="/temp" element={<Main/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/Admin" element={<Admin/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
