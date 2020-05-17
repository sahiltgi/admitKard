import React, { Component } from "react";
import OtpInput from "react-otp-input";
import "./Otp.css";

class Otp extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="container">
        <div className="col-md-12">
          <div className="col-md-2"></div>
          <div className="col-md-8 mt-5">
            <div className="img img-fluid">
              <img
                src="data:image/png;base64,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"
                alt=""
              />
            </div>
            <div className="text ml-5">
              <h4>Please Verify Mobile Number</h4>
              <p>An OTP is sent to 927383782</p>
            </div>
            <div className="inputField mb-4">
              <div>
                <OtpInput
                  onChange={(otp) => console.log(otp)}
                  numInputs={6}
                  separator={<span>-</span>}
                />
              </div>
            </div>
            <button className="btn btn-warning ml-5">Verify</button>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    );
  }
}

export default Otp;
