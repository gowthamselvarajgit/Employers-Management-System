package com.ahara.emsbackend.Mapper;

import com.ahara.emsbackend.DTO.EmployeeRequestDTO;
import com.ahara.emsbackend.DTO.EmployeeResponseDTO;
import com.ahara.emsbackend.Entity.Employee;
import com.ahara.emsbackend.Repository.EmployeeRepository;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;
@Mapper(componentModel = "spring")
public interface EmployeeMapper {
    Employee toEntity(EmployeeRequestDTO employeeRequestDTO);
    EmployeeResponseDTO toDTO(Employee employee);
}