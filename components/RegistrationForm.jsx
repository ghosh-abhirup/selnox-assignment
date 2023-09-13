import React from "react";
import "./RegistrationPage.css";

const RegistrationForm = () => {
  return (
    <div className="w-full max-w-[1053px] py-[160px] px-[200px] registerForm mx-auto">
      <div className="formRow mb-[67px]">
        <div className="w-full">
          <label htmlFor="firstName" className="labelText">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            required
            className="inputBox px-6 py-4"
            placeholder="Enter your name"
          />
        </div>
        <div className="w-full">
          <label htmlFor="lastName" className="labelText">
            Last Name
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            required
            className="inputBox px-6 py-4"
            placeholder="Enter your name"
          />
        </div>
      </div>
      <div className="formRow mb-[46px]">
        <div className="w-full">
          <label htmlFor="dob" className="labelText">
            DOB
          </label>
          <input
            type="text"
            name="dob"
            id="dob"
            required
            className="inputBox px-[36px] py-4"
            placeholder="Enter your dob"
          />
        </div>
      </div>
      <div className="formRow mb-[37px]">
        <div className="w-full">
          <label htmlFor="study" className="labelText">
            Study
          </label>
          <input
            type="text"
            name="study"
            id="study"
            required
            className="inputBox px-[36px] py-4"
            placeholder="B.E."
          />
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;
