import axios from 'axios'

const API = axios.create({
  baseURL: 'http://localhost:8081/flights'
})


//  Get all flights
export const getAllFlights = () => API.get("/all");


//  Add flight
export const addFlight = (flight) => API.post("/add", flight);


//  Search by code
export const getFlightByCode = (code) => API.get(`/code/${code}`);


//  Price range search (MOST IMPORTANT FIX)
export const getFlightsByPrice = (min, max) =>
  API.get(`/price/${min}/${max}`);

export default API;