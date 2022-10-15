import React, { useState } from 'react'
import EmployeeService from '../services/EmployeeService';
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {

    const navigate = useNavigate();

    const [employee, setEmployee] = useState({
        id : "",
        firstName : "",
        lastName: "",
        emailId : "",
    });


    const handleChange = (e) => {
        const value = e.target.value;
        setEmployee({...employee, [e.target.name] : value});
    }

    const saveEmployee = (e) => {
        e.preventDefault();
        EmployeeService.saveEmployee(employee)
        .then((response) => {
            navigate('/employeeList')
        }) 
        .catch((error) => {
            console.log(error);
        })
    }

    const reset = (e) =>{
        e.preventDefault();
        setEmployee({
        id : "",
        firstName : "",
        lastName: "",
        emailId : "",     
        })
    }

  return (
    <div className="flex max-w-2xl shadow border-b mx-auto">
        <div className="px-8 py-8">
            <div className="font-thin text-2xl tracking-wider">
                <h1>Add new Employee</h1>
            </div>
            <div className="item-center justify-center h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal">First Name</label>
                <input name="firstName" value={employee.firstName} onChange = {(e) => handleChange(e)} type= "text" className="h-10 w-96 border mt-2 px-2 py-2"></input>
            </div>
            <div className="item-center justify-center h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal">Last Name</label>
                <input name= "lastName" value={employee.lastName} onChange = {(e) => handleChange(e)} type= "text" className="h-10 w-96 border mt-2 px-2 py-2"></input>
            </div>
            <div className="item-center justify-center h-14 w-full my-4">
                <label className="block text-gray-600 text-sm font-normal">Email</label>
                <input name="emailId" value = {employee.emailId} type= "email" onChange = {(e) => handleChange(e)} className="h-10 w-96 border mt-2 px-2 py-2"></input>
            </div>
            <div className="item-center justify-center h-14 w-full my-4 space-x-4 pt-4">
               <button onClick={saveEmployee} className="rounded text-white font-semibold bg-green-400 py-2 px-2 hover:bg-green-700">Save</button>
               <button  onClick={reset} keyDow className="rounded text-white font-semibold bg-red-400 py-2 px-2 mt-2 hover:bg-red-700">Clear</button>
            </div>
        </div>
    </div>
  )
}

export default AddEmployee