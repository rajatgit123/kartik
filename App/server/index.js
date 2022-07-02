const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const { CopyResponse } = require("pg-protocol/dist/messages");
const { response } = require("express");
// const e = require("express");

app.use(cors());
app.use(express.json());

// INSERT DATA INTO THE DATABASE userreg

app.post("/userregister", async(req, res) => {
    try {
        console.log(req.body);
        const { username, password, email, deviceid } = req.body;
        const newusers = await pool.query(
            "INSERT INTO useracc (username, password, email, deviceid) VALUES($1, $2, $3, $4) RETURNING * ", [username, password, email, deviceid]
        );

        res.json(newusers.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//FETCH DATA BY EMAIL & PASSWORD IN THE DATABASE devicereg

app.post("/userlogin", async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(req.body);
        const device = await pool.query("SELECT username, email, password, deviceid FROM useracc WHERE email = $1 AND password = $2", [email, password]);
        cred = device.rows[0]
        console.log(device.rows[0])
        console.log(cred.password);
       
        if(password==cred.password){
            console.log("OK");
            res.send(cred);
        }else{
            console.log("NOT FOUND")
        }
        // console.log(id);
    } catch (err) {
        console.error(err.message);
    }
});

// INSERT DATA INTO THE DATABASE devicereg

app.post("/devices", async(req, res) => {
    try {
        const { devicename, deviceid } = req.body;
        const newdevices = await pool.query(
            "INSERT INTO devices (devicename, deviceid) VALUES($1, $2) RETURNING * ", [devicename, deviceid]
        );

        res.json(newdevices.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//FETCH DATA FROM THE DATABASE devicereg

app.get("/devices", async(req, res) => {
    try {
        const alldevices = await pool.query("SELECT * FROM devices");
        res.json(alldevices.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//FETCH DATA BY ID IN THE DATABASE devicereg

app.get("/devices/:id", async (req, res) => {
    try {
        const { id } = req.body;
        const device = await pool.query("SELECT * FROM devices WHERE did = $1", [id]);
        res.json(device.rows[0]);
        // console.log(id);
    } catch (err) {
        console.error(error.message);
    }
});

// UPDATE EXISTING DATA IN THE DB devicereg

app.put("/devices/:id", async(req, res) => {
    try{
    const { id } = req.body;
    const { devicename, deviceid } = req.body;
    const updatedev = await pool.query(
        "UPDATE devices SET (devicename, deviceid) = ($1, $2) WHERE did = $3", [devicename, deviceid, id]);

    res.json("The devices have been successfully updated");
    } catch (err) {
        console.error(err.message);
    }
});

//DELETE DATA IN THE DB devicereg

app.delete("/devices/:id", async (req, res) => {
    try {
        const { id } = req.params;
        console.log(req.body);

        const deletedevice = await pool.query("DELETE FROM devices WHERE did = $1", [id]);
        //res.json(deletedevice.rows);
        res.json("The device has been successfully deleted");
        console.log(id);
    } catch (err) {
        console.error(err.message);
    }
});

app.listen(5000, ()=>{
    console.log("Server has started on port 5000");
});

