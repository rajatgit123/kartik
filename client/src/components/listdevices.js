import React, { Fragment, useEffect, useState } from "react";

import EditDevice from "./editdevices";

const ListDevices = () => {
  const [ devices, setDevices ] = useState([]);

  //delete todo function

  const deleteDevices = async id => {
    try {
      const deleteDevices = await fetch(`http://localhost:5000/devices/${id}`, {
        method: "DELETE"
      });

      setDevices(devices.filter(device => device.did !== id));
      console.log(deleteDevices);
    } catch (err) {
      console.error(err.message);
    }
  };

  const getDevices = async () => {
    try {
      const response = await fetch("http://localhost:5000/devices");
      const jsonData = await response.json();

      setDevices(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getDevices();
  }, []);

  console.log(devices);

  return (
    <Fragment>
      {" "}
      <table class="table mt-5 text-center">
        <thead>
          <tr>
            
            <th>Username</th>
            <th>User ID</th>
            
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/*<tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}
          {devices.map(device => (
            <tr key={device.did}>
              
              <td>{device.devicename}</td>
              <td>{device.deviceid}</td>
              {/*<td>
                 <EditDevice device={device} />
          </td>*/}
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteDevices(device.did)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  );
};

export default ListDevices;