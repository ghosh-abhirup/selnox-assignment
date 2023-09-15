"use client";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "./CustomDropdown.css";
import { ClickAwayListener } from "@mui/material";

const optionsArr = ["B.E.", "B.Tech", "B.Sc", "B.Com", "Others"];

const CustomDropdown = ({ selectedOption, setSelectedOption }) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  const handleClickAway = () => {
    setClicked((prev) => {
      if (prev) {
        setClicked(false);
      }
    });
  };

  return (
    <div
      className="relative dropdownInput flex justify-between items-center px-[36px] py-4 cursor-pointer"
      onClick={handleClick}
    >
      <p className="dropdownText">
        {selectedOption === "" ? "E.g. B.E." : selectedOption}
      </p>
      <FontAwesomeIcon
        icon={faAngleDown}
        color="#556E9A"
        width={10}
        height={14}
        className={`${
          clicked
            ? "transition-all ease-in-out rotate-180"
            : "transition-all ease-in-out rotate-0"
        }`}
      />

      {clicked ? (
        <ClickAwayListener onClickAway={handleClickAway}>
          <div className="absolute dropdownBox w-full left-0 top-[120%]">
            {optionsArr.map((option, index) => (
              <p
                className="px-6 py-4 cursor-pointer border-b-2 border-solid border-white"
                onClick={() => {
                  setSelectedOption(option);
                  setClicked(false);
                }}
                key={index}
              >
                {option}
              </p>
            ))}
          </div>
        </ClickAwayListener>
      ) : null}
    </div>
  );
};

export default CustomDropdown;
