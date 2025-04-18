import React, { useEffect, useState } from "react";
import Logo from "../assets/images/logo.png";
import { useNavigate } from "react-router-dom";
import { listEmployees, deleteEmployee } from "../Services/EmployeeService";

const ListOfEmployeeComponent = () => {
  const [Employees, setEmployees] = useState([]);

  const navigate = useNavigate();
  function addNewEmployee() {
    navigate("/add-employee");
  }

  function updateEmployee(id) {
    navigate(`/update-employee/${id}`);
  }

  function removeEmployee(id) {
    if (window.confirm("Are you sure you want to delete this employee?")) {
      deleteEmployee(id)
        .then((response) => {
          console.log("Employee deleted successfully:", response.data);
          alert("Employee deleted successfully!");
          getAllEmployees(); // Refresh the employee list after deletion
        })
        .catch((error) => {
          console.error("Error deleting employee:", error);
          alert("Error deleting employee");
        });
    }
  }
  useEffect(() => {
    getAllEmployees();
  }, []);

  function getAllEmployees() {
    listEmployees()
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-b from-pink-100 to-white gap-6 px-4">
      <div className="flex flex-row justify-center items-center gap-2.5 mt-10">
        <img src={Logo} className="w-20 h-20 shadow-lg rounded-xl " />
        <h1 className="font-extrabold text-8xl text-center text-pink-700">
          Ahara
        </h1>
      </div>
      <h2 className="font-bold text-gray-800 text-5xl ">List of Employees</h2>

      <button
        className="bg-pink-700 font-bold px-6 py-2 text-lg text-white rounded-2xl flex items-center justify-center cursor-pointer hover:bg-pink-600
      "
        onClick={addNewEmployee}
      >
        Add Employee
      </button>
      <div className="overflow-x-auto w-full max-w-4xl mt-8 shadow-2xl rounded-3xl">
        <table className="min-w-full border-collapse rounded-3xl overflow-hidden">
          <thead>
            <tr className="bg-gradient-to-r from-pink-600 to-red-500 text-white text-xl">
              <th className="py-4 px-6 border-b border-white">Employee ID</th>
              <th className="py-4 px-6 border-b border-white">First Name</th>
              <th className="py-4 px-6 border-b border-white">Last Name</th>
              <th className="py-4 px-6 border-b border-white">Email</th>
              <th className="py-4 px-6 border-b border-white">Action</th>
            </tr>
          </thead>
          <tbody>
            {Employees.map((employee) => (
              <tr
                key={employee.id}
                className="bg-white hover:bg-pink-200 transition duration-300 cursor-pointer"
              >
                <td className="py-3 px-6 font-medium text-gray-700 text-center">
                  {employee.id}
                </td>
                <td className="py-3 px-6 font-medium text-gray-700 text-center">
                  {employee.firstName}
                </td>
                <td className="py-3 px-6 font-medium text-gray-700 text-center">
                  {employee.lastName}
                </td>
                <td className="py-3 px-6 font-medium text-gray-700 text-center">
                  {employee.email}
                </td>
                <td className="flex flex-row justify-center items-center gap-3 text-center">
                  <button
                    className="flex items-center justify-center px-4 py-2 rounded-2xl border-2 bg-pink-700 text-white font-bold cursor-pointer hover:border-pink-700 hover:bg-white hover:text-pink-700 hover:border-2 transition delay-100 ml-4"
                    onClick={() => updateEmployee(employee.id)}
                  >
                    Update
                  </button>
                  <button
                    className="flex items-center justify-center px-4 py-2 rounded-2xl border-2 bg-red-700 text-white font-bold cursor-pointer hover:border-red-700 hover:bg-white hover:text-red-700 hover:border-2 transition delay-100 mr-4"
                    onClick={() => removeEmployee(employee.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListOfEmployeeComponent;
