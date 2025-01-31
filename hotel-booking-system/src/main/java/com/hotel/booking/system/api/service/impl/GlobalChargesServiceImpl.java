package com.hotel.booking.system.api.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hotel.booking.system.api.dto.GlobalChargesResponseDTO;
import com.hotel.booking.system.api.dto.mapper.GlobalChargesMapper;
import com.hotel.booking.system.api.dto.post.GlobalChargesPostDTO;
import com.hotel.booking.system.api.exception.ResourceNotFoundException;
import com.hotel.booking.system.api.model.GlobalCharges;
import com.hotel.booking.system.api.repository.GlobalChargesRepository;
import com.hotel.booking.system.api.service.GenericService;

import jakarta.transaction.Transactional;

@Service
public class GlobalChargesServiceImpl implements GenericService<GlobalCharges> {

	@Autowired
	private GlobalChargesRepository globalChargesRepository;

	public GlobalChargesServiceImpl(GlobalChargesRepository chargesRepository) {
		super();
		this.globalChargesRepository = chargesRepository;
	}

	@Transactional
	public GlobalChargesResponseDTO createCharge(GlobalChargesPostDTO chargesPostDTO) {
		GlobalCharges charge = GlobalChargesMapper.toEntity(chargesPostDTO);
		GlobalCharges savedCharge = saveEntity(charge);
		return GlobalChargesMapper.toDTO(savedCharge);
	}

	// Save a new GlobalCharge with a request DTO, returning a response DTO
	@Override
	public GlobalCharges saveEntity(GlobalCharges globalCharges) {
		return globalChargesRepository.save(globalCharges);
	}

	@Override
	public List<GlobalCharges> getAllEntities() {
		return globalChargesRepository.findAll();
	}

	// Get all GlobalCharges and return response DTOs
	public List<GlobalChargesResponseDTO> getAllCharges() {
		return getAllEntities().stream().map(GlobalChargesMapper::toDTO).collect(Collectors.toList());
	}

	@Override
	public GlobalCharges getEntityById(long id) {
		return globalChargesRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("GlobalCharges", "Id", id));
	}

	// Get a specific GlobalCharge by ID and return a response DTO
	public GlobalChargesResponseDTO getChargeById(long id) {
		GlobalCharges charge = getEntityById(id);
		return GlobalChargesMapper.toDTO(charge);
	}

	// Delete a GlobalCharge by ID
	@Override
	public void deleteEntity(long id) {
		globalChargesRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("GlobalCharges", "id", id));
		globalChargesRepository.deleteById(id);
	}

	@Transactional
	public void deleteCharge(Long id) {
		GlobalCharges charge = getEntityById(id);
		deleteEntity(charge.getId());
	}

	@Override
	public GlobalCharges updateEntity(GlobalCharges entity, long id) {
		GlobalCharges existingCharges = globalChargesRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("GlobalCharges", "Id", id));

		existingCharges.setBaseHotelCharge(entity.getBaseHotelCharge());
		existingCharges.setRoomChargePerMonth(entity.getRoomChargePerMonth());
		existingCharges.setTransactionFeePercentage(entity.getTransactionFeePercentage());
//        existingCharges.setLastUpdated(entity.getLastUpdated());

		globalChargesRepository.save(existingCharges);

		return existingCharges;
	}

	// Update a GlobalCharge using a request DTO, and return a response DTO
	@Transactional
	public GlobalChargesResponseDTO updateCharges(GlobalChargesPostDTO requestDTO, long id) {
		GlobalCharges chargesToUpdate = GlobalChargesMapper.toEntity(requestDTO);
		chargesToUpdate.setId(id);
		GlobalCharges updatedCharges = updateEntity(chargesToUpdate, id);
		return GlobalChargesMapper.toDTO(updatedCharges);
	}

}
