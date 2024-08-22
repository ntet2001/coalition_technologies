import React from "react";
import profileImage1 from "../assets/images/Layer 1.png";
import profileImage2 from "../assets/images/Layer 2.png";
import profileImage3 from "../assets/images/Layer 3.png";
import profileImage4 from "../assets/images/Layer 4.png";
import profileImage5 from "../assets/images/Layer 5.png";
import profileImage6 from "../assets/images/Layer 6.png";
import profileImage7 from "../assets/images/Layer 7.png";

const Sidebar = () => {
  const patientsInfo = [
    ["Emilly William", "Female, 18"],
    ["Ryan Johnson", "Male, 45"],
    ["Brandon Mitchell", "Male, 36"],
    ["Jessica Taylor", "Female, 28"],
    ["Samantha Johnson", "Female, 56"],
    ["Ashley Martinez", "Female, 54"],
    ["Olivia Brown", "Female, 32"],
    ["Tyler Davis", "Male, 19"],
    ["Kevin Anderson", "Male, 30"],
    ["Dylan Thompson", "Male, 36"],
    ["Nathan Evans", "Male, 58"],
    ["Mike Nolan", "Male, 31"],
  ];
  const styles = {
    dropdownmenu: {
      position: "absolute",
      left: "180px",
    },
    sidebartitle:{
        width:"230px",
        color: "#072635",
        fontSize:"20px",
        fontWeight:"bold",
        position: "relative",
        left:"25px",
        top:"5px",
    },
  };

  return (
    <aside className="flex rounded-lg">
      <div className="h-screen py-8 bg-white border-l border-r sm:w-100 w-100 ">
        <div className="relative">
          <h1 style={styles.sidebartitle}>Patients</h1>
          <button
            type="submit"
            className="absolute right-2 top-3  rounded-full  bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300"
          >
            <svg
              className="text-gray-600 h-4 w-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              version="1.1"
              id="Capa_1"
              x="0px"
              y="0px"
              viewBox="0 0 56.966 56.966"
              style={{ enableBackground: "new 0 0 56.966 56.966" }}
              xml:space="preserve"
              width="512px"
              height="512px"
            >
              <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
            </svg>
          </button>
        </div>
        <div className="mt-8 space-y-4">
          <button className="flex items-center w-full px-5 py-2 transition-colors duration-200 white:hover:bg-blue-600 gap-x-2 hover:bg-blue-100 focus:outline-none">
            <img
              className="object-cover w-8 h-8 rounded-full"
              src={profileImage1}
              alt=""
            />

            <div className="text-left rtl:text-right">
              <h1 className="text-sm font-medium text-gray-700 capitalize dark:text-dark">
                {patientsInfo[0][0]}
              </h1>

              <p className="text-xs text-gray-500 dark:text-gray-400">
                {patientsInfo[0][1]}
              </p>
            </div>
            <button
              class="focus:outline-none px-3  py-2 rounded-md hover:bg-gray-200 flex items-center"
              style={styles.dropdownmenu}
              id="dropdown-button"
            >
              <div class="flex flex-row items-center">
                <div class="w-1 h-1 bg-gray-700 rounded-full mr-0.5"></div>
                <div class="w-1 h-1 bg-gray-700 rounded-full mr-0.5"></div>
                <div class="w-1 h-1 bg-gray-700 rounded-full"></div>
              </div>
            </button>
          </button>

          <button className="flex items-center w-full px-5 py-2 transition-colors duration-200 white:hover:bg-blue-600 gap-x-2 hover:bg-blue-100 focus:outline-none">
            <img
              className="object-cover w-8 h-8 rounded-full"
              src={profileImage2}
              alt=""
            />

            <div className="text-left rtl:text-right">
              <h1 className="text-sm font-medium text-gray-700 capitalize dark:text-dark">
                {patientsInfo[1][0]}
              </h1>

              <p className="text-xs text-gray-500 dark:text-gray-400">
                {patientsInfo[1][1]}
              </p>
            </div>
            <button
              class="focus:outline-none px-3  py-2 rounded-md hover:bg-gray-200 flex items-center"
              style={styles.dropdownmenu}
              id="dropdown-button"
            >
              <div class="flex flex-row items-center">
                <div class="w-1 h-1 bg-gray-700 rounded-full mr-0.5"></div>
                <div class="w-1 h-1 bg-gray-700 rounded-full mr-0.5"></div>
                <div class="w-1 h-1 bg-gray-700 rounded-full"></div>
              </div>
            </button>
          </button>

          <button className="flex items-center w-full px-5 py-2 transition-colors duration-200 white:hover:bg-blue-600 gap-x-2 hover:bg-blue-100 focus:outline-none">
            <div className="relative">
              <img
                className="object-cover w-8 h-8 rounded-full"
                src={profileImage3}
                alt=""
              />
            </div>

            <div className="text-left rtl:text-right">
              <h1 className="text-sm font-medium text-gray-700 capitalize dark:text-dark">
                {patientsInfo[2][0]}
              </h1>

              <p className="text-xs text-gray-500 dark:text-gray-400">
                {patientsInfo[2][1]}
              </p>
            </div>
            <button
              class="focus:outline-none px-3  py-2 rounded-md hover:bg-gray-200 flex items-center"
              style={styles.dropdownmenu}
              id="dropdown-button"
            >
              <div class="flex flex-row items-center">
                <div class="w-1 h-1 bg-gray-700 rounded-full mr-0.5"></div>
                <div class="w-1 h-1 bg-gray-700 rounded-full mr-0.5"></div>
                <div class="w-1 h-1 bg-gray-700 rounded-full"></div>
              </div>
            </button>
          </button>

          <button className="flex items-center w-full px-5 py-2 transition-colors duration-200 white:hover:bg-blue-600 gap-x-2 hover:bg-blue-100 focus:outline-none">
            <img
              className="object-cover w-8 h-8 rounded-full"
              src={profileImage4}
              alt=""
            />

            <div className="text-left rtl:text-right">
              <h1 className="text-sm font-medium text-gray-700 capitalize dark:text-dark">
                {patientsInfo[3][0]}
              </h1>

              <p className="text-xs text-gray-500 dark:text-gray-400">
                {patientsInfo[3][1]}
              </p>
            </div>
            <button
              class="focus:outline-none px-3  py-2 rounded-md hover:bg-gray-200 flex items-center"
              style={styles.dropdownmenu}
              id="dropdown-button"
            >
              <div class="flex flex-row items-center">
                <div class="w-1 h-1 bg-gray-700 rounded-full mr-0.5"></div>
                <div class="w-1 h-1 bg-gray-700 rounded-full mr-0.5"></div>
                <div class="w-1 h-1 bg-gray-700 rounded-full"></div>
              </div>
            </button>
          </button>

          <button className="flex items-center w-full px-5 py-2 transition-colors duration-200 white:hover:bg-blue-600 gap-x-2 hover:bg-blue-100 focus:outline-none">
            <img
              className="object-cover w-8 h-8 rounded-full"
              src={profileImage5}
              alt=""
            />

            <div className="text-left rtl:text-right">
              <h1 className="text-sm font-medium text-gray-700 capitalize dark:text-dark">
                {patientsInfo[4][0]}
              </h1>

              <p className="text-xs text-gray-500 dark:text-gray-400">
                {patientsInfo[4][1]}
              </p>
            </div>
            <button
              class="focus:outline-none px-3  py-2 rounded-md hover:bg-gray-200 flex items-center"
              style={styles.dropdownmenu}
              id="dropdown-button"
            >
              <div class="flex flex-row items-center">
                <div class="w-1 h-1 bg-gray-700 rounded-full mr-0.5"></div>
                <div class="w-1 h-1 bg-gray-700 rounded-full mr-0.5"></div>
                <div class="w-1 h-1 bg-gray-700 rounded-full"></div>
              </div>
            </button>
          </button>

          <button className="flex items-center w-full px-5 py-2 transition-colors duration-200 white:hover:bg-blue-600 gap-x-2 hover:bg-blue-100 focus:outline-none">
            <div className="relative">
              <img
                className="object-cover w-8 h-8 rounded-full"
                src={profileImage6}
                alt=""
              />
            </div>

            <div className="text-left rtl:text-right">
              <h1 className="text-sm font-medium text-gray-700 capitalize dark:text-dark">
                {patientsInfo[5][0]}
              </h1>

              <p className="text-xs text-gray-500 dark:text-gray-400">
                {patientsInfo[5][1]}
              </p>
            </div>
            <button
              class="focus:outline-none px-3  py-2 rounded-md hover:bg-gray-200 flex items-center"
              style={styles.dropdownmenu}
              id="dropdown-button"
            >
              <div class="flex flex-row items-center">
                <div class="w-1 h-1 bg-gray-700 rounded-full mr-0.5"></div>
                <div class="w-1 h-1 bg-gray-700 rounded-full mr-0.5"></div>
                <div class="w-1 h-1 bg-gray-700 rounded-full"></div>
              </div>
            </button>
          </button>

          <button className="flex items-center w-full px-5 py-2 transition-colors duration-200 white:hover:bg-blue-600 gap-x-2 hover:bg-blue-100 focus:outline-none">
            <div className="relative">
              <img
                className="object-cover w-8 h-8 rounded-full"
                src={profileImage7}
                alt=""
              />
            </div>

            <div className="text-left rtl:text-right">
              <h1 className="text-sm font-medium text-gray-700 capitalize dark:text-dark">
                {patientsInfo[6][0]}
              </h1>

              <p className="text-xs text-gray-500 dark:text-gray-400">
                {patientsInfo[6][1]}
              </p>
            </div>
            <button
              class="focus:outline-none px-3  py-2 rounded-md hover:bg-gray-200 flex items-center"
              style={styles.dropdownmenu}
              id="dropdown-button">
              <div class="flex flex-row items-center">
                <div class="w-1 h-1 bg-gray-700 rounded-full mr-0.5"></div>
                <div class="w-1 h-1 bg-gray-700 rounded-full mr-0.5"></div>
                <div class="w-1 h-1 bg-gray-700 rounded-full"></div>
              </div>
            </button>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
