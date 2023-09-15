"use client";
import EmployeeList from "@/components/Employee/EmployeeList";
import { useContext, useState } from "react";
import { AppContext } from "./AppContext";
import RegistrationPage from "@/components/RegistrationPage/RegistrationPage";

export default function Home() {
  const { isLoading, allEmployee } = useContext(AppContext);
  const [openRegistrationForm, setOpenRegistrationForm] = useState(false);

  return (
    <div className="bg-white w-full p-10">
      <button
        className="rounded-[13px] h-[69px] w-[290px] bg-[#142A51] registerBtnText"
        onClick={() => setOpenRegistrationForm(true)}
      >
        Register User
      </button>
      <div className="w-full mt-[118px] ">
        <EmployeeList data={allEmployee} isLoading={isLoading} />
      </div>

      <RegistrationPage
        open={openRegistrationForm}
        handleClose={() => setOpenRegistrationForm(false)}
      />
    </div>
  );
}
