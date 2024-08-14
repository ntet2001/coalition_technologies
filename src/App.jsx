import React from "react";
import Navbar from "./components/Navbar";
import PatientInformation from "./components/PatientInformation";

const App = () => {
  return (
    <>
      <div className="bg-gray-200 px-5 pt-5">
        <PatientInformation/>
      </div>
    </>
  );
};

export default App;
