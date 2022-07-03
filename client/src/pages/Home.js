import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import InputDevice from "../components/inputdevices";
import ListDevices from "../components/listdevices";
function Home(){
    return(
        <div>
            <DefaultLayout header = 'Users'>
                <InputDevice />
                <ListDevices />
            </DefaultLayout>
        </div>
    )
}
export default Home;