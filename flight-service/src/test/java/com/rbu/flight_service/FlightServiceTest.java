package com.rbu.flight_service;

import com.rbu.flight_service.entity.Flight;
import com.rbu.flight_service.repository.FlightRepository;
import com.rbu.flight_service.serviceIMPL.FlightServiceIMPL;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class FlightServiceTest {

    @Mock
    private FlightRepository repository;

    @InjectMocks
    private FlightServiceIMPL service;

    // Save Flight Test
    @Test
    void testSaveFlight() {

        Flight flight = new Flight();

        flight.setId(1L);
        flight.setCode("AI101");
        flight.setCarrier("Air India");
        flight.setSource("Nagpur");
        flight.setDestination("Delhi");
        flight.setCost(5000);

        when(repository.save(flight)).thenReturn(flight);

        Flight savedFlight = service.saveFlight(flight);

        assertEquals("AI101", savedFlight.getCode());
        assertEquals("Delhi", savedFlight.getDestination());
    }

    // Find By Code Test
    @Test
    void testFindByCode() {

        Flight flight = new Flight();

        flight.setId(1L);
        flight.setCode("AI101");

        when(repository.findByCode("AI101"))
                .thenReturn(Optional.of(flight));

        Flight result = service.findByCode("AI101");

        assertEquals("AI101", result.getCode());
    }

    // Find By Carrier Test
    @Test
    void testFindByCarrier() {

        Flight flight1 = new Flight();
        flight1.setCarrier("Air India");

        Flight flight2 = new Flight();
        flight2.setCarrier("Air India");

        List<Flight> flights = Arrays.asList(flight1, flight2);

        when(repository.findByCarrier("Air India"))
                .thenReturn(flights);

        List<Flight> result = service.findByCarrier("Air India");

        assertEquals(2, result.size());
    }

    // Find By Route Test
    @Test
    void testFindByRoute() {

        Flight flight = new Flight();

        flight.setSource("Nagpur");
        flight.setDestination("Delhi");

        List<Flight> flights = List.of(flight);

        when(repository.findBySourceAndDestination("Nagpur", "Delhi"))
                .thenReturn(flights);

        List<Flight> result =
                service.findByRoot("Nagpur", "Delhi");

        assertEquals(1, result.size());
        assertEquals("Delhi", result.get(0).getDestination());
    }

    // Find By Price Range Test
    @Test
    void testFindByPriceRange() {

        Flight flight = new Flight();
        flight.setCost(5000);

        List<Flight> flights = List.of(flight);

        when(repository.findByCostBetween(1000, 6000))
                .thenReturn(flights);

        List<Flight> result =
                service.findByPriceRange(1000, 6000);

        assertEquals(1, result.size());
    }

    // Get All Flights Test
    @Test
    void testGetAllFlights() {

        Flight flight1 = new Flight();
        Flight flight2 = new Flight();

        List<Flight> flights =
                Arrays.asList(flight1, flight2);

        when(repository.findAll()).thenReturn(flights);

        List<Flight> result = service.getAllFlights();

        assertEquals(2, result.size());
    }

    // Delete Flight Test
    @Test
    void testDeleteFlight() {

        Long id = 1L;

        doNothing().when(repository).deleteById(id);

        service.deleteFlight(id);

        verify(repository, times(1)).deleteById(id);
    }
}