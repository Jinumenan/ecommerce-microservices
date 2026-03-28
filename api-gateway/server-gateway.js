const express = require("express");
const cors = require("cors");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();
const PORT = 8080;

app.use(cors());

app.get("/", (req, res) => {
  res.send("API Gateway is running...");
});

// Product Service
app.use(
  "/products",
  createProxyMiddleware({
    target: "http://localhost:8001/api/products",
    changeOrigin: true
  })
);

// Customer Service
app.use(
  "/customers",
  createProxyMiddleware({
    target: "http://localhost:8002/api/customers",
    changeOrigin: true
  })
);

// Order Service
app.use(
  "/orders",
  createProxyMiddleware({
    target: "http://localhost:8003/api/orders",
    changeOrigin: true
  })
);

// Inventory Service
app.use(
  "/inventory",
  createProxyMiddleware({
    target: "http://localhost:8004/api/inventory",
    changeOrigin: true
  })
);

// Review Service
app.use(
  "/reviews",
  createProxyMiddleware({
    target: "http://localhost:8005/api/reviews",
    changeOrigin: true
  })
);

app.listen(PORT, () => {
  console.log(`API Gateway running on http://localhost:${PORT}`);
});