import React from "react";

import {Link, useNavigate} from 'react-router-dom'

const Employee = ({employee, deleteEmployee}) => {
  const navigate = useNavigate()
  const editEmployee =(e, id)=>{
    e.preventDefault();
    navigate(`/editEmployee/${id}`);
  }

    return (
    <tr key={employee.id}>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.firstName}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.lastName}</div>
      </td>
      <td className="text-left px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-500">{employee.emailId}</div>
      </td>

      <td className="text-right px-6 py-4 whitespace-nowrap font-medium text-sm">
        <Link onClick={(e, id)=> editEmployee(e, employee.id)} className="text-green-600 hover:green-indigo-800 px-4" to="#">
          Edit
        </Link>
        <Link className="text-red-600 hover:text-red-800" onClick={(e, id)=> deleteEmployee(e, employee.id) }>
          Delete
        </Link>
      </td>
    </tr>
  );
};

export default Employee;
