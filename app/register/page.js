import React from "react";
import "../../components/RegistrationPage.css";
import RegistrationForm from "@/components/RegistrationForm";

const Page = () => {
  return (
    <div className="bg-white w-full h-full">
      <p className="w-full text-center registerFormTitle my-20">
        Employee Registration Form
      </p>

      <RegistrationForm />
    </div>
  );
};

export default Page;
