import React, { Fragment, useState } from "react";

const InputDevice = () => {

    const [ devicename, setDeviceName ] = useState("");
    const [ deviceid, setDeviceId ] = useState("");

// FORM SUBMISSION

const onSubmitForm = async e => {
    e.preventDefault();
    try {
      const body = { devicename, deviceid };
      const response = await fetch("http://localhost:5000/devices", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
      });
      console.log(response);

      window.location = "/home"

      // window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };


    return (
    <Fragment>
        {/*<h1 className="text-center mt-5">Register Devices</h1><br></br>*/}
        <form className="d-flex justify-content-center mt-5" onSubmit={onSubmitForm}>
        <fieldset>
                    <legend>Username</legend>
                    <input type="text" className="form-control" value={devicename} onChange={e => setDeviceName(e.target.value)} /><br></br>

                    <legend>User ID</legend>
                    <input type="text" className="form-control" value={deviceid} onChange={e => setDeviceId(e.target.value)} /><br></br>

                    <button className="btn btn-success" >Submit</button>
        </fieldset>
        </form>
    </Fragment> 
    )
};

export default InputDevice;