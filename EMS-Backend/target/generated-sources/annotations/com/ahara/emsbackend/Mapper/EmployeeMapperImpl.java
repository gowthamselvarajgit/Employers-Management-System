package com.ahara.emsbackend.Mapper;

import com.ahara.emsbackend.DTO.EmployeeRequestDTO;
import com.ahara.emsbackend.DTO.EmployeeResponseDTO;
import com.ahara.emsbackend.Entity.Employee;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2025-04-16T11:25:45+0530",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 21.0.6 (Microsoft)"
)
@Component
public class EmployeeMapperImpl implements EmployeeMapper {

    @Override
    public Employee toEntity(EmployeeRequestDTO employeeRequestDTO) {
        if ( employeeRequestDTO == null ) {
            return null;
        }

        Employee employee = new Employee();

        employee.setFirstName( employeeRequestDTO.getFirstName() );
        employee.setLastName( employeeRequestDTO.getLastName() );
        employee.setEmail( employeeRequestDTO.getEmail() );

        return employee;
    }

    @Override
    public EmployeeResponseDTO toDTO(Employee employee) {
        if ( employee == null ) {
            return null;
        }

        EmployeeResponseDTO employeeResponseDTO = new EmployeeResponseDTO();

        if ( employee.getId() != null ) {
            employeeResponseDTO.setId( employee.getId() );
        }
        employeeResponseDTO.setFirstName( employee.getFirstName() );
        employeeResponseDTO.setLastName( employee.getLastName() );
        employeeResponseDTO.setEmail( employee.getEmail() );

        return employeeResponseDTO;
    }
}
