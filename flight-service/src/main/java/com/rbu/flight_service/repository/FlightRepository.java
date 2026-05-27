package com.rbu.flight_service.repository;

import com.rbu.flight_service.entity.Flight;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface FlightRepository extends JpaRepository<Flight, Long> {

    Optional<Flight> findByCode(String code);

    List<Flight> findByCarrier(String carrier);

    List<Flight> findBySourceAndDestination(String source, String destination);

    List<Flight> findByCostBetween(double min,double max);
}
