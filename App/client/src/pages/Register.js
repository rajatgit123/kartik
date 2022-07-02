import React from "react";
import { useState, useEffect } from "react";
import "../index.css";
import {MailOutlined,BarChartOutlined } from '@ant-design/icons';

const formStyle = {
  margin: 'auto',
  padding: '10px',
  border: '1px solid #c9c9c9',
  borderRadius: '5px',
  background: '#f5f5f5',
  opacity: '1',
  width: '450px',
  height: '490px',
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

export default function Register() {

    const[ username, setUsername ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ deviceid, setDeviceid ] = useState("");
    
    // FORM SUBMISSION
    
    const onSubmitForm = async e => {
        e.preventDefault();
        try {
          const body = { username, password, email, deviceid };
          const response = await fetch("http://localhost:5000/userregister", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body)
          });
          alert("Registered Successfully!");
          console.log(response);
    
          window.location = "/"
    
          // window.location = "/";
        } catch (err) {
          console.error(err.message);
        }
      };

    
        return(
            <div className="register">
              <br></br>
            <form className="d-flex justify-content-center mt-2" style={formStyle} onSubmit={onSubmitForm}>
            <fieldset>
            <h1><img src={require("./download.png")} alt="" style={{position:"absolute", left:"39.5rem", width:"100px", height:"40px"}}/></h1>
            <h1 style={{fontSize:"18px", paddingTop:"35px", paddingBottom:"20px", font:"bold", fontWeight:"bold", textAlign:"center", color:"white", borderBottom: "1px solid white"}}>USER REGISTRATION</h1>
                        <label style={{fontSize:"10px", paddingTop:"22px", fontWeight:"bold", color:"white"}}>USERNAME</label>
                        <input type="text" className="form-control" style={{width:"350px" , backgroundColor:"lightGray"}} value={username} placeholder="Enter Username..." onChange={e => setUsername(e.target.value)} /><br></br>

                        <label style={{fontSize:"10px", fontWeight:"bold", color:"white"}}>EMAIL</label>
                        <input type="email" className="form-control" style={{width:"350px" , backgroundColor:"lightGray"}} value={email} placeholder="Enter Email ID..." onChange={e => setEmail(e.target.value)} /><br></br>
    
                        <label style={{fontSize:"10px", fontWeight:"bold", color:"white"}}>PASSWORD</label>
                        <input type="password" className="form-control" style={{width:"350px" , backgroundColor:"lightGray"}} value={password} placeholder="Enter Password..." onChange={e => setPassword(e.target.value)} /><br></br>

                        {/* <label style={{fontSize:"10px", fontWeight:"bold", color:"white"}}>DEVICEID</label>
                        <input type="text" className="form-control" style={{width:"350px" , backgroundColor:"lightGray"}} value={deviceid} placeholder="Enter DeviceID..." onChange={e => setDeviceid(e.target.value)} /><br></br>
     */}
                        <button className="btn btn-success" style={submitStyle}>Submit</button>
            </fieldset>
            </form>
            </div>
        )
    
};

