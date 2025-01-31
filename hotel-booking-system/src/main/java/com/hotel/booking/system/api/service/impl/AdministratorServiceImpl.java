package com.hotel.booking.system.api.service.impl;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hotel.booking.system.api.dto.AdministratorDTO;
import com.hotel.booking.system.api.dto.mapper.AdministratorMapper;
import com.hotel.booking.system.api.exception.ResourceNotFoundException;
import com.hotel.booking.system.api.model.Administrator;
import com.hotel.booking.system.api.repository.AdministratorRepository;
import com.hotel.booking.system.api.service.GenericService;

@Service
public class AdministratorServiceImpl implements GenericService<AdministratorDTO>{
	@Autowired
	private AdministratorRepository adminRepository;

	public AdministratorServiceImpl(AdministratorRepository AdminRepository) {
		super();
		this.adminRepository = AdminRepository;
	}
	
	 @Override
	    public List<AdministratorDTO> getAllEntities() {
	        return adminRepository.findAll().stream()
	                .map(AdministratorMapper::toDTO)
	                .collect(Collectors.toList());
	    }
	
	@Override
    public AdministratorDTO getEntityById(long id) {
        Administrator admin = adminRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Administrator", "id", id));
        return AdministratorMapper.toDTO(admin);
    }


	@Override
	public void deleteEntity(long id) {
		adminRepository.findById(id).orElseThrow(()-> new ResourceNotFoundException("Administrator", "id", id));
		adminRepository.deleteById(id);
	}

	@Override
	public AdministratorDTO saveEntity(AdministratorDTO entity) {
		Administrator admin = AdministratorMapper.toEntity(entity);
		Administrator saveAdmin = adminRepository.save(admin);
		return AdministratorMapper.toDTO(saveAdmin);
	}

	@Override
	public AdministratorDTO updateEntity(AdministratorDTO entity, long id) {
		Administrator existingAdmin = adminRepository.findById(id).orElseThrow(
				()-> new ResourceNotFoundException("Administrator", "Id", id));
		
		existingAdmin.setFirstName(entity.getFirstName());
		existingAdmin.setLastName(entity.getLastName());
		existingAdmin.setEmail(entity.getEmail());
		existingAdmin.setPassword(entity.getPassword());
		
		Administrator updatedAdmin = adminRepository.save(existingAdmin);
		return AdministratorMapper.toDTO(updatedAdmin);
	}

}
