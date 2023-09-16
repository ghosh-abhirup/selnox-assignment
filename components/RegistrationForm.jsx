"use client";
import React, { useContext, useState } from "react";
import "./RegistrationPage.css";
import CustomDropdown from "./CustomDropdown/CustomDropdown";
import axios from "axios";
import { AppContext } from "@/app/AppContext";
import { v4 as uuidv4 } from "uuid";
import dynamic from "next/dynamic";

const CustomRichText = dynamic(
  () => import("./CustomRichText/CustomRichText"),
  {
    ssr: false,
  }
);

const RegistrationForm = ({ data, closeOnSubmit, isViewDetails }) => {
  const { fetchEmployeeData } = useContext(AppContext);

  const [firstName, setFirstName] = useState(data ? data.FirstName : "");
  const [lastName, setLastName] = useState(data ? data.LastName : "");
  const [dob, setDob] = useState(data ? data.DOB : "");
  const [startDate, setStartDate] = useState(data ? data.StartDate : "");
  const [endDate, setEndDate] = useState(data ? data.EndDate : "");
  const [currentSalary, setCurrentSalary] = useState(
    data ? data.CurrentSalary : ""
  );
  const [selectedOption, setSelectedOption] = useState(data ? data.Study : "");
  const [desc, setDesc] = useState(data ? data.Description : "");

  const handleCancelForm = () => {
    setFirstName("");
    setLastName("");
    setDob("");
    setStartDate("");
    setEndDate("");
    setCurrentSalary("");
    setSelectedOption("");
    setDesc("");
  };

  const addEmployee = async () => {
    try {
      const { data } = await axios.post(
        "https://sweede.app/DeliveryBoy/Add-Employee/",
        {
          id: uuidv4(),
          FirstName: firstName,
          LastName: lastName,
          DOB: dob,
          Study: selectedOption,
          StartDate: startDate,
          EndDate: endDate,
          CurrentSalary: currentSalary,
          Description: desc,
        }
      );

      if (data.status === "success") {
        fetchEmployeeData();
        closeOnSubmit();
      }
    } catch (error) {
      if (error.response && error.response.status === 500) {
        alert("Internal Server Error:", error);
      } else {
        console.log("Request Error:", error);
      }
    }
  };

  const editEmployeeData = async () => {
    try {
      const response = await axios.post(
        ` https://sweede.app/DeliveryBoy/update-Employee/${data.id}`,
        {
          id: uuidv4(),
          FirstName: firstName,
          LastName: lastName,
          DOB: dob,
          Study: selectedOption,
          StartDate: startDate,
          EndDate: endDate,
          CurrentSalary: currentSalary,
          Description: desc,
        }
      );

      if (response.data.status === "success") {
        fetchEmployeeData();
        closeOnSubmit();
      }
    } catch (error) {
      if (error.response && error.response.status === 500) {
        alert("Internal Server Error:", error);
      } else {
        console.log("Request Error:", error);
      }
    }
  };

  const handleSubmit = () => {
    if (
      firstName == "" ||
      lastName == "" ||
      dob == "" ||
      startDate == "" ||
      endDate == "" ||
      currentSalary == "" ||
      selectedOption == "" ||
      desc == ""
    ) {
      alert("Please enter all the fields");
    }

    if (data) {
      // update employee
      editEmployeeData();
    } else {
      console.log("hey look adding him/her");
      addEmployee();
    }
  };

  return (
    <div
      className={`w-full max-w-[1053px] py-[160px] px-[200px] registerForm mx-auto ${
        isViewDetails ? "pointer-events-none" : ""
      }`}
    >
      <div className="formRow mb-[67px]">
        <div className="w-full">
          <label htmlFor="firstName" className="labelText">
            First Name
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
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
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
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
            type="date"
            name="dob"
            id="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
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
          <CustomDropdown
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        </div>
      </div>

      <div className="formRow mb-[74px]">
        <div className="w-full">
          <label htmlFor="startDate" className="labelText">
            Start Date
          </label>
          <input
            type="date"
            name="startDate"
            id="startDate"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
            className="inputBox px-[36px] py-4"
            placeholder="Enter start date"
          />
        </div>
        <div className="w-full">
          <label htmlFor="endDate" className="labelText">
            End Date
          </label>
          <input
            type="date"
            name="endDate"
            id="endDate"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
            className="inputBox px-[36px] py-4"
            placeholder="Enter end date"
          />
        </div>
      </div>
      <div className="formRow mb-[46px]">
        <div className="w-full">
          <label htmlFor="salary" className="labelText">
            Current Salary
          </label>
          <input
            type="number"
            name="salary"
            id="salary"
            value={currentSalary}
            onChange={(e) => setCurrentSalary(e.target.value)}
            required
            className="inputBox px-[36px] py-4"
            placeholder="E.g. 30000"
          />
        </div>
      </div>

      <div className={`formRow ${!isViewDetails ? "mb-[100px]" : ""}`}>
        <div className="w-full">
          <CustomRichText value={desc} setValue={(inp) => setDesc(inp)} />
        </div>
      </div>

      {!isViewDetails && (
        <div className="formRow">
          <button
            className="text-center bg-[#E3E3E3] rounded-[13px] btnText h-[69px] w-[297px]"
            onClick={handleCancelForm}
          >
            Cancel
          </button>
          <button
            className="text-center bg-white border-[2px] border-solid border-[#142A51] rounded-[13px] btnText h-[69px] w-[297px]"
            onClick={handleSubmit}
          >
            Save
          </button>
        </div>
      )}
    </div>
  );
};

export default RegistrationForm;
