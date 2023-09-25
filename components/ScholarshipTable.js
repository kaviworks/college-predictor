import React from "react";

const ScholarshipTable = ({
  filteredData,
  toggleRowExpansion,
  expandedRows,
}) => {
  return (
    <table className="w-10/12 mx-auto border-collapse">
      <thead>
        <tr className="bg-gray-300 font-bold text-center">
          <th>Scholarship Name</th>
          <th>Status</th>
          <th>Gender</th>
          <th>Category</th>
          <th>Application Link</th>
        </tr>
      </thead>
      <tbody>
        {filteredData.map((item, index) => (
          <React.Fragment key={index}>
            <tr
              onClick={() => toggleRowExpansion(index)}
              className={index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"}
            >
              <td className="px-5 py-3 border-b border-gray-400 text-center break-words w-56">
                {item["Scholarship Name"]}
              </td>
              <td className="px-5 py-3 border-b border-gray-400 text-center">
                {item.Status}
              </td>
              <td className="px-5 py-3 border-b border-gray-400 text-center">
                {item.Gender}
              </td>
              <td className="px-5 py-3 border-b border-gray-400 text-center">
                {item.Category}
              </td>
              <td className="px-5 py-3 border-b border-gray-400 text-center">
                <a
                  href={item["Application Link"]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                  onClick={(e) => e.stopPropagation()}
                >
                  {item["Application Link"]}
                </a>
              </td>
            </tr>
            {expandedRows[index] && (
              <tr className={index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"}>
                <td colSpan="5" className="px-5 py-3">
                  <div>
                    <b>Eligibility</b>: {item.Eligibility} <br />
                    <b>Benefits</b>: {item.Benefits} <br />
                    <b>Doc Required</b>: {item["Doc Required"]} <br />
                    <b>Can Class 11 Apply</b>: {item["Class 11 can Apply"]}{" "}
                    <br />
                    <b>Can Class 12 Apply</b>: {item["Class 12 can Apply"]}{" "}
                    <br />
                    <b>Family Income (in LPA)</b>:{" "}
                    {item["Family Income (in LPA)"]} <br />
                    <b>Last Date</b>: {item["Last Date"]} <br />
                    <b>Open for Stream</b>: {item["Open for Stream"]} <br />
                    <b>Special Criteria</b>: {item["Special Criteria"]} <br />
                  </div>
                </td>
              </tr>
            )}
          </React.Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default ScholarshipTable;
