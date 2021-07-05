import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Bookings from "./components/bookings";
import Logs from "./components/logs";
import Trips from "./components/trips";

class App extends Component {
  componentDidMount= async ()=>{
    await this.getVehicleData();
  }

  getVehicleData = async () => {
    try {
      let Payload = {
        url: 'http://localhost:80/api/v1/fetch_logs',
        method: "get",
        headers: {
          "Content-Type": "application/json", Accept: "application/json",
        }
      }
      let fetched_data = await axios(Payload)
      let data = {}
      if ([200, 201].includes(fetched_data.status)) {
        // console.log('enterprise', enterprise);
        console.log(fetched_data);
      }
      return data
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div>
        
        <nav>
          <p className="name">Vehicle Tracking System</p>
          <div className="navbar-nav mr-auto">
            <p className="table-name">Trips</p>
            <li className="nav-item">
                <Logs></Logs>
            </li>
            <p className="table-name">Vehicle Logs</p>
            <li className="nav-item">
                <Trips></Trips>
            </li>
            <p className="table-name">Bookings</p>
            <li className="nav-item">
                <Bookings></Bookings>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={"/fetch_logs"} component={Bookings} />
            <Route exact path="/fetch_logs" component={Trips} />
            <Route path="/fetch_logs" component={Logs} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;