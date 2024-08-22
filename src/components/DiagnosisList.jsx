import React from "react";

const DiagnosticList = () => {
  return (        
      <section  className="rounded-3xl divide-y divide-gray-100 p-5 bg-white ">
          <div className="flex items-center pb-10">
              <h2 className="text-2xl font-medium" >Diagnostic List</h2>
          </div> 
          <div className="flex">
              <table className="table-fixed w-full">
                  <thead>
                      <tr>
                      <th className="bg-gray-100 font-medium rounded-l-3xl text-left p-4">Problem / Diagnosis</th>
                      <th className="bg-gray-100 font-medium text-left p-4">Description</th>
                      <th className="bg-gray-100 font-medium rounded-r-3xl text-left p-4">Status</th>
                      </tr>
                  </thead>
              <tbody>
                  
                  <tr>
                     <td className="break-normal py-4 pl-4 font-light text-pretty">Hypertension</td>
                     <td className="py-4 pl-4 font-light">Chronic high blood pressure</td>
                     <td className="py-4 pl-4 font-light">Under Observation</td>
                  </tr>

                  <tr>
                     <td className="break-normal py-4 pl-4 font-light text-pretty">Type 2 Diabetes</td>
                     <td className="py-4 pl-4 font-light">Insulin resistance and elevated blood sugar</td>
                     <td className="py-4 pl-4 font-light">Cured</td>
                  </tr>

                  <tr>
                     <td className="break-normal py-4 pl-4 font-light text-pretty">Asthma</td>
                     <td className="py-4 pl-4 font-light">Recurrent episodes of bronchial constriction</td>
                     <td className="py-4 pl-4 font-light">Inactive</td>
                  </tr>

              </tbody>
              </table>
          </div>
      </section>
)}

export default DiagnosticList;