package com.hotel.booking.system.api.controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.hotel.booking.system.api.dto.SpecialOfferResponseDTO;
import com.hotel.booking.system.api.dto.post.SpecialOfferPostDTO;
import com.hotel.booking.system.api.service.impl.SpecialOfferServiceImpl;

@RestController
@RequestMapping("/api/special-offers")
public class SpecialOfferController {
    @Autowired
    private SpecialOfferServiceImpl specialOfferService;

    // Create Special Offer
    @PostMapping
    public ResponseEntity<SpecialOfferResponseDTO> createSpecialOffer(@RequestBody SpecialOfferPostDTO specialOfferPostDTO) {
        SpecialOfferResponseDTO createdSpecialOffer = specialOfferService.createSpecialOffer(specialOfferPostDTO);
        return new ResponseEntity<>(createdSpecialOffer, HttpStatus.CREATED);
    }

    // Get All Special Offers
    @GetMapping
    public ResponseEntity<List<SpecialOfferResponseDTO>> getAllSpecialOffers() {
        List<SpecialOfferResponseDTO> specialOffers = specialOfferService.getAllSpecialOffers();
        return ResponseEntity.ok(specialOffers);
    }

    // Get Special Offer by ID
    @GetMapping("/{id}")
    public ResponseEntity<SpecialOfferResponseDTO> getSpecialOfferById(@PathVariable Long id) {
        SpecialOfferResponseDTO specialOffer = specialOfferService.getSpecialOfferById(id);
        return ResponseEntity.ok(specialOffer);
    }

    // Update Special Offer
    @PutMapping("/{id}")
    public ResponseEntity<SpecialOfferResponseDTO> updateSpecialOffer(
        @PathVariable Long id,
        @RequestBody SpecialOfferPostDTO specialOfferPostDTO) {
        
        SpecialOfferResponseDTO updatedSpecialOffer = specialOfferService.updateSpecialOffer(id, specialOfferPostDTO);
        return ResponseEntity.ok(updatedSpecialOffer);
    }

    // Delete Special Offer
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSpecialOffer(@PathVariable Long id) {
        specialOfferService.deleteSpecialOffer(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
