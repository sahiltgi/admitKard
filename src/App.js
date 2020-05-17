import React from "react";
import "./App.css";
import Number from "./components/numberScreen/Number";
import Otp from "./components/otpScreen/Otp";

function App() {
  return (
    <div className="App">
      <div className="col-md-12">
        <div class="row">
          <div className="col-md-6">
            <Number />
          </div>
          <div className="col-md-6">
            <Otp />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
