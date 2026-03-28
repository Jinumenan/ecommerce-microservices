const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger-inventory");
const inventoryRoutes = require("./routes-inventory/inventoryRoutes");

const app = express();
const PORT = 8004;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Inventory Service is running...");
});

app.use("/api/inventory", inventoryRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
  console.log(`Inventory Service running on http://localhost:${PORT}`);
  console.log(`Swagger Docs available at http://localhost:${PORT}/api-docs`);
});