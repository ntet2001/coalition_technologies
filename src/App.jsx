import React from "react";
import Navbar from "./components/Navbar";
import PatientInformation from "./components/PatientInformation";
import Sidebar from "./components/Sidebar";
import DiagnosisHistory from "./components/DiagnosisHistory";
import DiagnosticList from "./components/DiagnosisList";
import LabResults from "./components/LabResults";

const App = () => {
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
          <PatientInformation />
          <LabResults />
        </div>
      </div>
    </>
  );
};

export default App;
