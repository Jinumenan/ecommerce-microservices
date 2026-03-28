const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger-product");
const productRoutes = require("./routes-product/productRoutes");

const app = express();
const PORT = 8001;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Product Service is running...");
});

app.use("/api/products", productRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, () => {
  console.log(`Product Service running on http://localhost:${PORT}`);
  console.log(`Swagger Docs available at http://localhost:${PORT}/api-docs`);
});