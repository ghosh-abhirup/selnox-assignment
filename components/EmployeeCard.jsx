"use client";
import { ClickAwayListener } from "@mui/material";
import "./EmployeeList.css";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisVertical,
  faEye,
  faPen,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

const EmployeeCard = ({ employee }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked((prev) => !prev);
  };

  const handleClickAway = () => {
    setClicked(false);
  };

  return (
    <div className="relative employeeCard border-b-[1px] border-solid border-other_grey">
      <p className="employeeCardText ">
        {employee.FirstName + " " + employee.LastName}
      </p>
      <p className="employeeCardText ">{employee.DOB}</p>
      <p className="employeeCardText ">{employee.StartDate}</p>
      <p className="employeeCardText ">{employee.EndDate}</p>
      <p className="employeeCardText truncate col-span-2">
        {employee.Description}
      </p>

      <div
        className="absolute right-7 top-1/2 -translate-y-1/2 cursor-pointer"
        onClick={handleClick}
      >
        <FontAwesomeIcon icon={faEllipsisVertical} size="lg" color="#C1C0C0" />
      </div>

      {clicked ? (
        <ClickAwayListener onClickAway={handleClickAway}>
          <div className="absolute right-4 bottom-2 bg-white text-[] rounded-lg flex flex-col">
            <div className="cursor-pointer flex items-center gap-4 px-6 py-4">
              <FontAwesomeIcon icon={faEye} size="sm" color="#7D7D7D" />
              <p className="popupText">View</p>
            </div>
            <div className="cursor-pointer flex items-center gap-4 px-6 py-4">
              <FontAwesomeIcon icon={faPen} size="sm" color="#7D7D7D" />
              <p className="popupText">Edit</p>
            </div>
            <div className="cursor-pointer flex items-center gap-4 px-6 py-4">
              <FontAwesomeIcon icon={faTrashCan} size="sm" color="#7D7D7D" />
              <p className="popupText">Delete</p>
            </div>
          </div>
        </ClickAwayListener>
      ) : null}
    </div>
  );
};

export default EmployeeCard;
