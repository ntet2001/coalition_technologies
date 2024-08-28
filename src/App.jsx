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
      <div className="flex justify-between bg-gray-200 px-5 pt-5">
        <Sidebar />
        <div className="mr-4 ml-4">
          <DiagnosisHistory />
          <DiagnosticList />
        </div>
        <PatientInformation />
      </div>
      <LabResults />
    </>
  );
};

export default App;
