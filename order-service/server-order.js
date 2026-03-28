const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger-order");
const orderRoutes = require("./routes-order/orderRoutes");

const app = express();
const PORT = 8003;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Order Service is running...");
});

app.use("/api/orders", orderRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
  console.log(`Order Service running on http://localhost:${PORT}`);
  console.log(`Swagger Docs available at http://localhost:${PORT}/api-docs`);
});