import React from "react";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import UpdatePage from "./components/UpdatePage";
import ForumPage from "./components/ForumPage";
import DataPage from "./components/DataPage";
import { useState } from "react";
function App() {
    const [loggedIn, setLoggedIn] = useState(false);
    const [data, setData] = useState({
        medicationStatus: "Metformin",
        bloodGlucoseLevel: "110",
        physicalActivityLevel: "Moderate",
        diet: "Low-carb",
        weight: "90",
    });
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const [summary, setSummary] = useState({
        risk: "Medium",
        recommendation: "Reduce consumption of sugar, get insulin injection, and increase activity level"
    })
    const tryLogIn = (username, password) => {
        setLoggedIn(true);
        setUsername(username);
        setPassword(password);
    }
    
    if(!loggedIn){
        return (
            <div>
            <Login tryLogIn={tryLogIn} username={username} password={password} setUsername={setUsername} setPassword={setPassword}/>
            </div>
        );
    }
    else{
        const updateData = (data) => {
            setData(data);
        }
        const updateSummary = (summary) => {
            setSummary(summary);
        }
        return (
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/diabetes" element={<HomePage username={username}/>} />
                    {/* <Route path="/update" element={<UpdatePage updateData = {updateData}/>} /> */}
                    <Route path="/diabetes/data" element={<DataPage data={data} updateData={updateData} summary={summary} updateSummary={updateSummary}/>}></Route>
                    <Route path="/diabetes/forum" element={<ForumPage senderName={username}/>} />
                </Routes>
            </div>
          );
    }
    
}   

export default App;
