import React, { Component } from "react";
import "./Number.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

class Number extends Component {
  constructor() {
    super();
    this.state = {
      value: null,
    };
  }

  submitVal = (e) => {
    e.preventDefault();
    alert("OTP is :- ", this.value);
  };
  setValue = (e) => {
    this.setState({ value: e.target.value });
  };
  render() {
    const { value } = this.state;
    return (
      <div className="container">
        <div className="col-md-12">
          <div className="col-md-2"></div>
          <div className="col-md-8 mt-5">
            <div className="img img-fluid">
              <img
                src="https://mir-s3-cdn-cf.behance.net/v1/assets/177e4969c664975b1838dd199ea27788/2da28110-9da1-420f-80a6-06816e9a9674_rwc_115x0x2966x410x3200.png?h=dde39b468f9c5af547dbe7c0c204163f"
                alt=""
              />
            </div>
            <div className="text ml-5">
              <h3>Welcome Back</h3>
              <p>Please sign in to your account</p>
            </div>
            <div className="inputField mb-4 ml-5">
              <PhoneInput
                countrySelectProps={{ unicodeFlags: true }}
                placeholder="Enter phone number"
                name="value"
                value={value}
                onChange={this.setValue}
              />
            </div>
            <button className="btn btn-warning ml-5">Sign In with OTP</button>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    );
  }
}

export default Number;
