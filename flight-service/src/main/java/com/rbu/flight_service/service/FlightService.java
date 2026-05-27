package com.rbu.flight_service.service;

import com.rbu.flight_service.entity.Flight;

import java.util.List;

public  interface FlightService {
    Flight saveFlight(Flight flight);
    Flight findByCode(String code);
    List<Flight> findByCarrier(String carrier);
    List<Flight> findByRoot(String source, String destination);
    List<Flight> findByPriceRange(double min,double max);
    List<Flight> getAllFlights();
    void deleteFlight(Long id);


}
