package com.rbu.flight_service.serviceIMPL;

import com.rbu.flight_service.entity.Flight;
import com.rbu.flight_service.exception.ResourceNotFoundException;
import com.rbu.flight_service.repository.FlightRepository;
import com.rbu.flight_service.service.FlightService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FlightServiceIMPL implements FlightService {

    @Autowired
    private FlightRepository repo;
    @Override
    public Flight saveFlight(Flight flight) {
        return repo.save(flight);
    }

    @Override
    public Flight findByCode(String code) {

        return repo.findByCode(code)
                .orElseThrow(() ->
                        new ResourceNotFoundException(
                                "Flight not found with code : " + code));
    }

    @Override
    public List<Flight> findByCarrier(String carrier) {
        return repo.findByCarrier(carrier);
    }

    @Override
    public List<Flight> findByRoot(String source, String destination) {
        return repo.findBySourceAndDestination(source, destination);
    }

    @Override
    public List<Flight> findByPriceRange(double min, double max) {
        return repo.findByCostBetween(min, max);
    }

    @Override
    public List<Flight> getAllFlights() {
        return repo.findAll();
    }

    @Override
    public void deleteFlight(Long id) {
        repo.deleteById(id);

    }
}
