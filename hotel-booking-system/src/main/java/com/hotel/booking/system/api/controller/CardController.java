package com.hotel.booking.system.api.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hotel.booking.system.api.dto.CardResponseDTO;
import com.hotel.booking.system.api.dto.post.CardPostDTO;
import com.hotel.booking.system.api.exception.ResourceNotFoundException;
import com.hotel.booking.system.api.model.Customer;
import com.hotel.booking.system.api.service.impl.CardServiceImpl;
import com.hotel.booking.system.api.service.impl.CustomerServiceImpl;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api")
@RequiredArgsConstructor
public class CardController {
	private final CardServiceImpl cardService;
	private final CustomerServiceImpl customerService;
	
    /**
     * Create a new card
     * POST /api/card
     */
    @PostMapping("/card")
    public ResponseEntity<Map<String, Object>> saveCard(@Valid @RequestBody CardPostDTO cardPostDTO) {
        Map<String, Object> response = new HashMap<>();

        try {
            CardResponseDTO savedCard = cardService.createCard(cardPostDTO);
            response.put("card", savedCard);
            response.put("message", "Card saved successfully");
            return ResponseEntity.status(HttpStatus.CREATED).body(response);
        } catch (Exception e) {
            response.put("message", "An error occurred while saving the card");
            response.put("error", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    /**
     * Retrieve all cards
     * GET /api/public/cards
     */
    @GetMapping("/public/cards")
    public ResponseEntity<Map<String, Object>> getAllCards() {
        Map<String, Object> response = new HashMap<>();

        try {
            List<CardResponseDTO> cards = cardService.getAllCards();
            response.put("cards", cards);
            response.put("message", "Cards retrieved successfully");
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            response.put("message", "An error occurred while retrieving cards");
            response.put("error", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    /**
     * Retrieve a card by ID
     * GET /api/public/card/{id}
     */
    @GetMapping("/public/card/{id}")
    public ResponseEntity<Map<String, Object>> getCardById(@PathVariable long id) {
        Map<String, Object> response = new HashMap<>();

        try {
            CardResponseDTO card = cardService.getCardById(id);
            response.put("card", card);
            response.put("message", "Card retrieved successfully");
            return ResponseEntity.ok(response);
        } catch (ResourceNotFoundException e) {
            response.put("message", e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        } catch (Exception e) {
            response.put("error", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    /**
     * Retrieve a card by ID
     * GET /api/public/card/customer/{email}
     */
    @GetMapping("/public/card/customer/{email}")
    public ResponseEntity<Map<String, Object>> getCardByCustomerEmail(@PathVariable String email) {
        Map<String, Object> response = new HashMap<>();

        try {
            List<CardResponseDTO> card = cardService.getCardByCustomerEmail(email);
            response.put("cards", card);
            response.put("message", "Card retrieved successfully");
            return ResponseEntity.ok(response);
        } catch (ResourceNotFoundException e) {
            response.put("message", e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        } catch (Exception e) {
            response.put("error", e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    
    /**
     * Delete a card by ID
     * DELETE /api/card/{id}
     */
    @DeleteMapping("/card/{id}")
    public ResponseEntity<Map<String, Object>> deleteCardById(@PathVariable long id) {
        Map<String, Object> response = new HashMap<>();

        try {
            CardResponseDTO card = cardService.getCardById(id);
            cardService.deleteCard(id);

            response.put("cardId", card.getId());
            Customer customer = customerService.getEntityById(card.getCustomerId());
            response.put("message", "Card for " + customer.getFirstName() +  " " + customer.getLastName() + " deleted successfully");
            return ResponseEntity.ok(response);
        } catch (ResourceNotFoundException e) {
            response.put("message", e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        } catch (Exception e) {
            response.put("error", "An unexpected error occurred: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }

    /**
     * Update a card by ID
     * PUT /api/card/{id}
     */
    @PutMapping("/card/{id}")
    public ResponseEntity<Map<String, Object>> updateCard(@PathVariable Long id, @Valid @RequestBody CardPostDTO cardPostDTO) {
        Map<String, Object> response = new HashMap<>();

        try {
            CardResponseDTO updatedCard = cardService.updateCard(id, cardPostDTO);
            response.put("card", updatedCard);
            response.put("message", "Card updated successfully");
            return ResponseEntity.ok(response);
        } catch (ResourceNotFoundException e) {
            response.put("message", e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(response);
        } catch (IllegalArgumentException e) {
            response.put("error", e.getMessage());
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(response);
        } catch (Exception e) {
            response.put("error", "An unexpected error occurred: " + e.getMessage());
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(response);
        }
    }
}
