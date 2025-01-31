package com.hotel.booking.system.api.dto.mapper;

import org.mapstruct.Mapper;

import com.hotel.booking.system.api.dto.CustomerResponseDTO;
import com.hotel.booking.system.api.dto.post.CustomerPostDTO;
import com.hotel.booking.system.api.model.Customer;

@Mapper(componentModel = "spring")
public interface CustomerMapper {

    CustomerResponseDTO toResponseDTO(Customer customer);
    Customer toEntity(CustomerPostDTO customerCreateDTO);
}