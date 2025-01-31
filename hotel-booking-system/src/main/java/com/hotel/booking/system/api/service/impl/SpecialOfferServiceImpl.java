package com.hotel.booking.system.api.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.hotel.booking.system.api.dto.SpecialOfferResponseDTO;
import com.hotel.booking.system.api.dto.mapper.SpecialOfferMapper;
import com.hotel.booking.system.api.dto.post.SpecialOfferPostDTO;
import com.hotel.booking.system.api.exception.ResourceNotFoundException;
import com.hotel.booking.system.api.model.Hotel;
import com.hotel.booking.system.api.model.SpecialOffer;
import com.hotel.booking.system.api.repository.HotelRepository;
import com.hotel.booking.system.api.repository.SpecialOfferRepository;
import com.hotel.booking.system.api.service.GenericService;

@Service
public class SpecialOfferServiceImpl implements GenericService<SpecialOffer> {

    @Autowired
    private SpecialOfferRepository specialOfferRepository;
    
    @Autowired
    private HotelRepository hotelRepository;

    @Override
    public SpecialOffer saveEntity(SpecialOffer specialOffer) {
        return specialOfferRepository.save(specialOffer);
    }

    @Override
    public List<SpecialOffer> getAllEntities() {
        return specialOfferRepository.findAll();
    }

    @Override
    public SpecialOffer getEntityById(long id) {
        return specialOfferRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("SpecialOffer", "Id", id));
    }

    @Override
    public SpecialOffer updateEntity(SpecialOffer specialOffer, long id) {
        SpecialOffer existingOffer = specialOfferRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("SpecialOffer", "Id", id));
        
        existingOffer.setDiscountPercentage(specialOffer.getDiscountPercentage());
        existingOffer.setHotel(specialOffer.getHotel());
        existingOffer.setUpdatedAt(specialOffer.getUpdatedAt());

        return specialOfferRepository.save(existingOffer);
    }

    @Override
    public void deleteEntity(long id) {
        specialOfferRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("SpecialOffer", "Id", id));
        specialOfferRepository.deleteById(id);
    }

    @Transactional
    public SpecialOfferResponseDTO createSpecialOffer(SpecialOfferPostDTO specialOfferPostDTO) {

        Hotel hotel = hotelRepository.findById(specialOfferPostDTO.getHotelId())
            .orElseThrow(() -> new ResourceNotFoundException("Hotel", "Id", specialOfferPostDTO.getHotelId()));
        
        SpecialOffer specialOffer = SpecialOfferMapper.toEntity(specialOfferPostDTO, hotel);
        SpecialOffer savedOffer = specialOfferRepository.save(specialOffer);
        
        return SpecialOfferMapper.toDTO(savedOffer);
    }

    public List<SpecialOfferResponseDTO> getAllSpecialOffers() {
        return specialOfferRepository.findAll().stream()
            .map(SpecialOfferMapper::toDTO)
            .collect(Collectors.toList());
    }

    public SpecialOfferResponseDTO getSpecialOfferById(Long id) {
        SpecialOffer specialOffer = specialOfferRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("SpecialOffer", "Id", id));
        
        return SpecialOfferMapper.toDTO(specialOffer);
    }

    @Transactional
    public SpecialOfferResponseDTO updateSpecialOffer(Long id, SpecialOfferPostDTO requestDTO) {
        SpecialOffer existingOffer = specialOfferRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("SpecialOffer", "Id", id));

        Hotel hotel = hotelRepository.findById(requestDTO.getHotelId())
            .orElseThrow(() -> new ResourceNotFoundException("Hotel", "Id", requestDTO.getHotelId()));
        
        existingOffer.setDiscountPercentage(requestDTO.getDiscountPercentage());
        existingOffer.setHotel(hotel);
        //existingOffer.setCreatedAt(requestDTO.getCreatedAt());
        existingOffer.setUpdatedAt(requestDTO.getUpdatedAt());

        SpecialOffer updatedOffer = specialOfferRepository.save(existingOffer);
        return SpecialOfferMapper.toDTO(updatedOffer);
    }
    
    @Transactional
    public void deleteSpecialOffer(Long id) {
        SpecialOffer specialOffer = specialOfferRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("SpecialOffer", "Id", id));
        specialOfferRepository.delete(specialOffer);
    }
}
