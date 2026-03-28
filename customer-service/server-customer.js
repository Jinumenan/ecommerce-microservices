const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger-customer");
const customerRoutes = require("./routes-customer/customerRoutes");

const app = express();
const PORT = 8002;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Customer Service is running...");
});

app.use("/api/customers", customerRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
  console.log(`Customer Service running on http://localhost:${PORT}`);
  console.log(`Swagger Docs available at http://localhost:${PORT}/api-docs`);
});