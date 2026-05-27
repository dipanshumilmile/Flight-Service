package com.rbu.flight_service.exception;



import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.Map;

@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    public ResponseEntity<?> handleResourceNotFound(ResourceNotFoundException ex){

        Map<String, Object> map = new HashMap<>();

        map.put("timestamp", LocalDateTime.now());
        map.put("status", 404);
        map.put("error", "Not Found");
        map.put("message", ex.getMessage());

        return new ResponseEntity<>(map, HttpStatus.NOT_FOUND);
    }

    @ExceptionHandler(Exception.class)
    public ResponseEntity<?> handleGeneralException(Exception ex){

        Map<String, Object> map = new HashMap<>();

        map.put("timestamp", LocalDateTime.now());
        map.put("status", 500);
        map.put("error", "Internal Server Error");
        map.put("message", ex.getMessage());

        return new ResponseEntity<>(map, HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
