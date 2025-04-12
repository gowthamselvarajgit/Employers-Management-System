package com.ahara.emsbackend.Service;

import com.ahara.emsbackend.DTO.EmployeeRequestDTO;
import com.ahara.emsbackend.DTO.EmployeeResponseDTO;

import java.util.List;

public interface EmployeeService {
    EmployeeResponseDTO createEmployee(EmployeeRequestDTO employeeRequestDTO);
    EmployeeResponseDTO getEmployeeById(Long id);
    List<EmployeeResponseDTO> getAllEmployees();
    EmployeeResponseDTO updateEmployee(Long id, EmployeeRequestDTO employeeRequestDTO);
    void deleteEmployee(long id);
}
