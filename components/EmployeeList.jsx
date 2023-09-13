"use client";
import React, { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import "./EmployeeList.css";
import EmployeeCard from "./EmployeeCard";

const EmployeeList = ({ data, isLoading }) => {
  return (
    <>
      <p className="employeeListHeading mb-8">Employee List</p>

      {isLoading ? (
        <div className="w-full flex items-center justify-center ">
          <CircularProgress />
        </div>
      ) : (
        <div className="bg-white w-full max-w-[1330px] mx-auto border-[1px] border-solid border-other_grey rounded-[30px]">
          <div className="tableHeader">
            <p className="tableHeaderText">Name</p>
            <p className="tableHeaderText">DOB</p>
            <p className="tableHeaderText">Start Date</p>
            <p className="tableHeaderText">End Date</p>
            <p className="tableHeaderText">Description</p>
          </div>

          {data &&
            data.map((employee) => (
              <EmployeeCard employee={employee} key={employee.id} />
            ))}
        </div>
      )}
    </>
  );
};

export default EmployeeList;
