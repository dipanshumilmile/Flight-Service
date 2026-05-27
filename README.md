# ✈️ Flight Management System

A Full Stack Flight Management System built using:

- ⚛️ React + Vite + Tailwind CSS (Frontend)
- ☕ Spring Boot + MySQL (Backend)
- 🐳 Docker
- 🔗 REST APIs

---

# 🚀 Features

✅ Add Flights  
✅ View All Flights  
✅ Search Flights by Route  
✅ Search Flights by Price Range  
✅ Responsive Modern UI  
✅ Dockerized Backend  
✅ REST API Integration  
✅ Professional Navbar & Background UI

---

# 🛠️ Tech Stack

## Frontend
- React
- Vite
- Tailwind CSS
- Axios
- React Router DOM

## Backend
- Spring Boot
- Spring Data JPA
- Hibernate
- MySQL
- Maven

## DevOps
- Docker
- Docker Compose
- Git & GitHub

---

# 📂 Project Structure

```bash
Flight-Service/
│
├── flight-app/        # React Frontend
│
└── flight-service/    # Spring Boot Backend
```

---

# ⚙️ Backend Setup

## 1️⃣ Navigate to backend

```bash
cd flight-service
```

## 2️⃣ Configure MySQL

Update `application.properties`

```properties
spring.datasource.url=jdbc:mysql://localhost:3306/flightdb
spring.datasource.username=root
spring.datasource.password=yourpassword
```

## 3️⃣ Run Spring Boot App

```bash
mvn spring-boot:run
```

Backend runs on:

```bash
http://localhost:8080
```

---

# ⚛️ Frontend Setup

## 1️⃣ Navigate to frontend

```bash
cd flight-app
```

## 2️⃣ Install dependencies

```bash
npm install
```

## 3️⃣ Start frontend

```bash
npm run dev
```

Frontend runs on:

```bash
http://localhost:5173
```

---

# 🐳 Docker Setup

## Build Docker Image

```bash
docker build -t flight-service .
```

## Run Container

```bash
docker run -p 8080:8080 flight-service
```

---

# 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/flights/all` | Get all flights |
| POST | `/flights/add` | Add new flight |
| GET | `/flights/code/{code}` | Search by code |
| GET | `/flights/route/{source}/{destination}` | Search by route |
| GET | `/flights/price/{min}/{max}` | Search by price range |

---

# 📸 UI Preview

- Professional Flight Dashboard
- Background Hero Image
- Responsive Navbar
- Search & Filter Features

---

# 👨‍💻 Author

## Dipanshu Milmile

GitHub:
https://github.com/dipanshumilmile

---

# ⭐ Future Improvements

- JWT Authentication
- Admin Dashboard
- Flight Booking
- Deployment on AWS
- CI/CD Pipeline
- Kubernetes Integration

---

# 📜 License

This project is developed for learning and academic purposes.
