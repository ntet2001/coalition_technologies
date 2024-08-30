import React, { useState, useEffect } from "react";
import PatientInformation from "./PatientInformation";
import { Buffer } from "buffer";

const PatientsInformation = () => {
  const [patient, setPatient] = useState([]);
  const username = "coalition";
  const password = "skills-test";
  const base64encodedData = Buffer.from(`${username}:${password}`).toString('base64');

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const res = await fetch("https://fedskillstest.coalitiontechnologies.workers.dev",{ 
            headers: {'Content-Type': 'application/json','Authorization': `Basic ${base64encodedData}`}
        });
        const data = await res.json();
        setPatient(data[3]);
      } catch (error) {
        console.log("Error fetching jobs data : " + error);
      } finally {
        console.log("done :)");
      }
    };

    fetchPatients();
  }, [base64encodedData]);

  return (
    <div>
      <PatientInformation patient={patient} />
    </div>
  );
};

export default PatientsInformation;
