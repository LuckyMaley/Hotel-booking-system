package com.hotel.booking.system.api.dto;

import org.springframework.web.multipart.MultipartFile;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class HotelResponseDTO {

    private String name;
    private String address;
    private String city;
    private String description;
    private int starRating;
    private String facilities;
    private String amenities;
    private MultipartFile pictureURL;
    private Long ownerId;

}
