"use client";
import "./RegistrationPage.css";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog } from "@mui/material";
import React from "react";
import RegistrationForm from "./RegistrationForm";

const EditDetailsPage = ({ open, handleClose, data }) => {
  return (
    <div>
      <Dialog fullScreen open={open} onClose={handleClose}>
        <div className="bg-white w-full h-full">
          <FontAwesomeIcon
            icon={faXmark}
            size="2xl"
            color="#142A51"
            onClick={handleClose}
            className="mt-5 px-6 cursor-pointer"
          />
          <p className="w-full text-center registerFormTitle my-20">
            Edit Employee Details
          </p>

          <RegistrationForm data={data} closeOnSubmit={handleClose} />
        </div>
      </Dialog>
    </div>
  );
};

export default EditDetailsPage;
