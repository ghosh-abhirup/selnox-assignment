"use client";
import { Dialog } from "@mui/material";
import "../RegistrationPage.css";
import React from "react";
import RegistrationForm from "../RegistrationForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const RegistrationPage = ({ open, handleClose }) => {
  return (
    <div>
      <Dialog fullScreen open={open} onClose={handleClose}>
        <div className="bg-white w-full h-full ">
          <FontAwesomeIcon
            icon={faXmark}
            size="2xl"
            color="#142A51"
            onClick={handleClose}
            className="mt-5 px-6 cursor-pointer"
          />
          <p className="w-full text-center registerFormTitle my-20">
            Employee Registration Form
          </p>

          <RegistrationForm closeOnSubmit={handleClose} />
        </div>
      </Dialog>
    </div>
  );
};

export default RegistrationPage;
