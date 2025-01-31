package com.hotel.booking.system.api.dto.mapper;

import com.hotel.booking.system.api.dto.GlobalChargesResponseDTO;
import com.hotel.booking.system.api.dto.post.GlobalChargesPostDTO;
import com.hotel.booking.system.api.model.GlobalCharges;

public class GlobalChargesMapper {
	// Convert entity to response DTO
	public static GlobalChargesResponseDTO toDTO(GlobalCharges globalCharges) {
		GlobalChargesResponseDTO dto = new GlobalChargesResponseDTO();
		dto.setId(globalCharges.getId());
		dto.setBaseHotelCharge(globalCharges.getBaseHotelCharge());
		dto.setRoomChargePerMonth(globalCharges.getRoomChargePerMonth());
		dto.setTransactionFeePercentage(globalCharges.getTransactionFeePercentage());
		// dto.setLastUpdated(globalCharges.getLastUpdated());
		return dto;
	}

	// Convert post DTO to entity
	public static GlobalCharges toEntity(GlobalChargesPostDTO requestDTO) {
		GlobalCharges globalCharges = new GlobalCharges();
		globalCharges.setBaseHotelCharge(requestDTO.getBaseHotelCharge());
		globalCharges.setRoomChargePerMonth(requestDTO.getRoomChargePerMonth());
		globalCharges.setTransactionFeePercentage(requestDTO.getTransactionFeePercentage());
		// globalCharges.setLastUpdated(requestDTO.getLastUpdated());
		return globalCharges;
	}
}
