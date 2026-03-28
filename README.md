🛒 Microservices-Based E-Commerce System
📌 Project Overview

This project implements a Microservices Architecture for an E-Commerce system using Node.js.
The system is divided into independent services, and an API Gateway is used to provide a single access point.
This project was developed as part of the assignment.

-------- 🎯 Objectives --------------------------------
- Understand microservices architecture
- Implement multiple independent services
- Use an API Gateway to manage communication
- Provide API documentation using Swagger

As required in the assignment, the system demonstrates both direct API access and access via API Gateway

-------- 🧩 Microservices -----------------------------
The system contains 5 microservices:

Service	Port	Description
  Product Service	8001	Manage product details
  Customer Service	8002	Manage customers
  Order Service	8003	Handle orders
  Inventory Service	8004	Manage stock
  Review Service	8005	Manage product reviews

--------- 🚪 API Gateway -------------------------------
Runs on port 8080
  Acts as a single entry point
  Routes requests to correct services

Example Routing:
Gateway URL	Actual Service
  /products	localhost:8001/api/products
  /customers	localhost:8002/api/customers
  /orders	localhost:8003/api/orders
  /inventory	localhost:8004/api/inventory
  /reviews	localhost:8005/api/reviews

---------- 📁 Folder Structure ---------------------------
E-Commerce-System/
│
├── api-gateway/
├── product-service/
├── customer-service/
├── order-service/
├── inventory-service/
└── review-service/

----------- ⚙️ Technologies Used --------------------------
  Node.js
  Express.js
  Swagger (API Documentation)
  http-proxy-middleware (API Gateway)
  CORS

----------- 🚀 How to Run the Project ---------------------
1. Clone the repository
  git clone <your-repo-link>
  cd E-Commerce-System
2. Install dependencies (for each service)

Go into each folder and run:
  npm install
  
  Repeat for:
  - product-service
  - customer-service
  - order-service
  - inventory-service
  - review-service
  - api-gateway

3. Run all services

----------- Open multiple terminals and run:----------------

1. cd product-service
   npm start
2. cd customer-service
   npm start
3. cd order-service
   npm start
4. cd inventory-service
   npm start
5. cd review-service
   npm start
------------------------------------
Run API Gateway
  cd api-gateway
  npm start

----------- 🧪 API Testing ------------------------------
  Direct Access
  http://localhost:8001/api/products
  http://localhost:8002/api/customers
  http://localhost:8003/api/orders
  http://localhost:8004/api/inventory
  http://localhost:8005/api/reviews
  
  Via API Gateway
  http://localhost:8080/products
  http://localhost:8080/customers
  http://localhost:8080/orders
  http://localhost:8080/inventory
  http://localhost:8080/reviews

---------- 📘 Swagger Documentation --------------------
Each service provides Swagger documentation:
  
  http://localhost:8001/api-docs
  http://localhost:8002/api-docs
  http://localhost:8003/api-docs
  http://localhost:8004/api-docs
  http://localhost:8005/api-docs

---------- 🔁 Request Flow -----------------------------
Client → API Gateway → Microservice → Response

---------- 👥 Group Members & Contributions ------------
  Member	Contribution
  Member 1	Product Service
  Member 2	Customer Service
  Member 3	Order Service
  Member 4	Inventory Service
  Member 5	Review Service

---------- 🎯 Key Features------------------------------
-- Independent microservices
-- API Gateway for single access
-- Swagger API documentation
-- Clean folder structure
-- MVP implementation

---------- 📌 Conclusion -------------------------------

This project successfully demonstrates a Microservices Architecture using Node.js.
The API Gateway simplifies communication by providing a single entry point, and each service operates independently.
