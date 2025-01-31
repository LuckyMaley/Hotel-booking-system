package com.hotel.booking.system.api.dto.mapper;

import com.hotel.booking.system.api.dto.AdministratorDTO;
import com.hotel.booking.system.api.model.Administrator;

public class AdministratorMapper {
	// Convert Entity to DTO
	public static AdministratorDTO toDTO(Administrator admin) {
		if(admin == null) {
			return null;
		}
		return new AdministratorDTO(admin.getId(), admin.getFirstName(), admin.getLastName(), admin.getEmail(), admin.getPassword());
	}
	
	// Convert DTO to Entity
	public static Administrator toEntity(AdministratorDTO adminDTO) {
		if (adminDTO == null) {
			return null;
		}
		
		Administrator admin = new Administrator();
		admin.setId(adminDTO.getId());
		admin.setFirstName(adminDTO.getFirstName());
		admin.setLastName(adminDTO.getLastName());
		admin.setEmail(adminDTO.getEmail());
		admin.setPassword(adminDTO.getPassword());
		
		return admin;
	}
}
