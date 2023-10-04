import React from 'react';
import './UniTable.css';
const UniversityTable = ({ universities }) => {
  return (
    <div className="university-table">
      <table>
        <thead>
          <tr>
            <th>University Name</th>
            <th>Country</th>
            <th>Alpha Two Code</th>
            <th>Number of Domains</th>
          </tr>
        </thead>
        <tbody>
          {universities.map((university, index) => (
            <tr key={index}>
              <td>{university.name}</td>
              <td>{university.country}</td>
              <td>{university.alpha_two_code}</td>
              <td>{university.domains.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UniversityTable;
