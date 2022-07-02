import React from "react";
import DefaultLayout from "../components/DefaultLayout";
import '../index.css';
function User(){
    let recent = window.localStorage.getItem(("did"));
    let b= recent.length;
    let a=recent.slice(1,(b-1));
    console.log(a);
    console.log(a);
    console.log("http://localhost:3000/d-solo/_cj3nDP7k/datalogger-demo?orgId=1&from=now-1h&to=now&refresh=5s&var-Device="+a+"&panelId=14");
    return(
        <div>
            <DefaultLayout header="User Dashboard">
                <div style={{}}>
                <iframe src={"http://localhost:3000/d-solo/_cj3nDP7k/datalogger-demo?orgId=1&from=now-1h&to=now&refresh=5s&var-Device="+a+"&panelId=14"} width="20%" height="175" frameBorder="2px" style={{ margin: '0.025rem' }}></iframe>
                <iframe src={"http://localhost:3000/d-solo/_cj3nDP7k/datalogger-demo?orgId=1&from=now-1h&to=now&refresh=5s&var-Device="+a+"&panelId=18"} width="20%" height="175" frameBorder="2px" style={{ margin: '0.025rem' }}></iframe>
                <iframe src={"http://localhost:3000/d-solo/_cj3nDP7k/datalogger-demo?orgId=1&from=now-1h&to=now&refresh=5s&var-Device="+a+"&panelId=12"} width="30%" height="175" frameBorder="" style={{ margin: '0.025rem' }}></iframe>
                <iframe src={"http://localhost:3000/d-solo/_cj3nDP7k/datalogger-demo?orgId=1&from=now-1h&to=now&refresh=5s&var-Device="+a+"&panelId=6"} width="29.6%" height="175" frameBorder="" style={{ margin: '0.025rem' }}></iframe>
               {/* <div className="dashboard-tiles"> */}
                    <iframe src={"http://localhost:3000/d-solo/_cj3nDP7k/datalogger-demo?orgId=1&from=now-1h&to=now&refresh=5s&var-Device="+a+"&panelId=11"} width="20%" height="175" frameBorder="" style={{ margin: '0.025rem' }}></iframe>
                    <iframe src={"http://localhost:3000/d-solo/_cj3nDP7k/datalogger-demo?orgId=1&from=now-1h&to=now&refresh=5s&var-Device="+a+"&panelId=4"} width="20%" height="175" frameBorder="" style={{ margin: '0.025rem'}}></iframe>
                {/*</div>*/}
                <iframe src={"http://localhost:3000/d-solo/_cj3nDP7k/datalogger-demo?orgId=1&from=now-1h&to=now&refresh=5s&var-Device="+a+"&panelId=7"}width="29.8%" height="175" frameBorder="" style={{ margin: '0.025rem' }}></iframe>
                <iframe src={"http://localhost:3000/d-solo/_cj3nDP7k/datalogger-demo?orgId=1&from=now-1h&to=now&refresh=5s&var-Device="+a+"&panelId=10"} width="29.8%" height="175" frameBorder="" style={{ margin: '0.025rem' }}></iframe>
                <iframe src={"http://localhost:3000/d-solo/_cj3nDP7k/datalogger-demo?orgId=1&from=now-1h&to=now&refresh=5s&var-Device="+a+"&panelId=15"} width="49.8%" height="175" frameBorder="0" style={{ margin: '0.025rem' }}></iframe>
                <iframe src={"http://localhost:3000/d-solo/_cj3nDP7k/datalogger-demo?orgId=1&from=now-1h&to=now&refresh=5s&var-Device="+a+"&panelId=5"}width="49.8%" height="175" frameBorder="0" style={{ margin: '0.025rem' }}></iframe>
                {/*<iframe src={"http://localhost:3000/d-solo/_cj3nDP7k/datalogger-demo?orgId=1&from=now-1h&to=now&refresh=5s&var-Device="+a+"&panelId=17"} width="99.5%" height="650" frameBorder="0" style={{ margin: '0.025rem' }}></iframe> */}
                </div>
            </DefaultLayout>
        </div>
    )
}
export default User;