package com.ahara.emsbackend.Service.Impl;

import com.ahara.emsbackend.DTO.EmployeeRequestDTO;
import com.ahara.emsbackend.DTO.EmployeeResponseDTO;
import com.ahara.emsbackend.Entity.Employee;
import com.ahara.emsbackend.Exception.ResourceNotFoundException;
import com.ahara.emsbackend.Mapper.EmployeeMapper;
import com.ahara.emsbackend.Repository.EmployeeRepository;
import com.ahara.emsbackend.Service.EmployeeService;
import lombok.Data;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@RequiredArgsConstructor
@Service
@Data
public class EmployeeServiceImpl implements EmployeeService {
    private final EmployeeMapper employeeMapper;
    private final EmployeeRepository employeeRepository;

    @Override
    public EmployeeResponseDTO createEmployee(EmployeeRequestDTO employeeRequestDTO) {
        Employee employee = employeeMapper.toEntity(employeeRequestDTO);
        Employee createEmployee = employeeRepository.save(employee);
        return employeeMapper.toDTO(createEmployee);
    }


    @Override
    public EmployeeResponseDTO getEmployeeById(Long id) {
        Employee employee = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee with id " + id + " not found"));
        return employeeMapper.toDTO(employee);
    }

    @Override
    public List<EmployeeResponseDTO> getAllEmployees() {
        List<Employee> employees = employeeRepository.findAll();

        return employees.stream()
                .map(employee -> employeeMapper.toDTO(employee))
                .toList();
    }

    @Override
    public EmployeeResponseDTO updateEmployee(Long id, EmployeeRequestDTO employeeRequestDTO) {
        Employee employee = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee with id " + id + " not found"));
        employee.setFirstName(employeeRequestDTO.getFirstName());
        employee.setLastName(employeeRequestDTO.getLastName());
        employee.setEmail(employeeRequestDTO.getEmail());
        Employee updatedEmployee = employeeRepository.save(employee);
        return employeeMapper.toDTO(updatedEmployee);
    }

    @Override
    public void deleteEmployee(long id) {
        Employee employee = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Employee with id " + id + " not found"));
        employeeRepository.delete(employee);
    }
}
