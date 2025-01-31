package com.hotel.booking.system.api.utils;

import java.io.IOException;
import java.io.InputStream;
import java.util.Base64;

public class ImageUtils {

    /**
     * Converts an image file from the resources folder to a Base64 encoded string.
     *
     * @param imagePath The path to the image within the resources folder (e.g., "static/hotel1.jpg").
     * @return The Base64 encoded string of the image.
     * @throws IOException If the image cannot be read.
     */
    public static String encodeImageToBase64(String imagePath) throws IOException {
        // Get the input stream of the image from the classpath
        try (InputStream is = ImageUtils.class.getClassLoader().getResourceAsStream(imagePath)) {
            if (is == null) {
                throw new IOException("Image not found at path: " + imagePath);
            }
            // Read all bytes from the input stream
            byte[] imageBytes = is.readAllBytes();
            // Encode the byte array to Base64
            return "data:image/jpeg;base64," + Base64.getEncoder().encodeToString(imageBytes);
        }
    }
}
