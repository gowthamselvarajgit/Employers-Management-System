package com.ahara.emsbackend.Controller;

import com.ahara.emsbackend.DTO.EmployeeRequestDTO;
import com.ahara.emsbackend.DTO.EmployeeResponseDTO;
import com.ahara.emsbackend.Service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@AllArgsConstructor
@RestController
@RequestMapping("/api/employees")
public class EmployeeController {
    private EmployeeService employeeService;

    //build add employee api
    @PostMapping
    public ResponseEntity<EmployeeResponseDTO> createEmployee(@RequestBody EmployeeRequestDTO employeeRequestDTO) {
        EmployeeResponseDTO savedEmployee = employeeService.createEmployee(employeeRequestDTO);
        return new  ResponseEntity<>(savedEmployee,HttpStatus.CREATED);
    }

    //build get employee api
    @GetMapping("/{id}")
    public ResponseEntity<EmployeeResponseDTO> getEmployeeById(@PathVariable("id") Long id) {
        EmployeeResponseDTO employeeDto = employeeService.getEmployeeById(id);
        return new ResponseEntity<>(employeeDto,HttpStatus.OK);
    }

    //build get all employee
    @GetMapping
    public ResponseEntity<List<EmployeeResponseDTO>> getAllEmployees() {
        List<EmployeeResponseDTO> employeeDtoList = employeeService.getAllEmployees();
        return new ResponseEntity<>(employeeDtoList,HttpStatus.OK);
    }

    //update
    @PutMapping("{id}")
    public ResponseEntity<EmployeeResponseDTO> updateEmployee(@PathVariable Long id , @RequestBody EmployeeRequestDTO employeeRequestDTO) {
        EmployeeResponseDTO employeeResponseDTO = employeeService.updateEmployee(id, employeeRequestDTO);
        return new ResponseEntity<>(employeeResponseDTO,HttpStatus.OK);
    }
    //delete
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteEmployee(@PathVariable Long id) {
        employeeService.deleteEmployee(id);
        return ResponseEntity.ok("Employee Deleted Successfully");
    }



}
