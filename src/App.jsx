import React from "react";
import Navbar from "./components/Navbar";
import PatientInformation from "./components/PatientInformation";
import Sidebar from './components/Sidebar';
import DiagnosisHistory from './components/DiagnosisHistory';
import DiagnosticList from "./components/DiagnosisList";
import LabResults from "./components/LabResults";
 

const App = () => {
  return (
    <>
      <Navbar/>
      <Sidebar/>
      <div className="bg-gray-200 px-5 pt-5">
        <PatientInformation/>
      </div>
      <DiagnosisHistory/>
      <DiagnosticList/>
      <LabResults/>
    </>
  );
};

export default App;
