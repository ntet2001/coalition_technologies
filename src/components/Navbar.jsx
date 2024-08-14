import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/TestLogo.svg";
import homeimage from "../assets/images/home_FILL0_wght300_GRAD0_opsz24.svg";
import groupimage from "../assets/images/group_FILL0_wght300_GRAD0_opsz24.svg";
import calenderimage from "../assets/images/calendar_today_FILL0_wght300_GRAD0_opsz24.svg";
import chatimage from "../assets/images/chat_bubble_FILL0_wght300_GRAD0_opsz24.svg";
import creditcardimage from "../assets/images/credit_card_FILL0_wght300_GRAD0_opsz24.svg";
import seniordoctorimage from "../assets/images/senior-woman-doctor-and-portrait-smile-for-health-2023-11-27-05-18-16-utc@2x.png";
import settingimage from "../assets/images/settings_FILL0_wght300_GRAD0_opsz24.svg";
import morevertimage from "../assets/images/more_vert_FILL0_wght300_GRAD0_opsz24.svg";

const Navbar = () => {
  const doctorName = "Jose Simmons";
  const doctorProfession = "General Practitioner";

  return (
    <div>
      <nav className="bg-white rounded-full">
        <div className="px-10">
          <div className="flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              {/* <!-- Logo --> */}
              <a className="flex flex-shrink-0 items-center mr-4" href="/">
                <img className="h-10 w-auto" src={logo} alt="TestLogo" />
              </a>
            </div>

            {/* Pages link */}
            <div className="flex flex-2 items-center justify-center">
              <a className="flex flex-shrink-0 items-center mx-2 px-4 py-2" href="/">
                <img className="h-4 w-4 mr-1" src={homeimage} alt="homeimage" />
                <span className="font-semibold text-sm">Overview</span>
              </a>
              <a className="flex flex-shrink-0 items-center mx-2 px-4 py-2 rounded-full bg-[#01F0D0]" href="/">
                <img
                  className="h-4 w-4 mr-1"
                  src={groupimage}
                  alt="groupimage"
                />
                <span className="font-semibold text-sm">Patients</span>
              </a>
              <a className="flex flex-shrink-0 items-center mx-2 px-4 py-2" href="/">
                <img
                  className="h-4 w-4 mr-1"
                  src={calenderimage}
                  alt="calenderimage"
                />
                <span className="font-semibold text-sm">Schedule</span>
              </a>
              <a className="flex flex-shrink-0 items-center mx-2 px-4 py-2" href="/">
                <img className="h-4 w-4 mr-1" src={chatimage} alt="chatimage" />
                <span className="font-semibold text-sm">Message</span>
              </a>
              <a className="flex flex-shrink-0 items-center mx-2 px-4 py-2" href="/">
                <img
                  className="h-4 w-4 mr-1"
                  src={creditcardimage}
                  alt="creditcardimage"
                />
                <span className="font-semibold text-sm">Transactions</span>
              </a>
            </div>

            {/* profile and parameters */}
            <div className="flex flex-1 items-center justify-end">
              {/* profile */}
              <div className="flex flex-shrink-0 items-center px-2 justify-center border-solid border-r-2 border-gray-200">
                <div>
                  <img
                    className="h-12 w-12 mr-1"
                    src={seniordoctorimage}
                    alt="seniordoctorimage"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold">{"Dr. " + doctorName}</p>
                  <p className="text-sm font-extralight text-gray-500">
                    {doctorProfession}
                  </p>
                </div>
              </div>

              {/* parameters */}
              <div className="flex flex-shrink-0 items-center justify-center ml-2">
                <a href="/">
                  <img
                    className="h-5 w-5 mr-1"
                    src={settingimage}
                    alt="settingimage"
                  />
                </a>
                <a href="/">
                  <img
                    className="h-5 w-5 mr-1"
                    src={morevertimage}
                    alt="morevertimage"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
