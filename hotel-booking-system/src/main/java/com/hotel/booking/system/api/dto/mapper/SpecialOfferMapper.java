package com.hotel.booking.system.api.dto.mapper;

import com.hotel.booking.system.api.dto.SpecialOfferResponseDTO;
import com.hotel.booking.system.api.dto.post.SpecialOfferPostDTO;
import com.hotel.booking.system.api.model.Hotel;
import com.hotel.booking.system.api.model.SpecialOffer;

public class SpecialOfferMapper {
    public static SpecialOfferResponseDTO toDTO(SpecialOffer specialOffer) {
        SpecialOfferResponseDTO dto = new SpecialOfferResponseDTO();
        dto.setId(specialOffer.getId());
        dto.setDiscountPercentage(specialOffer.getDiscountPercentage());
        dto.setHotelId(specialOffer.getHotel().getId());
        dto.setHotelName(specialOffer.getHotel().getName());
        dto.setCreatedAt(specialOffer.getCreatedAt());
        dto.setUpdatedAt(specialOffer.getUpdatedAt());
        return dto;
    }

    public static SpecialOffer toEntity(SpecialOfferPostDTO requestDTO, Hotel hotel) {
        SpecialOffer specialOffer = new SpecialOffer();
        specialOffer.setDiscountPercentage(requestDTO.getDiscountPercentage());
        specialOffer.setHotel(hotel);
        specialOffer.setCreatedAt(requestDTO.getCreatedAt());
        specialOffer.setUpdatedAt(requestDTO.getUpdatedAt());
        return specialOffer;
    }
}
