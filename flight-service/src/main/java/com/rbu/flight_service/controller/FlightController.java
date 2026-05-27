package com.rbu.flight_service.controller;

import com.rbu.flight_service.entity.Flight;
import com.rbu.flight_service.repository.FlightRepository;
import com.rbu.flight_service.service.FlightService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/flights")
@CrossOrigin(origins = "http://localhost:5173")
public class FlightController {
    @Autowired
    private FlightService service;

    @PostMapping("/save")
    public Flight saveFlight(@Valid @RequestBody Flight flight){
        return service.saveFlight(flight);
    }
    @GetMapping("/code/{code}")
    public Flight getByCode(@Valid @PathVariable String code){
        return service.findByCode(code);
    }
    @GetMapping("/carrier/{carrier}")
    public List<Flight> getByCarrier(@PathVariable String carrier){
        return service.findByCarrier(carrier);
    }
    @GetMapping("/route/{source}/{destination}")
    public List<Flight> getBySource(@PathVariable String source, @PathVariable String destination){
        return service.findByRoot(source, destination);
    }

    @GetMapping("/price/{min}/{max}")
    public List<Flight> getByPriceBetween(
            @PathVariable double min,
            @PathVariable double max) {

        return service.findByPriceRange(min, max);
    }
    @GetMapping("/all")
    public List<Flight> getAllFlight(){
        return service.getAllFlights();
    }

    @DeleteMapping("/delete/{id}")
    public void deleteFlight(@PathVariable Long id){
        service.deleteFlight(id);
    }

}
