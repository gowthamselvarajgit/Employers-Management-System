import React, { useState } from "react";
import Logo from "../assets/images/logo.png";
import { createEmployee } from "../Services/EmployeeService";
import { useNavigate } from "react-router-dom";

const EmployeeComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [error, setError] = useState({
    firstName: " ",
    lastName: " ",
    email: " ",
  });

  const navigate = useNavigate();

  const saveEmployee = (event) => {
    event.preventDefault();

    if (validateForm()) {
      const employee = { firstName, lastName, email };
      console.log(employee);

      createEmployee(employee).then((response) => {
        console.log(response.data);
        alert("Employee added successfully!");
        navigate("/employees");
      });
    }
  };

  const validateForm = () => {
    let isValid = true;
    const errorCopy = { ...error };

    if (firstName.trim()) {
      errorCopy.firstName = " ";
    } else {
      errorCopy.firstName = "First name is required";
      isValid = false;
    }

    if (lastName.trim()) {
      errorCopy.lastName = " ";
    } else {
      errorCopy.lastName = "Last name is required";
      isValid = false;
    }

    if (email.trim()) {
      errorCopy.email = " ";
    } else {
      errorCopy.email = "Email is required";
      isValid = false;
    }
    setError(errorCopy);
    return isValid;
  };
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-b from-pink-100 to-white gap-6 px-4 p-10">
      <div className="flex flex-row justify-center items-center gap-2.5 mt-10 ">
        <img src={Logo} className="w-20 h-20 shadow-lg rounded-xl " />
        <h1 className="font-extrabold text-8xl text-center text-pink-700">
          Ahara
        </h1>
      </div>
      <h2 className="font-bold text-gray-800 text-5xl ">Add Employee</h2>
      <div className="flex flex-col justify-center items-center gap-4 mt-8 shadow-2xl rounded-3xl p-8 bg-pink-700 w-100">
        <form>
          <div className="form-group mb-2 gap-3.5 flex flex-col ">
            <div>
              <label className="text-white font-bold text-xl">First Name</label>
              <input
                type="text"
                placeholder="Enter First Name"
                className={`w-full px-4 py-2 rounded-lg outline-0 text-black bg-white form-control ${
                  error.firstName ? "is-invalid" : ""
                }`}
                name="firstName"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
              />
              {error.firstName && (
                <div className="text-white text-sm mt-1">{error.firstName}</div>
              )}
            </div>

            <div>
              <label className="text-white font-bold text-xl">Last Name</label>
              <input
                type="text"
                placeholder="Enter Last Name"
                className={`w-full px-4 py-2 rounded-lg outline-0 text-black bg-white form-control ${
                  error.lastName ? "is-invalid" : ""
                }`}
                name="lastName"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
              />
              {error.firstName && (
                <div className="text-white text-sm mt-1">{error.email}</div>
              )}
            </div>

            <div>
              <label className="text-white font-bold text-xl">Email</label>
              <input
                type="text"
                placeholder="Enter Email"
                className={`w-full px-4 py-2 rounded-lg outline-0 text-black bg-white form-control ${
                  error.lastName ? "is-invalid" : ""
                }`}
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
              {error.firstName && (
                <div className="text-white text-sm mt-1">{error.email}</div>
              )}
            </div>
          </div>
        </form>
        <button
          className="bg-white font-bold px-6 py-2 text-lg text-pink-700 rounded-2xl flex items-center justify-center cursor-pointer hover:border-2 hover:border-white hover:bg-pink-700 hover:text-white transition duration-300"
          onClick={saveEmployee}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default EmployeeComponent;
