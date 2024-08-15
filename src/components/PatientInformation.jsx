import React from "react";
import profileImage from "../assets/images/Layer 2.png";
import BirthIcon from "../assets/images/BirthIcon.svg";
import FemaleIcon from "../assets/images/FemaleIcon.svg";
import PhoneIcon from "../assets/images/PhoneIcon.svg";
import InsuranceIcon from "../assets/images/InsuranceIcon.svg";

const PatientInformation = () => {
  const patientName = "Jessica Taylor";
  const patientBirthday = "August 23, 1996";
  const patientGender = "Female";
  const patientContact = "(415) 555-1234";
  const patientEmergencyContact = "(415) 555-5678";
  const patientInsuranceProvider = "Sunrise Health Assurance";

  return (
    <div className="bg-white max-h-full w-96 rounded-lg px-5 py-8">
      {/* profile of the patient */}
      <div className="mb-10">
        <div className="flex justify-center mb-5">
          <img src={profileImage} alt="profileImage" />
        </div>
        <div>
          <p className="text-base font-extrabold text-center">{patientName}</p>
        </div>
      </div>

      {/* patient informations */}
      {/* birthday */}
      <div className="flex flex-shrink-0 items-center px-2 justify-start mb-5">
        <div>
          <img className="h-10 w-10 mr-5" src={BirthIcon} alt="BirthIcon" />
        </div>
        <div>
          <p className="text-sm font-medium text-[#072635]">Date of Birth</p>
          <p className="text-sm font-bold text-[#072635]">{patientBirthday}</p>
        </div>
      </div>

      {/* gender */}
      <div className="flex flex-shrink-0 items-center px-2 justify-start mb-5">
        <div>
          <img className="h-10 w-10 mr-5" src={FemaleIcon} alt="FemaleIcon" />
        </div>
        <div>
          <p className="text-sm font-medium text-[#072635]">Gender</p>
          <p className="text-sm font-bold text-[#072635]">{patientGender}</p>
        </div>
      </div>

      {/* Contact info */}
      <div className="flex flex-shrink-0 items-center px-2 justify-start mb-5">
        <div>
          <img className="h-10 w-10 mr-5" src={PhoneIcon} alt="PhoneIcon" />
        </div>
        <div>
          <p className="text-sm font-medium text-[#072635]">Contact Info.</p>
          <p className="text-sm font-bold text-[#072635]">{patientContact}</p>
        </div>
      </div>

      {/* Emergency Contact info */}
      <div className="flex flex-shrink-0 items-center px-2 justify-start mb-5">
        <div>
          <img className="h-10 w-10 mr-5" src={PhoneIcon} alt="PhoneIcon" />
        </div>
        <div>
          <p className="text-sm font-medium text-[#072635]">
            Emergency Contacts
          </p>
          <p className="text-sm font-bold text-[#072635]">
            {patientEmergencyContact}
          </p>
        </div>
      </div>

      {/* Insurance provider */}
      <div className="flex flex-shrink-0 items-center px-2 justify-start mb-10">
        <div>
          <img
            className="h-10 w-10 mr-5"
            src={InsuranceIcon}
            alt="InsuranceIcon"
          />
        </div>
        <div>
          <p className="text-sm font-medium text-[#072635]">
            Insurance provider
          </p>
          <p className="text-sm font-bold text-[#072635]">
            {patientInsuranceProvider}
          </p>
        </div>
      </div>

      <div className="flex justify-center mx-2 ">
        <button className="px-4 py-2 rounded-full font-bold text-[#072635] bg-[#01F0D0]">
          Show All Information
        </button>
      </div>
    </div>
  );
};

export default PatientInformation;
