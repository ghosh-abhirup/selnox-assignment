"use client";
import EmployeeList from "@/components/Employee/EmployeeList";
import React, { Fragment, useContext, useState } from "react";
import { AppContext } from "./AppContext";
import RegistrationPage from "@/components/RegistrationPage/RegistrationPage";
import { Combobox, Transition } from "@headlessui/react";
import ViewDetailsPage from "@/components/ViewDetailsPage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  const { isLoading, allEmployee } = useContext(AppContext);
  const [openRegistrationForm, setOpenRegistrationForm] = useState(false);
  const [query, setQuery] = useState("");
  const [openView, setOpenView] = useState(false);
  const [selectedEmplyee, setSelectedEmplyee] = useState(null);

  const filteredEmployee =
    query === ""
      ? allEmployee
      : allEmployee.filter((employee) => {
          const fullName = employee.FirstName + " " + employee.LastName;

          return fullName.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <div className="bg-white w-full p-10">
      <div className="flex items-center justify-between gap-[50px]">
        <Combobox>
          {({ open }) => (
            <div className="relative w-[60%]">
              <div className="absolute right-4 top-1/2 -translate-y-1/2">
                <FontAwesomeIcon
                  icon={faAngleDown}
                  size="sm"
                  color="#7E98BA"
                  className={`transition-all ease-in-out ${
                    open ? "rotate-180" : "rotate-0"
                  }`}
                />
              </div>
              <Combobox.Input
                onChange={(event) => setQuery(event.target.value)}
                className={`searchInputBox searchBarText`}
                placeholder="Search an employee"
              />
              <Transition
                as={Fragment}
                enter="transition-opacity duration-75"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Combobox.Options className={`searchOptions`}>
                  {filteredEmployee?.map((employee) => {
                    const fullName =
                      employee.FirstName.trim() +
                      " " +
                      employee.LastName.trim();

                    return (
                      <React.Fragment key={employee.id}>
                        <Combobox.Option
                          key={employee.id}
                          value={fullName}
                          className={`optionCard`}
                          onClick={() => {
                            setSelectedEmplyee(employee);
                            setOpenView(true);
                          }}
                        >
                          {fullName}
                        </Combobox.Option>
                      </React.Fragment>
                    );
                  })}
                </Combobox.Options>
              </Transition>
            </div>
          )}
        </Combobox>

        <button
          className="rounded-[13px] h-[69px] w-[290px] bg-[#142A51] registerBtnText"
          onClick={() => setOpenRegistrationForm(true)}
        >
          Register User
        </button>
      </div>
      <div className="w-full mt-[118px] ">
        <EmployeeList data={allEmployee} isLoading={isLoading} />
      </div>

      <RegistrationPage
        open={openRegistrationForm}
        handleClose={() => setOpenRegistrationForm(false)}
      />
      <ViewDetailsPage
        open={openView}
        handleClose={() => setOpenView(false)}
        employee={selectedEmplyee}
      />
    </div>
  );
}
