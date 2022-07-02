import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Router, Switch } from 'react-router-dom';
import "../index.css";
import Axios from "axios";
import Register from "./Register";
import {MailOutlined,BarChartOutlined } from '@ant-design/icons';
const formStyle = {
    margin: 'auto',
    padding: '10px',
    border: '1px solid #c9c9c9',
    borderRadius: '5px',
    background: '#f5f5f5',
    opacity: '1',
    width: '450px',
    height: '420px',
    display: 'block',
    backgroundColor:'#1A1A40',
};

const submitStyle = {
    margin: '10px 0 0 0',
    padding: '7px 10px',
    border: '1px solid #efffff',
    borderRadius: '3px',
    background: '#3085d6',
    width: '100%', 
    fontSize: '15px',
    color: 'white',
    display: 'block'
};

export default function Login() {

    const [ password, setPassword ] = useState("");
    const [ email, setEmail ] = useState("");
    
    // FORM SUBMISSION
    
    const onSubmitForm = async e => {
        e.preventDefault();
        try {
          const body = {email, password};
          console.log(body)
          const response = await fetch("http://localhost:5000/userlogin", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
          });
          let jsondata = await response.json();
          console.log(jsondata.deviceid);
          window.localStorage.setItem("did",JSON.stringify(jsondata.deviceid));
          if(!response){
            window.location.reload()
          }
          else{
            window.location = "/home" ;
          } 


          // window.location = "/";
        } catch (err) {
          location.reload();
          console.error(err.message);
          window.location.reload()
        //  alert("Login failed");

        }
      };

    
    return(

        <div className="register">
            <br></br><br></br>
            <form className="d-flex justify-content-center mt-2" style={formStyle} onSubmit={onSubmitForm}>
            <fieldset>
              <br></br>
              <h1><img src={require("./download.png")} alt="" style={{position:"absolute", left:"39.5rem", width:"100px", height:"40px"}}/></h1>
            <h2 style={{fontSize:"18px", paddingTop:"35px", paddingBottom:"20px", font:"bold", fontWeight:"bold", textAlign:"center", color:"white", borderBottom: "1px solid white"}}>USER LOGIN</h2>
                <label style={{fontSize:"10px", fontWeight:"bold", color:"white"}}>EMAIL</label>
                <input type="email" className="form-control" style={{width:"350px" , backgroundColor:"lightGray"}} value={email} placeholder="Email ID..." onChange={e => setEmail(e.target.value)} /><br></br>
                <label style={{fontSize:"10px", fontWeight:"bold", color:"white"}}>PASSWORD</label>
                <input type="password" className="form-control" style={{width:"350px" , backgroundColor:"lightGray", color:"white"}} value={password} placeholder="Password..." onChange={e => setPassword(e.target.value)} /><br></br>
                <button className="btn btn-success" style={submitStyle}>Submit</button><br></br><a href="/register">Device Not Registered? Register here</a>
            </fieldset>
            </form>
            </div>
            
        )
    
};

