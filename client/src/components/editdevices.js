import React, { Fragment, useState } from "react";

const EditDevice = ({ device }) => {
  const [devicename, setDeviceName] = useState(device.devicename);
  


  const updateDevice = async e => {
    e.preventDefault();
    try {
      const body = { devicename };
      const response = await fetch(
        `http://localhost:5000/devices/${device}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        }
      );

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <button
        type="button"
        class="btn btn-warning"
        data-toggle="modal"
        data-target={`#id${device}`}
      >
        Edit
      </button>

      {/* 
        id = id10
      */}
      <div
        class="modal"
        id={`id${device.did}`}
        onClick={() => 
            setDeviceName(device.devicename)
            
        
        }
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h4 class="modal-title">Edit Device</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                onClick={() => 
                    setDeviceName(device.devicename)
                
                }
              >
                &times;
              </button>
            </div>

            <div class="modal-body">
              <input
                type="text"
                className="form-control"
                value={devicename}
                onChange={e => 
                    setDeviceName(e.target.value)
                }
            
              />
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-warning"
                data-dismiss="modal"
                onClick={e => updateDevice(e)}
              >
                Edit
              </button>
              <button
                type="button"
                class="btn btn-danger"
                data-dismiss="modal"
                onClick={() => 
                    setDeviceName(device.devicename)
                  
                }
                
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default EditDevice;