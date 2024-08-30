import React from "react";
import Navbar from "../components/Navbar";
import PatientsInformation from "../components/PatientsInformation";
import Sidebar from "../components/Sidebar";
import DiagnosisHistory from "../components/DiagnosisHistory";
import DiagnosticList from "../components/DiagnosisList";
import LabResults from "../components/LabResults";

const HomePage = () => {
  return (
    <>
      <Navbar />

      <div className="flex justify-between bg-[#F6F7F8] px-5 pt-5">
        <Sidebar />

        <div className="mr-8 ml-8">
          <DiagnosisHistory />
          <DiagnosticList />
        </div>

        <div>
          <PatientsInformation />
          <LabResults />
        </div>
      </div>
    </>
  );
};

export default HomePage;
