"use client";
import EmployeeList from "@/components/EmployeeList";
import { useContext } from "react";
import { AppContext } from "./AppContext";

export default function Home() {
  const { isLoading, allEmployee } = useContext(AppContext);

  return (
    <div className="bg-white w-full">
      <div className="w-full mt-[118px] px-[40px]">
        <EmployeeList data={allEmployee} isLoading={isLoading} />
      </div>
    </div>
  );
}
