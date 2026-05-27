package com.rbu.flight_service.entity;



import jakarta.persistence.*;

import jakarta.validation.constraints.*;

import lombok.*;

    @Entity
    @Table(name = "flight_details")



    @Data
    public class Flight {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)

        @Column(name = "flight_id")
        private Long id;


        @NotBlank(message = "Flight code is required")

        @Size(min = 2, max = 10,
                message = "Code must be between 2 to 10 characters")

        @Column(name = "flight_code", unique = true,
                nullable = false, length = 10
        )
        private String code;


        @NotBlank(message = "Carrier name is required")

        @Size(min = 2, max = 30,
                message = "Carrier name should be between 2 to 30 characters")

        @Column(
                name = "carrier_name",
                nullable = false,
                length = 30
        )
        private String carrier;


        @NotBlank(message = "Source is required")

        @Size(min = 2, max = 30,
                message = "Source must be between 2 to 30 characters")

        @Column(
                name = "source_city",
                nullable = false,
                length = 30
        )
        private String source;


        @NotBlank(message = "Destination is required")

        @Size(min = 2, max = 30,
                message = "Destination must be between 2 to 30 characters")

        @Column(
                name = "destination_city",
                nullable = false,
                length = 30
        )
        private String destination;


        @Positive(message = "Cost must be greater than 0")

        @Column(
                name = "ticket_cost",
                nullable = false
        )
        private double cost;
    }

