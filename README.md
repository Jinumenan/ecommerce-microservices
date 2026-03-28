# 🛒 Microservices-Based E-Commerce System

## 📌 Project Overview

This project implements a **Microservices Architecture** for an E-Commerce system using Node.js.

The system is divided into independent services, and an **API Gateway** is used to provide a single access point.

This project was developed as part of the IT4020 – Modern Topics in IT assignment.

---

## 🎯 Objectives

- Understand microservices architecture  
- Implement multiple independent services  
- Use an API Gateway to manage communication  
- Provide API documentation using Swagger  

The system demonstrates both **direct API access** and **API Gateway access**.

---

## 🧩 Microservices

The system contains 5 microservices:

| Service            | Port | Description                  |
|--------------------|------|------------------------------|
| Product Service    | 8001 | Manage product details       |
| Customer Service   | 8002 | Manage customers             |
| Order Service      | 8003 | Handle orders                |
| Inventory Service  | 8004 | Manage stock                 |
| Review Service     | 8005 | Manage product reviews       |

---

## 🚪 API Gateway

- Runs on port **8080**  
- Acts as a **single entry point**  
- Routes requests to the correct services  

### Example Routing

| Gateway URL | Actual Service                     |
|------------|----------------------------------|
| /products  | http://localhost:8001/api/products      |
| /customers | http://localhost:8002/api/customers     |
| /orders    | http://localhost:8003/api/orders        |
| /inventory | http://localhost:8004/api/inventory     |
| /reviews   | http://localhost:8005/api/reviews       |

---

## 📁 Folder Structure
E-Commerce-System/
│
├── .gitignore
├── README.md
├── api-gateway/
├── product-service/
├── customer-service/
├── order-service/
├── inventory-service/
└── review-service/
---

## ⚙️ Technologies Used

- Node.js  
- Express.js  
- Swagger (API Documentation)  
- http-proxy-middleware (API Gateway)  
- CORS  

---

## ⚠️ Prerequisites

Make sure you have installed:

- Node.js (v14 or higher)  
- npm  
- Git (optional)  

---

## 🚀 How to Run the Project

### 1. Clone the repository

```bash
git clone https://github.com/Jinumenan/ecommerce-microservices.git
cd E-Commerce-System

