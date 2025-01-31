package com.hotel.booking.system.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.hotel.booking.system.api.dto.GlobalChargesResponseDTO;
import com.hotel.booking.system.api.dto.post.GlobalChargesPostDTO;
import com.hotel.booking.system.api.service.impl.GlobalChargesServiceImpl;

@RestController
@RequestMapping("/api/global-charges")
public class GlobalChargesController {
    @Autowired
    private GlobalChargesServiceImpl globalChargesService;

    // Create Global Charges
    @PostMapping
    public ResponseEntity<GlobalChargesResponseDTO> createGlobalCharges(@RequestBody GlobalChargesPostDTO globalChargesPostDTO) {
        GlobalChargesResponseDTO createdGlobalCharges = globalChargesService.createCharge(globalChargesPostDTO);
        return new ResponseEntity<>(createdGlobalCharges, HttpStatus.CREATED);
    }

    // Get All Global Charges
    @GetMapping
    public ResponseEntity<List<GlobalChargesResponseDTO>> getAllGlobalCharges() {
        List<GlobalChargesResponseDTO> globalCharges = globalChargesService.getAllCharges();
        return ResponseEntity.ok(globalCharges);
    }

    // Get Global Charges by ID
    @GetMapping("/{id}")
    public ResponseEntity<GlobalChargesResponseDTO> getGlobalChargesById(@PathVariable Long id) {
        GlobalChargesResponseDTO globalCharges = globalChargesService.getChargeById(id);
        return ResponseEntity.ok(globalCharges);
    }

    // Update Global Charges
    @PutMapping("/{id}")
    public ResponseEntity<GlobalChargesResponseDTO> updateGlobalCharges(
        @PathVariable Long id,
        @RequestBody GlobalChargesPostDTO globalChargesPostDTO) {
        
        GlobalChargesResponseDTO updatedGlobalCharges = globalChargesService.updateCharges(globalChargesPostDTO, id);
        return ResponseEntity.ok(updatedGlobalCharges);
    }

    // Delete Global Charges
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteGlobalCharges(@PathVariable Long id) {
        globalChargesService.deleteCharge(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
