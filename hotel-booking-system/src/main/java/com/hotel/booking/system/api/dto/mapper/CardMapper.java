package com.hotel.booking.system.api.dto.mapper;

import org.mapstruct.AfterMapping;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.springframework.beans.factory.annotation.Autowired;

import com.hotel.booking.system.api.dto.CardResponseDTO;
import com.hotel.booking.system.api.dto.post.CardPostDTO;
import com.hotel.booking.system.api.model.Card;
import com.hotel.booking.system.api.model.Customer;
import com.hotel.booking.system.api.service.impl.CustomerServiceImpl;

@Mapper(componentModel = "spring")
public abstract class CardMapper {

    @Autowired
    private CustomerServiceImpl customerService;

    // Mapping Review entity to ReviewResponseDTO
    @Mapping(source = "customer.id", target = "customerId")
    public abstract CardResponseDTO toResponseDTO(Card card);

    // Mapping ReviewPostDTO to Review entity
    @Mapping(target = "customer", ignore = true) // Ignore direct mapping of customer
    public abstract Card toEntity(CardPostDTO cardPostDTO);

    // After mapping to set the correct Customer and Hotel entities
    @AfterMapping
    protected void afterToEntity(CardPostDTO dto, @MappingTarget Card card) {
        if (dto.getCustomerId() != null) {
            // Fetch and set Customer entity
            Customer customer = customerService.getEntityById(dto.getCustomerId());
            card.setCustomer(customer);
        }

    }
}
