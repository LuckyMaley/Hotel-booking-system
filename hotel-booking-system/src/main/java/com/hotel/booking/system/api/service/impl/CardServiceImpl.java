package com.hotel.booking.system.api.service.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.hotel.booking.system.api.dto.CardResponseDTO;
import com.hotel.booking.system.api.dto.mapper.CardMapper;
import com.hotel.booking.system.api.dto.post.CardPostDTO;
import com.hotel.booking.system.api.exception.ResourceNotFoundException;
import com.hotel.booking.system.api.model.Card;
import com.hotel.booking.system.api.model.Customer;
import com.hotel.booking.system.api.repository.CardRepository;
import com.hotel.booking.system.api.repository.CustomerRepository;
import com.hotel.booking.system.api.service.GenericService;


@Service
public class CardServiceImpl implements GenericService<Card> {
	@Autowired
	private CustomerRepository customerRepository;
	@Autowired
	private CardRepository cardRepository;
	@Autowired
	private CardMapper cardMapper;

	@Override
	public Card saveEntity(Card card) {
		return cardRepository.save(card);
	}

	@Override
	public List<Card> getAllEntities() {
		return cardRepository.findAll();
	}

	@Override
	public Card getEntityById(long id) {
		/*
		 * Optional<Card> card = cardRepository.findById(id);
		 * if(card.isPresent()) { return card.get(); } else { throw new
		 * ResourceNotFoundException("Card", "Id", card); }
		 */

		return cardRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Card", "Id", id));
	}

	@Override
	public Card updateEntity(Card card, long id) {
		Card existingCard = cardRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Card", "Id", id));
		existingCard.setCustomer(card.getCustomer());
		existingCard.setCardHolderName(card.getCardHolderName());
		existingCard.setCardNumber(card.getCardNumber());
		existingCard.setCardType(card.getCardType());
		existingCard.setExpiryMonth(card.getExpiryMonth());
		existingCard.setExpiryYear(card.getExpiryYear());
		existingCard.setSecurityCode(card.getSecurityCode());
		cardRepository.save(existingCard);

		return existingCard;
	}

	@Override
	public void deleteEntity(long id) {
		cardRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Card", "Id", id));
		cardRepository.deleteById(id);
	}

    @Transactional
    public CardResponseDTO createCard(CardPostDTO cardPostDTO) {
        Card card = cardMapper.toEntity(cardPostDTO);

        Customer customer = customerRepository.findById(cardPostDTO.getCustomerId())
                .orElseThrow(() -> new ResourceNotFoundException("Customer", "ID", cardPostDTO.getCustomerId()));
        card.setCustomer(customer);
        
        Card savedCard = saveEntity(card);
        return cardMapper.toResponseDTO(savedCard);
    }

    public List<CardResponseDTO> getAllCards() {
        return getAllEntities().stream()
                .map(cardMapper::toResponseDTO)
                .collect(Collectors.toList());
    }

    public CardResponseDTO getCardById(Long id) {
        Card card = getEntityById(id);
        return cardMapper.toResponseDTO(card);
    }
    
    public List<CardResponseDTO> getCardByCustomerEmail(String email) {
    	Customer customer = customerRepository.findByEmail(email)
    			.orElseThrow(() -> new ResourceNotFoundException("Customer", "Email", email));
        List<Card> cards = cardRepository.findByCustomer(customer);
        List<CardResponseDTO> cardResponseDTOs = new ArrayList<CardResponseDTO>();
        for(Card card : cards) {
        	cardResponseDTOs.add(cardMapper.toResponseDTO(card));
        }
        return cardResponseDTOs;
    }


    @Transactional
    public void deleteCard(Long id) {
        Card card = getEntityById(id);
        deleteEntity(card.getId());
    }

    @Transactional
    public CardResponseDTO updateCard(Long id, CardPostDTO cardPostDTO) {
        Card existingCard = getEntityById(id);

        // Map new values to existing card entity
        Customer customer = customerRepository.findById(cardPostDTO.getCustomerId()).orElseThrow(() -> new ResourceNotFoundException("Customer", "ID", cardPostDTO.getCustomerId()));;

        existingCard.setCustomer(customer);
		existingCard.setCardHolderName(cardPostDTO.getCardHolderName());
		existingCard.setCardNumber(cardPostDTO.getCardNumber());
		existingCard.setCardType(cardPostDTO.getCardType());
		existingCard.setExpiryMonth(cardPostDTO.getExpiryMonth());
		existingCard.setExpiryYear(cardPostDTO.getExpiryYear());
		existingCard.setSecurityCode(cardPostDTO.getSecurityCode());

        // Save the updated card
        Card updatedCard = saveEntity(existingCard);
        return cardMapper.toResponseDTO(updatedCard);
    }
}
