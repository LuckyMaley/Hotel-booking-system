package com.hotel.booking.system.api.security.user;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class ApplicationUserCredentialsDTO {
	private String oldPassword;
	private String newPassword;
}
