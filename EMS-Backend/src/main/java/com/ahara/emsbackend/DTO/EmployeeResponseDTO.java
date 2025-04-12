package com.ahara.emsbackend.DTO;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class EmployeeResponseDTO {
    private long id;
    private String firstName;
    private String lastName;
    private String email;
}
