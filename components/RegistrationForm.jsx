"use client";
import React, { useContext, useState } from "react";
import "./RegistrationPage.css";
import CustomDropdown from "./CustomDropdown";
import axios from "axios";
import { useRouter } from "next/navigation";
import { AppContext } from "@/app/AppContext";
import { v4 as uuidv4 } from "uuid";

const RegistrationForm = () => {
  const router = useRouter();
  const { fetchEmployeeData } = useContext(AppContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDob] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [currentSalary, setCurrentSalary] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  const handleCancelForm = () => {
    setFirstName("");
    setLastName("");
    setDob("");
    setStartDate("");
    setEndDate("");
    setCurrentSalary("");
    setSelectedOption("");
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
          Description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto minus laborum hic ea omnis illum, corrupti molestiae vero blanditiis quidem!",
        }
      );

      if (data.status === "success") {
        fetchEmployeeData();
        router.push("/");
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
      selectedOption == ""
    ) {
      alert("Please enter all the fields");
    }

    addEmployee();
  };

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
    </div>
  );
};

export default RegistrationForm;
