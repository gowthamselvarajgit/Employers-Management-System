import React from "react";
import "./App.css";
import ListOfEmployeeComponent from "./Components/ListOfEmployeeComponent";
import HeaderComponent from "./Components/HeaderComponent";
import FooterComponent from "./Components/FooterComponent";
import {
  BrowserRouter,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import EmployeeComponent from "./Components/EmployeeComponent";

const App = () => {
  return (
    <div>
      <BrowserRouter>

        <HeaderComponent />

        <Routes>

          //http://localhost:3000/
          <Route path="/" element={<ListOfEmployeeComponent />} />

          //http://localhost:3000/employees
          <Route path="/employees" element={<ListOfEmployeeComponent />} />

          //http://localhost:3000/employees/addNewEmployee
          <Route path="/add-employee" element={<EmployeeComponent />} />

          //http://localhost:3000/update-employee/1
          <Route path="/update-employee/:id" element={<EmployeeComponent />} />

        </Routes>

        <FooterComponent />

      </BrowserRouter>
    </div>
  );
};

export default App;
