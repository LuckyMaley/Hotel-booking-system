package com.hotel.booking.system.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import com.hotel.booking.system.api.dto.AdministratorDTO;
import com.hotel.booking.system.api.service.impl.AdministratorServiceImpl;

import java.util.List;

@RestController
@RequestMapping("/admin")
public class AdministratorController {
	 @Autowired
	    private AdministratorServiceImpl adminService;

	    // Retrieve all Administrators (Only accessible by ADMIN role)
	    @PreAuthorize("hasRole('ADMIN')")
	    @GetMapping("/administrators")
	    public ResponseEntity<List<AdministratorDTO>> getAllAdministrators() {
	        List<AdministratorDTO> administrators = adminService.getAllEntities();
	        return ResponseEntity.ok(administrators);
	    }

	    // Get Administrator by ID (Only accessible by ADMIN role)
	    @PreAuthorize("hasRole('ADMIN')")
	    @GetMapping("/administrators/{id}")
	    public ResponseEntity<AdministratorDTO> getAdministratorById(@PathVariable long id) {
	        AdministratorDTO administrator = adminService.getEntityById(id);
	        return ResponseEntity.ok(administrator);
	    }

	    // Create a new Administrator (Only accessible by ADMIN role)
	    @PreAuthorize("hasRole('ADMIN')")
	    @PostMapping("/administrators")
	    public ResponseEntity<AdministratorDTO> createAdministrator(@RequestBody AdministratorDTO adminDto) {
	        AdministratorDTO createdAdmin = adminService.saveEntity(adminDto);
	        return ResponseEntity.ok(createdAdmin);
	    }

	    // Update an Administrator (Only accessible by ADMIN role)
	    @PreAuthorize("hasRole('ADMIN')")
	    @PutMapping("/administrators/{id}")
	    public ResponseEntity<AdministratorDTO> updateAdministrator(
	        @RequestBody AdministratorDTO adminDto,
	        @PathVariable long id) {
	        AdministratorDTO updatedAdmin = adminService.updateEntity(adminDto, id);
	        return ResponseEntity.ok(updatedAdmin);
	    }

	    // Delete an Administrator (Only accessible by ADMIN role)
	    @PreAuthorize("hasRole('ADMIN')")
	    @DeleteMapping("/administrators/{id}")
	    public ResponseEntity<Void> deleteAdministrator(@PathVariable long id) {
	        adminService.deleteEntity(id);
	        return ResponseEntity.noContent().build();
	    }
}
