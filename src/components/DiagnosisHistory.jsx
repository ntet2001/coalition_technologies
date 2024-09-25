import React, { useState } from "react";
import {UserData} from '../Data';
import LineChart from "./LineChart";

const DiagnosisHistory = () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Users Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  
  
  return (
    <section
      role="list"
      className="rounded-3xl p-5 bg-white divide-y divide-gray-100 mb-8"
    >
      <div className="flex items-center pb-10">
        <h2 className="text-2xl font-extrabold">Diagnosis History</h2>
      </div>
      <section className="grid grid-cols-1 grid-rows-1 lg:grid-cols-3 gap-y-12 bg-blue-50 px-5 pt-2 rounded-xl">
        <div className="col-span-2 row-span-1 gap-y-8 lg:gap-0">
          <div className="grid grid-cols-2 grid-rows-1">
            <h2 className="flex items-center text-xl font-bold">
              Blood Pressure
            </h2>
            <div className="grid grid-cols-1 text-sm md:mr-0 lg:mr-8">
              <p className="flex justify-end items-center">
                Last 6 Months <span className="ml-3"></span>
              </p>
            </div>
          </div>
          <div>
            <LineChart chartData={userData}/>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full grid grid-cols-1 grid-rows-3 text-md font-bold mb-4">
            <div className="flex items-center">
              <div className="w-4 h-4 mr-2 bg-pink-400 rounded-full"></div>
              Systolic
            </div>
            <h3 className="py-1 flex items-center text-2xl font-bold">160</h3>
            <div className="flex items-center">
              <p className="ml-1 font-extralight">Higher than Average</p>
            </div>
          </div>
          <div className="h-px w-full mr-2 bg-gray-400 mb-4"></div>
          <div className="w-full grid grid-cols-1 grid-rows-3 text-md font-bold">
            <div className="flex items-center">
              <div className="w-4 h-4 mr-2 bg-purple-400 rounded-full"></div>
              Diastolic
            </div>
            <h3 className="py-1 flex items-center text-2xl font-bold">78</h3>
            <div className="flex items-center">
              <p className="ml-1 font-extralight">Lower than Average</p>
            </div>
          </div>
          <div className="hidden lg:flex w-full h-14"></div>
        </div>
      </section>
      <section className="grid grid-cols-1 grid-rows-1 mt-5 gap-5 justify-center lg:grid-cols-3">
        <div className="pl-4 pt-4 bg-blue-50 rounded-xl">
          <svg
            id="respiratory_rate"
            data-name="respiratory rate"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="96"
            height="96"
            viewBox="0 0 96 96"
          >
            <defs>
              <clipPath id="clip-path">
                <rect
                  id="Rectangle_37"
                  data-name="Rectangle 37"
                  width="53.378"
                  height="56.499"
                  fill="none"
                />
              </clipPath>
            </defs>
            <circle
              id="Ellipse_8"
              data-name="Ellipse 8"
              cx="48"
              cy="48"
              r="48"
              fill="#fff"
            />
            <g
              id="Group_15"
              data-name="Group 15"
              transform="translate(21.311 19.75)"
            >
              <g id="Group_14" data-name="Group 14" clip-path="url(#clip-path)">
                <path
                  id="Path_19"
                  data-name="Path 19"
                  d="M20.783,56.5,6.826,56.468a8.013,8.013,0,0,1-5.191-3.652c-2.027-3.294-2.17-8.5-.427-15.474,4.17-16.681,10.165-22.955,12.549-24.878a8.794,8.794,0,0,1,6.385-2.231l-.367,2.473.184-1.236-.168,1.238a6.431,6.431,0,0,0-4.465,1.7C13.138,16.175,7.62,22,3.634,37.947c-1.552,6.209-1.507,10.9.13,13.56A5.474,5.474,0,0,0,7.248,54H20.783a2.149,2.149,0,0,0,2.146-2.146V29.931h2.5V51.853A4.651,4.651,0,0,1,20.783,56.5"
                  transform="translate(0 0)"
                  fill="#072635"
                />
                <path
                  id="Path_20"
                  data-name="Path 20"
                  d="M46.415,56.5H32.6a4.651,4.651,0,0,1-4.646-4.646V29.931h2.5V51.853A2.149,2.149,0,0,0,32.6,54H46.13a5.472,5.472,0,0,0,3.483-2.492c1.638-2.661,1.684-7.35.131-13.56C45.758,22,40.239,16.175,38.051,14.41a6.479,6.479,0,0,0-4.449-1.7l-.367-2.473a8.805,8.805,0,0,1,6.386,2.231c2.384,1.923,8.379,8.2,12.549,24.878,1.743,6.974,1.6,12.181-.427,15.474a8.015,8.015,0,0,1-5.191,3.652Z"
                  transform="translate(0 0)"
                  fill="#072635"
                />
                <path
                  id="Path_21"
                  data-name="Path 21"
                  d="M20.767,26.415l-.429-2.463c.127-.026,3.514-.793,3.514-6.812V2.5h-.728V0h3.228V17.14c0,8.21-5.357,9.235-5.585,9.275"
                  transform="translate(0 0)"
                  fill="#072635"
                />
                <path
                  id="Path_22"
                  data-name="Path 22"
                  d="M32.774,26.415c-.229-.04-5.586-1.065-5.586-9.275V0h3.229V2.5h-.729V17.14c0,6.13,3.479,6.806,3.514,6.812Z"
                  transform="translate(0 0)"
                  fill="#072635"
                />
                <path
                  id="Path_23"
                  data-name="Path 23"
                  d="M21.255,31.084l-1.715-1.03c.1-.171,2.564-4.2,7.191-4.2s7.023,4.04,7.123,4.211l-1.731,1a6.721,6.721,0,0,0-5.392-3.214c-3.476,0-5.456,3.195-5.476,3.228"
                  transform="translate(0 0)"
                  fill="#072635"
                />
                <path
                  id="Path_24"
                  data-name="Path 24"
                  d="M21.739,16.348v33.9a2.476,2.476,0,0,1-2.477,2.476H8.487s-6.066.22-4.55-9.538,7.648-24.526,11.934-26.834,5.538-.659,5.868,0"
                  transform="translate(0 0)"
                  fill="#74cef5"
                />
                <path
                  id="Path_25"
                  data-name="Path 25"
                  d="M31.644,16.348v33.9a2.476,2.476,0,0,0,2.477,2.476H44.9s6.066.22,4.55-9.538S41.8,18.656,37.512,16.348s-5.538-.659-5.868,0"
                  transform="translate(0 0)"
                  fill="#74cef5"
                />
              </g>
            </g>
          </svg>
          <h2 className="pt-4 text-lg font-light">Repository Rate</h2>
          <p className="text-3xl font-bold">20 bpm</p>
          <p className="my-5 font-extralight">Normal</p>
        </div>
        <div className="pl-4 pt-4 bg-pink-50 rounded-xl">
        <svg id="temperature" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="96" height="96" viewBox="0 0 96 96">
  <defs>
    <clipPath id="clip-path">
      <rect id="Rectangle_45" data-name="Rectangle 45" width="31.632" height="56" fill="none"/>
    </clipPath>
  </defs>
  <circle id="Ellipse_8" data-name="Ellipse 8" cx="48" cy="48" r="48" fill="#fff"/>
  <g id="Group_17" data-name="Group 17" transform="translate(32 20)">
    <g id="Group_16" data-name="Group 16" clip-path="url(#clip-path)">
      <path id="Path_26" data-name="Path 26" d="M13.707,56A13.706,13.706,0,0,1,7.474,30.086V0H19.941V30.086A13.706,13.706,0,0,1,13.707,56M9.474,2V31.359l-.588.266a11.708,11.708,0,1,0,9.643,0l-.588-.266V2Z"/>
      <rect id="Rectangle_38" data-name="Rectangle 38" width="5.025" height="44.411" transform="translate(11.195 3.921)" fill="#f05b66"/>
      <path id="Path_27" data-name="Path 27" d="M23.3,42.529a9.6,9.6,0,1,1-9.6-9.6,9.6,9.6,0,0,1,9.6,9.6" fill="#f05b66"/>
      <rect id="Rectangle_39" data-name="Rectangle 39" width="6.471" height="2" transform="translate(23.161 0.118)"/>
      <rect id="Rectangle_40" data-name="Rectangle 40" width="8.471" height="2" transform="translate(23.161 5.365)"/>
      <rect id="Rectangle_41" data-name="Rectangle 41" width="6.471" height="2" transform="translate(23.161 26.353)"/>
      <rect id="Rectangle_42" data-name="Rectangle 42" width="6.471" height="2" transform="translate(23.161 10.612)"/>
      <rect id="Rectangle_43" data-name="Rectangle 43" width="6.471" height="2" transform="translate(23.161 21.106)"/>
      <rect id="Rectangle_44" data-name="Rectangle 44" width="8.471" height="2" transform="translate(23.161 15.859)"/>
    </g>
  </g>
</svg>
          <h2 className="pt-4 text-lg font-light">Temperature</h2>
          <p className="text-3xl font-bold">98.6°F</p>
          <p className="my-5 font-extralight">Normal</p>
        </div>
        <div className="pl-4 pt-4 bg-blue-50 rounded-xl">
        <svg id="HeartBPM" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="96" height="96" viewBox="0 0 96 96">
  <defs>
    <clipPath id="clip-path">
      <rect id="Rectangle_35" data-name="Rectangle 35" width="59.711" height="53.998" fill="none"/>
    </clipPath>
  </defs>
  <circle id="Ellipse_8" data-name="Ellipse 8" cx="48" cy="48" r="48" fill="#fff"/>
  <g id="Health" transform="translate(18.145 24.001)">
    <g id="Group_13" data-name="Group 13" clip-path="url(#clip-path)">
      <path id="Path_16" data-name="Path 16" d="M29.855,54,4.951,29.092a16.948,16.948,0,0,1-1.185-1.314l2.01-1.632a14.236,14.236,0,0,0,1,1.112L29.854,50.333,52.926,27.258a14.317,14.317,0,0,0,0-20.247l-.233-.235a14.318,14.318,0,0,0-20.248,0l-2.6,2.6-2.59-2.6A14.337,14.337,0,0,0,7,6.776l-.229.23a14.226,14.226,0,0,0-4.19,10.127H0A16.8,16.8,0,0,1,4.951,5.181l.23-.229a16.925,16.925,0,0,1,23.914,0l.761.761.761-.761a16.906,16.906,0,0,1,23.909,0h0l.233.234a16.906,16.906,0,0,1,0,23.908Z" transform="translate(0 0)" fill="#072635"/>
      <path id="Path_17" data-name="Path 17" d="M8.763,25.277A11.53,11.53,0,0,1,8.763,9l.227-.226a11.513,11.513,0,0,1,16.282,0h0l4.573,4.582,4.582-4.585a11.513,11.513,0,0,1,16.282,0l.212.214a11.509,11.509,0,0,1,.038,16.276l-.021.022L29.855,46.368Z" transform="translate(0 0)" fill="#f05b66"/>
      <path id="Path_18" data-name="Path 18" d="M20.131,30.786l-4.24-13.852-2.785,6.335L.028,23.161V20.573l11.389.108,4.91-11.17,4.466,14.594,2.241-4.154h17.6v2.588H24.578Z" transform="translate(0 0)" fill="#072635"/>
    </g>
  </g>
</svg>

          <h2 className="pt-4 text-lg font-light">Heart Rate</h2>
          <p className="text-3xl font-bold">78 bpm</p>
          <p className="my-5 font-extralight">Lower than average</p>
        </div>
      </section>
    </section>
  );
};

export default DiagnosisHistory;
